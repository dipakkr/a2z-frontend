import React, {createElement} from 'react'
import {default as ReactDOMElements} from 'react-dom-factories'
import UAParser from 'ua-parser-js'
let renderIndex=0
let componentMap=Object.assign({},ReactDOMElements,
		typeof window==='object'?window.__rjx_custom_elements:{}
	)

	function simpleRJXSyntax(simpleRJX = {}) {
	  const component = Object.keys(simpleRJX)[ 0 ];
	  try {
	    return Object.assign({},
	      {
	        component,
	      },
	      simpleRJX[ component ], {
	        children: (simpleRJX[ component ].children && Array.isArray(simpleRJX[ component ].children))
	          ? simpleRJX[ component ].children
	            .map(simpleRJXSyntax)
	          : simpleRJX[ component ].children,
	      });
	  } catch (e) {
	    throw SyntaxError('Invalid Simple RXJ Syntax', e);
	  }
	}


function validSimpleRJXSyntax(simpleRJX = {}) {
  if (Object.keys(simpleRJX).length !== 1 && !simpleRJX.component) {
    return false;
  } else {
    const componentName = Object.keys(simpleRJX)[ 0 ];
    return (Object.keys(simpleRJX).length === 1  && !simpleRJX[componentName].component && typeof simpleRJX[componentName]==='object')
      ? true
      : false;
  }
}

function getAdvancedBinding() {

  if (typeof window === 'undefined') {
    var window = (this && this.window)
      ? this.window
      : global.window || {};
    if (!window.navigator) return false;
  }
  try {
    if (window && window.navigator && window.navigator.userAgent && typeof window.navigator.userAgent === 'string') {
      if(window.navigator.userAgent.indexOf('Trident') !== -1) {
        return false;
      }
      const uastring = window.navigator.userAgent;
      const parser = new UAParser();
      parser.setUA(uastring);
      const parseUserAgent = parser.getResult();
      // console.log({ parseUserAgent, });
      if ((parseUserAgent.browser.name === 'Chrome' || parseUserAgent.browser.name === 'Chrome WebView' ) && parseUserAgent.os.name === 'Android' && parseInt(parseUserAgent.browser.version, 10) < 50) {
        return false;
      }
      if (parseUserAgent.browser.name === 'Android Browser') {
        return false;
      }
    }
  } catch (e) {
    //e;
    console.error(e);
    return false;
  }
  return true;
}

let advancedBinding=getAdvancedBinding()

function getBoundedComponents(options = {}) {
  const { reactComponents, boundedComponents=[], } = options;
  if (advancedBinding || options.advancedBinding) {
    return Object.assign({}, reactComponents, boundedComponents.reduce((result, componentName) => {
      result[ componentName ] = reactComponents[ componentName ].bind(this);
      return result;
    }, {}));
  } else return reactComponents;
}

function getComponentFromLibrary(options = {}) {
  const { componentLibraries = {}, rjx = {}, } = options;
  const libComponent = Object.keys(componentLibraries)
    .map(libraryName => {
      const cleanLibraryName = rjx.component.replace(`${libraryName}.`, '');
      const libraryNameArray = cleanLibraryName.split('.');
      if (libraryNameArray.length === 2
        && componentLibraries[ libraryName ]
        && componentLibraries[ libraryName ][ libraryNameArray[ 0 ] ]
        && typeof componentLibraries[ libraryName ][ libraryNameArray[ 0 ] ][ libraryNameArray[ 1 ] ] !== 'undefined') {
        return componentLibraries[ libraryName ][ libraryNameArray[ 0 ] ][ libraryNameArray[ 1 ] ];
      } else if (typeof componentLibraries[ libraryName ][ cleanLibraryName ] !== 'undefined') {
        return componentLibraries[ libraryName ][ cleanLibraryName ];
      }
    })
    .filter(val => val)[ 0 ];
  return libComponent;
}


function getComponentFromMap(options = {}) {
  const { rjx = {}, reactComponents = {}, componentLibraries = {}, logError = console.error, debug } = options;
  try {
    if (typeof rjx.component !== 'string' && typeof rjx.component === 'function') {
      return rjx.component;
    } else if (ReactDOMElements[rjx.component]) {
      return rjx.component;
    } else if (reactComponents[ rjx.component ]) {
      return reactComponents[rjx.component];
    } else if (typeof rjx.component ==='string' && rjx.component.indexOf('.') > 0 && getComponentFromLibrary({ rjx, componentLibraries, })) {
      return getComponentFromLibrary({ rjx, componentLibraries, });
    } else {
      throw new ReferenceError(`Invalid React Component (${rjx.component})`);
    }
  } catch (e) {
    if(debug) logError(e, (e.stack) ? e.stack : 'no stack');
    throw e;
  }
}

function traverse(paths = {}, data = {}) {
  let keys = Object.keys(paths);
  if (!keys.length) return paths;
  return keys.reduce((result, key) => {
    if (typeof paths[key] === 'string') result[key] = data[paths[key]];
    else if (Array.isArray(paths[key])) {
      let _path = Object.assign([], paths[key]);
      let value = data;
      while (_path.length && value && typeof value === 'object') {
        let prop = _path.shift();
        value = value[prop];
      }
      result[key] = (_path.length) ? undefined : value;
    } else throw new TypeError('dynamic property paths must be a string or an array of strings or numeric indexes');
    return result;
  }, {});
}


function getRJXProps(options = {}) {
  let { rjx = {}, propName = 'asyncprops', traverseObject = {}, } = options;
  return (rjx[ propName ] && typeof rjx[ propName ] === 'object')
    ? traverse(rjx[ propName ], traverseObject)
    : {};
}

function getEvalProps(options = {}) {
  const { rjx, } = options;
  const scopedEval = eval; //https://github.com/rollup/rollup/wiki/Troubleshooting#avoiding-eval
  const evProps = Object.keys(rjx.__dangerouslyEvalProps || {}).reduce((eprops, epropName) => {
    // eslint-disable-next-line
    eprops[ epropName ] = scopedEval(rjx.__dangerouslyEvalProps[ epropName ]);
    return eprops;
  }, {});
  const evBindProps = Object.keys(rjx.__dangerouslyBindEvalProps || {}).reduce((eprops, epropName) => {
    // eslint-disable-next-line
    eprops[ epropName ] = scopedEval(rjx.__dangerouslyBindEvalProps[ epropName ]).bind(this);
    return eprops;
  }, {});

  return Object.assign({}, evProps, evBindProps);
}

function getComponentProps(options = {}) {
  const { rjx, resources, } = options;
  return Object.keys(rjx.__dangerouslyInsertComponents).reduce((cprops, cpropName) => {
    // eslint-disable-next-line
    cprops[ cpropName ] = getRenderedJSON.call(this, rjx.__dangerouslyInsertComponents[ cpropName ], resources);
    return cprops;
  }, {});
}

function getReactComponentProps(options = {}) {
  const { rjx,  } = options;
  return Object.keys(rjx.__dangerouslyInsertReactComponents).reduce((cprops, cpropName) => {
    // eslint-disable-next-line
    cprops[ cpropName ] = getComponentFromMap({
      rjx: { component: rjx.__dangerouslyInsertReactComponents[ cpropName ], },
      reactComponents: this.reactComponents,
      componentLibraries: this.componentLibraries,
    });
    return cprops;
  }, {});
}

function getFunctionFromProps(options) {
  const { propFunc='func:', } = options;
  // eslint-disable-next-line
  const { logError = console.error,  debug, } = this;
  const windowObject = this.window || global.window || {};
  try {
    const functionNameString = propFunc.split(':')[ 1 ] || '';
    const functionNameArray = functionNameString.split('.');
    const functionName = (functionNameArray.length) ? functionNameArray[ functionNameArray.length - 1 ] : '';

    if (propFunc.indexOf('func:window') !== -1) {
      if (functionNameArray.length === 3) {
        try {
          return windowObject[ functionNameArray[ 1 ] ][ functionName ].bind(this);
        } catch (e) {
          if (debug) {
            logError(e);
          }
          return windowObject[ functionNameArray[ 1 ] ][ functionName ];
        }
      } else {
        try {
          return windowObject[ functionName ].bind(this);
        } catch (e) {
          if (debug) {
            logError(e);
          }
          return windowObject[ functionName ];
        }
      }
    } else if (functionNameArray.length === 4) {
      return this.props[ functionNameArray[ 2 ] ][ functionName ];
    } else if (functionNameArray.length === 3) {
      return this.props[ functionName ].bind(this);
    } else {
      return function () {};
    }
  } catch (e) {
    if (debug) {
      logError(e);
    }
    return function () {};
  }
}



function getFunctionProps(options = {}) {
  const { allProps = {}, rjx = {}, } = options;
  const getFunction = getFunctionFromProps.bind(this);
  const funcProps = rjx.__functionProps;
  //Allowing for window functions
  Object.keys(funcProps).forEach(key => {
    if (typeof funcProps[key] ==='string' && funcProps[key].indexOf('func:') !== -1 ){
      allProps[ key ] = getFunction({ propFunc: funcProps[ key ], });
    } 
  });
  return allProps;
}

function getWindowComponents(options = {}) {
  const { allProps, rjx, } = options;
  const windowComponents = rjx.__windowComponents;
  const window = this.window || global.window || {};
  const windowFuncPrefix = 'func:window.__rjx_custom_elements';
  // if (rjx.hasWindowComponent && window.__rjx_custom_elements) {
  Object.keys(windowComponents).forEach(key => {
    const windowKEY = (typeof windowComponents[ key ] === 'string')
      ? windowComponents[ key ].replace(`${windowFuncPrefix}.`, '')
      : '';
    if (typeof windowComponents[ key ] === 'string' && windowComponents[ key ].indexOf(windowFuncPrefix) !== -1 && typeof window.__rjx_custom_elements[ windowKEY ] === 'function') {
      const windowComponentElement = window.__rjx_custom_elements[ windowKEY ];
      const windowComponentProps = (allProps[ '__windowComponentProps' ]) ? allProps[ '__windowComponentProps' ]
        : this.props;
      allProps[ key ] = React.createElement(
        windowComponentElement,
        windowComponentProps,
        null);
    }
  });
  return allProps;
}


function getComputedProps(options = {}) {
  const { rjx = {}, resources = {}, renderIndex, logError = console.error, useReduxState=true, ignoreReduxPropsInComponentLibraries=true, componentLibraries, debug, } = options;
  try {
    const componentThisProp = (rjx.thisprops)
      ? Object.assign({
        __rjx: {
          _component: rjx,
          _resources: resources,
        },
      }, this.props,
      rjx.props,
      (useReduxState && !rjx.ignoreReduxProps && (ignoreReduxPropsInComponentLibraries && !componentLibraries[ rjx.component ]))
        ? (this.props && this.props.getState) ? this.props.getState() : {}
        : {}
      )
      : undefined;
    const windowTraverse = typeof window !== 'undefined' ? window : {};
    const asyncprops = getRJXProps({ rjx, propName: 'asyncprops', traverseObject: resources, });
    const resourceprops = getRJXProps({ rjx, propName: 'resourceprops', traverseObject: resources, });
    const windowprops = getRJXProps({ rjx, propName: 'windowprops', traverseObject: windowTraverse, });
    const thisprops = getRJXProps({ rjx, propName: 'thisprops', traverseObject: componentThisProp, });
    const evalProps = (rjx.__dangerouslyEvalProps || rjx.__dangerouslyBindEvalProps)
      ? getEvalProps.call(this, { rjx, })
      : {};
    const insertedComponents = (rjx.__dangerouslyInsertComponents)
      ? getComponentProps.call(this, { rjx, resources, debug, })
      : {};
    const insertedReactComponents = (rjx.__dangerouslyInsertReactComponents)
      ? getReactComponentProps.call(this, { rjx, debug, })
      : {};
    const allProps = Object.assign({}, { key: renderIndex, }, thisprops, rjx.props, resourceprops, asyncprops, windowprops, evalProps, insertedComponents, insertedReactComponents);
    const computedProps = Object.assign({}, allProps,
      rjx.__functionProps ? getFunctionProps.call(this, { allProps, rjx, }) : {},
      rjx.__windowComponents ? getWindowComponents.call(this, { allProps, rjx, }) : {});

    return computedProps;
  } catch (e) {
    debug && logError(e, (e.stack) ? e.stack : 'no stack');
    return null;
  }
}

function displayComponent(options = {}) {
  const { rjx = {}, props, } = options;
  const propsToCompare = rjx.comparisonprops;
  const comparisons = Array.isArray(propsToCompare) ? propsToCompare.map(comp => {
    const compares = {};
    if (Array.isArray(comp.left)) {
      compares.left = comp.left;
    }
    if (Array.isArray(comp.right)) {
      compares.right = comp.right;
    }
    const propcompares = traverse(compares, props||rjx.props);
    const opscompares = Object.assign({}, comp, propcompares);
    switch (opscompares.operation) {
    case 'eq':
    case '==':
      return opscompares.left == opscompares.right;
    case 'dneq':
    case '!=':
    case '!':
      return opscompares.left !== opscompares.right;
    case 'dnseq':
    case '!==':
      return opscompares.left !== opscompares.right;
    case 'seq':
    case '===':
      return opscompares.left === opscompares.right;
    case 'lt':
    case '<':
      return opscompares.left < opscompares.right;
    case 'lte':
    case '<=':
      return opscompares.left <= opscompares.right;
    case 'gt':
    case '>':
      return opscompares.left > opscompares.right;
    case 'gte':
    case '>=':
      return opscompares.left >= opscompares.right;
    case 'dne':
    case 'undefined':
    case 'null':
      return opscompares.left === undefined || opscompares.left === null;
    case '!null':
    case '!undefined':
    case 'exists':
    default:
      return opscompares.left !== undefined && opscompares.left !== null;
    }
  }) : [];
  const validProps = comparisons.filter(comp => comp === true);
  if (!rjx.comparisonprops) {
    return true;
  } else if (rjx.comparisonorprops && validProps.length < 1) {
    return false;
  } else if (validProps.length !== comparisons.length && !rjx.comparisonorprops) {
    return false;
  } else {
    return true;
  }
}

function getChildrenProperty(options = {}) {
  const { rjx = {}, } = options;
  const props = options.props || rjx.props || {};
  if (props._children) {
    if (Array.isArray(props._children) || typeof props._children !== 'undefined'){
      return props._children;
    } else {
      return rjx.children;
    }
  } else if (typeof rjx.children === 'undefined'){
    if (props && props.children && (typeof props.children !== 'undefined' || Array.isArray(props.children))) {
      return props.children;
    } else {
      return null;
    }
  } else {
    return rjx.children;
  }
}

function getChildrenProps(options = {}) {
  const { rjx = {}, childrjx, renderIndex, } = options;
  const props = options.props || rjx.props || {};

  return (rjx.passprops && typeof childrjx==='object')
    ? Object.assign({},
      childrjx, {
        props: Object.assign({},
          props,
          ((childrjx.thisprops && childrjx.thisprops.style)
            || (childrjx.asyncprops && childrjx.asyncprops.style)
            || (childrjx.windowprops && childrjx.windowprops.style))
            ? {}
            : {
              style: {},
            },
          childrjx.props,
          { key: renderIndex + Math.random(), }),
      })
    : childrjx;
}

function getRJXChildren(options = {}) {
  const { rjx, resources, renderIndex, logError = console.error, } = options;
  const props = options.props || rjx.props || {};
  try {
    rjx.children = getChildrenProperty({ rjx, props, });

    return (rjx.children && Array.isArray(rjx.children) && typeof rjx.children !== 'string')
      ? rjx.children.map(childrjx => getRenderedJSON.call(this, getChildrenProps({ rjx, childrjx, props, renderIndex, }), resources))
      : rjx.children;

  } catch (e) {
    logError(e, (e.stack) ? e.stack : 'no stack');
    return null;
  }
}

function getRenderedJSON(rjx = {}, resources = {}) {
  const { componentLibraries = {}, debug = false, logError = console.error, boundedComponents = [], } = this || {};
  if (rjx.type)
		rjx.component = rjx.type;
  if (validSimpleRJXSyntax(rjx))
		rjx = simpleRJXSyntax(rjx);
  if (!rjx.component)
		return createElement('span', {}, debug ? 'Error: Missing Component Object' : '');
  try {
    const components = Object.assign({}, componentMap, reactComponents);

    const reactComponents = (boundedComponents.length)?
														getBoundedComponents.call(this, { boundedComponents,
															 reactComponents: components, }): components;
    renderIndex++;
    const element = getComponentFromMap({ rjx, reactComponents, componentLibraries, debug, logError, });
    const props = getComputedProps.call(this, { rjx, resources, renderIndex, componentLibraries, debug, logError, });
    const displayElement = (rjx.comparisonprops)
      ? displayComponent.call(this, { rjx, props, renderIndex, componentLibraries, debug, })
      : true;

    if (displayElement) {
      const children = getRJXChildren.call(this, { rjx, props, resources, renderIndex, });
      return createElement(element, props, children);
    } else {
      return null;
    }
  } catch (e) {
    if (debug) {
      logError({ rjx, resources, }, 'this', this);
      logError(e, (e.stack) ? e.stack : 'no stack');
    }
    throw e;
  }
}
export default getRenderedJSON