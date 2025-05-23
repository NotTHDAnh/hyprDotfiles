
(function dartProgram() {
  function copyProperties(from, to) {
    var keys = Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      to[key] = from[key];
    }
  }
  var supportsDirectProtoAccess = function() {
    var cls = function() {
    };
    cls.prototype = {p: {}};
    var object = new cls();
    if (!(object.__proto__ && object.__proto__.p === cls.prototype.p))
      return false;
    try {
      if (typeof navigator != "undefined" && typeof navigator.userAgent == "string" && navigator.userAgent.indexOf("Chrome/") >= 0)
        return true;
      if (typeof version == "function" && version.length == 0) {
        var v = version();
        if (/^\d+\.\d+\.\d+\.\d+$/.test(v))
          return true;
      }
    } catch (_) {
    }
    return false;
  }();
  function setFunctionNamesIfNecessary(holders) {
    function t() {
    }
    ;
    if (typeof t.name == "string")
      return;
    for (var i = 0; i < holders.length; i++) {
      var holder = holders[i];
      var keys = Object.keys(holder);
      for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        var f = holder[key];
        if (typeof f == 'function')
          f.name = key;
      }
    }
  }
  function inherit(cls, sup) {
    cls.prototype.constructor = cls;
    cls.prototype["$is" + cls.name] = cls;
    if (sup != null) {
      if (supportsDirectProtoAccess) {
        cls.prototype.__proto__ = sup.prototype;
        return;
      }
      var clsPrototype = Object.create(sup.prototype);
      copyProperties(cls.prototype, clsPrototype);
      cls.prototype = clsPrototype;
    }
  }
  function inheritMany(sup, classes) {
    for (var i = 0; i < classes.length; i++)
      inherit(classes[i], sup);
  }
  function mixin(cls, mixin) {
    copyProperties(mixin.prototype, cls.prototype);
    cls.prototype.constructor = cls;
  }
  function lazyOld(holder, name, getterName, initializer) {
    var uninitializedSentinel = holder;
    holder[name] = uninitializedSentinel;
    holder[getterName] = function() {
      holder[getterName] = function() {
        H.throwCyclicInit(name);
      };
      var result;
      var sentinelInProgress = initializer;
      try {
        if (holder[name] === uninitializedSentinel) {
          result = holder[name] = sentinelInProgress;
          result = holder[name] = initializer();
        } else
          result = holder[name];
      } finally {
        if (result === sentinelInProgress)
          holder[name] = null;
        holder[getterName] = function() {
          return this[name];
        };
      }
      return result;
    };
  }
  function lazy(holder, name, getterName, initializer) {
    var uninitializedSentinel = holder;
    holder[name] = uninitializedSentinel;
    holder[getterName] = function() {
      if (holder[name] === uninitializedSentinel)
        holder[name] = initializer();
      holder[getterName] = function() {
        return this[name];
      };
      return holder[name];
    };
  }
  function makeConstList(list) {
    list.immutable$list = Array;
    list.fixed$length = Array;
    return list;
  }
  function convertToFastObject(properties) {
    function t() {
    }
    t.prototype = properties;
    new t();
    return properties;
  }
  function convertAllToFastObject(arrayOfObjects) {
    for (var i = 0; i < arrayOfObjects.length; ++i)
      convertToFastObject(arrayOfObjects[i]);
  }
  var functionCounter = 0;
  function tearOffGetter(funcs, applyTrampolineIndex, reflectionInfo, name, isIntercepted) {
    var cache = null;
    return isIntercepted ? function(receiver) {
      if (cache === null)
        cache = H.closureFromTearOff(this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);
      return new cache(this, funcs[0], receiver, name);
    } : function() {
      if (cache === null)
        cache = H.closureFromTearOff(this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);
      return new cache(this, funcs[0], null, name);
    };
  }
  function tearOff(funcs, applyTrampolineIndex, reflectionInfo, isStatic, name, isIntercepted) {
    var cache = null;
    return isStatic ? function() {
      if (cache === null)
        cache = H.closureFromTearOff(this, funcs, applyTrampolineIndex, reflectionInfo, true, false, name).prototype;
      return cache;
    } : tearOffGetter(funcs, applyTrampolineIndex, reflectionInfo, name, isIntercepted);
  }
  var typesOffset = 0;
  function installTearOff(container, getterName, isStatic, isIntercepted, requiredParameterCount, optionalParameterDefaultValues, callNames, funsOrNames, funType, applyIndex) {
    var funs = [];
    for (var i = 0; i < funsOrNames.length; i++) {
      var fun = funsOrNames[i];
      if (typeof fun == 'string')
        fun = container[fun];
      fun.$callName = callNames[i];
      funs.push(fun);
    }
    var fun = funs[0];
    fun.$requiredArgCount = requiredParameterCount;
    fun.$defaultValues = optionalParameterDefaultValues;
    var reflectionInfo = funType;
    if (typeof reflectionInfo == "number")
      reflectionInfo += typesOffset;
    var name = funsOrNames[0];
    fun.$stubName = name;
    var getterFunction = tearOff(funs, applyIndex || 0, reflectionInfo, isStatic, name, isIntercepted);
    container[getterName] = getterFunction;
    if (isStatic)
      fun.$tearOff = getterFunction;
  }
  function installStaticTearOff(container, getterName, requiredParameterCount, optionalParameterDefaultValues, callNames, funsOrNames, funType, applyIndex) {
    return installTearOff(container, getterName, true, false, requiredParameterCount, optionalParameterDefaultValues, callNames, funsOrNames, funType, applyIndex);
  }
  function installInstanceTearOff(container, getterName, isIntercepted, requiredParameterCount, optionalParameterDefaultValues, callNames, funsOrNames, funType, applyIndex) {
    return installTearOff(container, getterName, false, isIntercepted, requiredParameterCount, optionalParameterDefaultValues, callNames, funsOrNames, funType, applyIndex);
  }
  function setOrUpdateInterceptorsByTag(newTags) {
    var tags = init.interceptorsByTag;
    if (!tags) {
      init.interceptorsByTag = newTags;
      return;
    }
    copyProperties(newTags, tags);
  }
  function setOrUpdateLeafTags(newTags) {
    var tags = init.leafTags;
    if (!tags) {
      init.leafTags = newTags;
      return;
    }
    copyProperties(newTags, tags);
  }
  function updateTypes(newTypes) {
    var types = init.types;
    var length = types.length;
    types.push.apply(types, newTypes);
    return length;
  }
  function updateHolder(holder, newHolder) {
    copyProperties(newHolder, holder);
    return holder;
  }
  var hunkHelpers = function() {
    var mkInstance = function(isIntercepted, requiredParameterCount, optionalParameterDefaultValues, callNames, applyIndex) {
        return function(container, getterName, name, funType) {
          return installInstanceTearOff(container, getterName, isIntercepted, requiredParameterCount, optionalParameterDefaultValues, callNames, [name], funType, applyIndex);
        };
      },
      mkStatic = function(requiredParameterCount, optionalParameterDefaultValues, callNames, applyIndex) {
        return function(container, getterName, name, funType) {
          return installStaticTearOff(container, getterName, requiredParameterCount, optionalParameterDefaultValues, callNames, [name], funType, applyIndex);
        };
      };
    return {inherit: inherit, inheritMany: inheritMany, mixin: mixin, installStaticTearOff: installStaticTearOff, installInstanceTearOff: installInstanceTearOff, _instance_0u: mkInstance(0, 0, null, ["call$0"], 0), _instance_1u: mkInstance(0, 1, null, ["call$1"], 0), _instance_2u: mkInstance(0, 2, null, ["call$2"], 0), _instance_0i: mkInstance(1, 0, null, ["call$0"], 0), _instance_1i: mkInstance(1, 1, null, ["call$1"], 0), _instance_2i: mkInstance(1, 2, null, ["call$2"], 0), _static_0: mkStatic(0, null, ["call$0"], 0), _static_1: mkStatic(1, null, ["call$1"], 0), _static_2: mkStatic(2, null, ["call$2"], 0), makeConstList: makeConstList, lazy: lazy, lazyOld: lazyOld, updateHolder: updateHolder, convertToFastObject: convertToFastObject, setFunctionNamesIfNecessary: setFunctionNamesIfNecessary, updateTypes: updateTypes, setOrUpdateInterceptorsByTag: setOrUpdateInterceptorsByTag, setOrUpdateLeafTags: setOrUpdateLeafTags};
  }();
  function initializeDeferredHunk(hunk) {
    typesOffset = init.types.length;
    hunk(hunkHelpers, init, holders, $);
  }
  function getGlobalFromName(name) {
    for (var i = 0; i < holders.length; i++) {
      if (holders[i] == C)
        continue;
      if (holders[i][name])
        return holders[i][name];
    }
  }
  var C = {},
  H = {JS_CONST: function JS_CONST() {
    }, EfficientLengthIterable: function EfficientLengthIterable() {
    }, ListIterator: function ListIterator(t0, t1) {
      var _ = this;
      _.__internal$_iterable = t0;
      _.__internal$_length = t1;
      _.__internal$_index = 0;
      _.__internal$_current = null;
    }, FixedLengthListMixin: function FixedLengthListMixin() {
    }, Symbol: function Symbol(t0) {
      this.__internal$_name = t0;
    },
    unminifyOrTag: function(rawClassName) {
      var preserved = H.unmangleGlobalNameIfPreservedAnyways(rawClassName);
      if (preserved != null)
        return preserved;
      return rawClassName;
    },
    isJsIndexable: function(object, record) {
      var result;
      if (record != null) {
        result = record.x;
        if (result != null)
          return result;
      }
      return type$.JavaScriptIndexingBehavior_dynamic._is(object);
    },
    S: function(value) {
      var res;
      if (typeof value == "string")
        return value;
      if (typeof value == "number") {
        if (value !== 0)
          return "" + value;
      } else if (true === value)
        return "true";
      else if (false === value)
        return "false";
      else if (value == null)
        return "null";
      res = J.toString$0$(value);
      if (typeof res != "string")
        throw H.wrapException(H.argumentErrorValue(value));
      return res;
    },
    Primitives_objectHashCode: function(object) {
      var hash = object.$identityHash;
      if (hash == null) {
        hash = Math.random() * 0x3fffffff | 0;
        object.$identityHash = hash;
      }
      return hash;
    },
    Primitives_objectTypeName: function(object) {
      return H.Primitives__objectTypeNameNewRti(object);
    },
    Primitives__objectTypeNameNewRti: function(object) {
      var dispatchName, $constructor, constructorName;
      if (object instanceof P.Object)
        return H._rtiToString(H.instanceType(object), null);
      if (J.getInterceptor$(object) === C.Interceptor_methods || type$.UnknownJavaScriptObject._is(object)) {
        dispatchName = C.C_JS_CONST(object);
        if (H.Primitives__saneNativeClassName(dispatchName))
          return dispatchName;
        $constructor = object.constructor;
        if (typeof $constructor == "function") {
          constructorName = $constructor.name;
          if (typeof constructorName == "string" && H.Primitives__saneNativeClassName(constructorName))
            return constructorName;
        }
      }
      return H._rtiToString(H.instanceType(object), null);
    },
    Primitives__saneNativeClassName: function($name) {
      var t1 = $name !== "Object" && $name !== "";
      return t1;
    },
    Primitives_functionNoSuchMethod: function($function, positionalArguments, namedArguments) {
      var $arguments, namedArgumentList, t1 = {};
      t1.argumentCount = 0;
      $arguments = [];
      namedArgumentList = [];
      t1.argumentCount = positionalArguments.length;
      C.JSArray_methods.addAll$1($arguments, positionalArguments);
      t1.names = "";
      if (namedArguments != null && !namedArguments.get$isEmpty(namedArguments))
        namedArguments.forEach$1(0, new H.Primitives_functionNoSuchMethod_closure(t1, namedArgumentList, $arguments));
      "" + t1.argumentCount;
      return J.noSuchMethod$1$($function, new H.JSInvocationMirror(C.Symbol_call, 0, $arguments, namedArgumentList, 0));
    },
    Primitives_applyFunction: function($function, positionalArguments, namedArguments) {
      var t1, $arguments, argumentCount, jsStub;
      if (positionalArguments instanceof Array)
        t1 = namedArguments == null || namedArguments.get$isEmpty(namedArguments);
      else
        t1 = false;
      if (t1) {
        $arguments = positionalArguments;
        argumentCount = $arguments.length;
        if (argumentCount === 0) {
          if (!!$function.call$0)
            return $function.call$0();
        } else if (argumentCount === 1) {
          if (!!$function.call$1)
            return $function.call$1($arguments[0]);
        } else if (argumentCount === 2) {
          if (!!$function.call$2)
            return $function.call$2($arguments[0], $arguments[1]);
        } else if (argumentCount === 3) {
          if (!!$function.call$3)
            return $function.call$3($arguments[0], $arguments[1], $arguments[2]);
        } else if (argumentCount === 4) {
          if (!!$function.call$4)
            return $function.call$4($arguments[0], $arguments[1], $arguments[2], $arguments[3]);
        } else if (argumentCount === 5)
          if (!!$function.call$5)
            return $function.call$5($arguments[0], $arguments[1], $arguments[2], $arguments[3], $arguments[4]);
        jsStub = $function["call" + "$" + argumentCount];
        if (jsStub != null)
          return jsStub.apply($function, $arguments);
      }
      return H.Primitives__genericApplyFunction2($function, positionalArguments, namedArguments);
    },
    Primitives__genericApplyFunction2: function($function, positionalArguments, namedArguments) {
      var $arguments, argumentCount, requiredParameterCount, defaultValuesClosure, t1, defaultValues, interceptor, jsFunction, keys, _i, defaultValue, used, t2;
      if (positionalArguments != null)
        $arguments = positionalArguments instanceof Array ? positionalArguments : P.List_List$from(positionalArguments);
      else
        $arguments = [];
      argumentCount = $arguments.length;
      requiredParameterCount = $function.$requiredArgCount;
      if (argumentCount < requiredParameterCount)
        return H.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
      defaultValuesClosure = $function.$defaultValues;
      t1 = defaultValuesClosure == null;
      defaultValues = !t1 ? defaultValuesClosure() : null;
      interceptor = J.getInterceptor$($function);
      jsFunction = interceptor["call*"];
      if (typeof jsFunction == "string")
        jsFunction = interceptor[jsFunction];
      if (t1) {
        if (namedArguments != null && namedArguments.get$isNotEmpty(namedArguments))
          return H.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
        if (argumentCount === requiredParameterCount)
          return jsFunction.apply($function, $arguments);
        return H.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
      }
      if (defaultValues instanceof Array) {
        if (namedArguments != null && namedArguments.get$isNotEmpty(namedArguments))
          return H.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
        if (argumentCount > requiredParameterCount + defaultValues.length)
          return H.Primitives_functionNoSuchMethod($function, $arguments, null);
        C.JSArray_methods.addAll$1($arguments, defaultValues.slice(argumentCount - requiredParameterCount));
        return jsFunction.apply($function, $arguments);
      } else {
        if (argumentCount > requiredParameterCount)
          return H.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
        keys = Object.keys(defaultValues);
        if (namedArguments == null)
          for (t1 = keys.length, _i = 0; _i < keys.length; keys.length === t1 || (0, H.throwConcurrentModificationError)(keys), ++_i) {
            defaultValue = defaultValues[keys[_i]];
            if (C.C__Required === defaultValue)
              return H.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
            C.JSArray_methods.add$1($arguments, defaultValue);
          }
        else {
          for (t1 = keys.length, used = 0, _i = 0; _i < keys.length; keys.length === t1 || (0, H.throwConcurrentModificationError)(keys), ++_i) {
            t2 = keys[_i];
            if (namedArguments.containsKey$1(0, t2)) {
              ++used;
              C.JSArray_methods.add$1($arguments, namedArguments.$index(0, t2));
            } else {
              defaultValue = defaultValues[t2];
              if (C.C__Required === defaultValue)
                return H.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
              C.JSArray_methods.add$1($arguments, defaultValue);
            }
          }
          if (used !== namedArguments.get$length(namedArguments))
            return H.Primitives_functionNoSuchMethod($function, $arguments, namedArguments);
        }
        return jsFunction.apply($function, $arguments);
      }
    },
    diagnoseIndexError: function(indexable, index) {
      var $length, _s5_ = "index", _null = null;
      if (!H._isInt(index))
        return new P.ArgumentError(true, index, _s5_, _null);
      $length = J.get$length$asx(indexable);
      if (index < 0 || index >= $length)
        return P.IndexError$(index, indexable, _s5_, _null, $length);
      return new P.RangeError(_null, _null, true, index, _s5_, "Value not in range");
    },
    argumentErrorValue: function(object) {
      return new P.ArgumentError(true, object, null, null);
    },
    wrapException: function(ex) {
      var wrapper, t1;
      if (ex == null)
        ex = new P.NullThrownError();
      wrapper = new Error();
      wrapper.dartException = ex;
      t1 = H.toStringWrapper;
      if ("defineProperty" in Object) {
        Object.defineProperty(wrapper, "message", {get: t1});
        wrapper.name = "";
      } else
        wrapper.toString = t1;
      return wrapper;
    },
    toStringWrapper: function() {
      return J.toString$0$(this.dartException);
    },
    throwExpression: function(ex) {
      throw H.wrapException(ex);
    },
    throwConcurrentModificationError: function(collection) {
      throw H.wrapException(P.ConcurrentModificationError$(collection));
    },
    TypeErrorDecoder_extractPattern: function(message) {
      var match, $arguments, argumentsExpr, expr, method, receiver;
      message = H.quoteStringForRegExp(message.replace(String({}), '$receiver$'));
      match = message.match(/\\\$[a-zA-Z]+\\\$/g);
      if (match == null)
        match = [];
      $arguments = match.indexOf("\\$arguments\\$");
      argumentsExpr = match.indexOf("\\$argumentsExpr\\$");
      expr = match.indexOf("\\$expr\\$");
      method = match.indexOf("\\$method\\$");
      receiver = match.indexOf("\\$receiver\\$");
      return new H.TypeErrorDecoder(message.replace(new RegExp('\\\\\\$arguments\\\\\\$', 'g'), '((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$', 'g'), '((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$', 'g'), '((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$', 'g'), '((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$', 'g'), '((?:x|[^x])*)'), $arguments, argumentsExpr, expr, method, receiver);
    },
    TypeErrorDecoder_provokeCallErrorOn: function(expression) {
      return function($expr$) {
        var $argumentsExpr$ = '$arguments$';
        try {
          $expr$.$method$($argumentsExpr$);
        } catch (e) {
          return e.message;
        }
      }(expression);
    },
    TypeErrorDecoder_provokePropertyErrorOn: function(expression) {
      return function($expr$) {
        try {
          $expr$.$method$;
        } catch (e) {
          return e.message;
        }
      }(expression);
    },
    NullError$: function(_message, match) {
      return new H.NullError(_message, match == null ? null : match.method);
    },
    JsNoSuchMethodError$: function(_message, match) {
      var t1 = match == null,
        t2 = t1 ? null : match.method;
      return new H.JsNoSuchMethodError(_message, t2, t1 ? null : match.receiver);
    },
    unwrapException: function(ex) {
      if (ex == null)
        return new H.NullThrownFromJavaScriptException(ex);
      if (ex instanceof H.ExceptionAndStackTrace)
        return H.saveStackTrace(ex, ex.dartException);
      if (typeof ex !== "object")
        return ex;
      if ("dartException" in ex)
        return H.saveStackTrace(ex, ex.dartException);
      return H._unwrapNonDartException(ex);
    },
    saveStackTrace: function(ex, error) {
      if (type$.Error._is(error))
        if (error.$thrownJsError == null)
          error.$thrownJsError = ex;
      return error;
    },
    _unwrapNonDartException: function(ex) {
      var message, number, ieErrorCode, nsme, notClosure, nullCall, nullLiteralCall, undefCall, undefLiteralCall, nullProperty, undefProperty, undefLiteralProperty, match, t1, _null = null;
      if (!("message" in ex))
        return ex;
      message = ex.message;
      if ("number" in ex && typeof ex.number == "number") {
        number = ex.number;
        ieErrorCode = number & 65535;
        if ((C.JSInt_methods._shrOtherPositive$1(number, 16) & 8191) === 10)
          switch (ieErrorCode) {
            case 438:
              return H.saveStackTrace(ex, H.JsNoSuchMethodError$(H.S(message) + " (Error " + ieErrorCode + ")", _null));
            case 445:
            case 5007:
              return H.saveStackTrace(ex, H.NullError$(H.S(message) + " (Error " + ieErrorCode + ")", _null));
          }
      }
      if (ex instanceof TypeError) {
        nsme = $.$get$TypeErrorDecoder_noSuchMethodPattern();
        notClosure = $.$get$TypeErrorDecoder_notClosurePattern();
        nullCall = $.$get$TypeErrorDecoder_nullCallPattern();
        nullLiteralCall = $.$get$TypeErrorDecoder_nullLiteralCallPattern();
        undefCall = $.$get$TypeErrorDecoder_undefinedCallPattern();
        undefLiteralCall = $.$get$TypeErrorDecoder_undefinedLiteralCallPattern();
        nullProperty = $.$get$TypeErrorDecoder_nullPropertyPattern();
        $.$get$TypeErrorDecoder_nullLiteralPropertyPattern();
        undefProperty = $.$get$TypeErrorDecoder_undefinedPropertyPattern();
        undefLiteralProperty = $.$get$TypeErrorDecoder_undefinedLiteralPropertyPattern();
        match = nsme.matchTypeError$1(message);
        if (match != null)
          return H.saveStackTrace(ex, H.JsNoSuchMethodError$(message, match));
        else {
          match = notClosure.matchTypeError$1(message);
          if (match != null) {
            match.method = "call";
            return H.saveStackTrace(ex, H.JsNoSuchMethodError$(message, match));
          } else {
            match = nullCall.matchTypeError$1(message);
            if (match == null) {
              match = nullLiteralCall.matchTypeError$1(message);
              if (match == null) {
                match = undefCall.matchTypeError$1(message);
                if (match == null) {
                  match = undefLiteralCall.matchTypeError$1(message);
                  if (match == null) {
                    match = nullProperty.matchTypeError$1(message);
                    if (match == null) {
                      match = nullLiteralCall.matchTypeError$1(message);
                      if (match == null) {
                        match = undefProperty.matchTypeError$1(message);
                        if (match == null) {
                          match = undefLiteralProperty.matchTypeError$1(message);
                          t1 = match != null;
                        } else
                          t1 = true;
                      } else
                        t1 = true;
                    } else
                      t1 = true;
                  } else
                    t1 = true;
                } else
                  t1 = true;
              } else
                t1 = true;
            } else
              t1 = true;
            if (t1)
              return H.saveStackTrace(ex, H.NullError$(message, match));
          }
        }
        return H.saveStackTrace(ex, new H.UnknownJsTypeError(typeof message == "string" ? message : ""));
      }
      if (ex instanceof RangeError) {
        if (typeof message == "string" && message.indexOf("call stack") !== -1)
          return new P.StackOverflowError();
        message = function(ex) {
          try {
            return String(ex);
          } catch (e) {
          }
          return null;
        }(ex);
        return H.saveStackTrace(ex, new P.ArgumentError(false, _null, _null, typeof message == "string" ? message.replace(/^RangeError:\s*/, "") : message));
      }
      if (typeof InternalError == "function" && ex instanceof InternalError)
        if (typeof message == "string" && message === "too much recursion")
          return new P.StackOverflowError();
      return ex;
    },
    getTraceFromException: function(exception) {
      var trace;
      if (exception instanceof H.ExceptionAndStackTrace)
        return exception.stackTrace;
      if (exception == null)
        return new H._StackTrace(exception);
      trace = exception.$cachedTrace;
      if (trace != null)
        return trace;
      return exception.$cachedTrace = new H._StackTrace(exception);
    },
    invokeClosure: function(closure, numberOfArguments, arg1, arg2, arg3, arg4) {
      switch (numberOfArguments) {
        case 0:
          return closure.call$0();
        case 1:
          return closure.call$1(arg1);
        case 2:
          return closure.call$2(arg1, arg2);
        case 3:
          return closure.call$3(arg1, arg2, arg3);
        case 4:
          return closure.call$4(arg1, arg2, arg3, arg4);
      }
      throw H.wrapException(P.Exception_Exception("Unsupported number of arguments for wrapped closure"));
    },
    convertDartClosureToJS: function(closure, arity) {
      var $function = closure.$identity;
      if (!!$function)
        return $function;
      $function = function(closure, arity, invoke) {
        return function(a1, a2, a3, a4) {
          return invoke(closure, arity, a1, a2, a3, a4);
        };
      }(closure, arity, H.invokeClosure);
      closure.$identity = $function;
      return $function;
    },
    Closure_fromTearOff: function(receiver, functions, applyTrampolineIndex, reflectionInfo, isStatic, isIntercepted, propertyName) {
      var $constructor, trampoline, applyTrampoline, i, stub, stubCallName,
        $function = functions[0],
        callName = $function.$callName,
        $prototype = isStatic ? Object.create(new H.StaticClosure().constructor.prototype) : Object.create(new H.BoundClosure(null, null, null, "").constructor.prototype);
      $prototype.$initialize = $prototype.constructor;
      if (isStatic)
        $constructor = function static_tear_off() {
          this.$initialize();
        };
      else
        $constructor = function tear_off(a, b, c, d) {
          this.$initialize(a, b, c, d);
        };
      $prototype.constructor = $constructor;
      $constructor.prototype = $prototype;
      if (!isStatic) {
        trampoline = H.Closure_forwardCallTo(receiver, $function, isIntercepted);
        trampoline.$reflectionInfo = reflectionInfo;
      } else {
        $prototype.$static_name = propertyName;
        trampoline = $function;
      }
      $prototype.$signature = H.Closure__computeSignatureFunctionNewRti(reflectionInfo, isStatic, isIntercepted);
      $prototype[callName] = trampoline;
      for (applyTrampoline = trampoline, i = 1; i < functions.length; ++i) {
        stub = functions[i];
        stubCallName = stub.$callName;
        if (stubCallName != null) {
          stub = isStatic ? stub : H.Closure_forwardCallTo(receiver, stub, isIntercepted);
          $prototype[stubCallName] = stub;
        }
        if (i === applyTrampolineIndex) {
          stub.$reflectionInfo = reflectionInfo;
          applyTrampoline = stub;
        }
      }
      $prototype["call*"] = applyTrampoline;
      $prototype.$requiredArgCount = $function.$requiredArgCount;
      $prototype.$defaultValues = $function.$defaultValues;
      return $constructor;
    },
    Closure__computeSignatureFunctionNewRti: function(functionType, isStatic, isIntercepted) {
      var typeEvalMethod;
      if (typeof functionType == "number")
        return function(getType, t) {
          return function() {
            return getType(t);
          };
        }(H.getTypeFromTypesTable, functionType);
      if (typeof functionType == "string") {
        if (isStatic)
          throw H.wrapException("Cannot compute signature for static tearoff.");
        typeEvalMethod = isIntercepted ? H.BoundClosure_evalRecipeIntercepted : H.BoundClosure_evalRecipe;
        return function(recipe, evalOnReceiver) {
          return function() {
            return evalOnReceiver(this, recipe);
          };
        }(functionType, typeEvalMethod);
      }
      throw H.wrapException("Error in functionType of tearoff");
    },
    Closure_cspForwardCall: function(arity, isSuperCall, stubName, $function) {
      var getSelf = H.BoundClosure_selfOf;
      switch (isSuperCall ? -1 : arity) {
        case 0:
          return function(n, S) {
            return function() {
              return S(this)[n]();
            };
          }(stubName, getSelf);
        case 1:
          return function(n, S) {
            return function(a) {
              return S(this)[n](a);
            };
          }(stubName, getSelf);
        case 2:
          return function(n, S) {
            return function(a, b) {
              return S(this)[n](a, b);
            };
          }(stubName, getSelf);
        case 3:
          return function(n, S) {
            return function(a, b, c) {
              return S(this)[n](a, b, c);
            };
          }(stubName, getSelf);
        case 4:
          return function(n, S) {
            return function(a, b, c, d) {
              return S(this)[n](a, b, c, d);
            };
          }(stubName, getSelf);
        case 5:
          return function(n, S) {
            return function(a, b, c, d, e) {
              return S(this)[n](a, b, c, d, e);
            };
          }(stubName, getSelf);
        default:
          return function(f, s) {
            return function() {
              return f.apply(s(this), arguments);
            };
          }($function, getSelf);
      }
    },
    Closure_forwardCallTo: function(receiver, $function, isIntercepted) {
      var stubName, arity, lookedUpFunction, t1;
      if (isIntercepted)
        return H.Closure_forwardInterceptedCallTo(receiver, $function);
      stubName = $function.$stubName;
      arity = $function.length;
      lookedUpFunction = receiver[stubName];
      t1 = H.Closure_cspForwardCall(arity, $function == null ? lookedUpFunction != null : $function !== lookedUpFunction, stubName, $function);
      return t1;
    },
    Closure_cspForwardInterceptedCall: function(arity, isSuperCall, $name, $function) {
      var getSelf = H.BoundClosure_selfOf,
        getReceiver = H.BoundClosure_receiverOf;
      switch (isSuperCall ? -1 : arity) {
        case 0:
          throw H.wrapException(new H.RuntimeError("Intercepted function with no arguments."));
        case 1:
          return function(n, s, r) {
            return function() {
              return s(this)[n](r(this));
            };
          }($name, getSelf, getReceiver);
        case 2:
          return function(n, s, r) {
            return function(a) {
              return s(this)[n](r(this), a);
            };
          }($name, getSelf, getReceiver);
        case 3:
          return function(n, s, r) {
            return function(a, b) {
              return s(this)[n](r(this), a, b);
            };
          }($name, getSelf, getReceiver);
        case 4:
          return function(n, s, r) {
            return function(a, b, c) {
              return s(this)[n](r(this), a, b, c);
            };
          }($name, getSelf, getReceiver);
        case 5:
          return function(n, s, r) {
            return function(a, b, c, d) {
              return s(this)[n](r(this), a, b, c, d);
            };
          }($name, getSelf, getReceiver);
        case 6:
          return function(n, s, r) {
            return function(a, b, c, d, e) {
              return s(this)[n](r(this), a, b, c, d, e);
            };
          }($name, getSelf, getReceiver);
        default:
          return function(f, s, r, a) {
            return function() {
              a = [r(this)];
              Array.prototype.push.apply(a, arguments);
              return f.apply(s(this), a);
            };
          }($function, getSelf, getReceiver);
      }
    },
    Closure_forwardInterceptedCallTo: function(receiver, $function) {
      var receiverField, stubName, arity, lookedUpFunction, t1;
      H.BoundClosure_selfFieldName();
      receiverField = $.BoundClosure_receiverFieldNameCache;
      receiverField == null ? $.BoundClosure_receiverFieldNameCache = H.BoundClosure_computeFieldNamed("receiver") : receiverField;
      stubName = $function.$stubName;
      arity = $function.length;
      lookedUpFunction = receiver[stubName];
      t1 = H.Closure_cspForwardInterceptedCall(arity, $function == null ? lookedUpFunction != null : $function !== lookedUpFunction, stubName, $function);
      return t1;
    },
    closureFromTearOff: function(receiver, functions, applyTrampolineIndex, reflectionInfo, isStatic, isIntercepted, $name) {
      return H.Closure_fromTearOff(receiver, functions, applyTrampolineIndex, reflectionInfo, !!isStatic, !!isIntercepted, $name);
    },
    BoundClosure_evalRecipe: function(closure, recipe) {
      return H._Universe_evalInEnvironment(init.typeUniverse, H.instanceType(closure._self), recipe);
    },
    BoundClosure_evalRecipeIntercepted: function(closure, recipe) {
      return H._Universe_evalInEnvironment(init.typeUniverse, H.instanceType(closure._receiver), recipe);
    },
    BoundClosure_selfOf: function(closure) {
      return closure._self;
    },
    BoundClosure_receiverOf: function(closure) {
      return closure._receiver;
    },
    BoundClosure_selfFieldName: function() {
      var t1 = $.BoundClosure_selfFieldNameCache;
      return t1 == null ? $.BoundClosure_selfFieldNameCache = H.BoundClosure_computeFieldNamed("self") : t1;
    },
    BoundClosure_computeFieldNamed: function(fieldName) {
      var t1, i, $name,
        template = new H.BoundClosure("self", "target", "receiver", "name"),
        names = J.JSArray_markFixedList(Object.getOwnPropertyNames(template));
      for (t1 = names.length, i = 0; i < t1; ++i) {
        $name = names[i];
        if (template[$name] === fieldName)
          return $name;
      }
      throw H.wrapException(P.ArgumentError$("Field name " + fieldName + " not found."));
    },
    throwCyclicInit: function(staticName) {
      throw H.wrapException(new P.CyclicInitializationError(staticName));
    },
    getIsolateAffinityTag: function($name) {
      return init.getIsolateTag($name);
    },
    lookupAndCacheInterceptor: function(obj) {
      var interceptor, interceptorClass, altTag, mark, t1,
        tag = $.getTagFunction.call$1(obj),
        record = $.dispatchRecordsForInstanceTags[tag];
      if (record != null) {
        Object.defineProperty(obj, init.dispatchPropertyName, {value: record, enumerable: false, writable: true, configurable: true});
        return record.i;
      }
      interceptor = $.interceptorsForUncacheableTags[tag];
      if (interceptor != null)
        return interceptor;
      interceptorClass = init.interceptorsByTag[tag];
      if (interceptorClass == null) {
        altTag = $.alternateTagFunction.call$2(obj, tag);
        if (altTag != null) {
          record = $.dispatchRecordsForInstanceTags[altTag];
          if (record != null) {
            Object.defineProperty(obj, init.dispatchPropertyName, {value: record, enumerable: false, writable: true, configurable: true});
            return record.i;
          }
          interceptor = $.interceptorsForUncacheableTags[altTag];
          if (interceptor != null)
            return interceptor;
          interceptorClass = init.interceptorsByTag[altTag];
          tag = altTag;
        }
      }
      if (interceptorClass == null)
        return null;
      interceptor = interceptorClass.prototype;
      mark = tag[0];
      if (mark === "!") {
        record = H.makeLeafDispatchRecord(interceptor);
        $.dispatchRecordsForInstanceTags[tag] = record;
        Object.defineProperty(obj, init.dispatchPropertyName, {value: record, enumerable: false, writable: true, configurable: true});
        return record.i;
      }
      if (mark === "~") {
        $.interceptorsForUncacheableTags[tag] = interceptor;
        return interceptor;
      }
      if (mark === "-") {
        t1 = H.makeLeafDispatchRecord(interceptor);
        Object.defineProperty(Object.getPrototypeOf(obj), init.dispatchPropertyName, {value: t1, enumerable: false, writable: true, configurable: true});
        return t1.i;
      }
      if (mark === "+")
        return H.patchInteriorProto(obj, interceptor);
      if (mark === "*")
        throw H.wrapException(P.UnimplementedError$(tag));
      if (init.leafTags[tag] === true) {
        t1 = H.makeLeafDispatchRecord(interceptor);
        Object.defineProperty(Object.getPrototypeOf(obj), init.dispatchPropertyName, {value: t1, enumerable: false, writable: true, configurable: true});
        return t1.i;
      } else
        return H.patchInteriorProto(obj, interceptor);
    },
    patchInteriorProto: function(obj, interceptor) {
      var proto = Object.getPrototypeOf(obj);
      Object.defineProperty(proto, init.dispatchPropertyName, {value: J.makeDispatchRecord(interceptor, proto, null, null), enumerable: false, writable: true, configurable: true});
      return interceptor;
    },
    makeLeafDispatchRecord: function(interceptor) {
      return J.makeDispatchRecord(interceptor, false, null, !!interceptor.$isJavaScriptIndexingBehavior);
    },
    makeDefaultDispatchRecord: function(tag, interceptorClass, proto) {
      var interceptor = interceptorClass.prototype;
      if (init.leafTags[tag] === true)
        return H.makeLeafDispatchRecord(interceptor);
      else
        return J.makeDispatchRecord(interceptor, proto, null, null);
    },
    initNativeDispatch: function() {
      if (true === $.initNativeDispatchFlag)
        return;
      $.initNativeDispatchFlag = true;
      H.initNativeDispatchContinue();
    },
    initNativeDispatchContinue: function() {
      var map, tags, fun, i, tag, proto, record, interceptorClass;
      $.dispatchRecordsForInstanceTags = Object.create(null);
      $.interceptorsForUncacheableTags = Object.create(null);
      H.initHooks();
      map = init.interceptorsByTag;
      tags = Object.getOwnPropertyNames(map);
      if (typeof window != "undefined") {
        window;
        fun = function() {
        };
        for (i = 0; i < tags.length; ++i) {
          tag = tags[i];
          proto = $.prototypeForTagFunction.call$1(tag);
          if (proto != null) {
            record = H.makeDefaultDispatchRecord(tag, map[tag], proto);
            if (record != null) {
              Object.defineProperty(proto, init.dispatchPropertyName, {value: record, enumerable: false, writable: true, configurable: true});
              fun.prototype = proto;
            }
          }
        }
      }
      for (i = 0; i < tags.length; ++i) {
        tag = tags[i];
        if (/^[A-Za-z_]/.test(tag)) {
          interceptorClass = map[tag];
          map["!" + tag] = interceptorClass;
          map["~" + tag] = interceptorClass;
          map["-" + tag] = interceptorClass;
          map["+" + tag] = interceptorClass;
          map["*" + tag] = interceptorClass;
        }
      }
    },
    initHooks: function() {
      var transformers, i, transformer, getTag, getUnknownTag, prototypeForTag,
        hooks = C.C_JS_CONST0();
      hooks = H.applyHooksTransformer(C.C_JS_CONST1, H.applyHooksTransformer(C.C_JS_CONST2, H.applyHooksTransformer(C.C_JS_CONST3, H.applyHooksTransformer(C.C_JS_CONST3, H.applyHooksTransformer(C.C_JS_CONST4, H.applyHooksTransformer(C.C_JS_CONST5, H.applyHooksTransformer(C.C_JS_CONST6(C.C_JS_CONST), hooks)))))));
      if (typeof dartNativeDispatchHooksTransformer != "undefined") {
        transformers = dartNativeDispatchHooksTransformer;
        if (typeof transformers == "function")
          transformers = [transformers];
        if (transformers.constructor == Array)
          for (i = 0; i < transformers.length; ++i) {
            transformer = transformers[i];
            if (typeof transformer == "function")
              hooks = transformer(hooks) || hooks;
          }
      }
      getTag = hooks.getTag;
      getUnknownTag = hooks.getUnknownTag;
      prototypeForTag = hooks.prototypeForTag;
      $.getTagFunction = new H.initHooks_closure(getTag);
      $.alternateTagFunction = new H.initHooks_closure0(getUnknownTag);
      $.prototypeForTagFunction = new H.initHooks_closure1(prototypeForTag);
    },
    applyHooksTransformer: function(transformer, hooks) {
      return transformer(hooks) || hooks;
    },
    quoteStringForRegExp: function(string) {
      if (/[[\]{}()*+?.\\^$|]/.test(string))
        return string.replace(/[[\]{}()*+?.\\^$|]/g, "\\$&");
      return string;
    },
    ConstantMapView: function ConstantMapView(t0, t1) {
      this._collection$_map = t0;
      this.$ti = t1;
    },
    ConstantMap: function ConstantMap() {
    },
    ConstantStringMap: function ConstantStringMap(t0, t1, t2, t3) {
      var _ = this;
      _._length = t0;
      _._jsObject = t1;
      _._keys = t2;
      _.$ti = t3;
    },
    JSInvocationMirror: function JSInvocationMirror(t0, t1, t2, t3, t4) {
      var _ = this;
      _.__js_helper$_memberName = t0;
      _.__js_helper$_kind = t1;
      _._arguments = t2;
      _._namedArgumentNames = t3;
      _._typeArgumentCount = t4;
    },
    Primitives_functionNoSuchMethod_closure: function Primitives_functionNoSuchMethod_closure(t0, t1, t2) {
      this._box_0 = t0;
      this.namedArgumentList = t1;
      this.$arguments = t2;
    },
    TypeErrorDecoder: function TypeErrorDecoder(t0, t1, t2, t3, t4, t5) {
      var _ = this;
      _._pattern = t0;
      _._arguments = t1;
      _._argumentsExpr = t2;
      _._expr = t3;
      _._method = t4;
      _._receiver = t5;
    },
    NullError: function NullError(t0, t1) {
      this.__js_helper$_message = t0;
      this._method = t1;
    },
    JsNoSuchMethodError: function JsNoSuchMethodError(t0, t1, t2) {
      this.__js_helper$_message = t0;
      this._method = t1;
      this._receiver = t2;
    },
    UnknownJsTypeError: function UnknownJsTypeError(t0) {
      this.__js_helper$_message = t0;
    },
    NullThrownFromJavaScriptException: function NullThrownFromJavaScriptException(t0) {
      this._irritant = t0;
    },
    ExceptionAndStackTrace: function ExceptionAndStackTrace(t0, t1) {
      this.dartException = t0;
      this.stackTrace = t1;
    },
    _StackTrace: function _StackTrace(t0) {
      this._exception = t0;
      this._trace = null;
    },
    Closure: function Closure() {
    },
    TearOffClosure: function TearOffClosure() {
    },
    StaticClosure: function StaticClosure() {
    },
    BoundClosure: function BoundClosure(t0, t1, t2, t3) {
      var _ = this;
      _._self = t0;
      _._target = t1;
      _._receiver = t2;
      _._name = t3;
    },
    RuntimeError: function RuntimeError(t0) {
      this.message = t0;
    },
    _Required: function _Required() {
    },
    JsLinkedHashMap: function JsLinkedHashMap(t0) {
      var _ = this;
      _._length = 0;
      _._last = _._first = _.__js_helper$_rest = _._nums = _._strings = null;
      _._modifications = 0;
      _.$ti = t0;
    },
    LinkedHashMapCell: function LinkedHashMapCell(t0, t1) {
      this.hashMapCellKey = t0;
      this.hashMapCellValue = t1;
      this._next = null;
    },
    LinkedHashMapKeyIterable: function LinkedHashMapKeyIterable(t0) {
      this._map = t0;
    },
    LinkedHashMapKeyIterator: function LinkedHashMapKeyIterator(t0, t1) {
      var _ = this;
      _._map = t0;
      _._modifications = t1;
      _.__js_helper$_current = _._cell = null;
    },
    initHooks_closure: function initHooks_closure(t0) {
      this.getTag = t0;
    },
    initHooks_closure0: function initHooks_closure0(t0) {
      this.getUnknownTag = t0;
    },
    initHooks_closure1: function initHooks_closure1(t0) {
      this.prototypeForTag = t0;
    },
    _checkValidIndex: function(index, list, $length) {
      if (index >>> 0 !== index || index >= $length)
        throw H.wrapException(H.diagnoseIndexError(list, index));
    },
    NativeTypedData: function NativeTypedData() {
    },
    NativeTypedArray: function NativeTypedArray() {
    },
    NativeTypedArrayOfDouble: function NativeTypedArrayOfDouble() {
    },
    NativeTypedArrayOfInt: function NativeTypedArrayOfInt() {
    },
    NativeInt16List: function NativeInt16List() {
    },
    NativeInt32List: function NativeInt32List() {
    },
    NativeInt8List: function NativeInt8List() {
    },
    NativeUint16List: function NativeUint16List() {
    },
    NativeUint32List: function NativeUint32List() {
    },
    NativeUint8ClampedList: function NativeUint8ClampedList() {
    },
    NativeUint8List: function NativeUint8List() {
    },
    _NativeTypedArrayOfDouble_NativeTypedArray_ListMixin: function _NativeTypedArrayOfDouble_NativeTypedArray_ListMixin() {
    },
    _NativeTypedArrayOfDouble_NativeTypedArray_ListMixin_FixedLengthListMixin: function _NativeTypedArrayOfDouble_NativeTypedArray_ListMixin_FixedLengthListMixin() {
    },
    _NativeTypedArrayOfInt_NativeTypedArray_ListMixin: function _NativeTypedArrayOfInt_NativeTypedArray_ListMixin() {
    },
    _NativeTypedArrayOfInt_NativeTypedArray_ListMixin_FixedLengthListMixin: function _NativeTypedArrayOfInt_NativeTypedArray_ListMixin_FixedLengthListMixin() {
    },
    Rti__getQuestionFromStar: function(universe, rti) {
      var question = rti._precomputed1;
      return question == null ? rti._precomputed1 = H._Universe__lookupQuestionRti(universe, rti._primary, true) : question;
    },
    Rti__getFutureFromFutureOr: function(universe, rti) {
      var future = rti._precomputed1;
      return future == null ? rti._precomputed1 = H._Universe__lookupInterfaceRti(universe, "Future", [rti._primary]) : future;
    },
    Rti__isUnionOfFunctionType: function(rti) {
      var kind = rti._kind;
      if (kind === 6 || kind === 7 || kind === 8)
        return H.Rti__isUnionOfFunctionType(rti._primary);
      return kind === 11 || kind === 12;
    },
    Rti__getCanonicalRecipe: function(rti) {
      return rti._canonicalRecipe;
    },
    findType: function(recipe) {
      return H._Universe_eval(init.typeUniverse, recipe, false);
    },
    _substitute: function(universe, rti, typeArguments, depth) {
      var baseType, substitutedBaseType, interfaceTypeArguments, substitutedInterfaceTypeArguments, base, substitutedBase, $arguments, substitutedArguments, returnType, substitutedReturnType, functionParameters, substitutedFunctionParameters, bounds, substitutedBounds, index, argument,
        kind = rti._kind;
      switch (kind) {
        case 5:
        case 1:
        case 2:
        case 3:
        case 4:
          return rti;
        case 6:
          baseType = rti._primary;
          substitutedBaseType = H._substitute(universe, baseType, typeArguments, depth);
          if (substitutedBaseType === baseType)
            return rti;
          return H._Universe__lookupStarRti(universe, substitutedBaseType, true);
        case 7:
          baseType = rti._primary;
          substitutedBaseType = H._substitute(universe, baseType, typeArguments, depth);
          if (substitutedBaseType === baseType)
            return rti;
          return H._Universe__lookupQuestionRti(universe, substitutedBaseType, true);
        case 8:
          baseType = rti._primary;
          substitutedBaseType = H._substitute(universe, baseType, typeArguments, depth);
          if (substitutedBaseType === baseType)
            return rti;
          return H._Universe__lookupFutureOrRti(universe, substitutedBaseType, true);
        case 9:
          interfaceTypeArguments = rti._rest;
          substitutedInterfaceTypeArguments = H._substituteArray(universe, interfaceTypeArguments, typeArguments, depth);
          if (substitutedInterfaceTypeArguments === interfaceTypeArguments)
            return rti;
          return H._Universe__lookupInterfaceRti(universe, rti._primary, substitutedInterfaceTypeArguments);
        case 10:
          base = rti._primary;
          substitutedBase = H._substitute(universe, base, typeArguments, depth);
          $arguments = rti._rest;
          substitutedArguments = H._substituteArray(universe, $arguments, typeArguments, depth);
          if (substitutedBase === base && substitutedArguments === $arguments)
            return rti;
          return H._Universe__lookupBindingRti(universe, substitutedBase, substitutedArguments);
        case 11:
          returnType = rti._primary;
          substitutedReturnType = H._substitute(universe, returnType, typeArguments, depth);
          functionParameters = rti._rest;
          substitutedFunctionParameters = H._substituteFunctionParameters(universe, functionParameters, typeArguments, depth);
          if (substitutedReturnType === returnType && substitutedFunctionParameters === functionParameters)
            return rti;
          return H._Universe__lookupFunctionRti(universe, substitutedReturnType, substitutedFunctionParameters);
        case 12:
          bounds = rti._rest;
          depth += bounds.length;
          substitutedBounds = H._substituteArray(universe, bounds, typeArguments, depth);
          base = rti._primary;
          substitutedBase = H._substitute(universe, base, typeArguments, depth);
          if (substitutedBounds === bounds && substitutedBase === base)
            return rti;
          return H._Universe__lookupGenericFunctionRti(universe, substitutedBase, substitutedBounds, true);
        case 13:
          index = rti._primary;
          if (index < depth)
            return rti;
          argument = typeArguments[index - depth];
          if (argument == null)
            return rti;
          return argument;
        default:
          throw H.wrapException(P.AssertionError$("Attempted to substitute unexpected RTI kind " + kind));
      }
    },
    _substituteArray: function(universe, rtiArray, typeArguments, depth) {
      var changed, i, rti, substitutedRti,
        $length = rtiArray.length,
        result = [];
      for (changed = false, i = 0; i < $length; ++i) {
        rti = rtiArray[i];
        substitutedRti = H._substitute(universe, rti, typeArguments, depth);
        if (substitutedRti !== rti)
          changed = true;
        result.push(substitutedRti);
      }
      return changed ? result : rtiArray;
    },
    _substituteNamed: function(universe, namedArray, typeArguments, depth) {
      var changed, i, t1, t2, rti, substitutedRti,
        $length = namedArray.length,
        result = [];
      for (changed = false, i = 0; i < $length; i += 3) {
        t1 = namedArray[i];
        t2 = namedArray[i + 1];
        rti = namedArray[i + 2];
        substitutedRti = H._substitute(universe, rti, typeArguments, depth);
        if (substitutedRti !== rti)
          changed = true;
        result.push(t1);
        result.push(t2);
        result.push(substitutedRti);
      }
      return changed ? result : namedArray;
    },
    _substituteFunctionParameters: function(universe, functionParameters, typeArguments, depth) {
      var result,
        requiredPositional = functionParameters._requiredPositional,
        substitutedRequiredPositional = H._substituteArray(universe, requiredPositional, typeArguments, depth),
        optionalPositional = functionParameters._optionalPositional,
        substitutedOptionalPositional = H._substituteArray(universe, optionalPositional, typeArguments, depth),
        named = functionParameters._named,
        substitutedNamed = H._substituteNamed(universe, named, typeArguments, depth);
      if (substitutedRequiredPositional === requiredPositional && substitutedOptionalPositional === optionalPositional && substitutedNamed === named)
        return functionParameters;
      result = new H._FunctionParameters();
      result._requiredPositional = substitutedRequiredPositional;
      result._optionalPositional = substitutedOptionalPositional;
      result._named = substitutedNamed;
      return result;
    },
    setRuntimeTypeInfo: function(target, rti) {
      target[init.arrayRti] = rti;
      return target;
    },
    closureFunctionType: function(closure) {
      var signature = closure.$signature;
      if (signature != null) {
        if (typeof signature == "number")
          return H.getTypeFromTypesTable(signature);
        return closure.$signature();
      }
      return null;
    },
    instanceOrFunctionType: function(object, testRti) {
      var rti;
      if (H.Rti__isUnionOfFunctionType(testRti))
        if (object instanceof H.Closure) {
          rti = H.closureFunctionType(object);
          if (rti != null)
            return rti;
        }
      return H.instanceType(object);
    },
    instanceType: function(object) {
      var rti;
      if (object instanceof P.Object) {
        rti = object.$ti;
        return rti != null ? rti : H._instanceTypeFromConstructor(object);
      }
      if (Array.isArray(object))
        return H._arrayInstanceType(object);
      return H._instanceTypeFromConstructor(J.getInterceptor$(object));
    },
    _arrayInstanceType: function(object) {
      var rti = object[init.arrayRti],
        defaultRti = type$.JSArray_dynamic;
      if (rti == null)
        return defaultRti;
      if (rti.constructor !== defaultRti.constructor)
        return defaultRti;
      return rti;
    },
    _instanceType: function(object) {
      var rti = object.$ti;
      return rti != null ? rti : H._instanceTypeFromConstructor(object);
    },
    _instanceTypeFromConstructor: function(instance) {
      var $constructor = instance.constructor,
        probe = $constructor.$ccache;
      if (probe != null)
        return probe;
      return H._instanceTypeFromConstructorMiss(instance, $constructor);
    },
    _instanceTypeFromConstructorMiss: function(instance, $constructor) {
      var effectiveConstructor = instance instanceof H.Closure ? instance.__proto__.__proto__.constructor : $constructor,
        rti = H._Universe_findErasedType(init.typeUniverse, effectiveConstructor.name);
      $constructor.$ccache = rti;
      return rti;
    },
    getTypeFromTypesTable: function(index) {
      var rti,
        table = init.types,
        type = table[index];
      if (typeof type == "string") {
        rti = H._Universe_eval(init.typeUniverse, type, false);
        table[index] = rti;
        return rti;
      }
      return type;
    },
    _installSpecializedIsTest: function(object) {
      var unstarred, isFn, testRti = this,
        t1 = type$.Object;
      if (testRti === t1)
        return H._finishIsFn(testRti, object, H._isObject);
      if (!H.isStrongTopType(testRti))
        if (!(testRti === type$.legacy_Object))
          t1 = testRti === t1;
        else
          t1 = true;
      else
        t1 = true;
      if (t1)
        return H._finishIsFn(testRti, object, H._isTop);
      t1 = testRti._kind;
      unstarred = t1 === 6 ? testRti._primary : testRti;
      if (unstarred === type$.int)
        isFn = H._isInt;
      else if (unstarred === type$.double || unstarred === type$.num)
        isFn = H._isNum;
      else if (unstarred === type$.String)
        isFn = H._isString;
      else
        isFn = unstarred === type$.bool ? H._isBool : null;
      if (isFn != null)
        return H._finishIsFn(testRti, object, isFn);
      if (unstarred._kind === 9) {
        t1 = unstarred._primary;
        if (unstarred._rest.every(H.isTopType)) {
          testRti._specializedTestResource = "$is" + t1;
          return H._finishIsFn(testRti, object, H._isTestViaProperty);
        }
      } else if (t1 === 7)
        return H._finishIsFn(testRti, object, H._generalNullableIsTestImplementation);
      return H._finishIsFn(testRti, object, H._generalIsTestImplementation);
    },
    _finishIsFn: function(testRti, object, isFn) {
      testRti._is = isFn;
      return testRti._is(object);
    },
    _installSpecializedAsCheck: function(object) {
      var t1, asFn, testRti = this;
      if (!H.isStrongTopType(testRti))
        if (!(testRti === type$.legacy_Object))
          t1 = testRti === type$.Object;
        else
          t1 = true;
      else
        t1 = true;
      if (t1)
        asFn = H._asTop;
      else if (testRti === type$.Object)
        asFn = H._asObject;
      else
        asFn = H._generalNullableAsCheckImplementation;
      testRti._as = asFn;
      return testRti._as(object);
    },
    _nullIs: function(testRti) {
      var t2,
        t1 = testRti._kind;
      if (!H.isStrongTopType(testRti))
        if (!(testRti === type$.legacy_Object))
          t2 = testRti === type$.Object;
        else
          t2 = true;
      else
        t2 = true;
      return t2 || testRti === type$.legacy_Never || t1 === 7 || testRti === type$.Null || testRti === type$.JSNull;
    },
    _generalIsTestImplementation: function(object) {
      var testRti = this;
      if (object == null)
        return H._nullIs(testRti);
      return H._isSubtype(init.typeUniverse, H.instanceOrFunctionType(object, testRti), null, testRti, null);
    },
    _generalNullableIsTestImplementation: function(object) {
      if (object == null)
        return true;
      return this._primary._is(object);
    },
    _isTestViaProperty: function(object) {
      var t1 = this,
        tag = t1._specializedTestResource;
      if (object instanceof P.Object)
        return !!object[tag];
      return !!J.getInterceptor$(object)[tag];
    },
    _generalAsCheckImplementation: function(object) {
      var testRti = this;
      if (object == null)
        return object;
      else if (testRti._is(object))
        return object;
      H._failedAsCheck(object, testRti);
    },
    _generalNullableAsCheckImplementation: function(object) {
      var testRti = this;
      if (object == null)
        return object;
      else if (testRti._is(object))
        return object;
      H._failedAsCheck(object, testRti);
    },
    _failedAsCheck: function(object, testRti) {
      throw H.wrapException(H._TypeError$fromMessage(H._Error_compose(object, H.instanceOrFunctionType(object, testRti), H._rtiToString(testRti, null))));
    },
    _Error_compose: function(object, objectRti, checkedTypeDescription) {
      var objectDescription = P.Error_safeToString(object),
        objectTypeDescription = H._rtiToString(objectRti == null ? H.instanceType(object) : objectRti, null);
      return objectDescription + ": type '" + H.S(objectTypeDescription) + "' is not a subtype of type '" + H.S(checkedTypeDescription) + "'";
    },
    _TypeError$fromMessage: function(message) {
      return new H._TypeError("TypeError: " + message);
    },
    _TypeError__TypeError$forType: function(object, type) {
      return new H._TypeError("TypeError: " + H._Error_compose(object, null, type));
    },
    _isObject: function(object) {
      return object != null;
    },
    _asObject: function(object) {
      return object;
    },
    _isTop: function(object) {
      return true;
    },
    _asTop: function(object) {
      return object;
    },
    _isBool: function(object) {
      return true === object || false === object;
    },
    _asBool: function(object) {
      if (true === object)
        return true;
      if (false === object)
        return false;
      throw H.wrapException(H._TypeError__TypeError$forType(object, "bool"));
    },
    _asBoolS: function(object) {
      if (true === object)
        return true;
      if (false === object)
        return false;
      if (object == null)
        return object;
      throw H.wrapException(H._TypeError__TypeError$forType(object, "bool"));
    },
    _asBoolQ: function(object) {
      if (true === object)
        return true;
      if (false === object)
        return false;
      if (object == null)
        return object;
      throw H.wrapException(H._TypeError__TypeError$forType(object, "bool?"));
    },
    _asDouble: function(object) {
      if (typeof object == "number")
        return object;
      throw H.wrapException(H._TypeError__TypeError$forType(object, "double"));
    },
    _asDoubleS: function(object) {
      if (typeof object == "number")
        return object;
      if (object == null)
        return object;
      throw H.wrapException(H._TypeError__TypeError$forType(object, "double"));
    },
    _asDoubleQ: function(object) {
      if (typeof object == "number")
        return object;
      if (object == null)
        return object;
      throw H.wrapException(H._TypeError__TypeError$forType(object, "double?"));
    },
    _isInt: function(object) {
      return typeof object == "number" && Math.floor(object) === object;
    },
    _asInt: function(object) {
      if (typeof object == "number" && Math.floor(object) === object)
        return object;
      throw H.wrapException(H._TypeError__TypeError$forType(object, "int"));
    },
    _asIntS: function(object) {
      if (typeof object == "number" && Math.floor(object) === object)
        return object;
      if (object == null)
        return object;
      throw H.wrapException(H._TypeError__TypeError$forType(object, "int"));
    },
    _asIntQ: function(object) {
      if (typeof object == "number" && Math.floor(object) === object)
        return object;
      if (object == null)
        return object;
      throw H.wrapException(H._TypeError__TypeError$forType(object, "int?"));
    },
    _isNum: function(object) {
      return typeof object == "number";
    },
    _asNum: function(object) {
      if (typeof object == "number")
        return object;
      throw H.wrapException(H._TypeError__TypeError$forType(object, "num"));
    },
    _asNumS: function(object) {
      if (typeof object == "number")
        return object;
      if (object == null)
        return object;
      throw H.wrapException(H._TypeError__TypeError$forType(object, "num"));
    },
    _asNumQ: function(object) {
      if (typeof object == "number")
        return object;
      if (object == null)
        return object;
      throw H.wrapException(H._TypeError__TypeError$forType(object, "num?"));
    },
    _isString: function(object) {
      return typeof object == "string";
    },
    _asString: function(object) {
      if (typeof object == "string")
        return object;
      throw H.wrapException(H._TypeError__TypeError$forType(object, "String"));
    },
    _asStringS: function(object) {
      if (typeof object == "string")
        return object;
      if (object == null)
        return object;
      throw H.wrapException(H._TypeError__TypeError$forType(object, "String"));
    },
    _asStringQ: function(object) {
      if (typeof object == "string")
        return object;
      if (object == null)
        return object;
      throw H.wrapException(H._TypeError__TypeError$forType(object, "String?"));
    },
    _rtiArrayToString: function(array, genericContext) {
      var s, sep, i;
      for (s = "", sep = "", i = 0; i < array.length; ++i, sep = ", ")
        s += C.JSString_methods.$add(sep, H._rtiToString(array[i], genericContext));
      return s;
    },
    _functionRtiToString: function(functionType, genericContext, bounds) {
      var boundsLength, outerContextLength, offset, i, t1, t2, t3, typeParametersText, typeSep, boundRti, kind, t4, parameters, requiredPositional, requiredPositionalLength, optionalPositional, optionalPositionalLength, named, namedLength, returnTypeText, argumentsText, sep, _s2_ = ", ";
      if (bounds != null) {
        boundsLength = bounds.length;
        if (genericContext == null) {
          genericContext = [];
          outerContextLength = null;
        } else
          outerContextLength = genericContext.length;
        offset = genericContext.length;
        for (i = boundsLength; i > 0; --i)
          genericContext.push("T" + (offset + i));
        for (t1 = type$.nullable_Object, t2 = type$.legacy_Object, t3 = type$.Object, typeParametersText = "<", typeSep = "", i = 0; i < boundsLength; ++i, typeSep = _s2_) {
          typeParametersText = C.JSString_methods.$add(typeParametersText + typeSep, genericContext[genericContext.length - 1 - i]);
          boundRti = bounds[i];
          kind = boundRti._kind;
          if (!(kind === 2 || kind === 3 || kind === 4 || kind === 5 || boundRti === t1))
            if (!(boundRti === t2))
              t4 = boundRti === t3;
            else
              t4 = true;
          else
            t4 = true;
          if (!t4)
            typeParametersText += C.JSString_methods.$add(" extends ", H._rtiToString(boundRti, genericContext));
        }
        typeParametersText += ">";
      } else {
        typeParametersText = "";
        outerContextLength = null;
      }
      t1 = functionType._primary;
      parameters = functionType._rest;
      requiredPositional = parameters._requiredPositional;
      requiredPositionalLength = requiredPositional.length;
      optionalPositional = parameters._optionalPositional;
      optionalPositionalLength = optionalPositional.length;
      named = parameters._named;
      namedLength = named.length;
      returnTypeText = H._rtiToString(t1, genericContext);
      for (argumentsText = "", sep = "", i = 0; i < requiredPositionalLength; ++i, sep = _s2_)
        argumentsText += C.JSString_methods.$add(sep, H._rtiToString(requiredPositional[i], genericContext));
      if (optionalPositionalLength > 0) {
        argumentsText += sep + "[";
        for (sep = "", i = 0; i < optionalPositionalLength; ++i, sep = _s2_)
          argumentsText += C.JSString_methods.$add(sep, H._rtiToString(optionalPositional[i], genericContext));
        argumentsText += "]";
      }
      if (namedLength > 0) {
        argumentsText += sep + "{";
        for (sep = "", i = 0; i < namedLength; i += 3, sep = _s2_) {
          argumentsText += sep;
          if (named[i + 1])
            argumentsText += "required ";
          argumentsText += J.$add$ns(H._rtiToString(named[i + 2], genericContext), " ") + named[i];
        }
        argumentsText += "}";
      }
      if (outerContextLength != null) {
        genericContext.toString;
        genericContext.length = outerContextLength;
      }
      return typeParametersText + "(" + argumentsText + ") => " + H.S(returnTypeText);
    },
    _rtiToString: function(rti, genericContext) {
      var s, questionArgument, argumentKind, $name, $arguments, t1,
        kind = rti._kind;
      if (kind === 5)
        return "erased";
      if (kind === 2)
        return "dynamic";
      if (kind === 3)
        return "void";
      if (kind === 1)
        return "Never";
      if (kind === 4)
        return "any";
      if (kind === 6) {
        s = H._rtiToString(rti._primary, genericContext);
        return s;
      }
      if (kind === 7) {
        questionArgument = rti._primary;
        s = H._rtiToString(questionArgument, genericContext);
        argumentKind = questionArgument._kind;
        return J.$add$ns(argumentKind === 11 || argumentKind === 12 ? C.JSString_methods.$add("(", s) + ")" : s, "?");
      }
      if (kind === 8)
        return "FutureOr<" + H.S(H._rtiToString(rti._primary, genericContext)) + ">";
      if (kind === 9) {
        $name = H._unminifyOrTag(rti._primary);
        $arguments = rti._rest;
        return $arguments.length !== 0 ? $name + ("<" + H._rtiArrayToString($arguments, genericContext) + ">") : $name;
      }
      if (kind === 11)
        return H._functionRtiToString(rti, genericContext, null);
      if (kind === 12)
        return H._functionRtiToString(rti._primary, genericContext, rti._rest);
      if (kind === 13) {
        genericContext.toString;
        t1 = rti._primary;
        return genericContext[genericContext.length - 1 - t1];
      }
      return "?";
    },
    _unminifyOrTag: function(rawClassName) {
      var preserved = H.unmangleGlobalNameIfPreservedAnyways(rawClassName);
      if (preserved != null)
        return preserved;
      return rawClassName;
    },
    _Universe_findRule: function(universe, targetType) {
      var rule = universe.tR[targetType];
      for (; typeof rule == "string";)
        rule = universe.tR[rule];
      return rule;
    },
    _Universe_findErasedType: function(universe, cls) {
      var $length, erased, $arguments, i, $interface,
        metadata = universe.eT,
        probe = metadata[cls];
      if (probe == null)
        return H._Universe_eval(universe, cls, false);
      else if (typeof probe == "number") {
        $length = probe;
        erased = H._Universe__lookupTerminalRti(universe, 5, "#");
        $arguments = [];
        for (i = 0; i < $length; ++i)
          $arguments.push(erased);
        $interface = H._Universe__lookupInterfaceRti(universe, cls, $arguments);
        metadata[cls] = $interface;
        return $interface;
      } else
        return probe;
    },
    _Universe_addRules: function(universe, rules) {
      return H._Utils_objectAssign(universe.tR, rules);
    },
    _Universe_addErasedTypes: function(universe, types) {
      return H._Utils_objectAssign(universe.eT, types);
    },
    _Universe_eval: function(universe, recipe, normalize) {
      var rti,
        cache = universe.eC,
        probe = cache.get(recipe);
      if (probe != null)
        return probe;
      rti = H._Parser_parse(H._Parser_create(universe, null, recipe, normalize));
      cache.set(recipe, rti);
      return rti;
    },
    _Universe_evalInEnvironment: function(universe, environment, recipe) {
      var probe, rti,
        cache = environment._evalCache;
      if (cache == null)
        cache = environment._evalCache = new Map();
      probe = cache.get(recipe);
      if (probe != null)
        return probe;
      rti = H._Parser_parse(H._Parser_create(universe, environment, recipe, true));
      cache.set(recipe, rti);
      return rti;
    },
    _Universe_bind: function(universe, environment, argumentsRti) {
      var argumentsRecipe, probe, rti,
        cache = environment._bindCache;
      if (cache == null)
        cache = environment._bindCache = new Map();
      argumentsRecipe = argumentsRti._canonicalRecipe;
      probe = cache.get(argumentsRecipe);
      if (probe != null)
        return probe;
      rti = H._Universe__lookupBindingRti(universe, environment, argumentsRti._kind === 10 ? argumentsRti._rest : [argumentsRti]);
      cache.set(argumentsRecipe, rti);
      return rti;
    },
    _Universe__installTypeTests: function(universe, rti) {
      rti._as = H._installSpecializedAsCheck;
      rti._is = H._installSpecializedIsTest;
      return rti;
    },
    _Universe__lookupTerminalRti: function(universe, kind, key) {
      var rti, t1,
        probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      rti = new H.Rti(null, null);
      rti._kind = kind;
      rti._canonicalRecipe = key;
      t1 = H._Universe__installTypeTests(universe, rti);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__lookupStarRti: function(universe, baseType, normalize) {
      var t1,
        key = baseType._canonicalRecipe + "*",
        probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      t1 = H._Universe__createStarRti(universe, baseType, key, normalize);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__createStarRti: function(universe, baseType, key, normalize) {
      var baseKind, t1, rti;
      if (normalize) {
        baseKind = baseType._kind;
        if (!H.isStrongTopType(baseType))
          t1 = baseType === type$.Null || baseType === type$.JSNull || baseKind === 7 || baseKind === 6;
        else
          t1 = true;
        if (t1)
          return baseType;
      }
      rti = new H.Rti(null, null);
      rti._kind = 6;
      rti._primary = baseType;
      rti._canonicalRecipe = key;
      return H._Universe__installTypeTests(universe, rti);
    },
    _Universe__lookupQuestionRti: function(universe, baseType, normalize) {
      var t1,
        key = baseType._canonicalRecipe + "?",
        probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      t1 = H._Universe__createQuestionRti(universe, baseType, key, normalize);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__createQuestionRti: function(universe, baseType, key, normalize) {
      var baseKind, t1, starArgument, rti;
      if (normalize) {
        baseKind = baseType._kind;
        if (!H.isStrongTopType(baseType))
          if (!(baseType === type$.Null || baseType === type$.JSNull))
            if (baseKind !== 7)
              t1 = baseKind === 8 && H.isNullable(baseType._primary);
            else
              t1 = true;
          else
            t1 = true;
        else
          t1 = true;
        if (t1)
          return baseType;
        else if (baseKind === 1 || baseType === type$.legacy_Never)
          return type$.Null;
        else if (baseKind === 6) {
          starArgument = baseType._primary;
          if (starArgument._kind === 8 && H.isNullable(starArgument._primary))
            return starArgument;
          else
            return H.Rti__getQuestionFromStar(universe, baseType);
        }
      }
      rti = new H.Rti(null, null);
      rti._kind = 7;
      rti._primary = baseType;
      rti._canonicalRecipe = key;
      return H._Universe__installTypeTests(universe, rti);
    },
    _Universe__lookupFutureOrRti: function(universe, baseType, normalize) {
      var t1,
        key = baseType._canonicalRecipe + "/",
        probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      t1 = H._Universe__createFutureOrRti(universe, baseType, key, normalize);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__createFutureOrRti: function(universe, baseType, key, normalize) {
      var t1, t2, rti;
      if (normalize) {
        t1 = baseType._kind;
        if (!H.isStrongTopType(baseType))
          if (!(baseType === type$.legacy_Object))
            t2 = baseType === type$.Object;
          else
            t2 = true;
        else
          t2 = true;
        if (t2 || baseType === type$.Object)
          return baseType;
        else if (t1 === 1)
          return H._Universe__lookupInterfaceRti(universe, "Future", [baseType]);
        else if (baseType === type$.Null || baseType === type$.JSNull)
          return type$.nullable_Future_Null;
      }
      rti = new H.Rti(null, null);
      rti._kind = 8;
      rti._primary = baseType;
      rti._canonicalRecipe = key;
      return H._Universe__installTypeTests(universe, rti);
    },
    _Universe__lookupGenericFunctionParameterRti: function(universe, index) {
      var rti, t1,
        key = "" + index + "^",
        probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      rti = new H.Rti(null, null);
      rti._kind = 13;
      rti._primary = index;
      rti._canonicalRecipe = key;
      t1 = H._Universe__installTypeTests(universe, rti);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__canonicalRecipeJoin: function($arguments) {
      var s, sep, i,
        $length = $arguments.length;
      for (s = "", sep = "", i = 0; i < $length; ++i, sep = ",")
        s += sep + $arguments[i]._canonicalRecipe;
      return s;
    },
    _Universe__canonicalRecipeJoinNamed: function($arguments) {
      var s, sep, i, t1, nameSep, s0,
        $length = $arguments.length;
      for (s = "", sep = "", i = 0; i < $length; i += 3, sep = ",") {
        t1 = $arguments[i];
        nameSep = $arguments[i + 1] ? "!" : ":";
        s0 = $arguments[i + 2]._canonicalRecipe;
        s += sep + t1 + nameSep + s0;
      }
      return s;
    },
    _Universe__lookupInterfaceRti: function(universe, $name, $arguments) {
      var probe, rti, t1,
        s = $name;
      if ($arguments.length !== 0)
        s += "<" + H._Universe__canonicalRecipeJoin($arguments) + ">";
      probe = universe.eC.get(s);
      if (probe != null)
        return probe;
      rti = new H.Rti(null, null);
      rti._kind = 9;
      rti._primary = $name;
      rti._rest = $arguments;
      if ($arguments.length > 0)
        rti._precomputed1 = $arguments[0];
      rti._canonicalRecipe = s;
      t1 = H._Universe__installTypeTests(universe, rti);
      universe.eC.set(s, t1);
      return t1;
    },
    _Universe__lookupBindingRti: function(universe, base, $arguments) {
      var newBase, newArguments, key, probe, rti, t1;
      if (base._kind === 10) {
        newBase = base._primary;
        newArguments = base._rest.concat($arguments);
      } else {
        newArguments = $arguments;
        newBase = base;
      }
      key = newBase._canonicalRecipe + (";<" + H._Universe__canonicalRecipeJoin(newArguments) + ">");
      probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      rti = new H.Rti(null, null);
      rti._kind = 10;
      rti._primary = newBase;
      rti._rest = newArguments;
      rti._canonicalRecipe = key;
      t1 = H._Universe__installTypeTests(universe, rti);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__lookupFunctionRti: function(universe, returnType, parameters) {
      var sep, t1, key, probe, rti,
        s = returnType._canonicalRecipe,
        requiredPositional = parameters._requiredPositional,
        requiredPositionalLength = requiredPositional.length,
        optionalPositional = parameters._optionalPositional,
        optionalPositionalLength = optionalPositional.length,
        named = parameters._named,
        namedLength = named.length,
        recipe = "(" + H._Universe__canonicalRecipeJoin(requiredPositional);
      if (optionalPositionalLength > 0) {
        sep = requiredPositionalLength > 0 ? "," : "";
        t1 = H._Universe__canonicalRecipeJoin(optionalPositional);
        recipe += sep + "[" + t1 + "]";
      }
      if (namedLength > 0) {
        sep = requiredPositionalLength > 0 ? "," : "";
        t1 = H._Universe__canonicalRecipeJoinNamed(named);
        recipe += sep + "{" + t1 + "}";
      }
      key = s + (recipe + ")");
      probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      rti = new H.Rti(null, null);
      rti._kind = 11;
      rti._primary = returnType;
      rti._rest = parameters;
      rti._canonicalRecipe = key;
      t1 = H._Universe__installTypeTests(universe, rti);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__lookupGenericFunctionRti: function(universe, baseFunctionType, bounds, normalize) {
      var t1,
        key = baseFunctionType._canonicalRecipe + ("<" + H._Universe__canonicalRecipeJoin(bounds) + ">"),
        probe = universe.eC.get(key);
      if (probe != null)
        return probe;
      t1 = H._Universe__createGenericFunctionRti(universe, baseFunctionType, bounds, key, normalize);
      universe.eC.set(key, t1);
      return t1;
    },
    _Universe__createGenericFunctionRti: function(universe, baseFunctionType, bounds, key, normalize) {
      var $length, typeArguments, count, i, bound, substitutedBase, substitutedBounds, rti;
      if (normalize) {
        $length = bounds.length;
        typeArguments = new Array($length);
        for (count = 0, i = 0; i < $length; ++i) {
          bound = bounds[i];
          if (bound._kind === 1) {
            typeArguments[i] = bound;
            ++count;
          }
        }
        if (count > 0) {
          substitutedBase = H._substitute(universe, baseFunctionType, typeArguments, 0);
          substitutedBounds = H._substituteArray(universe, bounds, typeArguments, 0);
          return H._Universe__lookupGenericFunctionRti(universe, substitutedBase, substitutedBounds, bounds !== substitutedBounds);
        }
      }
      rti = new H.Rti(null, null);
      rti._kind = 12;
      rti._primary = baseFunctionType;
      rti._rest = bounds;
      rti._canonicalRecipe = key;
      return H._Universe__installTypeTests(universe, rti);
    },
    _Parser_create: function(universe, environment, recipe, normalize) {
      return {u: universe, e: environment, r: recipe, s: [], p: 0, n: normalize};
    },
    _Parser_parse: function(parser) {
      var t1, i, ch, universe, array, head, base, u, parameters, optionalPositional, named, item,
        source = parser.r,
        stack = parser.s;
      for (t1 = source.length, i = 0; i < t1;) {
        ch = source.charCodeAt(i);
        if (ch >= 48 && ch <= 57)
          i = H._Parser_handleDigit(i + 1, ch, source, stack);
        else if ((((ch | 32) >>> 0) - 97 & 65535) < 26 || ch === 95 || ch === 36)
          i = H._Parser_handleIdentifier(parser, i, source, stack, false);
        else if (ch === 46)
          i = H._Parser_handleIdentifier(parser, i, source, stack, true);
        else {
          ++i;
          switch (ch) {
            case 44:
              break;
            case 58:
              stack.push(false);
              break;
            case 33:
              stack.push(true);
              break;
            case 59:
              stack.push(H._Parser_toType(parser.u, parser.e, stack.pop()));
              break;
            case 94:
              stack.push(H._Universe__lookupGenericFunctionParameterRti(parser.u, stack.pop()));
              break;
            case 35:
              stack.push(H._Universe__lookupTerminalRti(parser.u, 5, "#"));
              break;
            case 64:
              stack.push(H._Universe__lookupTerminalRti(parser.u, 2, "@"));
              break;
            case 126:
              stack.push(H._Universe__lookupTerminalRti(parser.u, 3, "~"));
              break;
            case 60:
              stack.push(parser.p);
              parser.p = stack.length;
              break;
            case 62:
              universe = parser.u;
              array = stack.splice(parser.p);
              H._Parser_toTypes(parser.u, parser.e, array);
              parser.p = stack.pop();
              head = stack.pop();
              if (typeof head == "string")
                stack.push(H._Universe__lookupInterfaceRti(universe, head, array));
              else {
                base = H._Parser_toType(universe, parser.e, head);
                switch (base._kind) {
                  case 11:
                    stack.push(H._Universe__lookupGenericFunctionRti(universe, base, array, parser.n));
                    break;
                  default:
                    stack.push(H._Universe__lookupBindingRti(universe, base, array));
                    break;
                }
              }
              break;
            case 38:
              H._Parser_handleExtendedOperations(parser, stack);
              break;
            case 42:
              u = parser.u;
              stack.push(H._Universe__lookupStarRti(u, H._Parser_toType(u, parser.e, stack.pop()), parser.n));
              break;
            case 63:
              u = parser.u;
              stack.push(H._Universe__lookupQuestionRti(u, H._Parser_toType(u, parser.e, stack.pop()), parser.n));
              break;
            case 47:
              u = parser.u;
              stack.push(H._Universe__lookupFutureOrRti(u, H._Parser_toType(u, parser.e, stack.pop()), parser.n));
              break;
            case 40:
              stack.push(parser.p);
              parser.p = stack.length;
              break;
            case 41:
              universe = parser.u;
              parameters = new H._FunctionParameters();
              optionalPositional = universe.sEA;
              named = universe.sEA;
              head = stack.pop();
              if (typeof head == "number")
                switch (head) {
                  case -1:
                    optionalPositional = stack.pop();
                    break;
                  case -2:
                    named = stack.pop();
                    break;
                  default:
                    stack.push(head);
                    break;
                }
              else
                stack.push(head);
              array = stack.splice(parser.p);
              H._Parser_toTypes(parser.u, parser.e, array);
              parser.p = stack.pop();
              parameters._requiredPositional = array;
              parameters._optionalPositional = optionalPositional;
              parameters._named = named;
              stack.push(H._Universe__lookupFunctionRti(universe, H._Parser_toType(universe, parser.e, stack.pop()), parameters));
              break;
            case 91:
              stack.push(parser.p);
              parser.p = stack.length;
              break;
            case 93:
              array = stack.splice(parser.p);
              H._Parser_toTypes(parser.u, parser.e, array);
              parser.p = stack.pop();
              stack.push(array);
              stack.push(-1);
              break;
            case 123:
              stack.push(parser.p);
              parser.p = stack.length;
              break;
            case 125:
              array = stack.splice(parser.p);
              H._Parser_toTypesNamed(parser.u, parser.e, array);
              parser.p = stack.pop();
              stack.push(array);
              stack.push(-2);
              break;
            default:
              throw "Bad character " + ch;
          }
        }
      }
      item = stack.pop();
      return H._Parser_toType(parser.u, parser.e, item);
    },
    _Parser_handleDigit: function(i, digit, source, stack) {
      var t1, ch,
        value = digit - 48;
      for (t1 = source.length; i < t1; ++i) {
        ch = source.charCodeAt(i);
        if (!(ch >= 48 && ch <= 57))
          break;
        value = value * 10 + (ch - 48);
      }
      stack.push(value);
      return i;
    },
    _Parser_handleIdentifier: function(parser, start, source, stack, hasPeriod) {
      var t1, ch, t2, string, environment, recipe,
        i = start + 1;
      for (t1 = source.length; i < t1; ++i) {
        ch = source.charCodeAt(i);
        if (ch === 46) {
          if (hasPeriod)
            break;
          hasPeriod = true;
        } else {
          if (!((((ch | 32) >>> 0) - 97 & 65535) < 26 || ch === 95 || ch === 36))
            t2 = ch >= 48 && ch <= 57;
          else
            t2 = true;
          if (!t2)
            break;
        }
      }
      string = source.substring(start, i);
      if (hasPeriod) {
        t1 = parser.u;
        environment = parser.e;
        if (environment._kind === 10)
          environment = environment._primary;
        recipe = H._Universe_findRule(t1, environment._primary)[string];
        if (recipe == null)
          H.throwExpression('No "' + string + '" in "' + H.Rti__getCanonicalRecipe(environment) + '"');
        stack.push(H._Universe_evalInEnvironment(t1, environment, recipe));
      } else
        stack.push(string);
      return i;
    },
    _Parser_handleExtendedOperations: function(parser, stack) {
      var $top = stack.pop();
      if (0 === $top) {
        stack.push(H._Universe__lookupTerminalRti(parser.u, 1, "0&"));
        return;
      }
      if (1 === $top) {
        stack.push(H._Universe__lookupTerminalRti(parser.u, 4, "1&"));
        return;
      }
      throw H.wrapException(P.AssertionError$("Unexpected extended operation " + H.S($top)));
    },
    _Parser_toType: function(universe, environment, item) {
      if (typeof item == "string")
        return H._Universe__lookupInterfaceRti(universe, item, universe.sEA);
      else if (typeof item == "number")
        return H._Parser_indexToType(universe, environment, item);
      else
        return item;
    },
    _Parser_toTypes: function(universe, environment, items) {
      var i,
        $length = items.length;
      for (i = 0; i < $length; ++i)
        items[i] = H._Parser_toType(universe, environment, items[i]);
    },
    _Parser_toTypesNamed: function(universe, environment, items) {
      var i,
        $length = items.length;
      for (i = 2; i < $length; i += 3)
        items[i] = H._Parser_toType(universe, environment, items[i]);
    },
    _Parser_indexToType: function(universe, environment, index) {
      var typeArguments, len,
        kind = environment._kind;
      if (kind === 10) {
        if (index === 0)
          return environment._primary;
        typeArguments = environment._rest;
        len = typeArguments.length;
        if (index <= len)
          return typeArguments[index - 1];
        index -= len;
        environment = environment._primary;
        kind = environment._kind;
      } else if (index === 0)
        return environment;
      if (kind !== 9)
        throw H.wrapException(P.AssertionError$("Indexed base must be an interface type"));
      typeArguments = environment._rest;
      if (index <= typeArguments.length)
        return typeArguments[index - 1];
      throw H.wrapException(P.AssertionError$("Bad index " + index + " for " + environment.toString$0(0)));
    },
    _isSubtype: function(universe, s, sEnv, t, tEnv) {
      var t1, sKind, leftTypeVariable, tKind, sBounds, tBounds, sLength, i, sBound, tBound;
      if (s === t)
        return true;
      if (!H.isStrongTopType(t))
        if (!(t === type$.legacy_Object))
          t1 = t === type$.Object;
        else
          t1 = true;
      else
        t1 = true;
      if (t1)
        return true;
      sKind = s._kind;
      if (sKind === 4)
        return true;
      if (H.isStrongTopType(s))
        return false;
      if (s._kind !== 1)
        t1 = s === type$.Null || s === type$.JSNull;
      else
        t1 = true;
      if (t1)
        return true;
      leftTypeVariable = sKind === 13;
      if (leftTypeVariable)
        if (H._isSubtype(universe, sEnv[s._primary], sEnv, t, tEnv))
          return true;
      tKind = t._kind;
      if (sKind === 6)
        return H._isSubtype(universe, s._primary, sEnv, t, tEnv);
      if (tKind === 6) {
        t1 = t._primary;
        return H._isSubtype(universe, s, sEnv, t1, tEnv);
      }
      if (sKind === 8) {
        if (!H._isSubtype(universe, s._primary, sEnv, t, tEnv))
          return false;
        return H._isSubtype(universe, H.Rti__getFutureFromFutureOr(universe, s), sEnv, t, tEnv);
      }
      if (sKind === 7) {
        t1 = H._isSubtype(universe, s._primary, sEnv, t, tEnv);
        return t1;
      }
      if (tKind === 8) {
        if (H._isSubtype(universe, s, sEnv, t._primary, tEnv))
          return true;
        return H._isSubtype(universe, s, sEnv, H.Rti__getFutureFromFutureOr(universe, t), tEnv);
      }
      if (tKind === 7) {
        t1 = H._isSubtype(universe, s, sEnv, t._primary, tEnv);
        return t1;
      }
      if (leftTypeVariable)
        return false;
      t1 = sKind !== 11;
      if ((!t1 || sKind === 12) && t === type$.Function)
        return true;
      if (tKind === 12) {
        if (s === type$.JavaScriptFunction)
          return true;
        if (sKind !== 12)
          return false;
        sBounds = s._rest;
        tBounds = t._rest;
        sLength = sBounds.length;
        if (sLength !== tBounds.length)
          return false;
        sEnv = sEnv == null ? sBounds : sBounds.concat(sEnv);
        tEnv = tEnv == null ? tBounds : tBounds.concat(tEnv);
        for (i = 0; i < sLength; ++i) {
          sBound = sBounds[i];
          tBound = tBounds[i];
          if (!H._isSubtype(universe, sBound, sEnv, tBound, tEnv) || !H._isSubtype(universe, tBound, tEnv, sBound, sEnv))
            return false;
        }
        return H._isFunctionSubtype(universe, s._primary, sEnv, t._primary, tEnv);
      }
      if (tKind === 11) {
        if (s === type$.JavaScriptFunction)
          return true;
        if (t1)
          return false;
        return H._isFunctionSubtype(universe, s, sEnv, t, tEnv);
      }
      if (sKind === 9) {
        if (tKind !== 9)
          return false;
        return H._isInterfaceSubtype(universe, s, sEnv, t, tEnv);
      }
      return false;
    },
    _isFunctionSubtype: function(universe, s, sEnv, t, tEnv) {
      var sParameters, tParameters, sRequiredPositional, tRequiredPositional, sRequiredPositionalLength, tRequiredPositionalLength, requiredPositionalDelta, sOptionalPositional, tOptionalPositional, sOptionalPositionalLength, tOptionalPositionalLength, i, t1, sNamed, tNamed, sNamedLength, tNamedLength, sIndex, tIndex, tName, sName;
      if (!H._isSubtype(universe, s._primary, sEnv, t._primary, tEnv))
        return false;
      sParameters = s._rest;
      tParameters = t._rest;
      sRequiredPositional = sParameters._requiredPositional;
      tRequiredPositional = tParameters._requiredPositional;
      sRequiredPositionalLength = sRequiredPositional.length;
      tRequiredPositionalLength = tRequiredPositional.length;
      if (sRequiredPositionalLength > tRequiredPositionalLength)
        return false;
      requiredPositionalDelta = tRequiredPositionalLength - sRequiredPositionalLength;
      sOptionalPositional = sParameters._optionalPositional;
      tOptionalPositional = tParameters._optionalPositional;
      sOptionalPositionalLength = sOptionalPositional.length;
      tOptionalPositionalLength = tOptionalPositional.length;
      if (sRequiredPositionalLength + sOptionalPositionalLength < tRequiredPositionalLength + tOptionalPositionalLength)
        return false;
      for (i = 0; i < sRequiredPositionalLength; ++i) {
        t1 = sRequiredPositional[i];
        if (!H._isSubtype(universe, tRequiredPositional[i], tEnv, t1, sEnv))
          return false;
      }
      for (i = 0; i < requiredPositionalDelta; ++i) {
        t1 = sOptionalPositional[i];
        if (!H._isSubtype(universe, tRequiredPositional[sRequiredPositionalLength + i], tEnv, t1, sEnv))
          return false;
      }
      for (i = 0; i < tOptionalPositionalLength; ++i) {
        t1 = sOptionalPositional[requiredPositionalDelta + i];
        if (!H._isSubtype(universe, tOptionalPositional[i], tEnv, t1, sEnv))
          return false;
      }
      sNamed = sParameters._named;
      tNamed = tParameters._named;
      sNamedLength = sNamed.length;
      tNamedLength = tNamed.length;
      for (sIndex = 0, tIndex = 0; tIndex < tNamedLength; tIndex += 3) {
        tName = tNamed[tIndex];
        for (; true;) {
          if (sIndex >= sNamedLength)
            return false;
          sName = sNamed[sIndex];
          sIndex += 3;
          if (tName < sName)
            return false;
          if (sName < tName)
            continue;
          t1 = sNamed[sIndex - 1];
          if (!H._isSubtype(universe, tNamed[tIndex + 2], tEnv, t1, sEnv))
            return false;
          break;
        }
      }
      return true;
    },
    _isInterfaceSubtype: function(universe, s, sEnv, t, tEnv) {
      var sArgs, tArgs, $length, i, t1, t2, rule, supertypeArgs,
        sName = s._primary,
        tName = t._primary;
      if (sName === tName) {
        sArgs = s._rest;
        tArgs = t._rest;
        $length = sArgs.length;
        for (i = 0; i < $length; ++i) {
          t1 = sArgs[i];
          t2 = tArgs[i];
          if (!H._isSubtype(universe, t1, sEnv, t2, tEnv))
            return false;
        }
        return true;
      }
      if (t === type$.Object)
        return true;
      rule = H._Universe_findRule(universe, sName);
      if (rule == null)
        return false;
      supertypeArgs = rule[tName];
      if (supertypeArgs == null)
        return false;
      $length = supertypeArgs.length;
      tArgs = t._rest;
      for (i = 0; i < $length; ++i)
        if (!H._isSubtype(universe, H._Universe_evalInEnvironment(universe, s, supertypeArgs[i]), sEnv, tArgs[i], tEnv))
          return false;
      return true;
    },
    isNullable: function(t) {
      var t1,
        kind = t._kind;
      if (!(t === type$.Null || t === type$.JSNull))
        if (!H.isStrongTopType(t))
          if (kind !== 7)
            if (!(kind === 6 && H.isNullable(t._primary)))
              t1 = kind === 8 && H.isNullable(t._primary);
            else
              t1 = true;
          else
            t1 = true;
        else
          t1 = true;
      else
        t1 = true;
      return t1;
    },
    isTopType: function(t) {
      var t1;
      if (!H.isStrongTopType(t))
        if (!(t === type$.legacy_Object))
          t1 = t === type$.Object;
        else
          t1 = true;
      else
        t1 = true;
      return t1;
    },
    isStrongTopType: function(t) {
      var kind = t._kind;
      return kind === 2 || kind === 3 || kind === 4 || kind === 5 || t === type$.nullable_Object;
    },
    _Utils_objectAssign: function(o, other) {
      var i, key,
        keys = Object.keys(other),
        $length = keys.length;
      for (i = 0; i < $length; ++i) {
        key = keys[i];
        o[key] = other[key];
      }
    },
    Rti: function Rti(t0, t1) {
      var _ = this;
      _._as = t0;
      _._is = t1;
      _._cachedRuntimeType = _._specializedTestResource = _._precomputed1 = null;
      _._kind = 0;
      _._canonicalRecipe = _._bindCache = _._evalCache = _._rest = _._primary = null;
    },
    _FunctionParameters: function _FunctionParameters() {
      this._named = this._optionalPositional = this._requiredPositional = null;
    },
    _Error: function _Error() {
    },
    _TypeError: function _TypeError(t0) {
      this._message = t0;
    },
    unmangleGlobalNameIfPreservedAnyways: function($name) {
      return init.mangledGlobalNames[$name];
    }
  },
  J = {
    makeDispatchRecord: function(interceptor, proto, extension, indexability) {
      return {i: interceptor, p: proto, e: extension, x: indexability};
    },
    getNativeInterceptor: function(object) {
      var proto, objectProto, $constructor, interceptor,
        record = object[init.dispatchPropertyName];
      if (record == null)
        if ($.initNativeDispatchFlag == null) {
          H.initNativeDispatch();
          record = object[init.dispatchPropertyName];
        }
      if (record != null) {
        proto = record.p;
        if (false === proto)
          return record.i;
        if (true === proto)
          return object;
        objectProto = Object.getPrototypeOf(object);
        if (proto === objectProto)
          return record.i;
        if (record.e === objectProto)
          throw H.wrapException(P.UnimplementedError$("Return interceptor for " + H.S(proto(object, record))));
      }
      $constructor = object.constructor;
      interceptor = $constructor == null ? null : $constructor[J.JS_INTEROP_INTERCEPTOR_TAG()];
      if (interceptor != null)
        return interceptor;
      interceptor = H.lookupAndCacheInterceptor(object);
      if (interceptor != null)
        return interceptor;
      if (typeof object == "function")
        return C.JavaScriptFunction_methods;
      proto = Object.getPrototypeOf(object);
      if (proto == null)
        return C.PlainJavaScriptObject_methods;
      if (proto === Object.prototype)
        return C.PlainJavaScriptObject_methods;
      if (typeof $constructor == "function") {
        Object.defineProperty($constructor, J.JS_INTEROP_INTERCEPTOR_TAG(), {value: C.UnknownJavaScriptObject_methods, enumerable: false, writable: true, configurable: true});
        return C.UnknownJavaScriptObject_methods;
      }
      return C.UnknownJavaScriptObject_methods;
    },
    JS_INTEROP_INTERCEPTOR_TAG: function() {
      var t1 = $._JS_INTEROP_INTERCEPTOR_TAG;
      return t1 == null ? $._JS_INTEROP_INTERCEPTOR_TAG = init.getIsolateTag("_$dart_js") : t1;
    },
    JSArray_markFixedList: function(list) {
      list.fixed$length = Array;
      return list;
    },
    getInterceptor$: function(receiver) {
      if (typeof receiver == "number") {
        if (Math.floor(receiver) == receiver)
          return J.JSInt.prototype;
        return J.JSDouble.prototype;
      }
      if (typeof receiver == "string")
        return J.JSString.prototype;
      if (receiver == null)
        return J.JSNull.prototype;
      if (typeof receiver == "boolean")
        return J.JSBool.prototype;
      if (receiver.constructor == Array)
        return J.JSArray.prototype;
      if (typeof receiver != "object") {
        if (typeof receiver == "function")
          return J.JavaScriptFunction.prototype;
        return receiver;
      }
      if (receiver instanceof P.Object)
        return receiver;
      return J.getNativeInterceptor(receiver);
    },
    getInterceptor$asx: function(receiver) {
      if (typeof receiver == "string")
        return J.JSString.prototype;
      if (receiver == null)
        return receiver;
      if (receiver.constructor == Array)
        return J.JSArray.prototype;
      if (typeof receiver != "object") {
        if (typeof receiver == "function")
          return J.JavaScriptFunction.prototype;
        return receiver;
      }
      if (receiver instanceof P.Object)
        return receiver;
      return J.getNativeInterceptor(receiver);
    },
    getInterceptor$ax: function(receiver) {
      if (receiver == null)
        return receiver;
      if (receiver.constructor == Array)
        return J.JSArray.prototype;
      if (typeof receiver != "object") {
        if (typeof receiver == "function")
          return J.JavaScriptFunction.prototype;
        return receiver;
      }
      if (receiver instanceof P.Object)
        return receiver;
      return J.getNativeInterceptor(receiver);
    },
    getInterceptor$ns: function(receiver) {
      if (typeof receiver == "number")
        return J.JSNumber.prototype;
      if (typeof receiver == "string")
        return J.JSString.prototype;
      if (receiver == null)
        return receiver;
      if (!(receiver instanceof P.Object))
        return J.UnknownJavaScriptObject.prototype;
      return receiver;
    },
    getInterceptor$x: function(receiver) {
      if (receiver == null)
        return receiver;
      if (typeof receiver != "object") {
        if (typeof receiver == "function")
          return J.JavaScriptFunction.prototype;
        return receiver;
      }
      if (receiver instanceof P.Object)
        return receiver;
      return J.getNativeInterceptor(receiver);
    },
    get$extensionId$x: function(receiver) {
      return J.getInterceptor$x(receiver).get$extensionId(receiver);
    },
    get$hashCode$: function(receiver) {
      return J.getInterceptor$(receiver).get$hashCode(receiver);
    },
    get$iterator$ax: function(receiver) {
      return J.getInterceptor$ax(receiver).get$iterator(receiver);
    },
    get$length$asx: function(receiver) {
      return J.getInterceptor$asx(receiver).get$length(receiver);
    },
    get$muted$x: function(receiver) {
      return J.getInterceptor$x(receiver).get$muted(receiver);
    },
    get$onMessage$x: function(receiver) {
      return J.getInterceptor$x(receiver).get$onMessage(receiver);
    },
    get$reason$x: function(receiver) {
      return J.getInterceptor$x(receiver).get$reason(receiver);
    },
    get$runtime$x: function(receiver) {
      return J.getInterceptor$x(receiver).get$runtime(receiver);
    },
    get$tabs$x: function(receiver) {
      return J.getInterceptor$x(receiver).get$tabs(receiver);
    },
    get$windows$x: function(receiver) {
      return J.getInterceptor$x(receiver).get$windows(receiver);
    },
    $add$ns: function(receiver, a0) {
      if (typeof receiver == "number" && typeof a0 == "number")
        return receiver + a0;
      return J.getInterceptor$ns(receiver).$add(receiver, a0);
    },
    $eq$: function(receiver, a0) {
      if (receiver == null)
        return a0 == null;
      if (typeof receiver != "object")
        return a0 != null && receiver === a0;
      return J.getInterceptor$(receiver).$eq(receiver, a0);
    },
    $index$asx: function(receiver, a0) {
      if (typeof a0 === "number")
        if (receiver.constructor == Array || typeof receiver == "string" || H.isJsIndexable(receiver, receiver[init.dispatchPropertyName]))
          if (a0 >>> 0 === a0 && a0 < receiver.length)
            return receiver[a0];
      return J.getInterceptor$asx(receiver).$index(receiver, a0);
    },
    addListener$1$x: function(receiver, a0) {
      return J.getInterceptor$x(receiver).addListener$1(receiver, a0);
    },
    create$2$x: function(receiver, a0, a1) {
      return J.getInterceptor$x(receiver).create$2(receiver, a0, a1);
    },
    forEach$1$x: function(receiver, a0) {
      return J.getInterceptor$x(receiver).forEach$1(receiver, a0);
    },
    getURL$1$x: function(receiver, a0) {
      return J.getInterceptor$x(receiver).getURL$1(receiver, a0);
    },
    noSuchMethod$1$: function(receiver, a0) {
      return J.getInterceptor$(receiver).noSuchMethod$1(receiver, a0);
    },
    setUninstallURL$2$x: function(receiver, a0, a1) {
      return J.getInterceptor$x(receiver).setUninstallURL$2(receiver, a0, a1);
    },
    toString$0$: function(receiver) {
      return J.getInterceptor$(receiver).toString$0(receiver);
    },
    Interceptor: function Interceptor() {
    },
    JSBool: function JSBool() {
    },
    JSNull: function JSNull() {
    },
    JavaScriptObject: function JavaScriptObject() {
    },
    PlainJavaScriptObject: function PlainJavaScriptObject() {
    },
    UnknownJavaScriptObject: function UnknownJavaScriptObject() {
    },
    JavaScriptFunction: function JavaScriptFunction() {
    },
    JSArray: function JSArray() {
    },
    JSUnmodifiableArray: function JSUnmodifiableArray() {
    },
    ArrayIterator: function ArrayIterator(t0, t1) {
      var _ = this;
      _._iterable = t0;
      _.__interceptors$_length = t1;
      _._index = 0;
      _._current = null;
    },
    JSNumber: function JSNumber() {
    },
    JSInt: function JSInt() {
    },
    JSDouble: function JSDouble() {
    },
    JSString: function JSString() {
    }
  },
  P = {
    _AsyncRun__initializeScheduleImmediate: function() {
      var div, span, t1 = {};
      if (self.scheduleImmediate != null)
        return P.async__AsyncRun__scheduleImmediateJsOverride$closure();
      if (self.MutationObserver != null && self.document != null) {
        div = self.document.createElement("div");
        span = self.document.createElement("span");
        t1.storedCallback = null;
        new self.MutationObserver(H.convertDartClosureToJS(new P._AsyncRun__initializeScheduleImmediate_internalCallback(t1), 1)).observe(div, {childList: true});
        return new P._AsyncRun__initializeScheduleImmediate_closure(t1, div, span);
      } else if (self.setImmediate != null)
        return P.async__AsyncRun__scheduleImmediateWithSetImmediate$closure();
      return P.async__AsyncRun__scheduleImmediateWithTimer$closure();
    },
    _AsyncRun__scheduleImmediateJsOverride: function(callback) {
      self.scheduleImmediate(H.convertDartClosureToJS(new P._AsyncRun__scheduleImmediateJsOverride_internalCallback(callback), 0));
    },
    _AsyncRun__scheduleImmediateWithSetImmediate: function(callback) {
      self.setImmediate(H.convertDartClosureToJS(new P._AsyncRun__scheduleImmediateWithSetImmediate_internalCallback(callback), 0));
    },
    _AsyncRun__scheduleImmediateWithTimer: function(callback) {
      P._TimerImpl$(0, callback);
    },
    _TimerImpl$: function(milliseconds, callback) {
      var t1 = new P._TimerImpl();
      t1._TimerImpl$2(milliseconds, callback);
      return t1;
    },
    _makeAsyncAwaitCompleter: function($T) {
      return new P._AsyncAwaitCompleter(new P._Future($.Zone__current, $T._eval$1("_Future<0>")), $T._eval$1("_AsyncAwaitCompleter<0>"));
    },
    _asyncStartSync: function(bodyFunction, completer) {
      bodyFunction.call$2(0, null);
      completer.isSync = true;
      return completer._future;
    },
    _asyncAwait: function(object, bodyFunction) {
      P._awaitOnObject(object, bodyFunction);
    },
    _asyncReturn: function(object, completer) {
      completer.complete$1(0, object);
    },
    _asyncRethrow: function(object, completer) {
      completer.completeError$2(H.unwrapException(object), H.getTraceFromException(object));
    },
    _awaitOnObject: function(object, bodyFunction) {
      var t1, future,
        thenCallback = new P._awaitOnObject_closure(bodyFunction),
        errorCallback = new P._awaitOnObject_closure0(bodyFunction);
      if (object instanceof P._Future)
        object._thenAwait$1$2(thenCallback, errorCallback, type$.dynamic);
      else {
        t1 = type$.dynamic;
        if (type$.Future_dynamic._is(object))
          object.then$1$2$onError(thenCallback, errorCallback, t1);
        else {
          future = new P._Future($.Zone__current, type$._Future_dynamic);
          future._state = 4;
          future._resultOrListeners = object;
          future._thenAwait$1$2(thenCallback, errorCallback, t1);
        }
      }
    },
    _wrapJsFunctionForAsync: function($function) {
      var $protected = function(fn, ERROR) {
        return function(errorCode, result) {
          while (true)
            try {
              fn(errorCode, result);
              break;
            } catch (error) {
              result = error;
              errorCode = ERROR;
            }
        };
      }($function, 1);
      return $.Zone__current.registerBinaryCallback$1(new P._wrapJsFunctionForAsync_closure($protected));
    },
    _Future__chainForeignFuture: function(source, target) {
      var e, s, exception;
      target._state = 1;
      try {
        source.then$1$2$onError(new P._Future__chainForeignFuture_closure(target), new P._Future__chainForeignFuture_closure0(target), type$.Null);
      } catch (exception) {
        e = H.unwrapException(exception);
        s = H.getTraceFromException(exception);
        P.scheduleMicrotask(new P._Future__chainForeignFuture_closure1(target, e, s));
      }
    },
    _Future__chainCoreFuture: function(source, target) {
      var t1, listeners;
      for (; t1 = source._state, t1 === 2;)
        source = source._resultOrListeners;
      if (t1 >= 4) {
        listeners = target._removeListeners$0();
        target._state = source._state;
        target._resultOrListeners = source._resultOrListeners;
        P._Future__propagateToListeners(target, listeners);
      } else {
        listeners = target._resultOrListeners;
        target._state = 2;
        target._resultOrListeners = source;
        source._prependListeners$1(listeners);
      }
    },
    _Future__propagateToListeners: function(source, listeners) {
      var t2, _box_0, hasError, nextListener, nextListener0, t3, sourceResult, t4, t5, zone, oldZone, result, current, _null = null, _box_1 = {},
        t1 = _box_1.source = source;
      for (t2 = type$.Future_dynamic; true;) {
        _box_0 = {};
        hasError = t1._state === 8;
        if (listeners == null) {
          if (hasError) {
            t2 = t1._resultOrListeners;
            P._rootHandleUncaughtError(_null, _null, t1._zone, t2.error, t2.stackTrace);
          }
          return;
        }
        _box_0.listener = listeners;
        nextListener = listeners._nextListener;
        for (t1 = listeners; nextListener != null; t1 = nextListener, nextListener = nextListener0) {
          t1._nextListener = null;
          P._Future__propagateToListeners(_box_1.source, t1);
          _box_0.listener = nextListener;
          nextListener0 = nextListener._nextListener;
        }
        t3 = _box_1.source;
        sourceResult = t3._resultOrListeners;
        _box_0.listenerHasError = hasError;
        _box_0.listenerValueOrError = sourceResult;
        t4 = !hasError;
        if (t4) {
          t5 = t1.state;
          t5 = (t5 & 1) !== 0 || (t5 & 15) === 8;
        } else
          t5 = true;
        if (t5) {
          zone = t1.result._zone;
          if (hasError) {
            t5 = t3._zone === zone;
            t5 = !(t5 || t5);
          } else
            t5 = false;
          if (t5) {
            P._rootHandleUncaughtError(_null, _null, t3._zone, sourceResult.error, sourceResult.stackTrace);
            return;
          }
          oldZone = $.Zone__current;
          if (oldZone !== zone)
            $.Zone__current = zone;
          else
            oldZone = _null;
          t1 = t1.state;
          if ((t1 & 15) === 8)
            new P._Future__propagateToListeners_handleWhenCompleteCallback(_box_0, _box_1, hasError).call$0();
          else if (t4) {
            if ((t1 & 1) !== 0)
              new P._Future__propagateToListeners_handleValueCallback(_box_0, sourceResult).call$0();
          } else if ((t1 & 2) !== 0)
            new P._Future__propagateToListeners_handleError(_box_1, _box_0).call$0();
          if (oldZone != null)
            $.Zone__current = oldZone;
          t1 = _box_0.listenerValueOrError;
          if (t2._is(t1)) {
            result = _box_0.listener.result;
            if (t1._state >= 4) {
              current = result._resultOrListeners;
              result._resultOrListeners = null;
              listeners = result._reverseListeners$1(current);
              result._state = t1._state;
              result._resultOrListeners = t1._resultOrListeners;
              _box_1.source = t1;
              continue;
            } else
              P._Future__chainCoreFuture(t1, result);
            return;
          }
        }
        result = _box_0.listener.result;
        current = result._resultOrListeners;
        result._resultOrListeners = null;
        listeners = result._reverseListeners$1(current);
        t1 = _box_0.listenerHasError;
        t3 = _box_0.listenerValueOrError;
        if (!t1) {
          result._state = 4;
          result._resultOrListeners = t3;
        } else {
          result._state = 8;
          result._resultOrListeners = t3;
        }
        _box_1.source = result;
        t1 = result;
      }
    },
    _registerErrorHandler: function(errorHandler, zone) {
      if (type$.dynamic_Function_Object_StackTrace._is(errorHandler))
        return zone.registerBinaryCallback$1(errorHandler);
      if (type$.dynamic_Function_Object._is(errorHandler))
        return errorHandler;
      throw H.wrapException(P.ArgumentError$value(errorHandler, "onError", "Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"));
    },
    _microtaskLoop: function() {
      var entry, next;
      for (entry = $._nextCallback; entry != null; entry = $._nextCallback) {
        $._lastPriorityCallback = null;
        next = entry.next;
        $._nextCallback = next;
        if (next == null)
          $._lastCallback = null;
        entry.callback.call$0();
      }
    },
    _startMicrotaskLoop: function() {
      $._isInCallbackLoop = true;
      try {
        P._microtaskLoop();
      } finally {
        $._lastPriorityCallback = null;
        $._isInCallbackLoop = false;
        if ($._nextCallback != null)
          $.$get$_AsyncRun__scheduleImmediateClosure().call$1(P.async___startMicrotaskLoop$closure());
      }
    },
    _scheduleAsyncCallback: function(callback) {
      var newEntry = new P._AsyncCallbackEntry(callback),
        lastCallback = $._lastCallback;
      if (lastCallback == null) {
        $._nextCallback = $._lastCallback = newEntry;
        if (!$._isInCallbackLoop)
          $.$get$_AsyncRun__scheduleImmediateClosure().call$1(P.async___startMicrotaskLoop$closure());
      } else
        $._lastCallback = lastCallback.next = newEntry;
    },
    _schedulePriorityAsyncCallback: function(callback) {
      var entry, lastPriorityCallback, next,
        t1 = $._nextCallback;
      if (t1 == null) {
        P._scheduleAsyncCallback(callback);
        $._lastPriorityCallback = $._lastCallback;
        return;
      }
      entry = new P._AsyncCallbackEntry(callback);
      lastPriorityCallback = $._lastPriorityCallback;
      if (lastPriorityCallback == null) {
        entry.next = t1;
        $._nextCallback = $._lastPriorityCallback = entry;
      } else {
        next = lastPriorityCallback.next;
        entry.next = next;
        $._lastPriorityCallback = lastPriorityCallback.next = entry;
        if (next == null)
          $._lastCallback = entry;
      }
    },
    scheduleMicrotask: function(callback) {
      var _null = null,
        currentZone = $.Zone__current;
      if (C.C__RootZone === currentZone) {
        P._rootScheduleMicrotask(_null, _null, C.C__RootZone, callback);
        return;
      }
      P._rootScheduleMicrotask(_null, _null, currentZone, currentZone.bindCallbackGuarded$1(callback));
    },
    StreamIterator_StreamIterator: function(stream) {
      P.ArgumentError_checkNotNull(stream, "stream");
      return new P._StreamIterator();
    },
    StreamController_StreamController: function($T) {
      var _null = null;
      return new P._AsyncStreamController(_null, _null, _null, _null, $T._eval$1("_AsyncStreamController<0>"));
    },
    _runGuarded: function(notificationHandler) {
      return;
    },
    _BufferingStreamSubscription__registerDataHandler: function(zone, handleData) {
      return handleData == null ? P.async___nullDataHandler$closure() : handleData;
    },
    _BufferingStreamSubscription__registerErrorHandler: function(zone, handleError) {
      if (handleError == null)
        handleError = P.async___nullErrorHandler$closure();
      if (type$.void_Function_Object_StackTrace._is(handleError))
        return zone.registerBinaryCallback$1(handleError);
      if (type$.void_Function_Object._is(handleError))
        return handleError;
      throw H.wrapException(P.ArgumentError$("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."));
    },
    _nullDataHandler: function(value) {
    },
    _nullErrorHandler: function(error, stackTrace) {
      P._rootHandleUncaughtError(null, null, $.Zone__current, error, stackTrace);
    },
    AsyncError$: function(error, stackTrace) {
      var t1 = stackTrace == null ? P.AsyncError_defaultStackTrace(error) : stackTrace;
      P.ArgumentError_checkNotNull(error, "error");
      return new P.AsyncError(error, t1);
    },
    AsyncError_defaultStackTrace: function(error) {
      var stackTrace;
      if (type$.Error._is(error)) {
        stackTrace = error.get$stackTrace();
        if (stackTrace != null)
          return stackTrace;
      }
      return C.C__StringStackTrace;
    },
    _rootHandleUncaughtError: function($self, $parent, zone, error, stackTrace) {
      P._schedulePriorityAsyncCallback(new P._rootHandleUncaughtError_closure(error, stackTrace));
    },
    _rootRun: function($self, $parent, zone, f) {
      var old,
        t1 = $.Zone__current;
      if (t1 === zone)
        return f.call$0();
      $.Zone__current = zone;
      old = t1;
      try {
        t1 = f.call$0();
        return t1;
      } finally {
        $.Zone__current = old;
      }
    },
    _rootRunUnary: function($self, $parent, zone, f, arg) {
      var old,
        t1 = $.Zone__current;
      if (t1 === zone)
        return f.call$1(arg);
      $.Zone__current = zone;
      old = t1;
      try {
        t1 = f.call$1(arg);
        return t1;
      } finally {
        $.Zone__current = old;
      }
    },
    _rootRunBinary: function($self, $parent, zone, f, arg1, arg2) {
      var old,
        t1 = $.Zone__current;
      if (t1 === zone)
        return f.call$2(arg1, arg2);
      $.Zone__current = zone;
      old = t1;
      try {
        t1 = f.call$2(arg1, arg2);
        return t1;
      } finally {
        $.Zone__current = old;
      }
    },
    _rootScheduleMicrotask: function($self, $parent, zone, f) {
      var t1 = C.C__RootZone !== zone;
      if (t1)
        f = !(!t1 || false) ? zone.bindCallbackGuarded$1(f) : zone.bindCallback$1$1(f, type$.void);
      P._scheduleAsyncCallback(f);
    },
    _AsyncRun__initializeScheduleImmediate_internalCallback: function _AsyncRun__initializeScheduleImmediate_internalCallback(t0) {
      this._box_0 = t0;
    },
    _AsyncRun__initializeScheduleImmediate_closure: function _AsyncRun__initializeScheduleImmediate_closure(t0, t1, t2) {
      this._box_0 = t0;
      this.div = t1;
      this.span = t2;
    },
    _AsyncRun__scheduleImmediateJsOverride_internalCallback: function _AsyncRun__scheduleImmediateJsOverride_internalCallback(t0) {
      this.callback = t0;
    },
    _AsyncRun__scheduleImmediateWithSetImmediate_internalCallback: function _AsyncRun__scheduleImmediateWithSetImmediate_internalCallback(t0) {
      this.callback = t0;
    },
    _TimerImpl: function _TimerImpl() {
    },
    _TimerImpl_internalCallback: function _TimerImpl_internalCallback(t0, t1) {
      this.$this = t0;
      this.callback = t1;
    },
    _AsyncAwaitCompleter: function _AsyncAwaitCompleter(t0, t1) {
      this._future = t0;
      this.isSync = false;
      this.$ti = t1;
    },
    _awaitOnObject_closure: function _awaitOnObject_closure(t0) {
      this.bodyFunction = t0;
    },
    _awaitOnObject_closure0: function _awaitOnObject_closure0(t0) {
      this.bodyFunction = t0;
    },
    _wrapJsFunctionForAsync_closure: function _wrapJsFunctionForAsync_closure(t0) {
      this.$protected = t0;
    },
    _Completer: function _Completer() {
    },
    _AsyncCompleter: function _AsyncCompleter(t0, t1) {
      this.future = t0;
      this.$ti = t1;
    },
    _FutureListener: function _FutureListener(t0, t1, t2, t3) {
      var _ = this;
      _._nextListener = null;
      _.result = t0;
      _.state = t1;
      _.callback = t2;
      _.errorCallback = t3;
    },
    _Future: function _Future(t0, t1) {
      var _ = this;
      _._state = 0;
      _._zone = t0;
      _._resultOrListeners = null;
      _.$ti = t1;
    },
    _Future__addListener_closure: function _Future__addListener_closure(t0, t1) {
      this.$this = t0;
      this.listener = t1;
    },
    _Future__prependListeners_closure: function _Future__prependListeners_closure(t0, t1) {
      this._box_0 = t0;
      this.$this = t1;
    },
    _Future__chainForeignFuture_closure: function _Future__chainForeignFuture_closure(t0) {
      this.target = t0;
    },
    _Future__chainForeignFuture_closure0: function _Future__chainForeignFuture_closure0(t0) {
      this.target = t0;
    },
    _Future__chainForeignFuture_closure1: function _Future__chainForeignFuture_closure1(t0, t1, t2) {
      this.target = t0;
      this.e = t1;
      this.s = t2;
    },
    _Future__asyncCompleteWithValue_closure: function _Future__asyncCompleteWithValue_closure(t0, t1) {
      this.$this = t0;
      this.value = t1;
    },
    _Future__chainFuture_closure: function _Future__chainFuture_closure(t0, t1) {
      this.$this = t0;
      this.value = t1;
    },
    _Future__asyncCompleteError_closure: function _Future__asyncCompleteError_closure(t0, t1, t2) {
      this.$this = t0;
      this.error = t1;
      this.stackTrace = t2;
    },
    _Future__propagateToListeners_handleWhenCompleteCallback: function _Future__propagateToListeners_handleWhenCompleteCallback(t0, t1, t2) {
      this._box_0 = t0;
      this._box_1 = t1;
      this.hasError = t2;
    },
    _Future__propagateToListeners_handleWhenCompleteCallback_closure: function _Future__propagateToListeners_handleWhenCompleteCallback_closure(t0) {
      this.originalSource = t0;
    },
    _Future__propagateToListeners_handleValueCallback: function _Future__propagateToListeners_handleValueCallback(t0, t1) {
      this._box_0 = t0;
      this.sourceResult = t1;
    },
    _Future__propagateToListeners_handleError: function _Future__propagateToListeners_handleError(t0, t1) {
      this._box_1 = t0;
      this._box_0 = t1;
    },
    _AsyncCallbackEntry: function _AsyncCallbackEntry(t0) {
      this.callback = t0;
      this.next = null;
    },
    Stream: function Stream() {
    },
    Stream_length_closure: function Stream_length_closure(t0, t1) {
      this._box_0 = t0;
      this.$this = t1;
    },
    Stream_length_closure0: function Stream_length_closure0(t0, t1) {
      this._box_0 = t0;
      this.future = t1;
    },
    _StreamController: function _StreamController() {
    },
    _StreamController__subscribe_closure: function _StreamController__subscribe_closure(t0) {
      this.$this = t0;
    },
    _AsyncStreamControllerDispatch: function _AsyncStreamControllerDispatch() {
    },
    _AsyncStreamController: function _AsyncStreamController(t0, t1, t2, t3, t4) {
      var _ = this;
      _._varData = null;
      _._state = 0;
      _.onListen = t0;
      _.onPause = t1;
      _.onResume = t2;
      _.onCancel = t3;
      _.$ti = t4;
    },
    _ControllerStream: function _ControllerStream(t0, t1) {
      this._async$_controller = t0;
      this.$ti = t1;
    },
    _ControllerSubscription: function _ControllerSubscription(t0, t1, t2, t3) {
      var _ = this;
      _._async$_controller = t0;
      _._onData = t1;
      _._zone = t2;
      _._state = t3;
      _._pending = _._cancelFuture = null;
    },
    _BufferingStreamSubscription: function _BufferingStreamSubscription() {
    },
    _StreamImpl: function _StreamImpl() {
    },
    _DelayedEvent: function _DelayedEvent() {
    },
    _DelayedData: function _DelayedData(t0) {
      this.value = t0;
      this.next = null;
    },
    _PendingEvents: function _PendingEvents() {
    },
    _PendingEvents_schedule_closure: function _PendingEvents_schedule_closure(t0, t1) {
      this.$this = t0;
      this.dispatch = t1;
    },
    _StreamImplEvents: function _StreamImplEvents() {
      this.lastPendingEvent = this.firstPendingEvent = null;
      this._state = 0;
    },
    _StreamIterator: function _StreamIterator() {
    },
    AsyncError: function AsyncError(t0, t1) {
      this.error = t0;
      this.stackTrace = t1;
    },
    _Zone: function _Zone() {
    },
    _rootHandleUncaughtError_closure: function _rootHandleUncaughtError_closure(t0, t1) {
      this.error = t0;
      this.stackTrace = t1;
    },
    _RootZone: function _RootZone() {
    },
    _RootZone_bindCallback_closure: function _RootZone_bindCallback_closure(t0, t1, t2) {
      this.$this = t0;
      this.f = t1;
      this.R = t2;
    },
    _RootZone_bindCallbackGuarded_closure: function _RootZone_bindCallbackGuarded_closure(t0, t1) {
      this.$this = t0;
      this.f = t1;
    },
    LinkedHashMap_LinkedHashMap: function($K, $V) {
      return new H.JsLinkedHashMap($K._eval$1("@<0>")._bind$1($V)._eval$1("JsLinkedHashMap<1,2>"));
    },
    LinkedHashMap_LinkedHashMap$_empty: function($K, $V) {
      return new H.JsLinkedHashMap($K._eval$1("@<0>")._bind$1($V)._eval$1("JsLinkedHashMap<1,2>"));
    },
    IterableBase_iterableToShortString: function(iterable, leftDelimiter, rightDelimiter) {
      var parts, t1;
      if (P._isToStringVisiting(iterable)) {
        if (leftDelimiter === "(" && rightDelimiter === ")")
          return "(...)";
        return leftDelimiter + "..." + rightDelimiter;
      }
      parts = [];
      $._toStringVisiting.push(iterable);
      try {
        P._iterablePartsToStrings(iterable, parts);
      } finally {
        $._toStringVisiting.pop();
      }
      t1 = P.StringBuffer__writeAll(leftDelimiter, parts, ", ") + rightDelimiter;
      return t1.charCodeAt(0) == 0 ? t1 : t1;
    },
    IterableBase_iterableToFullString: function(iterable, leftDelimiter, rightDelimiter) {
      var buffer, t1;
      if (P._isToStringVisiting(iterable))
        return leftDelimiter + "..." + rightDelimiter;
      buffer = new P.StringBuffer(leftDelimiter);
      $._toStringVisiting.push(iterable);
      try {
        t1 = buffer;
        t1._contents = P.StringBuffer__writeAll(t1._contents, iterable, ", ");
      } finally {
        $._toStringVisiting.pop();
      }
      buffer._contents += rightDelimiter;
      t1 = buffer._contents;
      return t1.charCodeAt(0) == 0 ? t1 : t1;
    },
    _isToStringVisiting: function(o) {
      var t1, i;
      for (t1 = $._toStringVisiting.length, i = 0; i < t1; ++i)
        if (o === $._toStringVisiting[i])
          return true;
      return false;
    },
    _iterablePartsToStrings: function(iterable, parts) {
      var next, ultimateString, penultimateString, penultimate, ultimate, ultimate0, elision,
        it = iterable.get$iterator(iterable),
        $length = 0, count = 0;
      while (true) {
        if (!($length < 80 || count < 3))
          break;
        if (!it.moveNext$0())
          return;
        next = H.S(it.get$current(it));
        parts.push(next);
        $length += next.length + 2;
        ++count;
      }
      if (!it.moveNext$0()) {
        if (count <= 5)
          return;
        ultimateString = parts.pop();
        penultimateString = parts.pop();
      } else {
        penultimate = it.get$current(it);
        ++count;
        if (!it.moveNext$0()) {
          if (count <= 4) {
            parts.push(H.S(penultimate));
            return;
          }
          ultimateString = H.S(penultimate);
          penultimateString = parts.pop();
          $length += ultimateString.length + 2;
        } else {
          ultimate = it.get$current(it);
          ++count;
          for (; it.moveNext$0(); penultimate = ultimate, ultimate = ultimate0) {
            ultimate0 = it.get$current(it);
            ++count;
            if (count > 100) {
              while (true) {
                if (!($length > 75 && count > 3))
                  break;
                $length -= parts.pop().length + 2;
                --count;
              }
              parts.push("...");
              return;
            }
          }
          penultimateString = H.S(penultimate);
          ultimateString = H.S(ultimate);
          $length += ultimateString.length + penultimateString.length + 4;
        }
      }
      if (count > parts.length + 2) {
        $length += 5;
        elision = "...";
      } else
        elision = null;
      while (true) {
        if (!($length > 80 && parts.length > 3))
          break;
        $length -= parts.pop().length + 2;
        if (elision == null) {
          $length += 5;
          elision = "...";
        }
      }
      if (elision != null)
        parts.push(elision);
      parts.push(penultimateString);
      parts.push(ultimateString);
    },
    MapBase_mapToString: function(m) {
      var result, t1 = {};
      if (P._isToStringVisiting(m))
        return "{...}";
      result = new P.StringBuffer("");
      try {
        $._toStringVisiting.push(m);
        result._contents += "{";
        t1.first = true;
        J.forEach$1$x(m, new P.MapBase_mapToString_closure(t1, result));
        result._contents += "}";
      } finally {
        $._toStringVisiting.pop();
      }
      t1 = result._contents;
      return t1.charCodeAt(0) == 0 ? t1 : t1;
    },
    MapBase__id: function(x) {
      return x;
    },
    MapBase__fillMapWithMappedIterable: function(map, iterable, key, value) {
      var t1, element;
      for (t1 = J.get$iterator$ax(iterable); t1.moveNext$0();) {
        element = t1.get$current(t1);
        map.$indexSet(0, P.collection_MapBase__id$closure().call$1(element), value.call$1(element));
      }
    },
    ListMixin: function ListMixin() {
    },
    MapBase: function MapBase() {
    },
    MapBase_mapToString_closure: function MapBase_mapToString_closure(t0, t1) {
      this._box_0 = t0;
      this.result = t1;
    },
    MapMixin: function MapMixin() {
    },
    _UnmodifiableMapMixin: function _UnmodifiableMapMixin() {
    },
    MapView: function MapView() {
    },
    UnmodifiableMapView: function UnmodifiableMapView() {
    },
    _UnmodifiableMapView_MapView__UnmodifiableMapMixin: function _UnmodifiableMapView_MapView__UnmodifiableMapMixin() {
    },
    Error__objectToString: function(object) {
      if (object instanceof H.Closure)
        return object.toString$0(0);
      return "Instance of '" + H.S(H.Primitives_objectTypeName(object)) + "'";
    },
    List_List$from: function(elements) {
      var t1, list = [];
      for (t1 = J.get$iterator$ax(elements); t1.moveNext$0();)
        list.push(t1.get$current(t1));
      return list;
    },
    StringBuffer__writeAll: function(string, objects, separator) {
      var iterator = J.get$iterator$ax(objects);
      if (!iterator.moveNext$0())
        return string;
      if (separator.length === 0) {
        do
          string += H.S(iterator.get$current(iterator));
        while (iterator.moveNext$0());
      } else {
        string += H.S(iterator.get$current(iterator));
        for (; iterator.moveNext$0();)
          string = string + separator + H.S(iterator.get$current(iterator));
      }
      return string;
    },
    NoSuchMethodError$: function(receiver, memberName, positionalArguments, namedArguments) {
      return new P.NoSuchMethodError(receiver, memberName, positionalArguments, namedArguments);
    },
    Error_safeToString: function(object) {
      if (typeof object == "number" || H._isBool(object) || null == object)
        return J.toString$0$(object);
      if (typeof object == "string")
        return JSON.stringify(object);
      return P.Error__objectToString(object);
    },
    AssertionError$: function(message) {
      return new P.AssertionError(message);
    },
    ArgumentError$: function(message) {
      return new P.ArgumentError(false, null, null, message);
    },
    ArgumentError$value: function(value, $name, message) {
      return new P.ArgumentError(true, value, $name, message);
    },
    ArgumentError_checkNotNull: function(argument, $name) {
      if (argument == null)
        throw H.wrapException(new P.ArgumentError(false, null, $name, "Must not be null"));
      return argument;
    },
    IndexError$: function(invalidValue, indexable, $name, message, $length) {
      var t1 = $length == null ? J.get$length$asx(indexable) : $length;
      return new P.IndexError(t1, true, invalidValue, $name, "Index out of range");
    },
    UnsupportedError$: function(message) {
      return new P.UnsupportedError(message);
    },
    UnimplementedError$: function(message) {
      return new P.UnimplementedError(message);
    },
    StateError$: function(message) {
      return new P.StateError(message);
    },
    ConcurrentModificationError$: function(modifiedObject) {
      return new P.ConcurrentModificationError(modifiedObject);
    },
    Exception_Exception: function(message) {
      return new P._Exception(message);
    },
    NoSuchMethodError_toString_closure: function NoSuchMethodError_toString_closure(t0, t1) {
      this._box_0 = t0;
      this.sb = t1;
    },
    Error: function Error() {
    },
    AssertionError: function AssertionError(t0) {
      this.message = t0;
    },
    TypeError: function TypeError() {
    },
    NullThrownError: function NullThrownError() {
    },
    ArgumentError: function ArgumentError(t0, t1, t2, t3) {
      var _ = this;
      _._hasValue = t0;
      _.invalidValue = t1;
      _.name = t2;
      _.message = t3;
    },
    RangeError: function RangeError(t0, t1, t2, t3, t4, t5) {
      var _ = this;
      _.start = t0;
      _.end = t1;
      _._hasValue = t2;
      _.invalidValue = t3;
      _.name = t4;
      _.message = t5;
    },
    IndexError: function IndexError(t0, t1, t2, t3, t4) {
      var _ = this;
      _.length = t0;
      _._hasValue = t1;
      _.invalidValue = t2;
      _.name = t3;
      _.message = t4;
    },
    NoSuchMethodError: function NoSuchMethodError(t0, t1, t2, t3) {
      var _ = this;
      _._core$_receiver = t0;
      _._memberName = t1;
      _._core$_arguments = t2;
      _._namedArguments = t3;
    },
    UnsupportedError: function UnsupportedError(t0) {
      this.message = t0;
    },
    UnimplementedError: function UnimplementedError(t0) {
      this.message = t0;
    },
    StateError: function StateError(t0) {
      this.message = t0;
    },
    ConcurrentModificationError: function ConcurrentModificationError(t0) {
      this.modifiedObject = t0;
    },
    StackOverflowError: function StackOverflowError() {
    },
    CyclicInitializationError: function CyclicInitializationError(t0) {
      this.variableName = t0;
    },
    _Exception: function _Exception(t0) {
      this.message = t0;
    },
    Iterable: function Iterable() {
    },
    Null: function Null() {
    },
    Object: function Object() {
    },
    _StringStackTrace: function _StringStackTrace() {
    },
    StringBuffer: function StringBuffer(t0) {
      this._contents = t0;
    },
    Length: function Length() {
    },
    LengthList: function LengthList() {
    },
    Number: function Number() {
    },
    NumberList: function NumberList() {
    },
    PointList: function PointList() {
    },
    StringList: function StringList() {
    },
    Transform: function Transform() {
    },
    TransformList: function TransformList() {
    },
    _LengthList_Interceptor_ListMixin: function _LengthList_Interceptor_ListMixin() {
    },
    _LengthList_Interceptor_ListMixin_ImmutableListMixin: function _LengthList_Interceptor_ListMixin_ImmutableListMixin() {
    },
    _NumberList_Interceptor_ListMixin: function _NumberList_Interceptor_ListMixin() {
    },
    _NumberList_Interceptor_ListMixin_ImmutableListMixin: function _NumberList_Interceptor_ListMixin_ImmutableListMixin() {
    },
    _StringList_Interceptor_ListMixin: function _StringList_Interceptor_ListMixin() {
    },
    _StringList_Interceptor_ListMixin_ImmutableListMixin: function _StringList_Interceptor_ListMixin_ImmutableListMixin() {
    },
    _TransformList_Interceptor_ListMixin: function _TransformList_Interceptor_ListMixin() {
    },
    _TransformList_Interceptor_ListMixin_ImmutableListMixin: function _TransformList_Interceptor_ListMixin_ImmutableListMixin() {
    },
    AudioBuffer: function AudioBuffer() {
    },
    AudioParamMap: function AudioParamMap() {
    },
    AudioParamMap_keys_closure: function AudioParamMap_keys_closure(t0) {
      this.keys = t0;
    },
    AudioTrackList: function AudioTrackList() {
    },
    BaseAudioContext: function BaseAudioContext() {
    },
    OfflineAudioContext: function OfflineAudioContext() {
    },
    _AudioParamMap_Interceptor_MapMixin: function _AudioParamMap_Interceptor_MapMixin() {
    },
    SqlResultSetRowList: function SqlResultSetRowList() {
    },
    _SqlResultSetRowList_Interceptor_ListMixin: function _SqlResultSetRowList_Interceptor_ListMixin() {
    },
    _SqlResultSetRowList_Interceptor_ListMixin_ImmutableListMixin: function _SqlResultSetRowList_Interceptor_ListMixin_ImmutableListMixin() {
    },
    convertNativeToDart_Dictionary: function(object) {
      var dict, keys, t1, _i, key;
      if (object == null)
        return null;
      dict = P.LinkedHashMap_LinkedHashMap$_empty(type$.String, type$.dynamic);
      keys = Object.getOwnPropertyNames(object);
      for (t1 = keys.length, _i = 0; _i < keys.length; keys.length === t1 || (0, H.throwConcurrentModificationError)(keys), ++_i) {
        key = keys[_i];
        dict.$indexSet(0, key, object[key]);
      }
      return dict;
    },
    _convertDartFunctionFast: function(f) {
      var ret,
        existing = f.$dart_jsFunction;
      if (existing != null)
        return existing;
      ret = function(_call, f) {
        return function() {
          return _call(f, Array.prototype.slice.apply(arguments));
        };
      }(P._callDartFunctionFast, f);
      ret[$.$get$DART_CLOSURE_PROPERTY_NAME()] = f;
      f.$dart_jsFunction = ret;
      return ret;
    },
    _callDartFunctionFast: function(callback, $arguments) {
      return H.Primitives_applyFunction(callback, $arguments, null);
    },
    allowInterop: function(f) {
      if (typeof f == "function")
        return f;
      else
        return P._convertDartFunctionFast(f);
    }
  },
  W = {
    _JenkinsSmiHash_combine: function(hash, value) {
      hash = 536870911 & hash + value;
      hash = 536870911 & hash + ((524287 & hash) << 10);
      return hash ^ hash >>> 6;
    },
    _JenkinsSmiHash_hash4: function(a, b, c, d) {
      var t1 = W._JenkinsSmiHash_combine(W._JenkinsSmiHash_combine(W._JenkinsSmiHash_combine(W._JenkinsSmiHash_combine(0, a), b), c), d),
        hash = 536870911 & t1 + ((67108863 & t1) << 3);
      hash ^= hash >>> 11;
      return 536870911 & hash + ((16383 & hash) << 15);
    },
    HtmlElement: function HtmlElement() {
    },
    AccessibleNodeList: function AccessibleNodeList() {
    },
    AnchorElement: function AnchorElement() {
    },
    AreaElement: function AreaElement() {
    },
    Blob: function Blob() {
    },
    CharacterData: function CharacterData() {
    },
    CssPerspective: function CssPerspective() {
    },
    CssRule: function CssRule() {
    },
    CssStyleDeclaration: function CssStyleDeclaration() {
    },
    CssStyleDeclarationBase: function CssStyleDeclarationBase() {
    },
    CssStyleValue: function CssStyleValue() {
    },
    CssTransformComponent: function CssTransformComponent() {
    },
    CssTransformValue: function CssTransformValue() {
    },
    CssUnparsedValue: function CssUnparsedValue() {
    },
    DataTransferItemList: function DataTransferItemList() {
    },
    DomException: function DomException() {
    },
    DomRectList: function DomRectList() {
    },
    DomRectReadOnly: function DomRectReadOnly() {
    },
    DomStringList: function DomStringList() {
    },
    DomTokenList: function DomTokenList() {
    },
    Element: function Element() {
    },
    EventTarget: function EventTarget() {
    },
    File: function File() {
    },
    FileList: function FileList() {
    },
    FileWriter: function FileWriter() {
    },
    FormElement: function FormElement() {
    },
    Gamepad: function Gamepad() {
    },
    History: function History() {
    },
    HtmlCollection: function HtmlCollection() {
    },
    Location: function Location() {
    },
    MediaList: function MediaList() {
    },
    MidiInputMap: function MidiInputMap() {
    },
    MidiInputMap_keys_closure: function MidiInputMap_keys_closure(t0) {
      this.keys = t0;
    },
    MidiOutputMap: function MidiOutputMap() {
    },
    MidiOutputMap_keys_closure: function MidiOutputMap_keys_closure(t0) {
      this.keys = t0;
    },
    MimeType: function MimeType() {
    },
    MimeTypeArray: function MimeTypeArray() {
    },
    Node: function Node() {
    },
    NodeList: function NodeList() {
    },
    Plugin: function Plugin() {
    },
    PluginArray: function PluginArray() {
    },
    RtcStatsReport: function RtcStatsReport() {
    },
    RtcStatsReport_keys_closure: function RtcStatsReport_keys_closure(t0) {
      this.keys = t0;
    },
    SelectElement: function SelectElement() {
    },
    SourceBuffer: function SourceBuffer() {
    },
    SourceBufferList: function SourceBufferList() {
    },
    SpeechGrammar: function SpeechGrammar() {
    },
    SpeechGrammarList: function SpeechGrammarList() {
    },
    SpeechRecognitionResult: function SpeechRecognitionResult() {
    },
    Storage: function Storage() {
    },
    Storage_keys_closure: function Storage_keys_closure(t0) {
      this.keys = t0;
    },
    StyleSheet: function StyleSheet() {
    },
    TextTrack: function TextTrack() {
    },
    TextTrackCue: function TextTrackCue() {
    },
    TextTrackCueList: function TextTrackCueList() {
    },
    TextTrackList: function TextTrackList() {
    },
    TimeRanges: function TimeRanges() {
    },
    Touch: function Touch() {
    },
    TouchList: function TouchList() {
    },
    TrackDefaultList: function TrackDefaultList() {
    },
    Url: function Url() {
    },
    VideoTrackList: function VideoTrackList() {
    },
    _CssRuleList: function _CssRuleList() {
    },
    _DomRect: function _DomRect() {
    },
    _GamepadList: function _GamepadList() {
    },
    _NamedNodeMap: function _NamedNodeMap() {
    },
    _SpeechRecognitionResultList: function _SpeechRecognitionResultList() {
    },
    _StyleSheetList: function _StyleSheetList() {
    },
    ImmutableListMixin: function ImmutableListMixin() {
    },
    FixedSizeListIterator: function FixedSizeListIterator(t0, t1) {
      var _ = this;
      _._array = t0;
      _._html$_length = t1;
      _._position = -1;
      _._html$_current = null;
    },
    _CssStyleDeclaration_Interceptor_CssStyleDeclarationBase: function _CssStyleDeclaration_Interceptor_CssStyleDeclarationBase() {
    },
    _DomRectList_Interceptor_ListMixin: function _DomRectList_Interceptor_ListMixin() {
    },
    _DomRectList_Interceptor_ListMixin_ImmutableListMixin: function _DomRectList_Interceptor_ListMixin_ImmutableListMixin() {
    },
    _DomStringList_Interceptor_ListMixin: function _DomStringList_Interceptor_ListMixin() {
    },
    _DomStringList_Interceptor_ListMixin_ImmutableListMixin: function _DomStringList_Interceptor_ListMixin_ImmutableListMixin() {
    },
    _FileList_Interceptor_ListMixin: function _FileList_Interceptor_ListMixin() {
    },
    _FileList_Interceptor_ListMixin_ImmutableListMixin: function _FileList_Interceptor_ListMixin_ImmutableListMixin() {
    },
    _HtmlCollection_Interceptor_ListMixin: function _HtmlCollection_Interceptor_ListMixin() {
    },
    _HtmlCollection_Interceptor_ListMixin_ImmutableListMixin: function _HtmlCollection_Interceptor_ListMixin_ImmutableListMixin() {
    },
    _MidiInputMap_Interceptor_MapMixin: function _MidiInputMap_Interceptor_MapMixin() {
    },
    _MidiOutputMap_Interceptor_MapMixin: function _MidiOutputMap_Interceptor_MapMixin() {
    },
    _MimeTypeArray_Interceptor_ListMixin: function _MimeTypeArray_Interceptor_ListMixin() {
    },
    _MimeTypeArray_Interceptor_ListMixin_ImmutableListMixin: function _MimeTypeArray_Interceptor_ListMixin_ImmutableListMixin() {
    },
    _NodeList_Interceptor_ListMixin: function _NodeList_Interceptor_ListMixin() {
    },
    _NodeList_Interceptor_ListMixin_ImmutableListMixin: function _NodeList_Interceptor_ListMixin_ImmutableListMixin() {
    },
    _PluginArray_Interceptor_ListMixin: function _PluginArray_Interceptor_ListMixin() {
    },
    _PluginArray_Interceptor_ListMixin_ImmutableListMixin: function _PluginArray_Interceptor_ListMixin_ImmutableListMixin() {
    },
    _RtcStatsReport_Interceptor_MapMixin: function _RtcStatsReport_Interceptor_MapMixin() {
    },
    _SourceBufferList_EventTarget_ListMixin: function _SourceBufferList_EventTarget_ListMixin() {
    },
    _SourceBufferList_EventTarget_ListMixin_ImmutableListMixin: function _SourceBufferList_EventTarget_ListMixin_ImmutableListMixin() {
    },
    _SpeechGrammarList_Interceptor_ListMixin: function _SpeechGrammarList_Interceptor_ListMixin() {
    },
    _SpeechGrammarList_Interceptor_ListMixin_ImmutableListMixin: function _SpeechGrammarList_Interceptor_ListMixin_ImmutableListMixin() {
    },
    _Storage_Interceptor_MapMixin: function _Storage_Interceptor_MapMixin() {
    },
    _TextTrackCueList_Interceptor_ListMixin: function _TextTrackCueList_Interceptor_ListMixin() {
    },
    _TextTrackCueList_Interceptor_ListMixin_ImmutableListMixin: function _TextTrackCueList_Interceptor_ListMixin_ImmutableListMixin() {
    },
    _TextTrackList_EventTarget_ListMixin: function _TextTrackList_EventTarget_ListMixin() {
    },
    _TextTrackList_EventTarget_ListMixin_ImmutableListMixin: function _TextTrackList_EventTarget_ListMixin_ImmutableListMixin() {
    },
    _TouchList_Interceptor_ListMixin: function _TouchList_Interceptor_ListMixin() {
    },
    _TouchList_Interceptor_ListMixin_ImmutableListMixin: function _TouchList_Interceptor_ListMixin_ImmutableListMixin() {
    },
    __CssRuleList_Interceptor_ListMixin: function __CssRuleList_Interceptor_ListMixin() {
    },
    __CssRuleList_Interceptor_ListMixin_ImmutableListMixin: function __CssRuleList_Interceptor_ListMixin_ImmutableListMixin() {
    },
    __GamepadList_Interceptor_ListMixin: function __GamepadList_Interceptor_ListMixin() {
    },
    __GamepadList_Interceptor_ListMixin_ImmutableListMixin: function __GamepadList_Interceptor_ListMixin_ImmutableListMixin() {
    },
    __NamedNodeMap_Interceptor_ListMixin: function __NamedNodeMap_Interceptor_ListMixin() {
    },
    __NamedNodeMap_Interceptor_ListMixin_ImmutableListMixin: function __NamedNodeMap_Interceptor_ListMixin_ImmutableListMixin() {
    },
    __SpeechRecognitionResultList_Interceptor_ListMixin: function __SpeechRecognitionResultList_Interceptor_ListMixin() {
    },
    __SpeechRecognitionResultList_Interceptor_ListMixin_ImmutableListMixin: function __SpeechRecognitionResultList_Interceptor_ListMixin_ImmutableListMixin() {
    },
    __StyleSheetList_Interceptor_ListMixin: function __StyleSheetList_Interceptor_ListMixin() {
    },
    __StyleSheetList_Interceptor_ListMixin_ImmutableListMixin: function __StyleSheetList_Interceptor_ListMixin_ImmutableListMixin() {
    }
  },
  U = {JsTestability: function JsTestability() {
    }, JsTestabilityRegistry: function JsTestabilityRegistry() {
    }, ContentSettingCookiesSetDetails: function ContentSettingCookiesSetDetails() {
    }, ContentSettingCookiesGetDetails: function ContentSettingCookiesGetDetails() {
    }, ContentSettingCookies: function ContentSettingCookies() {
    }},
  S = {_Chrome: function _Chrome(t0) {
      this._chrome = t0;
    },
    messageListener: function() {
      var $async$goto = 0,
        $async$completer = P._makeAsyncAwaitCompleter(type$.void),
        t1;
      var $async$messageListener = P._wrapJsFunctionForAsync(function($async$errorCode, $async$result) {
        if ($async$errorCode === 1)
          return P._asyncRethrow($async$result, $async$completer);
        while (true)
          switch ($async$goto) {
            case 0:
              // Function start
              t1 = B.Runtime_Runtime$fromInterop(J.get$runtime$x($.$get$chrome()._chrome)).onMessage;
              J.addListener$1$x(J.get$onMessage$x(t1._runtime), P.allowInterop(P.allowInterop(t1.get$_callback())));
              t1 = t1._controller;
              new P._ControllerStream(t1, H._instanceType(t1)._eval$1("_ControllerStream<1>")).listen$1(new S.messageListener_closure());
              // implicit return
              return P._asyncReturn(null, $async$completer);
          }
      });
      return P._asyncStartSync($async$messageListener, $async$completer);
    },
    backgroundInit: function() {
      var $async$goto = 0,
        $async$completer = P._makeAsyncAwaitCompleter(type$.void);
      var $async$backgroundInit = P._wrapJsFunctionForAsync(function($async$errorCode, $async$result) {
        if ($async$errorCode === 1)
          return P._asyncRethrow($async$result, $async$completer);
        while (true)
          switch ($async$goto) {
            case 0:
              // Function start
              S.messageListener();
              B.Runtime_Runtime$fromInterop(J.get$runtime$x($.$get$chrome()._chrome)).setUninstallURL$1(0, "https://webvoom.com/");
              // implicit return
              return P._asyncReturn(null, $async$completer);
          }
      });
      return P._asyncStartSync($async$backgroundInit, $async$completer);
    },
    messageListener_closure: function messageListener_closure() {
    },
    main: function() {
      S.backgroundInit();
    }
  },
  B = {
    Runtime_Runtime$fromInterop: function(rtime) {
      var t1 = P.StreamController_StreamController(type$.legacy_RuntimeOnMessageData);
      P.StreamController_StreamController(type$.legacy_RuntimeOnInstalledData);
      P.StreamController_StreamController(type$.legacy_bool);
      P.StreamController_StreamController(type$.legacy_RuntimeOnUpdateAvailableProps);
      return new B.Runtime(rtime, new B._OnMessage(rtime, t1));
    },
    RuntimeMessageSender: function RuntimeMessageSender(t0, t1, t2) {
      this.id = t0;
      this.url = t1;
      this.tlsChannelId = t2;
    },
    RuntimeOnMessageData: function RuntimeOnMessageData(t0, t1, t2) {
      this.message = t0;
      this.sender = t1;
      this.sendResponse = t2;
    },
    _OnInstalled: function _OnInstalled(t0) {
      this._controller = t0;
    },
    _OnMessage: function _OnMessage(t0, t1) {
      this._runtime = t0;
      this._controller = t1;
    },
    _OnStartup: function _OnStartup(t0) {
      this._controller = t0;
    },
    _OnUpdateAvailable: function _OnUpdateAvailable(t0) {
      this._controller = t0;
    },
    Runtime: function Runtime(t0, t1) {
      this._runtime = t0;
      this.onMessage = t1;
    },
    Suggestion: function Suggestion() {
    },
    Omnibox: function Omnibox() {
    }
  },
  E = {
    Tab$: function(active, audible, autoDiscardable, discarded, favIconUrl, height, highlighted, id, incognito, index, mutedInfo, openerTabId, pinned, sessionId, $status, title, url, width, windowID) {
      return new E.Tab(id, index, windowID, openerTabId, highlighted, active, pinned, audible, discarded, autoDiscardable, mutedInfo, url, title, favIconUrl, $status, incognito, width, height, sessionId);
    },
    Tab_Tab$fromInterop: function(itab) {
      var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, _null = null;
      if (itab == null)
        return E.Tab$(_null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null, _null);
      t1 = J.getInterceptor$x(itab);
      t2 = t1.get$id(itab);
      t3 = t1.get$index(itab);
      t4 = t1.get$windowId(itab);
      t5 = t1.get$openerTabId(itab);
      t6 = t1.get$highlighted(itab);
      t7 = t1.get$active(itab);
      t8 = t1.get$pinned(itab);
      t9 = t1.get$audible(itab);
      t10 = t1.get$discarded(itab);
      t11 = t1.get$autoDiscardable(itab);
      J.get$muted$x(t1.get$mutedInfo(itab));
      J.get$extensionId$x(t1.get$mutedInfo(itab));
      J.get$reason$x(t1.get$mutedInfo(itab));
      t12 = t1.get$url(itab);
      t13 = t1.get$title(itab);
      t14 = t1.get$favIconUrl(itab);
      t15 = t1.get$status(itab);
      t16 = t1.get$incognito(itab);
      t17 = t1.get$width(itab);
      return E.Tab$(t7, t9, t11, t10, t14, t1.get$height(itab), t6, t2, t16, t3, new E.TabMutedProps(), t5, t8, t1.get$sessionId(itab), t15, t13, t12, t17, t4);
    },
    Tab: function Tab(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18) {
      var _ = this;
      _.id = t0;
      _.index = t1;
      _.windowID = t2;
      _.openerTabId = t3;
      _.highlighted = t4;
      _.active = t5;
      _.pinned = t6;
      _.audible = t7;
      _.discarded = t8;
      _.autoDiscardable = t9;
      _.mutedInfo = t10;
      _.url = t11;
      _.title = t12;
      _.favIconUrl = t13;
      _.status = t14;
      _.incognito = t15;
      _.width = t16;
      _.height = t17;
      _.sessionId = t18;
    },
    TabMutedProps: function TabMutedProps() {
    },
    TabCreateProps: function TabCreateProps(t0, t1, t2) {
      this.windowId = t0;
      this.url = t1;
      this.active = t2;
    },
    _OnCreated: function _OnCreated(t0) {
      this._tabs$_controller = t0;
    },
    _OnUpdated: function _OnUpdated(t0) {
      this._tabs$_controller = t0;
    },
    _OnMoved: function _OnMoved(t0) {
      this._tabs$_controller = t0;
    },
    _OnActivated: function _OnActivated(t0) {
      this._tabs$_controller = t0;
    },
    _OnHighlighted: function _OnHighlighted(t0) {
      this._tabs$_controller = t0;
    },
    _OnDetached: function _OnDetached(t0) {
      this._tabs$_controller = t0;
    },
    _OnAttached: function _OnAttached(t0) {
      this._tabs$_controller = t0;
    },
    _OnRemoved: function _OnRemoved(t0) {
      this._tabs$_controller = t0;
    },
    _OnReplaced: function _OnReplaced(t0) {
      this._tabs$_controller = t0;
    },
    _OnZoomChange: function _OnZoomChange(t0) {
      this._tabs$_controller = t0;
    },
    Tabs: function Tabs(t0) {
      this._tabs = t0;
    },
    Tabs_create_fn: function Tabs_create_fn(t0, t1) {
      this._box_0 = t0;
      this.completer = t1;
    },
    Extension: function Extension() {
    },
    LastError: function LastError() {
    },
    MessageSender: function MessageSender() {
    },
    PlatformInfo: function PlatformInfo() {
    },
    SendMessageProps: function SendMessageProps() {
    },
    Manifest: function Manifest() {
    },
    RuntimeOnInstalledData: function RuntimeOnInstalledData() {
    },
    OnInstalled0: function OnInstalled0() {
    },
    OnMessage: function OnMessage() {
    },
    OnStartup: function OnStartup() {
    },
    OnUpdateAvailableProps: function OnUpdateAvailableProps() {
    },
    OnUpdateAvailable: function OnUpdateAvailable() {
    },
    Runtime0: function Runtime0() {
    },
    Tab0: function Tab0() {
    },
    TabMutedProps0: function TabMutedProps0() {
    },
    TabZoomSettings: function TabZoomSettings() {
    },
    TabExecuteScriptProps: function TabExecuteScriptProps() {
    },
    TabInsertCSSProps: function TabInsertCSSProps() {
    },
    QueryProps: function QueryProps() {
    },
    TabCreateProps0: function TabCreateProps0() {
    },
    ReloadProps: function ReloadProps() {
    },
    MoveProperties: function MoveProperties() {
    },
    UpdateProperties: function UpdateProperties() {
    },
    SendMessageOptions: function SendMessageOptions() {
    },
    TabCaptureVisibleProps: function TabCaptureVisibleProps() {
    },
    HighlightInfo: function HighlightInfo() {
    },
    OnCreated: function OnCreated() {
    },
    TabOnUpdatedChangeInfo: function TabOnUpdatedChangeInfo() {
    },
    OnUpdated: function OnUpdated() {
    },
    MoveInfo: function MoveInfo() {
    },
    OnMoved: function OnMoved() {
    },
    ActiveInfo0: function ActiveInfo0() {
    },
    OnActivated: function OnActivated() {
    },
    OnHighligtedHighlightInfo: function OnHighligtedHighlightInfo() {
    },
    OnHighlighted: function OnHighlighted() {
    },
    OnDetachedInfo: function OnDetachedInfo() {
    },
    OnDetached: function OnDetached() {
    },
    OnAttachedInfo: function OnAttachedInfo() {
    },
    OnAttached: function OnAttached() {
    },
    OnRemoveInfo: function OnRemoveInfo() {
    },
    OnRemoved: function OnRemoved() {
    },
    OnReplaced: function OnReplaced() {
    },
    ZoomChangeInfo: function ZoomChangeInfo() {
    },
    OnZoomChange: function OnZoomChange() {
    },
    Tabs0: function Tabs0() {
    }
  },
  L = {Windows: function Windows(t0, t1, t2) {
      this._onCreatedController = t0;
      this._onRemovedController = t1;
      this._onFocusChangedController = t2;
    }, ContentSettingMicrophoneSetDetails: function ContentSettingMicrophoneSetDetails() {
    }, ContentSettingMicrophoneGetDetails: function ContentSettingMicrophoneGetDetails() {
    }, ContentSettingMicrophone: function ContentSettingMicrophone() {
    }},
  D = {SetTitleProps: function SetTitleProps() {
    }, GetTitleProps: function GetTitleProps() {
    }, SetBadgeTextProps: function SetBadgeTextProps() {
    }, GetBadgeTextProps: function GetBadgeTextProps() {
    }, OnClickDataProps: function OnClickDataProps() {
    }, SetPopupProps: function SetPopupProps() {
    }, GetPopupProps: function GetPopupProps() {
    }, GetBadgeBackgroundColorProps: function GetBadgeBackgroundColorProps() {
    }, SetBadgeBackgroundColorProps: function SetBadgeBackgroundColorProps() {
    }, SetIconProps: function SetIconProps() {
    }, BrowserAction: function BrowserAction() {
    }, OnClicked: function OnClicked() {
    }, ContentSettingAutomaticDownloadsSetDetails: function ContentSettingAutomaticDownloadsSetDetails() {
    }, ContentSettingAutomaticDownloadsGetDetails: function ContentSettingAutomaticDownloadsGetDetails() {
    }, ContentSettingAutomaticDownloads: function ContentSettingAutomaticDownloads() {
    }},
  Q = {OriginTypes: function OriginTypes() {
    }, RemovalOptions: function RemovalOptions() {
    }, DataTypeSet: function DataTypeSet() {
    }, SettingsResult: function SettingsResult() {
    }, BrowsingData: function BrowsingData() {
    }, GetAuthTokenDetails: function GetAuthTokenDetails() {
    }, RemoveCachedAuthTokenDetails: function RemoveCachedAuthTokenDetails() {
    }, Identity: function Identity() {
    }},
  X = {Chrome: function Chrome() {
    }},
  Z = {ContentSettingCameraSetDetails: function ContentSettingCameraSetDetails() {
    }, ContentSettingCameraGetDetails: function ContentSettingCameraGetDetails() {
    }, ContentSettingCamera: function ContentSettingCamera() {
    }, ContentSettingLocationSetDetails: function ContentSettingLocationSetDetails() {
    }, ContentSettingLocationGetDetails: function ContentSettingLocationGetDetails() {
    }, ContentSettingLocation: function ContentSettingLocation() {
    }, ContentSettingPopupsSetDetails: function ContentSettingPopupsSetDetails() {
    }, ContentSettingPopupsGetDetails: function ContentSettingPopupsGetDetails() {
    }, ContentSettingPopups: function ContentSettingPopups() {
    }},
  N = {ContentSettingResourceIdentifier: function ContentSettingResourceIdentifier() {
    }, ContentSettingClearDetails: function ContentSettingClearDetails() {
    }, ContentDetailsGetReturnValue: function ContentDetailsGetReturnValue() {
    }},
  A = {ContentSettingImagesSetDetails: function ContentSettingImagesSetDetails() {
    }, ContentSettingImagesGetDetails: function ContentSettingImagesGetDetails() {
    }, ContentSettingImages: function ContentSettingImages() {
    }, ContentSettings: function ContentSettings() {
    },
    CrxTabUtils_createTab: function(tabURL) {
      var $async$goto = 0,
        $async$completer = P._makeAsyncAwaitCompleter(type$.legacy_Tab),
        $async$returnValue, t2, tabRet, t1;
      var $async$CrxTabUtils_createTab = P._wrapJsFunctionForAsync(function($async$errorCode, $async$result) {
        if ($async$errorCode === 1)
          return P._asyncRethrow($async$result, $async$completer);
        while (true)
          switch ($async$goto) {
            case 0:
              // Function start
              t1 = $.$get$chrome()._chrome;
              J.get$windows$x(t1);
              P.StreamController_StreamController(type$.legacy_WindowOnCreatedData);
              P.StreamController_StreamController(type$.legacy_WindowOnRemovedData);
              P.StreamController_StreamController(type$.legacy_WindowOnFocusChanged);
              t2 = self.chrome.windows.WINDOW_ID_CURRENT;
              t1 = J.get$tabs$x(t1);
              P.StreamController_StreamController(type$.legacy_Tab);
              P.StreamController_StreamController(type$.legacy_TabOnUpdatedController);
              P.StreamController_StreamController(type$.legacy_TabOnMovedController);
              P.StreamController_StreamController(type$.legacy_ActiveInfo);
              P.StreamController_StreamController(type$.legacy_TabOnHighlightedInfo);
              P.StreamController_StreamController(type$.legacy_TabOnDetachedInfo);
              P.StreamController_StreamController(type$.legacy_TabOnAttachedInfo);
              P.StreamController_StreamController(type$.legacy_TabRemoveInfo);
              P.StreamController_StreamController(type$.legacy_TabOnReplaced);
              P.StreamController_StreamController(type$.legacy_TabZoomChangeInfo);
              $async$goto = 3;
              return P._asyncAwait(new E.Tabs(t1).create$1(0, new E.TabCreateProps(t2, tabURL, true)), $async$CrxTabUtils_createTab);
            case 3:
              // returning from await.
              tabRet = $async$result;
              if (tabRet == null)
                throw H.wrapException(P.Exception_Exception("Expected tab to be non null"));
              $async$returnValue = tabRet;
              // goto return
              $async$goto = 1;
              break;
            case 1:
              // return
              return P._asyncReturn($async$returnValue, $async$completer);
          }
      });
      return P._asyncStartSync($async$CrxTabUtils_createTab, $async$completer);
    }
  },
  O = {ContentSettingJSSetDetails: function ContentSettingJSSetDetails() {
    }, ContentSettingJSGetDetails: function ContentSettingJSGetDetails() {
    }, ContentSettingJS: function ContentSettingJS() {
    }},
  Y = {ContentSettingNotificationSetDetails: function ContentSettingNotificationSetDetails() {
    }, ContentSettingNotificationGetDetails: function ContentSettingNotificationGetDetails() {
    }, ContentSettingNotification: function ContentSettingNotification() {
    }},
  R = {ContentSettingPluginsSetDetails: function ContentSettingPluginsSetDetails() {
    }, ContentSettingPluginsGetDetails: function ContentSettingPluginsGetDetails() {
    }, ContentSettingPlugins: function ContentSettingPlugins() {
    }, IconInfo: function IconInfo() {
    }, ExtensionInfo: function ExtensionInfo() {
    }, OnInstalled: function OnInstalled() {
    }, OnUninstalled: function OnUninstalled() {
    }, OnEnabled: function OnEnabled() {
    }, OnDisabled: function OnDisabled() {
    }, UninstallOptions: function UninstallOptions() {
    }, UninstallSelfOptions: function UninstallSelfOptions() {
    }, Management: function Management() {
    },
    jsToMap: function(jsObject) {
      var t1 = self.Object.keys(jsObject),
        t2 = type$.dynamic,
        map = P.LinkedHashMap_LinkedHashMap(t2, t2);
      P.MapBase__fillMapWithMappedIterable(map, t1, null, new R.jsToMap_closure(jsObject));
      return map;
    },
    jsToMap_closure: function jsToMap_closure(t0) {
      this.jsObject = t0;
    }
  },
  V = {ContentSettingUnsandboxedPluginsSetDetails: function ContentSettingUnsandboxedPluginsSetDetails() {
    }, ContentSettingUnsandboxedPluginsGetDetails: function ContentSettingUnsandboxedPluginsGetDetails() {
    }, ContentSettingUnsandboxedPlugins: function ContentSettingUnsandboxedPlugins() {
    },
    CrxLicenseInfoBackgroundMessageHandler_handleToDo: function(toDo) {
      var $async$goto = 0,
        $async$completer = P._makeAsyncAwaitCompleter(type$.legacy_bool),
        $async$returnValue;
      var $async$CrxLicenseInfoBackgroundMessageHandler_handleToDo = P._wrapJsFunctionForAsync(function($async$errorCode, $async$result) {
        if ($async$errorCode === 1)
          return P._asyncRethrow($async$result, $async$completer);
        while (true)
          switch ($async$goto) {
            case 0:
              // Function start
              $async$goto = toDo === "open_license_info_page" ? 3 : 4;
              break;
            case 3:
              // then
              $async$goto = 5;
              return P._asyncAwait(A.CrxTabUtils_createTab(J.getURL$1$x(B.Runtime_Runtime$fromInterop(J.get$runtime$x($.$get$chrome()._chrome))._runtime, "/ng/tab/comp/license_info/license_info.html")), $async$CrxLicenseInfoBackgroundMessageHandler_handleToDo);
            case 5:
              // returning from await.
              $async$returnValue = true;
              // goto return
              $async$goto = 1;
              break;
            case 4:
              // join
              $async$returnValue = false;
              // goto return
              $async$goto = 1;
              break;
            case 1:
              // return
              return P._asyncReturn($async$returnValue, $async$completer);
          }
      });
      return P._asyncStartSync($async$CrxLicenseInfoBackgroundMessageHandler_handleToDo, $async$completer);
    }
  },
  T = {ContextMenusPropsOnClickData: function ContextMenusPropsOnClickData() {
    }, CreateContextMenusProps: function CreateContextMenusProps() {
    }, UpdateContextMenusProps: function UpdateContextMenusProps() {
    }, ContextMenus: function ContextMenus() {
    }, OnClicked0: function OnClicked0() {
    },
    IsCheck_emptyString: function(o) {
      if (o == null)
        return true;
      if (o.length === 0)
        return true;
      return false;
    }
  },
  M = {Cookie: function Cookie() {
    }, GetProps: function GetProps() {
    }, GetALLProps: function GetALLProps() {
    }, SetProps: function SetProps() {
    }, RemoveProps: function RemoveProps() {
    }, CookieChangeInfo: function CookieChangeInfo() {
    }, CookieStore0: function CookieStore0() {
    }, OnChanged: function OnChanged() {
    }, Cookies: function Cookies() {
    }},
  K = {DownloadOptionsHttpHeader: function DownloadOptionsHttpHeader() {
    }, DownloadOptions: function DownloadOptions() {
    }, Downloads: function Downloads() {
    }, Window0: function Window0() {
    }, WindowsGetInfoProps: function WindowsGetInfoProps() {
    }, WindowCreateData: function WindowCreateData() {
    }, WindowUpdateProps: function WindowUpdateProps() {
    }, Windows0: function Windows0() {
    }},
  F = {HistoryItem: function HistoryItem() {
    }, HistoryVisitItem: function HistoryVisitItem() {
    }, HistorySearchQuery: function HistorySearchQuery() {
    }, HistoryGetVisitsDetails: function HistoryGetVisitsDetails() {
    }, HistoryAddURLDetails: function HistoryAddURLDetails() {
    }, HistoryDeleteURLDetails: function HistoryDeleteURLDetails() {
    }, HistoryOnVisitRemovedDetails: function HistoryOnVisitRemovedDetails() {
    }, HistoryDeleteRangeDetails: function HistoryDeleteRangeDetails() {
    }, _HistoryOnVisited: function _HistoryOnVisited() {
    }, _HistoryOnVisitRemoved: function _HistoryOnVisitRemoved() {
    }, History0: function History0() {
    }, Button: function Button() {
    }, Item: function Item() {
    }, NotificationOptions: function NotificationOptions() {
    }, OnClosed: function OnClosed() {
    }, OnClicked1: function OnClicked1() {
    }, OnButtonClicked: function OnButtonClicked() {
    }, Notifications: function Notifications() {
    }, Storage0: function Storage0() {
    }, _Local: function _Local() {
    }, _Sync: function _Sync() {
    }, _OnChanged: function _OnChanged() {
    }};
  var holders = [C, H, J, P, W, U, S, B, E, L, D, Q, X, Z, N, A, O, Y, R, V, T, M, K, F];
  hunkHelpers.setFunctionNamesIfNecessary(holders);
  var $ = {};
  H.JS_CONST.prototype = {};
  J.Interceptor.prototype = {
    $eq: function(receiver, other) {
      return receiver === other;
    },
    get$hashCode: function(receiver) {
      return H.Primitives_objectHashCode(receiver);
    },
    toString$0: function(receiver) {
      return "Instance of '" + H.S(H.Primitives_objectTypeName(receiver)) + "'";
    },
    noSuchMethod$1: function(receiver, invocation) {
      throw H.wrapException(P.NoSuchMethodError$(receiver, invocation.get$memberName(), invocation.get$positionalArguments(), invocation.get$namedArguments()));
    }
  };
  J.JSBool.prototype = {
    toString$0: function(receiver) {
      return String(receiver);
    },
    get$hashCode: function(receiver) {
      return receiver ? 519018 : 218159;
    },
    $isbool: 1
  };
  J.JSNull.prototype = {
    $eq: function(receiver, other) {
      return null == other;
    },
    toString$0: function(receiver) {
      return "null";
    },
    get$hashCode: function(receiver) {
      return 0;
    },
    noSuchMethod$1: function(receiver, invocation) {
      return this.super$Interceptor$noSuchMethod(receiver, invocation);
    },
    $isNull: 1
  };
  J.JavaScriptObject.prototype = {
    get$hashCode: function(receiver) {
      return 0;
    },
    toString$0: function(receiver) {
      return String(receiver);
    },
    $isMessageSender: 1,
    $isTab0: 1,
    get$title: function(obj) {
      return obj.title;
    },
    get$tab: function(obj) {
      return obj.tab;
    },
    addListener$1: function(receiver, p0) {
      return receiver.addListener(p0);
    },
    get$tabs: function(obj) {
      return obj.tabs;
    },
    get$runtime: function(obj) {
      return obj.runtime;
    },
    get$windows: function(obj) {
      return obj.windows;
    },
    get$incognito: function(obj) {
      return obj.incognito;
    },
    get$id: function(obj) {
      return obj.id;
    },
    create$2: function(receiver, p0, p1) {
      return receiver.create(p0, p1);
    },
    get$url: function(obj) {
      return obj.url;
    },
    get$tlsChannelId: function(obj) {
      return obj.tlsChannelId;
    },
    get$reason: function(obj) {
      return obj.reason;
    },
    get$onMessage: function(obj) {
      return obj.onMessage;
    },
    getURL$1: function(receiver, p0) {
      return receiver.getURL(p0);
    },
    setUninstallURL$2: function(receiver, p0, p1) {
      return receiver.setUninstallURL(p0, p1);
    },
    get$index: function(obj) {
      return obj.index;
    },
    get$windowId: function(obj) {
      return obj.windowId;
    },
    get$openerTabId: function(obj) {
      return obj.openerTabId;
    },
    get$highlighted: function(obj) {
      return obj.highlighted;
    },
    get$active: function(obj) {
      return obj.active;
    },
    get$pinned: function(obj) {
      return obj.pinned;
    },
    get$audible: function(obj) {
      return obj.audible;
    },
    get$discarded: function(obj) {
      return obj.discarded;
    },
    get$autoDiscardable: function(obj) {
      return obj.autoDiscardable;
    },
    get$mutedInfo: function(obj) {
      return obj.mutedInfo;
    },
    get$favIconUrl: function(obj) {
      return obj.favIconUrl;
    },
    get$status: function(obj) {
      return obj.status;
    },
    get$width: function(obj) {
      return obj.width;
    },
    get$height: function(obj) {
      return obj.height;
    },
    get$sessionId: function(obj) {
      return obj.sessionId;
    },
    get$muted: function(obj) {
      return obj.muted;
    },
    get$extensionId: function(obj) {
      return obj.extensionId;
    }
  };
  J.PlainJavaScriptObject.prototype = {};
  J.UnknownJavaScriptObject.prototype = {};
  J.JavaScriptFunction.prototype = {
    toString$0: function(receiver) {
      var dartClosure = receiver[$.$get$DART_CLOSURE_PROPERTY_NAME()];
      if (dartClosure == null)
        return this.super$JavaScriptObject$toString(receiver);
      return "JavaScript function for " + H.S(J.toString$0$(dartClosure));
    },
    $isFunction: 1
  };
  J.JSArray.prototype = {
    add$1: function(receiver, value) {
      if (!!receiver.fixed$length)
        H.throwExpression(P.UnsupportedError$("add"));
      receiver.push(value);
    },
    addAll$1: function(receiver, collection) {
      var t1, _i;
      if (!!receiver.fixed$length)
        H.throwExpression(P.UnsupportedError$("addAll"));
      for (t1 = collection.length, _i = 0; _i < collection.length; collection.length === t1 || (0, H.throwConcurrentModificationError)(collection), ++_i)
        receiver.push(collection[_i]);
    },
    toString$0: function(receiver) {
      return P.IterableBase_iterableToFullString(receiver, "[", "]");
    },
    get$iterator: function(receiver) {
      return new J.ArrayIterator(receiver, receiver.length);
    },
    get$hashCode: function(receiver) {
      return H.Primitives_objectHashCode(receiver);
    },
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  J.JSUnmodifiableArray.prototype = {};
  J.ArrayIterator.prototype = {
    get$current: function(_) {
      return this._current;
    },
    moveNext$0: function() {
      var t2, _this = this,
        t1 = _this._iterable,
        $length = t1.length;
      if (_this.__interceptors$_length !== $length)
        throw H.wrapException(H.throwConcurrentModificationError(t1));
      t2 = _this._index;
      if (t2 >= $length) {
        _this._current = null;
        return false;
      }
      _this._current = t1[t2];
      _this._index = t2 + 1;
      return true;
    }
  };
  J.JSNumber.prototype = {
    toString$0: function(receiver) {
      if (receiver === 0 && 1 / receiver < 0)
        return "-0.0";
      else
        return "" + receiver;
    },
    get$hashCode: function(receiver) {
      var absolute, floorLog2, factor, scaled,
        intValue = receiver | 0;
      if (receiver === intValue)
        return 536870911 & intValue;
      absolute = Math.abs(receiver);
      floorLog2 = Math.log(absolute) / 0.6931471805599453 | 0;
      factor = Math.pow(2, floorLog2);
      scaled = absolute < 1 ? absolute / factor : factor / absolute;
      return 536870911 & ((scaled * 9007199254740992 | 0) + (scaled * 3542243181176521 | 0)) * 599197 + floorLog2 * 1259;
    },
    _shrOtherPositive$1: function(receiver, other) {
      var t1;
      if (receiver > 0)
        t1 = this._shrBothPositive$1(receiver, other);
      else {
        t1 = other > 31 ? 31 : other;
        t1 = receiver >> t1 >>> 0;
      }
      return t1;
    },
    _shrBothPositive$1: function(receiver, other) {
      return other > 31 ? 0 : receiver >>> other;
    },
    $isnum: 1
  };
  J.JSInt.prototype = {$isint: 1};
  J.JSDouble.prototype = {};
  J.JSString.prototype = {
    $add: function(receiver, other) {
      if (typeof other != "string")
        throw H.wrapException(P.ArgumentError$value(other, null, null));
      return receiver + other;
    },
    toString$0: function(receiver) {
      return receiver;
    },
    get$hashCode: function(receiver) {
      var t1, hash, i;
      for (t1 = receiver.length, hash = 0, i = 0; i < t1; ++i) {
        hash = 536870911 & hash + receiver.charCodeAt(i);
        hash = 536870911 & hash + ((524287 & hash) << 10);
        hash ^= hash >> 6;
      }
      hash = 536870911 & hash + ((67108863 & hash) << 3);
      hash ^= hash >> 11;
      return 536870911 & hash + ((16383 & hash) << 15);
    },
    get$length: function(receiver) {
      return receiver.length;
    },
    $isString: 1
  };
  H.EfficientLengthIterable.prototype = {};
  H.ListIterator.prototype = {
    get$current: function(_) {
      var cur = this.__internal$_current;
      return cur;
    },
    moveNext$0: function() {
      var t3, _this = this,
        t1 = _this.__internal$_iterable,
        t2 = J.getInterceptor$asx(t1),
        $length = t2.get$length(t1);
      if (_this.__internal$_length !== $length)
        throw H.wrapException(P.ConcurrentModificationError$(t1));
      t3 = _this.__internal$_index;
      if (t3 >= $length) {
        _this.__internal$_current = null;
        return false;
      }
      _this.__internal$_current = t2.elementAt$1(t1, t3);
      ++_this.__internal$_index;
      return true;
    }
  };
  H.FixedLengthListMixin.prototype = {};
  H.Symbol.prototype = {
    get$hashCode: function(_) {
      var hash = this._hashCode;
      if (hash != null)
        return hash;
      hash = 536870911 & 664597 * J.get$hashCode$(this.__internal$_name);
      this._hashCode = hash;
      return hash;
    },
    toString$0: function(_) {
      return 'Symbol("' + H.S(this.__internal$_name) + '")';
    },
    $eq: function(_, other) {
      if (other == null)
        return false;
      return other instanceof H.Symbol && this.__internal$_name == other.__internal$_name;
    },
    $isSymbol0: 1
  };
  H.ConstantMapView.prototype = {};
  H.ConstantMap.prototype = {
    toString$0: function(_) {
      return P.MapBase_mapToString(this);
    }
  };
  H.ConstantStringMap.prototype = {
    get$length: function(_) {
      return this._length;
    },
    _fetch$1: function(key) {
      return this._jsObject[key];
    },
    forEach$1: function(_, f) {
      var t1, i, key,
        keys = this._keys;
      for (t1 = keys.length, i = 0; i < t1; ++i) {
        key = keys[i];
        f.call$2(key, this._fetch$1(key));
      }
    }
  };
  H.JSInvocationMirror.prototype = {
    get$memberName: function() {
      var t1 = this.__js_helper$_memberName;
      return t1;
    },
    get$positionalArguments: function() {
      var t1, argumentCount, list, index, _this = this;
      if (_this.__js_helper$_kind === 1)
        return C.List_empty;
      t1 = _this._arguments;
      argumentCount = t1.length - _this._namedArgumentNames.length - _this._typeArgumentCount;
      if (argumentCount === 0)
        return C.List_empty;
      list = [];
      for (index = 0; index < argumentCount; ++index)
        list.push(t1[index]);
      list.fixed$length = Array;
      list.immutable$list = Array;
      return list;
    },
    get$namedArguments: function() {
      var t1, namedArgumentCount, t2, namedArgumentsStartIndex, map, i, _this = this;
      if (_this.__js_helper$_kind !== 0)
        return C.Map_empty;
      t1 = _this._namedArgumentNames;
      namedArgumentCount = t1.length;
      t2 = _this._arguments;
      namedArgumentsStartIndex = t2.length - namedArgumentCount - _this._typeArgumentCount;
      if (namedArgumentCount === 0)
        return C.Map_empty;
      map = new H.JsLinkedHashMap(type$.JsLinkedHashMap_Symbol_dynamic);
      for (i = 0; i < namedArgumentCount; ++i)
        map.$indexSet(0, new H.Symbol(t1[i]), t2[namedArgumentsStartIndex + i]);
      return new H.ConstantMapView(map, type$.ConstantMapView_Symbol_dynamic);
    }
  };
  H.Primitives_functionNoSuchMethod_closure.prototype = {
    call$2: function($name, argument) {
      var t1 = this._box_0;
      t1.names = t1.names + "$" + H.S($name);
      this.namedArgumentList.push($name);
      this.$arguments.push(argument);
      ++t1.argumentCount;
    },
    $signature: 8
  };
  H.TypeErrorDecoder.prototype = {
    matchTypeError$1: function(message) {
      var result, t1, _this = this,
        match = new RegExp(_this._pattern).exec(message);
      if (match == null)
        return null;
      result = Object.create(null);
      t1 = _this._arguments;
      if (t1 !== -1)
        result.arguments = match[t1 + 1];
      t1 = _this._argumentsExpr;
      if (t1 !== -1)
        result.argumentsExpr = match[t1 + 1];
      t1 = _this._expr;
      if (t1 !== -1)
        result.expr = match[t1 + 1];
      t1 = _this._method;
      if (t1 !== -1)
        result.method = match[t1 + 1];
      t1 = _this._receiver;
      if (t1 !== -1)
        result.receiver = match[t1 + 1];
      return result;
    }
  };
  H.NullError.prototype = {
    toString$0: function(_) {
      var t1 = this._method;
      if (t1 == null)
        return "NoSuchMethodError: " + H.S(this.__js_helper$_message);
      return "NoSuchMethodError: method not found: '" + t1 + "' on null";
    }
  };
  H.JsNoSuchMethodError.prototype = {
    toString$0: function(_) {
      var t2, _this = this,
        _s38_ = "NoSuchMethodError: method not found: '",
        t1 = _this._method;
      if (t1 == null)
        return "NoSuchMethodError: " + H.S(_this.__js_helper$_message);
      t2 = _this._receiver;
      if (t2 == null)
        return _s38_ + t1 + "' (" + H.S(_this.__js_helper$_message) + ")";
      return _s38_ + t1 + "' on '" + t2 + "' (" + H.S(_this.__js_helper$_message) + ")";
    }
  };
  H.UnknownJsTypeError.prototype = {
    toString$0: function(_) {
      var t1 = this.__js_helper$_message;
      return t1.length === 0 ? "Error" : "Error: " + t1;
    }
  };
  H.NullThrownFromJavaScriptException.prototype = {
    toString$0: function(_) {
      return "Throw of null ('" + (this._irritant === null ? "null" : "undefined") + "' from JavaScript)";
    }
  };
  H.ExceptionAndStackTrace.prototype = {};
  H._StackTrace.prototype = {
    toString$0: function(_) {
      var trace,
        t1 = this._trace;
      if (t1 != null)
        return t1;
      t1 = this._exception;
      trace = t1 !== null && typeof t1 === "object" ? t1.stack : null;
      return this._trace = trace == null ? "" : trace;
    },
    $isStackTrace: 1
  };
  H.Closure.prototype = {
    toString$0: function(_) {
      var $constructor = this.constructor,
        $name = $constructor == null ? null : $constructor.name;
      return "Closure '" + H.unminifyOrTag($name == null ? "unknown" : $name) + "'";
    },
    $isFunction: 1,
    get$$call: function() {
      return this;
    },
    "call*": "call$1",
    $requiredArgCount: 1,
    $defaultValues: null
  };
  H.TearOffClosure.prototype = {};
  H.StaticClosure.prototype = {
    toString$0: function(_) {
      var $name = this.$static_name;
      if ($name == null)
        return "Closure of unknown static method";
      return "Closure '" + H.unminifyOrTag($name) + "'";
    }
  };
  H.BoundClosure.prototype = {
    $eq: function(_, other) {
      var _this = this;
      if (other == null)
        return false;
      if (_this === other)
        return true;
      if (!(other instanceof H.BoundClosure))
        return false;
      return _this._self === other._self && _this._target === other._target && _this._receiver === other._receiver;
    },
    get$hashCode: function(_) {
      var receiverHashCode,
        t1 = this._receiver;
      if (t1 == null)
        receiverHashCode = H.Primitives_objectHashCode(this._self);
      else
        receiverHashCode = typeof t1 !== "object" ? J.get$hashCode$(t1) : H.Primitives_objectHashCode(t1);
      return (receiverHashCode ^ H.Primitives_objectHashCode(this._target)) >>> 0;
    },
    toString$0: function(_) {
      var receiver = this._receiver;
      if (receiver == null)
        receiver = this._self;
      return "Closure '" + H.S(this._name) + "' of " + ("Instance of '" + H.S(H.Primitives_objectTypeName(receiver)) + "'");
    }
  };
  H.RuntimeError.prototype = {
    toString$0: function(_) {
      return "RuntimeError: " + this.message;
    }
  };
  H._Required.prototype = {};
  H.JsLinkedHashMap.prototype = {
    get$length: function(_) {
      return this._length;
    },
    get$isEmpty: function(_) {
      return this._length === 0;
    },
    get$isNotEmpty: function(_) {
      return !this.get$isEmpty(this);
    },
    get$keys: function(_) {
      return new H.LinkedHashMapKeyIterable(this);
    },
    containsKey$1: function(_, key) {
      var strings, t1;
      if (typeof key == "string") {
        strings = this._strings;
        if (strings == null)
          return false;
        return this._containsTableEntry$2(strings, key);
      } else {
        t1 = this.internalContainsKey$1(key);
        return t1;
      }
    },
    internalContainsKey$1: function(key) {
      var _this = this,
        rest = _this.__js_helper$_rest;
      if (rest == null)
        return false;
      return _this.internalFindBucketIndex$2(_this._getTableBucket$2(rest, _this.internalComputeHashCode$1(key)), key) >= 0;
    },
    $index: function(_, key) {
      var strings, cell, t1, nums, _this = this, _null = null;
      if (typeof key == "string") {
        strings = _this._strings;
        if (strings == null)
          return _null;
        cell = _this._getTableCell$2(strings, key);
        t1 = cell == null ? _null : cell.hashMapCellValue;
        return t1;
      } else if (typeof key == "number" && (key & 0x3ffffff) === key) {
        nums = _this._nums;
        if (nums == null)
          return _null;
        cell = _this._getTableCell$2(nums, key);
        t1 = cell == null ? _null : cell.hashMapCellValue;
        return t1;
      } else
        return _this.internalGet$1(key);
    },
    internalGet$1: function(key) {
      var bucket, index, _this = this,
        rest = _this.__js_helper$_rest;
      if (rest == null)
        return null;
      bucket = _this._getTableBucket$2(rest, _this.internalComputeHashCode$1(key));
      index = _this.internalFindBucketIndex$2(bucket, key);
      if (index < 0)
        return null;
      return bucket[index].hashMapCellValue;
    },
    $indexSet: function(_, key, value) {
      var strings, nums, _this = this;
      if (typeof key == "string") {
        strings = _this._strings;
        _this._addHashTableEntry$3(strings == null ? _this._strings = _this._newHashTable$0() : strings, key, value);
      } else if (typeof key == "number" && (key & 0x3ffffff) === key) {
        nums = _this._nums;
        _this._addHashTableEntry$3(nums == null ? _this._nums = _this._newHashTable$0() : nums, key, value);
      } else
        _this.internalSet$2(key, value);
    },
    internalSet$2: function(key, value) {
      var hash, bucket, index, _this = this,
        rest = _this.__js_helper$_rest;
      if (rest == null)
        rest = _this.__js_helper$_rest = _this._newHashTable$0();
      hash = _this.internalComputeHashCode$1(key);
      bucket = _this._getTableBucket$2(rest, hash);
      if (bucket == null)
        _this._setTableEntry$3(rest, hash, [_this._newLinkedCell$2(key, value)]);
      else {
        index = _this.internalFindBucketIndex$2(bucket, key);
        if (index >= 0)
          bucket[index].hashMapCellValue = value;
        else
          bucket.push(_this._newLinkedCell$2(key, value));
      }
    },
    forEach$1: function(_, action) {
      var _this = this,
        cell = _this._first,
        modifications = _this._modifications;
      for (; cell != null;) {
        action.call$2(cell.hashMapCellKey, cell.hashMapCellValue);
        if (modifications !== _this._modifications)
          throw H.wrapException(P.ConcurrentModificationError$(_this));
        cell = cell._next;
      }
    },
    _addHashTableEntry$3: function(table, key, value) {
      var cell = this._getTableCell$2(table, key);
      if (cell == null)
        this._setTableEntry$3(table, key, this._newLinkedCell$2(key, value));
      else
        cell.hashMapCellValue = value;
    },
    _newLinkedCell$2: function(key, value) {
      var _this = this,
        cell = new H.LinkedHashMapCell(key, value);
      if (_this._first == null)
        _this._first = _this._last = cell;
      else
        _this._last = _this._last._next = cell;
      ++_this._length;
      _this._modifications = _this._modifications + 1 & 67108863;
      return cell;
    },
    internalComputeHashCode$1: function(key) {
      return J.get$hashCode$(key) & 0x3ffffff;
    },
    internalFindBucketIndex$2: function(bucket, key) {
      var $length, i;
      if (bucket == null)
        return -1;
      $length = bucket.length;
      for (i = 0; i < $length; ++i)
        if (J.$eq$(bucket[i].hashMapCellKey, key))
          return i;
      return -1;
    },
    toString$0: function(_) {
      return P.MapBase_mapToString(this);
    },
    _getTableCell$2: function(table, key) {
      return table[key];
    },
    _getTableBucket$2: function(table, key) {
      return table[key];
    },
    _setTableEntry$3: function(table, key, value) {
      table[key] = value;
    },
    _deleteTableEntry$2: function(table, key) {
      delete table[key];
    },
    _containsTableEntry$2: function(table, key) {
      return this._getTableCell$2(table, key) != null;
    },
    _newHashTable$0: function() {
      var _s20_ = "<non-identifier-key>",
        table = Object.create(null);
      this._setTableEntry$3(table, _s20_, table);
      this._deleteTableEntry$2(table, _s20_);
      return table;
    }
  };
  H.LinkedHashMapCell.prototype = {};
  H.LinkedHashMapKeyIterable.prototype = {
    get$length: function(_) {
      return this._map._length;
    },
    get$iterator: function(_) {
      var t1 = this._map,
        t2 = new H.LinkedHashMapKeyIterator(t1, t1._modifications);
      t2._cell = t1._first;
      return t2;
    }
  };
  H.LinkedHashMapKeyIterator.prototype = {
    get$current: function(_) {
      return this.__js_helper$_current;
    },
    moveNext$0: function() {
      var cell, _this = this,
        t1 = _this._map;
      if (_this._modifications !== t1._modifications)
        throw H.wrapException(P.ConcurrentModificationError$(t1));
      cell = _this._cell;
      if (cell == null) {
        _this.__js_helper$_current = null;
        return false;
      } else {
        _this.__js_helper$_current = cell.hashMapCellKey;
        _this._cell = cell._next;
        return true;
      }
    }
  };
  H.initHooks_closure.prototype = {
    call$1: function(o) {
      return this.getTag(o);
    },
    $signature: 4
  };
  H.initHooks_closure0.prototype = {
    call$2: function(o, tag) {
      return this.getUnknownTag(o, tag);
    },
    $signature: 9
  };
  H.initHooks_closure1.prototype = {
    call$1: function(tag) {
      return this.prototypeForTag(tag);
    },
    $signature: 10
  };
  H.NativeTypedData.prototype = {};
  H.NativeTypedArray.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $isJavaScriptIndexingBehavior: 1
  };
  H.NativeTypedArrayOfDouble.prototype = {
    $index: function(receiver, index) {
      H._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    }
  };
  H.NativeTypedArrayOfInt.prototype = {};
  H.NativeInt16List.prototype = {
    $index: function(receiver, index) {
      H._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    }
  };
  H.NativeInt32List.prototype = {
    $index: function(receiver, index) {
      H._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    }
  };
  H.NativeInt8List.prototype = {
    $index: function(receiver, index) {
      H._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    }
  };
  H.NativeUint16List.prototype = {
    $index: function(receiver, index) {
      H._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    }
  };
  H.NativeUint32List.prototype = {
    $index: function(receiver, index) {
      H._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    }
  };
  H.NativeUint8ClampedList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      H._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    }
  };
  H.NativeUint8List.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      H._checkValidIndex(index, receiver, receiver.length);
      return receiver[index];
    }
  };
  H._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin.prototype = {};
  H._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin_FixedLengthListMixin.prototype = {};
  H._NativeTypedArrayOfInt_NativeTypedArray_ListMixin.prototype = {};
  H._NativeTypedArrayOfInt_NativeTypedArray_ListMixin_FixedLengthListMixin.prototype = {};
  H.Rti.prototype = {
    _eval$1: function(recipe) {
      return H._Universe_evalInEnvironment(init.typeUniverse, this, recipe);
    },
    _bind$1: function(typeOrTuple) {
      return H._Universe_bind(init.typeUniverse, this, typeOrTuple);
    }
  };
  H._FunctionParameters.prototype = {};
  H._Error.prototype = {
    toString$0: function(_) {
      return this._message;
    }
  };
  H._TypeError.prototype = {};
  P._AsyncRun__initializeScheduleImmediate_internalCallback.prototype = {
    call$1: function(_) {
      var t1 = this._box_0,
        f = t1.storedCallback;
      t1.storedCallback = null;
      f.call$0();
    },
    $signature: 5
  };
  P._AsyncRun__initializeScheduleImmediate_closure.prototype = {
    call$1: function(callback) {
      var t1, t2;
      this._box_0.storedCallback = callback;
      t1 = this.div;
      t2 = this.span;
      t1.firstChild ? t1.removeChild(t2) : t1.appendChild(t2);
    },
    $signature: 11
  };
  P._AsyncRun__scheduleImmediateJsOverride_internalCallback.prototype = {
    call$0: function() {
      this.callback.call$0();
    },
    "call*": "call$0",
    $requiredArgCount: 0,
    $signature: 0
  };
  P._AsyncRun__scheduleImmediateWithSetImmediate_internalCallback.prototype = {
    call$0: function() {
      this.callback.call$0();
    },
    "call*": "call$0",
    $requiredArgCount: 0,
    $signature: 0
  };
  P._TimerImpl.prototype = {
    _TimerImpl$2: function(milliseconds, callback) {
      if (self.setTimeout != null)
        self.setTimeout(H.convertDartClosureToJS(new P._TimerImpl_internalCallback(this, callback), 0), milliseconds);
      else
        throw H.wrapException(P.UnsupportedError$("`setTimeout()` not found."));
    }
  };
  P._TimerImpl_internalCallback.prototype = {
    call$0: function() {
      this.callback.call$0();
    },
    "call*": "call$0",
    $requiredArgCount: 0,
    $signature: 1
  };
  P._AsyncAwaitCompleter.prototype = {
    complete$1: function(_, value) {
      var t1, _this = this;
      if (!_this.isSync)
        _this._future._asyncComplete$1(value);
      else {
        t1 = _this._future;
        if (_this.$ti._eval$1("Future<1>")._is(value))
          t1._chainFuture$1(value);
        else
          t1._completeWithValue$1(value);
      }
    },
    completeError$2: function(e, st) {
      var t1;
      if (st == null)
        st = P.AsyncError_defaultStackTrace(e);
      t1 = this._future;
      if (this.isSync)
        t1._completeError$2(e, st);
      else
        t1._asyncCompleteError$2(e, st);
    }
  };
  P._awaitOnObject_closure.prototype = {
    call$1: function(result) {
      return this.bodyFunction.call$2(0, result);
    },
    $signature: 6
  };
  P._awaitOnObject_closure0.prototype = {
    call$2: function(error, stackTrace) {
      this.bodyFunction.call$2(1, new H.ExceptionAndStackTrace(error, stackTrace));
    },
    "call*": "call$2",
    $requiredArgCount: 2,
    $signature: 12
  };
  P._wrapJsFunctionForAsync_closure.prototype = {
    call$2: function(errorCode, result) {
      this.$protected(errorCode, result);
    },
    $signature: 13
  };
  P._Completer.prototype = {
    completeError$2: function(error, stackTrace) {
      var t1;
      P.ArgumentError_checkNotNull(error, "error");
      t1 = this.future;
      if (t1._state !== 0)
        throw H.wrapException(P.StateError$("Future already completed"));
      if (stackTrace == null)
        stackTrace = P.AsyncError_defaultStackTrace(error);
      t1._asyncCompleteError$2(error, stackTrace);
    }
  };
  P._AsyncCompleter.prototype = {
    complete$1: function(_, value) {
      var t1 = this.future;
      if (t1._state !== 0)
        throw H.wrapException(P.StateError$("Future already completed"));
      t1._asyncComplete$1(value);
    },
    complete$0: function($receiver) {
      return this.complete$1($receiver, null);
    }
  };
  P._FutureListener.prototype = {
    matchesErrorTest$1: function(asyncError) {
      if ((this.state & 15) !== 6)
        return true;
      return this.result._zone.runUnary$2(this.callback, asyncError.error);
    },
    handleError$1: function(asyncError) {
      var errorCallback = this.errorCallback,
        t1 = this.result._zone;
      if (type$.dynamic_Function_Object_StackTrace._is(errorCallback))
        return t1.runBinary$3(errorCallback, asyncError.error, asyncError.stackTrace);
      else
        return t1.runUnary$2(errorCallback, asyncError.error);
    }
  };
  P._Future.prototype = {
    then$1$2$onError: function(f, onError, $R) {
      var result,
        currentZone = $.Zone__current;
      if (currentZone !== C.C__RootZone)
        onError = onError != null ? P._registerErrorHandler(onError, currentZone) : onError;
      result = new P._Future($.Zone__current, $R._eval$1("_Future<0>"));
      this._addListener$1(new P._FutureListener(result, onError == null ? 1 : 3, f, onError));
      return result;
    },
    then$1$1: function(f, $R) {
      return this.then$1$2$onError(f, null, $R);
    },
    _thenAwait$1$2: function(f, onError, $E) {
      var result = new P._Future($.Zone__current, $E._eval$1("_Future<0>"));
      this._addListener$1(new P._FutureListener(result, 19, f, onError));
      return result;
    },
    _addListener$1: function(listener) {
      var t2, _this = this,
        t1 = _this._state;
      if (t1 <= 1) {
        listener._nextListener = _this._resultOrListeners;
        _this._resultOrListeners = listener;
      } else {
        if (t1 === 2) {
          t1 = _this._resultOrListeners;
          t2 = t1._state;
          if (t2 < 4) {
            t1._addListener$1(listener);
            return;
          }
          _this._state = t2;
          _this._resultOrListeners = t1._resultOrListeners;
        }
        P._rootScheduleMicrotask(null, null, _this._zone, new P._Future__addListener_closure(_this, listener));
      }
    },
    _prependListeners$1: function(listeners) {
      var t1, existingListeners, next, cursor, next0, t2, _this = this, _box_0 = {};
      _box_0.listeners = listeners;
      if (listeners == null)
        return;
      t1 = _this._state;
      if (t1 <= 1) {
        existingListeners = _this._resultOrListeners;
        _this._resultOrListeners = listeners;
        if (existingListeners != null) {
          next = listeners._nextListener;
          for (cursor = listeners; next != null; cursor = next, next = next0)
            next0 = next._nextListener;
          cursor._nextListener = existingListeners;
        }
      } else {
        if (t1 === 2) {
          t1 = _this._resultOrListeners;
          t2 = t1._state;
          if (t2 < 4) {
            t1._prependListeners$1(listeners);
            return;
          }
          _this._state = t2;
          _this._resultOrListeners = t1._resultOrListeners;
        }
        _box_0.listeners = _this._reverseListeners$1(listeners);
        P._rootScheduleMicrotask(null, null, _this._zone, new P._Future__prependListeners_closure(_box_0, _this));
      }
    },
    _removeListeners$0: function() {
      var current = this._resultOrListeners;
      this._resultOrListeners = null;
      return this._reverseListeners$1(current);
    },
    _reverseListeners$1: function(listeners) {
      var current, prev, next;
      for (current = listeners, prev = null; current != null; prev = current, current = next) {
        next = current._nextListener;
        current._nextListener = prev;
      }
      return prev;
    },
    _complete$1: function(value) {
      var listeners, _this = this,
        t1 = _this.$ti;
      if (t1._eval$1("Future<1>")._is(value))
        if (t1._is(value))
          P._Future__chainCoreFuture(value, _this);
        else
          P._Future__chainForeignFuture(value, _this);
      else {
        listeners = _this._removeListeners$0();
        _this._state = 4;
        _this._resultOrListeners = value;
        P._Future__propagateToListeners(_this, listeners);
      }
    },
    _completeWithValue$1: function(value) {
      var _this = this,
        listeners = _this._removeListeners$0();
      _this._state = 4;
      _this._resultOrListeners = value;
      P._Future__propagateToListeners(_this, listeners);
    },
    _completeError$2: function(error, stackTrace) {
      var _this = this,
        listeners = _this._removeListeners$0(),
        t1 = P.AsyncError$(error, stackTrace);
      _this._state = 8;
      _this._resultOrListeners = t1;
      P._Future__propagateToListeners(_this, listeners);
    },
    _asyncComplete$1: function(value) {
      if (this.$ti._eval$1("Future<1>")._is(value)) {
        this._chainFuture$1(value);
        return;
      }
      this._asyncCompleteWithValue$1(value);
    },
    _asyncCompleteWithValue$1: function(value) {
      this._state = 1;
      P._rootScheduleMicrotask(null, null, this._zone, new P._Future__asyncCompleteWithValue_closure(this, value));
    },
    _chainFuture$1: function(value) {
      var _this = this;
      if (_this.$ti._is(value)) {
        if (value._state === 8) {
          _this._state = 1;
          P._rootScheduleMicrotask(null, null, _this._zone, new P._Future__chainFuture_closure(_this, value));
        } else
          P._Future__chainCoreFuture(value, _this);
        return;
      }
      P._Future__chainForeignFuture(value, _this);
    },
    _asyncCompleteError$2: function(error, stackTrace) {
      this._state = 1;
      P._rootScheduleMicrotask(null, null, this._zone, new P._Future__asyncCompleteError_closure(this, error, stackTrace));
    },
    $isFuture: 1
  };
  P._Future__addListener_closure.prototype = {
    call$0: function() {
      P._Future__propagateToListeners(this.$this, this.listener);
    },
    $signature: 0
  };
  P._Future__prependListeners_closure.prototype = {
    call$0: function() {
      P._Future__propagateToListeners(this.$this, this._box_0.listeners);
    },
    $signature: 0
  };
  P._Future__chainForeignFuture_closure.prototype = {
    call$1: function(value) {
      var t1 = this.target;
      t1._state = 0;
      t1._complete$1(value);
    },
    $signature: 5
  };
  P._Future__chainForeignFuture_closure0.prototype = {
    call$2: function(error, stackTrace) {
      this.target._completeError$2(error, stackTrace);
    },
    "call*": "call$2",
    $requiredArgCount: 2,
    $signature: 15
  };
  P._Future__chainForeignFuture_closure1.prototype = {
    call$0: function() {
      this.target._completeError$2(this.e, this.s);
    },
    $signature: 0
  };
  P._Future__asyncCompleteWithValue_closure.prototype = {
    call$0: function() {
      this.$this._completeWithValue$1(this.value);
    },
    $signature: 0
  };
  P._Future__chainFuture_closure.prototype = {
    call$0: function() {
      P._Future__chainCoreFuture(this.value, this.$this);
    },
    $signature: 0
  };
  P._Future__asyncCompleteError_closure.prototype = {
    call$0: function() {
      this.$this._completeError$2(this.error, this.stackTrace);
    },
    $signature: 0
  };
  P._Future__propagateToListeners_handleWhenCompleteCallback.prototype = {
    call$0: function() {
      var e, s, t1, exception, t2, originalSource, _this = this, completeResult = null;
      try {
        t1 = _this._box_0.listener;
        completeResult = t1.result._zone.run$1(t1.callback);
      } catch (exception) {
        e = H.unwrapException(exception);
        s = H.getTraceFromException(exception);
        if (_this.hasError) {
          t1 = _this._box_1.source._resultOrListeners.error;
          t2 = e;
          t2 = t1 == null ? t2 == null : t1 === t2;
          t1 = t2;
        } else
          t1 = false;
        t2 = _this._box_0;
        if (t1)
          t2.listenerValueOrError = _this._box_1.source._resultOrListeners;
        else
          t2.listenerValueOrError = P.AsyncError$(e, s);
        t2.listenerHasError = true;
        return;
      }
      if (completeResult instanceof P._Future && completeResult._state >= 4) {
        if (completeResult._state === 8) {
          t1 = _this._box_0;
          t1.listenerValueOrError = completeResult._resultOrListeners;
          t1.listenerHasError = true;
        }
        return;
      }
      if (type$.Future_dynamic._is(completeResult)) {
        originalSource = _this._box_1.source;
        t1 = _this._box_0;
        t1.listenerValueOrError = completeResult.then$1$1(new P._Future__propagateToListeners_handleWhenCompleteCallback_closure(originalSource), type$.dynamic);
        t1.listenerHasError = false;
      }
    },
    $signature: 1
  };
  P._Future__propagateToListeners_handleWhenCompleteCallback_closure.prototype = {
    call$1: function(_) {
      return this.originalSource;
    },
    $signature: 16
  };
  P._Future__propagateToListeners_handleValueCallback.prototype = {
    call$0: function() {
      var e, s, t1, t2, exception;
      try {
        t1 = this._box_0;
        t2 = t1.listener;
        t1.listenerValueOrError = t2.result._zone.runUnary$2(t2.callback, this.sourceResult);
      } catch (exception) {
        e = H.unwrapException(exception);
        s = H.getTraceFromException(exception);
        t1 = this._box_0;
        t1.listenerValueOrError = P.AsyncError$(e, s);
        t1.listenerHasError = true;
      }
    },
    $signature: 1
  };
  P._Future__propagateToListeners_handleError.prototype = {
    call$0: function() {
      var asyncError, e, s, t1, exception, t2, t3, t4, _this = this;
      try {
        asyncError = _this._box_1.source._resultOrListeners;
        t1 = _this._box_0;
        if (t1.listener.matchesErrorTest$1(asyncError) && t1.listener.errorCallback != null) {
          t1.listenerValueOrError = t1.listener.handleError$1(asyncError);
          t1.listenerHasError = false;
        }
      } catch (exception) {
        e = H.unwrapException(exception);
        s = H.getTraceFromException(exception);
        t1 = _this._box_1.source._resultOrListeners;
        t2 = t1.error;
        t3 = e;
        t4 = _this._box_0;
        if (t2 == null ? t3 == null : t2 === t3)
          t4.listenerValueOrError = t1;
        else
          t4.listenerValueOrError = P.AsyncError$(e, s);
        t4.listenerHasError = true;
      }
    },
    $signature: 1
  };
  P._AsyncCallbackEntry.prototype = {};
  P.Stream.prototype = {
    get$length: function(_) {
      var t1 = {},
        future = new P._Future($.Zone__current, type$._Future_int);
      t1.count = 0;
      this.listen$4$cancelOnError$onDone$onError(new P.Stream_length_closure(t1, this), true, new P.Stream_length_closure0(t1, future), future.get$_completeError());
      return future;
    }
  };
  P.Stream_length_closure.prototype = {
    call$1: function(_) {
      ++this._box_0.count;
    },
    $signature: function() {
      return this.$this.$ti._eval$1("Null(1)");
    }
  };
  P.Stream_length_closure0.prototype = {
    call$0: function() {
      this.future._complete$1(this._box_0.count);
    },
    $signature: 0
  };
  P._StreamController.prototype = {
    get$_pendingEvents: function() {
      if ((this._state & 8) === 0)
        return this._varData;
      return this._varData.get$varData();
    },
    _ensurePendingEvents$0: function() {
      var events, _this = this;
      if ((_this._state & 8) === 0) {
        events = _this._varData;
        return events == null ? _this._varData = new P._StreamImplEvents() : events;
      }
      events = _this._varData.get$varData();
      return events;
    },
    get$_subscription: function() {
      var varData = this._varData;
      return (this._state & 8) !== 0 ? varData.get$varData() : varData;
    },
    _badEventState$0: function() {
      if ((this._state & 4) !== 0)
        return new P.StateError("Cannot add event after closing");
      return new P.StateError("Cannot add event while adding a stream");
    },
    _subscribe$4: function(onData, onError, onDone, cancelOnError) {
      var t1, t2, t3, subscription, pendingEvents, addState, _this = this;
      if ((_this._state & 3) !== 0)
        throw H.wrapException(P.StateError$("Stream has already been listened to."));
      t1 = $.Zone__current;
      t2 = cancelOnError ? 1 : 0;
      t3 = P._BufferingStreamSubscription__registerDataHandler(t1, onData);
      P._BufferingStreamSubscription__registerErrorHandler(t1, onError);
      subscription = new P._ControllerSubscription(_this, t3, t1, t2);
      pendingEvents = _this.get$_pendingEvents();
      t1 = _this._state |= 1;
      if ((t1 & 8) !== 0) {
        addState = _this._varData;
        addState.set$varData(subscription);
        addState.resume$0(0);
      } else
        _this._varData = subscription;
      subscription._setPendingEvents$1(pendingEvents);
      t1 = subscription._state;
      subscription._state = t1 | 32;
      new P._StreamController__subscribe_closure(_this).call$0();
      subscription._state &= 4294967263;
      subscription._checkState$1((t1 & 4) !== 0);
      return subscription;
    }
  };
  P._StreamController__subscribe_closure.prototype = {
    call$0: function() {
      P._runGuarded(this.$this.onListen);
    },
    $signature: 0
  };
  P._AsyncStreamControllerDispatch.prototype = {
    _sendData$1: function(data) {
      this.get$_subscription()._addPending$1(new P._DelayedData(data));
    }
  };
  P._AsyncStreamController.prototype = {};
  P._ControllerStream.prototype = {
    get$hashCode: function(_) {
      return (H.Primitives_objectHashCode(this._async$_controller) ^ 892482866) >>> 0;
    },
    $eq: function(_, other) {
      if (other == null)
        return false;
      if (this === other)
        return true;
      return other instanceof P._ControllerStream && other._async$_controller === this._async$_controller;
    }
  };
  P._ControllerSubscription.prototype = {
    _onPause$0: function() {
      var t1 = this._async$_controller;
      if ((t1._state & 8) !== 0)
        t1._varData.pause$0(0);
      P._runGuarded(t1.onPause);
    },
    _onResume$0: function() {
      var t1 = this._async$_controller;
      if ((t1._state & 8) !== 0)
        t1._varData.resume$0(0);
      P._runGuarded(t1.onResume);
    }
  };
  P._BufferingStreamSubscription.prototype = {
    _setPendingEvents$1: function(pendingEvents) {
      if (pendingEvents == null)
        return;
      this._pending = pendingEvents;
      if (pendingEvents.lastPendingEvent != null) {
        this._state |= 64;
        pendingEvents.schedule$1(this);
      }
    },
    _onPause$0: function() {
    },
    _onResume$0: function() {
    },
    _addPending$1: function($event) {
      var t1, _this = this,
        pending = _this._pending;
      if (pending == null)
        pending = new P._StreamImplEvents();
      _this._pending = pending;
      pending.add$1(0, $event);
      t1 = _this._state;
      if ((t1 & 64) === 0) {
        t1 |= 64;
        _this._state = t1;
        if (t1 < 128)
          pending.schedule$1(_this);
      }
    },
    _sendData$1: function(data) {
      var _this = this,
        t1 = _this._state;
      _this._state = t1 | 32;
      _this._zone.runUnaryGuarded$2(_this._onData, data);
      _this._state &= 4294967263;
      _this._checkState$1((t1 & 4) !== 0);
    },
    _checkState$1: function(wasInputPaused) {
      var t2, isInputPaused, _this = this,
        t1 = _this._state;
      if ((t1 & 64) !== 0 && _this._pending.lastPendingEvent == null) {
        t1 = _this._state = t1 & 4294967231;
        if ((t1 & 4) !== 0)
          if (t1 < 128) {
            t2 = _this._pending;
            t2 = t2 == null ? null : t2.lastPendingEvent == null;
            t2 = t2 !== false;
          } else
            t2 = false;
        else
          t2 = false;
        if (t2) {
          t1 &= 4294967291;
          _this._state = t1;
        }
      }
      for (; true; wasInputPaused = isInputPaused) {
        if ((t1 & 8) !== 0) {
          _this._pending = null;
          return;
        }
        isInputPaused = (t1 & 4) !== 0;
        if (wasInputPaused === isInputPaused)
          break;
        _this._state = t1 ^ 32;
        if (isInputPaused)
          _this._onPause$0();
        else
          _this._onResume$0();
        t1 = _this._state &= 4294967263;
      }
      if ((t1 & 64) !== 0 && t1 < 128)
        _this._pending.schedule$1(_this);
    }
  };
  P._StreamImpl.prototype = {
    listen$4$cancelOnError$onDone$onError: function(onData, cancelOnError, onDone, onError) {
      return this._async$_controller._subscribe$4(onData, onError, onDone, cancelOnError === true);
    },
    listen$1: function(onData) {
      return this.listen$4$cancelOnError$onDone$onError(onData, null, null, null);
    }
  };
  P._DelayedEvent.prototype = {};
  P._DelayedData.prototype = {};
  P._PendingEvents.prototype = {
    schedule$1: function(dispatch) {
      var _this = this,
        t1 = _this._state;
      if (t1 === 1)
        return;
      if (t1 >= 1) {
        _this._state = 1;
        return;
      }
      P.scheduleMicrotask(new P._PendingEvents_schedule_closure(_this, dispatch));
      _this._state = 1;
    }
  };
  P._PendingEvents_schedule_closure.prototype = {
    call$0: function() {
      var $event, nextEvent,
        t1 = this.$this,
        oldState = t1._state;
      t1._state = 0;
      if (oldState === 3)
        return;
      $event = t1.firstPendingEvent;
      nextEvent = $event.next;
      t1.firstPendingEvent = nextEvent;
      if (nextEvent == null)
        t1.lastPendingEvent = null;
      this.dispatch._sendData$1($event.value);
    },
    $signature: 0
  };
  P._StreamImplEvents.prototype = {
    add$1: function(_, $event) {
      var _this = this,
        lastEvent = _this.lastPendingEvent;
      if (lastEvent == null)
        _this.firstPendingEvent = _this.lastPendingEvent = $event;
      else
        _this.lastPendingEvent = lastEvent.next = $event;
    }
  };
  P._StreamIterator.prototype = {};
  P.AsyncError.prototype = {
    toString$0: function(_) {
      return H.S(this.error);
    },
    $isError: 1,
    get$stackTrace: function() {
      return this.stackTrace;
    }
  };
  P._Zone.prototype = {};
  P._rootHandleUncaughtError_closure.prototype = {
    call$0: function() {
      var error = H.wrapException(this.error);
      error.stack = J.toString$0$(this.stackTrace);
      throw error;
    },
    $signature: 0
  };
  P._RootZone.prototype = {
    runGuarded$1: function(f) {
      var e, s, exception, _null = null;
      try {
        if (C.C__RootZone === $.Zone__current) {
          f.call$0();
          return;
        }
        P._rootRun(_null, _null, this, f);
      } catch (exception) {
        e = H.unwrapException(exception);
        s = H.getTraceFromException(exception);
        P._rootHandleUncaughtError(_null, _null, this, e, s);
      }
    },
    runUnaryGuarded$1$2: function(f, arg) {
      var e, s, exception, _null = null;
      try {
        if (C.C__RootZone === $.Zone__current) {
          f.call$1(arg);
          return;
        }
        P._rootRunUnary(_null, _null, this, f, arg);
      } catch (exception) {
        e = H.unwrapException(exception);
        s = H.getTraceFromException(exception);
        P._rootHandleUncaughtError(_null, _null, this, e, s);
      }
    },
    runUnaryGuarded$2: function(f, arg) {
      return this.runUnaryGuarded$1$2(f, arg, type$.dynamic);
    },
    bindCallback$1$1: function(f, $R) {
      return new P._RootZone_bindCallback_closure(this, f, $R);
    },
    bindCallbackGuarded$1: function(f) {
      return new P._RootZone_bindCallbackGuarded_closure(this, f);
    },
    run$1$1: function(f) {
      if ($.Zone__current === C.C__RootZone)
        return f.call$0();
      return P._rootRun(null, null, this, f);
    },
    run$1: function(f) {
      return this.run$1$1(f, type$.dynamic);
    },
    runUnary$2$2: function(f, arg) {
      if ($.Zone__current === C.C__RootZone)
        return f.call$1(arg);
      return P._rootRunUnary(null, null, this, f, arg);
    },
    runUnary$2: function(f, arg) {
      return this.runUnary$2$2(f, arg, type$.dynamic, type$.dynamic);
    },
    runBinary$3$3: function(f, arg1, arg2) {
      if ($.Zone__current === C.C__RootZone)
        return f.call$2(arg1, arg2);
      return P._rootRunBinary(null, null, this, f, arg1, arg2);
    },
    runBinary$3: function(f, arg1, arg2) {
      return this.runBinary$3$3(f, arg1, arg2, type$.dynamic, type$.dynamic, type$.dynamic);
    },
    registerBinaryCallback$3$1: function(f) {
      return f;
    },
    registerBinaryCallback$1: function(f) {
      return this.registerBinaryCallback$3$1(f, type$.dynamic, type$.dynamic, type$.dynamic);
    }
  };
  P._RootZone_bindCallback_closure.prototype = {
    call$0: function() {
      return this.$this.run$1(this.f);
    },
    $signature: function() {
      return this.R._eval$1("0()");
    }
  };
  P._RootZone_bindCallbackGuarded_closure.prototype = {
    call$0: function() {
      return this.$this.runGuarded$1(this.f);
    },
    $signature: 1
  };
  P.ListMixin.prototype = {
    get$iterator: function(receiver) {
      return new H.ListIterator(receiver, this.get$length(receiver));
    },
    elementAt$1: function(receiver, index) {
      return this.$index(receiver, index);
    },
    toString$0: function(receiver) {
      return P.IterableBase_iterableToFullString(receiver, "[", "]");
    }
  };
  P.MapBase.prototype = {};
  P.MapBase_mapToString_closure.prototype = {
    call$2: function(k, v) {
      var t2,
        t1 = this._box_0;
      if (!t1.first)
        this.result._contents += ", ";
      t1.first = false;
      t1 = this.result;
      t2 = t1._contents += H.S(k);
      t1._contents = t2 + ": ";
      t1._contents += H.S(v);
    },
    $signature: 17
  };
  P.MapMixin.prototype = {
    forEach$1: function(receiver, action) {
      var t1, key;
      for (t1 = J.get$iterator$ax(this.get$keys(receiver)); t1.moveNext$0();) {
        key = t1.get$current(t1);
        action.call$2(key, this.$index(receiver, key));
      }
    },
    get$length: function(receiver) {
      return J.get$length$asx(this.get$keys(receiver));
    },
    toString$0: function(receiver) {
      return P.MapBase_mapToString(receiver);
    }
  };
  P._UnmodifiableMapMixin.prototype = {};
  P.MapView.prototype = {
    forEach$1: function(_, action) {
      this._collection$_map.forEach$1(0, action);
    },
    get$length: function(_) {
      var t1 = this._collection$_map;
      return t1.get$length(t1);
    },
    toString$0: function(_) {
      return P.MapBase_mapToString(this._collection$_map);
    }
  };
  P.UnmodifiableMapView.prototype = {};
  P._UnmodifiableMapView_MapView__UnmodifiableMapMixin.prototype = {};
  P.NoSuchMethodError_toString_closure.prototype = {
    call$2: function(key, value) {
      var t3,
        t1 = this.sb,
        t2 = this._box_0;
      t1._contents += t2.comma;
      t3 = t1._contents += H.S(key.__internal$_name);
      t1._contents = t3 + ": ";
      t1._contents += P.Error_safeToString(value);
      t2.comma = ", ";
    },
    $signature: 18
  };
  P.Error.prototype = {
    get$stackTrace: function() {
      return H.getTraceFromException(this.$thrownJsError);
    }
  };
  P.AssertionError.prototype = {
    toString$0: function(_) {
      var t1 = this.message;
      if (t1 != null)
        return "Assertion failed: " + P.Error_safeToString(t1);
      return "Assertion failed";
    }
  };
  P.TypeError.prototype = {};
  P.NullThrownError.prototype = {
    toString$0: function(_) {
      return "Throw of null.";
    }
  };
  P.ArgumentError.prototype = {
    get$_errorName: function() {
      return "Invalid argument" + (!this._hasValue ? "(s)" : "");
    },
    get$_errorExplanation: function() {
      return "";
    },
    toString$0: function(_) {
      var explanation, errorValue, _this = this,
        $name = _this.name,
        nameString = $name == null ? "" : " (" + $name + ")",
        message = _this.message,
        messageString = message == null ? "" : ": " + message,
        prefix = _this.get$_errorName() + nameString + messageString;
      if (!_this._hasValue)
        return prefix;
      explanation = _this.get$_errorExplanation();
      errorValue = P.Error_safeToString(_this.invalidValue);
      return prefix + explanation + ": " + errorValue;
    }
  };
  P.RangeError.prototype = {
    get$_errorName: function() {
      return "RangeError";
    },
    get$_errorExplanation: function() {
      var explanation,
        start = this.start,
        end = this.end;
      if (start == null)
        explanation = end != null ? ": Not less than or equal to " + H.S(end) : "";
      else if (end == null)
        explanation = ": Not greater than or equal to " + H.S(start);
      else if (end > start)
        explanation = ": Not in inclusive range " + H.S(start) + ".." + H.S(end);
      else
        explanation = end < start ? ": Valid value range is empty" : ": Only valid value is " + H.S(start);
      return explanation;
    }
  };
  P.IndexError.prototype = {
    get$_errorName: function() {
      return "RangeError";
    },
    get$_errorExplanation: function() {
      if (this.invalidValue < 0)
        return ": index must not be negative";
      var t1 = this.length;
      if (t1 === 0)
        return ": no indices are valid";
      return ": index should be less than " + H.S(t1);
    },
    get$length: function(receiver) {
      return this.length;
    }
  };
  P.NoSuchMethodError.prototype = {
    toString$0: function(_) {
      var $arguments, t1, _i, t2, t3, argument, receiverText, actualParameters, _this = this, _box_0 = {},
        sb = new P.StringBuffer("");
      _box_0.comma = "";
      $arguments = _this._core$_arguments;
      for (t1 = $arguments.length, _i = 0, t2 = "", t3 = ""; _i < t1; ++_i, t3 = ", ") {
        argument = $arguments[_i];
        sb._contents = t2 + t3;
        t2 = sb._contents += P.Error_safeToString(argument);
        _box_0.comma = ", ";
      }
      _this._namedArguments.forEach$1(0, new P.NoSuchMethodError_toString_closure(_box_0, sb));
      receiverText = P.Error_safeToString(_this._core$_receiver);
      actualParameters = sb.toString$0(0);
      t1 = "NoSuchMethodError: method not found: '" + H.S(_this._memberName.__internal$_name) + "'\nReceiver: " + receiverText + "\nArguments: [" + actualParameters + "]";
      return t1;
    }
  };
  P.UnsupportedError.prototype = {
    toString$0: function(_) {
      return "Unsupported operation: " + this.message;
    }
  };
  P.UnimplementedError.prototype = {
    toString$0: function(_) {
      var message = this.message;
      return message != null ? "UnimplementedError: " + message : "UnimplementedError";
    }
  };
  P.StateError.prototype = {
    toString$0: function(_) {
      return "Bad state: " + this.message;
    }
  };
  P.ConcurrentModificationError.prototype = {
    toString$0: function(_) {
      var t1 = this.modifiedObject;
      if (t1 == null)
        return "Concurrent modification during iteration.";
      return "Concurrent modification during iteration: " + P.Error_safeToString(t1) + ".";
    }
  };
  P.StackOverflowError.prototype = {
    toString$0: function(_) {
      return "Stack Overflow";
    },
    get$stackTrace: function() {
      return null;
    },
    $isError: 1
  };
  P.CyclicInitializationError.prototype = {
    toString$0: function(_) {
      var variableName = this.variableName;
      return variableName == null ? "Reading static variable during its initialization" : "Reading static variable '" + variableName + "' during its initialization";
    }
  };
  P._Exception.prototype = {
    toString$0: function(_) {
      return "Exception: " + this.message;
    }
  };
  P.Iterable.prototype = {
    get$length: function(_) {
      var count,
        it = this.get$iterator(this);
      for (count = 0; it.moveNext$0();)
        ++count;
      return count;
    },
    toString$0: function(_) {
      return P.IterableBase_iterableToShortString(this, "(", ")");
    }
  };
  P.Null.prototype = {
    get$hashCode: function(_) {
      return P.Object.prototype.get$hashCode.call(C.JSNull_methods, this);
    },
    toString$0: function(_) {
      return "null";
    }
  };
  P.Object.prototype = {constructor: P.Object, $isObject: 1,
    $eq: function(_, other) {
      return this === other;
    },
    get$hashCode: function(_) {
      return H.Primitives_objectHashCode(this);
    },
    toString$0: function(_) {
      return "Instance of '" + H.S(H.Primitives_objectTypeName(this)) + "'";
    },
    noSuchMethod$1: function(_, invocation) {
      throw H.wrapException(P.NoSuchMethodError$(this, invocation.get$memberName(), invocation.get$positionalArguments(), invocation.get$namedArguments()));
    },
    toString: function() {
      return this.toString$0(this);
    }
  };
  P._StringStackTrace.prototype = {
    toString$0: function(_) {
      return "";
    },
    $isStackTrace: 1
  };
  P.StringBuffer.prototype = {
    get$length: function(_) {
      return this._contents.length;
    },
    toString$0: function(_) {
      var t1 = this._contents;
      return t1.charCodeAt(0) == 0 ? t1 : t1;
    }
  };
  W.HtmlElement.prototype = {};
  W.AccessibleNodeList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.AnchorElement.prototype = {
    toString$0: function(receiver) {
      return String(receiver);
    }
  };
  W.AreaElement.prototype = {
    toString$0: function(receiver) {
      return String(receiver);
    }
  };
  W.Blob.prototype = {};
  W.CharacterData.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.CssPerspective.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.CssRule.prototype = {$isCssRule: 1};
  W.CssStyleDeclaration.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.CssStyleDeclarationBase.prototype = {};
  W.CssStyleValue.prototype = {};
  W.CssTransformComponent.prototype = {};
  W.CssTransformValue.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.CssUnparsedValue.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.DataTransferItemList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.DomException.prototype = {
    toString$0: function(receiver) {
      return String(receiver);
    }
  };
  W.DomRectList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W.DomRectReadOnly.prototype = {
    toString$0: function(receiver) {
      var t2,
        t1 = receiver.left;
      t1.toString;
      t1 = "Rectangle (" + H.S(t1) + ", ";
      t2 = receiver.top;
      t2.toString;
      return t1 + H.S(t2) + ") " + H.S(this.get$width(receiver)) + " x " + H.S(this.get$height(receiver));
    },
    $eq: function(receiver, other) {
      var t1, t2;
      if (other == null)
        return false;
      if (type$.Rectangle_num._is(other)) {
        t1 = receiver.left;
        t1.toString;
        t2 = other.left;
        t2.toString;
        if (t1 === t2) {
          t1 = receiver.top;
          t1.toString;
          t2 = other.top;
          t2.toString;
          if (t1 === t2) {
            t1 = J.getInterceptor$x(other);
            t1 = this.get$width(receiver) == t1.get$width(other) && this.get$height(receiver) == t1.get$height(other);
          } else
            t1 = false;
        } else
          t1 = false;
      } else
        t1 = false;
      return t1;
    },
    get$hashCode: function(receiver) {
      var t2,
        t1 = receiver.left;
      t1.toString;
      t1 = C.JSNumber_methods.get$hashCode(t1);
      t2 = receiver.top;
      t2.toString;
      return W._JenkinsSmiHash_hash4(t1, C.JSNumber_methods.get$hashCode(t2), J.get$hashCode$(this.get$width(receiver)), J.get$hashCode$(this.get$height(receiver)));
    },
    get$_height: function(receiver) {
      return receiver.height;
    },
    get$height: function(receiver) {
      var t1 = this.get$_height(receiver);
      t1.toString;
      return t1;
    },
    get$_width: function(receiver) {
      return receiver.width;
    },
    get$width: function(receiver) {
      var t1 = this.get$_width(receiver);
      t1.toString;
      return t1;
    },
    $isRectangle: 1
  };
  W.DomStringList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W.DomTokenList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.Element.prototype = {
    toString$0: function(receiver) {
      return receiver.localName;
    }
  };
  W.EventTarget.prototype = {};
  W.File.prototype = {$isFile: 1};
  W.FileList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W.FileWriter.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.FormElement.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.Gamepad.prototype = {$isGamepad: 1};
  W.History.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.HtmlCollection.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W.Location.prototype = {
    toString$0: function(receiver) {
      return String(receiver);
    }
  };
  W.MediaList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.MidiInputMap.prototype = {
    $index: function(receiver, key) {
      return P.convertNativeToDart_Dictionary(receiver.get(key));
    },
    forEach$1: function(receiver, f) {
      var entry,
        entries = receiver.entries();
      for (; true;) {
        entry = entries.next();
        if (entry.done)
          return;
        f.call$2(entry.value[0], P.convertNativeToDart_Dictionary(entry.value[1]));
      }
    },
    get$keys: function(receiver) {
      var keys = [];
      this.forEach$1(receiver, new W.MidiInputMap_keys_closure(keys));
      return keys;
    },
    get$length: function(receiver) {
      return receiver.size;
    }
  };
  W.MidiInputMap_keys_closure.prototype = {
    call$2: function(k, v) {
      return this.keys.push(k);
    },
    $signature: 2
  };
  W.MidiOutputMap.prototype = {
    $index: function(receiver, key) {
      return P.convertNativeToDart_Dictionary(receiver.get(key));
    },
    forEach$1: function(receiver, f) {
      var entry,
        entries = receiver.entries();
      for (; true;) {
        entry = entries.next();
        if (entry.done)
          return;
        f.call$2(entry.value[0], P.convertNativeToDart_Dictionary(entry.value[1]));
      }
    },
    get$keys: function(receiver) {
      var keys = [];
      this.forEach$1(receiver, new W.MidiOutputMap_keys_closure(keys));
      return keys;
    },
    get$length: function(receiver) {
      return receiver.size;
    }
  };
  W.MidiOutputMap_keys_closure.prototype = {
    call$2: function(k, v) {
      return this.keys.push(k);
    },
    $signature: 2
  };
  W.MimeType.prototype = {$isMimeType: 1};
  W.MimeTypeArray.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W.Node.prototype = {
    toString$0: function(receiver) {
      var value = receiver.nodeValue;
      return value == null ? this.super$Interceptor$toString(receiver) : value;
    },
    $isNode: 1
  };
  W.NodeList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W.Plugin.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $isPlugin: 1
  };
  W.PluginArray.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W.RtcStatsReport.prototype = {
    $index: function(receiver, key) {
      return P.convertNativeToDart_Dictionary(receiver.get(key));
    },
    forEach$1: function(receiver, f) {
      var entry,
        entries = receiver.entries();
      for (; true;) {
        entry = entries.next();
        if (entry.done)
          return;
        f.call$2(entry.value[0], P.convertNativeToDart_Dictionary(entry.value[1]));
      }
    },
    get$keys: function(receiver) {
      var keys = [];
      this.forEach$1(receiver, new W.RtcStatsReport_keys_closure(keys));
      return keys;
    },
    get$length: function(receiver) {
      return receiver.size;
    }
  };
  W.RtcStatsReport_keys_closure.prototype = {
    call$2: function(k, v) {
      return this.keys.push(k);
    },
    $signature: 2
  };
  W.SelectElement.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.SourceBuffer.prototype = {$isSourceBuffer: 1};
  W.SourceBufferList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W.SpeechGrammar.prototype = {$isSpeechGrammar: 1};
  W.SpeechGrammarList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W.SpeechRecognitionResult.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $isSpeechRecognitionResult: 1
  };
  W.Storage.prototype = {
    $index: function(receiver, key) {
      return receiver.getItem(H._asStringS(key));
    },
    forEach$1: function(receiver, f) {
      var i, key, t1;
      for (i = 0; true; ++i) {
        key = receiver.key(i);
        if (key == null)
          return;
        t1 = receiver.getItem(key);
        t1.toString;
        f.call$2(key, t1);
      }
    },
    get$keys: function(receiver) {
      var keys = [];
      this.forEach$1(receiver, new W.Storage_keys_closure(keys));
      return keys;
    },
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.Storage_keys_closure.prototype = {
    call$2: function(k, v) {
      return this.keys.push(k);
    },
    $signature: 19
  };
  W.StyleSheet.prototype = {$isStyleSheet: 1};
  W.TextTrack.prototype = {$isTextTrack: 1};
  W.TextTrackCue.prototype = {$isTextTrackCue: 1};
  W.TextTrackCueList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W.TextTrackList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W.TimeRanges.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.Touch.prototype = {$isTouch: 1};
  W.TouchList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W.TrackDefaultList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W.Url.prototype = {
    toString$0: function(receiver) {
      return String(receiver);
    }
  };
  W.VideoTrackList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  W._CssRuleList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W._DomRect.prototype = {
    toString$0: function(receiver) {
      var t2,
        t1 = receiver.left;
      t1.toString;
      t1 = "Rectangle (" + H.S(t1) + ", ";
      t2 = receiver.top;
      t2.toString;
      t2 = t1 + H.S(t2) + ") ";
      t1 = receiver.width;
      t1.toString;
      t1 = t2 + H.S(t1) + " x ";
      t2 = receiver.height;
      t2.toString;
      return t1 + H.S(t2);
    },
    $eq: function(receiver, other) {
      var t1, t2;
      if (other == null)
        return false;
      if (type$.Rectangle_num._is(other)) {
        t1 = receiver.left;
        t1.toString;
        t2 = other.left;
        t2.toString;
        if (t1 === t2) {
          t1 = receiver.top;
          t1.toString;
          t2 = other.top;
          t2.toString;
          if (t1 === t2) {
            t1 = receiver.width;
            t1.toString;
            t2 = J.getInterceptor$x(other);
            if (t1 === t2.get$width(other)) {
              t1 = receiver.height;
              t1.toString;
              t2 = t1 === t2.get$height(other);
              t1 = t2;
            } else
              t1 = false;
          } else
            t1 = false;
        } else
          t1 = false;
      } else
        t1 = false;
      return t1;
    },
    get$hashCode: function(receiver) {
      var t2, t3, t4,
        t1 = receiver.left;
      t1.toString;
      t1 = C.JSNumber_methods.get$hashCode(t1);
      t2 = receiver.top;
      t2.toString;
      t2 = C.JSNumber_methods.get$hashCode(t2);
      t3 = receiver.width;
      t3.toString;
      t3 = C.JSNumber_methods.get$hashCode(t3);
      t4 = receiver.height;
      t4.toString;
      return W._JenkinsSmiHash_hash4(t1, t2, t3, C.JSNumber_methods.get$hashCode(t4));
    },
    get$_height: function(receiver) {
      return receiver.height;
    },
    get$height: function(receiver) {
      var t1 = receiver.height;
      t1.toString;
      return t1;
    },
    get$_width: function(receiver) {
      return receiver.width;
    },
    get$width: function(receiver) {
      var t1 = receiver.width;
      t1.toString;
      return t1;
    }
  };
  W._GamepadList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W._NamedNodeMap.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W._SpeechRecognitionResultList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W._StyleSheetList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver[index];
    },
    elementAt$1: function(receiver, index) {
      return receiver[index];
    },
    $isJavaScriptIndexingBehavior: 1
  };
  W.ImmutableListMixin.prototype = {
    get$iterator: function(receiver) {
      return new W.FixedSizeListIterator(receiver, this.get$length(receiver));
    }
  };
  W.FixedSizeListIterator.prototype = {
    moveNext$0: function() {
      var _this = this,
        nextPosition = _this._position + 1,
        t1 = _this._html$_length;
      if (nextPosition < t1) {
        _this._html$_current = J.$index$asx(_this._array, nextPosition);
        _this._position = nextPosition;
        return true;
      }
      _this._html$_current = null;
      _this._position = t1;
      return false;
    },
    get$current: function(_) {
      return this._html$_current;
    }
  };
  W._CssStyleDeclaration_Interceptor_CssStyleDeclarationBase.prototype = {};
  W._DomRectList_Interceptor_ListMixin.prototype = {};
  W._DomRectList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  W._DomStringList_Interceptor_ListMixin.prototype = {};
  W._DomStringList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  W._FileList_Interceptor_ListMixin.prototype = {};
  W._FileList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  W._HtmlCollection_Interceptor_ListMixin.prototype = {};
  W._HtmlCollection_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  W._MidiInputMap_Interceptor_MapMixin.prototype = {};
  W._MidiOutputMap_Interceptor_MapMixin.prototype = {};
  W._MimeTypeArray_Interceptor_ListMixin.prototype = {};
  W._MimeTypeArray_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  W._NodeList_Interceptor_ListMixin.prototype = {};
  W._NodeList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  W._PluginArray_Interceptor_ListMixin.prototype = {};
  W._PluginArray_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  W._RtcStatsReport_Interceptor_MapMixin.prototype = {};
  W._SourceBufferList_EventTarget_ListMixin.prototype = {};
  W._SourceBufferList_EventTarget_ListMixin_ImmutableListMixin.prototype = {};
  W._SpeechGrammarList_Interceptor_ListMixin.prototype = {};
  W._SpeechGrammarList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  W._Storage_Interceptor_MapMixin.prototype = {};
  W._TextTrackCueList_Interceptor_ListMixin.prototype = {};
  W._TextTrackCueList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  W._TextTrackList_EventTarget_ListMixin.prototype = {};
  W._TextTrackList_EventTarget_ListMixin_ImmutableListMixin.prototype = {};
  W._TouchList_Interceptor_ListMixin.prototype = {};
  W._TouchList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  W.__CssRuleList_Interceptor_ListMixin.prototype = {};
  W.__CssRuleList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  W.__GamepadList_Interceptor_ListMixin.prototype = {};
  W.__GamepadList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  W.__NamedNodeMap_Interceptor_ListMixin.prototype = {};
  W.__NamedNodeMap_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  W.__SpeechRecognitionResultList_Interceptor_ListMixin.prototype = {};
  W.__SpeechRecognitionResultList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  W.__StyleSheetList_Interceptor_ListMixin.prototype = {};
  W.__StyleSheetList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  P.Length.prototype = {$isLength: 1};
  P.LengthList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver.getItem(index);
    },
    elementAt$1: function(receiver, index) {
      return this.$index(receiver, index);
    }
  };
  P.Number.prototype = {$isNumber: 1};
  P.NumberList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver.getItem(index);
    },
    elementAt$1: function(receiver, index) {
      return this.$index(receiver, index);
    }
  };
  P.PointList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  P.StringList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver.getItem(index);
    },
    elementAt$1: function(receiver, index) {
      return this.$index(receiver, index);
    }
  };
  P.Transform.prototype = {$isTransform: 1};
  P.TransformList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      return receiver.getItem(index);
    },
    elementAt$1: function(receiver, index) {
      return this.$index(receiver, index);
    }
  };
  P._LengthList_Interceptor_ListMixin.prototype = {};
  P._LengthList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  P._NumberList_Interceptor_ListMixin.prototype = {};
  P._NumberList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  P._StringList_Interceptor_ListMixin.prototype = {};
  P._StringList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  P._TransformList_Interceptor_ListMixin.prototype = {};
  P._TransformList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  P.AudioBuffer.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  P.AudioParamMap.prototype = {
    $index: function(receiver, key) {
      return P.convertNativeToDart_Dictionary(receiver.get(key));
    },
    forEach$1: function(receiver, f) {
      var entry,
        entries = receiver.entries();
      for (; true;) {
        entry = entries.next();
        if (entry.done)
          return;
        f.call$2(entry.value[0], P.convertNativeToDart_Dictionary(entry.value[1]));
      }
    },
    get$keys: function(receiver) {
      var keys = [];
      this.forEach$1(receiver, new P.AudioParamMap_keys_closure(keys));
      return keys;
    },
    get$length: function(receiver) {
      return receiver.size;
    }
  };
  P.AudioParamMap_keys_closure.prototype = {
    call$2: function(k, v) {
      return this.keys.push(k);
    },
    $signature: 2
  };
  P.AudioTrackList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  P.BaseAudioContext.prototype = {};
  P.OfflineAudioContext.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    }
  };
  P._AudioParamMap_Interceptor_MapMixin.prototype = {};
  P.SqlResultSetRowList.prototype = {
    get$length: function(receiver) {
      return receiver.length;
    },
    $index: function(receiver, index) {
      var t1;
      if (index >>> 0 !== index || index >= receiver.length)
        throw H.wrapException(P.IndexError$(index, receiver, null, null, null));
      t1 = P.convertNativeToDart_Dictionary(receiver.item(index));
      t1.toString;
      return t1;
    },
    elementAt$1: function(receiver, index) {
      return this.$index(receiver, index);
    }
  };
  P._SqlResultSetRowList_Interceptor_ListMixin.prototype = {};
  P._SqlResultSetRowList_Interceptor_ListMixin_ImmutableListMixin.prototype = {};
  U.JsTestability.prototype = {};
  U.JsTestabilityRegistry.prototype = {};
  S._Chrome.prototype = {};
  B.RuntimeMessageSender.prototype = {};
  B.RuntimeOnMessageData.prototype = {
    toString$0: function(_) {
      var t1 = this.sender;
      return "message : " + this.message.toString$0(0) + "\nsender.id :  " + H.S(t1.id) + "\nsender.url : " + H.S(t1.url) + "\nsender.tlsChannelId : " + H.S(t1.tlsChannelId) + "\n    ";
    }
  };
  B._OnInstalled.prototype = {};
  B._OnMessage.prototype = {
    _callback$3: function(message, sender, sendResponse) {
      var t1 = this._controller,
        t2 = R.jsToMap(message),
        t3 = J.getInterceptor$x(sender),
        t4 = t3.get$id(sender),
        t5 = t3.get$url(sender),
        t6 = t3.get$tlsChannelId(sender);
      E.Tab_Tab$fromInterop(t3.get$tab(sender));
      t6 = new B.RuntimeOnMessageData(t2, new B.RuntimeMessageSender(t4, t5, t6), sendResponse);
      if (t1._state >= 4)
        H.throwExpression(t1._badEventState$0());
      t2 = t1._state;
      if ((t2 & 1) !== 0)
        t1._sendData$1(t6);
      else if ((t2 & 3) === 0)
        t1._ensurePendingEvents$0().add$1(0, new P._DelayedData(t6));
      return true;
    },
    _callback$2: function(message, sender) {
      return this._callback$3(message, sender, null);
    }
  };
  B._OnStartup.prototype = {};
  B._OnUpdateAvailable.prototype = {};
  B.Runtime.prototype = {
    setUninstallURL$1: function(_, url) {
      return this.setUninstallURL$body$Runtime(_, url);
    },
    setUninstallURL$body$Runtime: function(_, url) {
      var $async$goto = 0,
        $async$completer = P._makeAsyncAwaitCompleter(type$.void),
        $async$returnValue, $async$self = this, t1, completer;
      var $async$setUninstallURL$1 = P._wrapJsFunctionForAsync(function($async$errorCode, $async$result) {
        if ($async$errorCode === 1)
          return P._asyncRethrow($async$result, $async$completer);
        while (true)
          switch ($async$goto) {
            case 0:
              // Function start
              t1 = new P._Future($.Zone__current, type$._Future_void);
              completer = new P._AsyncCompleter(t1, type$._AsyncCompleter_void);
              J.setUninstallURL$2$x($async$self._runtime, url, P.allowInterop(completer.get$complete(completer)));
              $async$goto = 3;
              return P._asyncAwait(t1, $async$setUninstallURL$1);
            case 3:
              // returning from await.
              // goto return
              $async$goto = 1;
              break;
            case 1:
              // return
              return P._asyncReturn($async$returnValue, $async$completer);
          }
      });
      return P._asyncStartSync($async$setUninstallURL$1, $async$completer);
    }
  };
  E.Tab.prototype = {
    toString$0: function(_) {
      var _this = this;
      return "id: " + H.S(_this.id) + "\nindex: " + H.S(_this.index) + "\nwindowID: " + H.S(_this.windowID) + "\nopenerTabId: " + H.S(_this.openerTabId) + "\nhighlighted: " + H.S(_this.highlighted) + "\nactive: " + H.S(_this.active) + "\npinned: " + H.S(_this.pinned) + "\naudible: " + H.S(_this.audible) + "\ndiscarded: " + H.S(_this.discarded) + "\nautoDiscardable: " + H.S(_this.autoDiscardable) + "\nmutedInfo: " + H.S(_this.mutedInfo) + "\nurl: " + H.S(_this.url) + "\ntitle: " + H.S(_this.title) + "\nfavIconUrl: " + H.S(_this.favIconUrl) + "\nstatus: " + H.S(_this.status) + "\nincognito: " + H.S(_this.incognito) + "\nwidth: " + H.S(_this.width) + "\nheight: " + H.S(_this.height) + "\nsessionId: " + H.S(_this.sessionId) + "\n    ";
    }
  };
  E.TabMutedProps.prototype = {};
  E.TabCreateProps.prototype = {};
  E._OnCreated.prototype = {};
  E._OnUpdated.prototype = {};
  E._OnMoved.prototype = {};
  E._OnActivated.prototype = {};
  E._OnHighlighted.prototype = {};
  E._OnDetached.prototype = {};
  E._OnAttached.prototype = {};
  E._OnRemoved.prototype = {};
  E._OnReplaced.prototype = {};
  E._OnZoomChange.prototype = {};
  E.Tabs.prototype = {
    create$1: function(_, createProps) {
      return this.create$body$Tabs(_, createProps);
    },
    create$body$Tabs: function(_, createProps) {
      var $async$goto = 0,
        $async$completer = P._makeAsyncAwaitCompleter(type$.legacy_Tab),
        $async$returnValue, $async$self = this, t1, t2;
      var $async$create$1 = P._wrapJsFunctionForAsync(function($async$errorCode, $async$result) {
        if ($async$errorCode === 1)
          return P._asyncRethrow($async$result, $async$completer);
        while (true)
          switch ($async$goto) {
            case 0:
              // Function start
              t1 = {};
              t2 = new P._Future($.Zone__current, type$._Future_void);
              t1.ret = null;
              J.create$2$x($async$self._tabs, {windowId: createProps.windowId, index: null, url: createProps.url, active: true, pinned: null, openerTabId: null}, P.allowInterop(new E.Tabs_create_fn(t1, new P._AsyncCompleter(t2, type$._AsyncCompleter_void))));
              $async$goto = 3;
              return P._asyncAwait(t2, $async$create$1);
            case 3:
              // returning from await.
              t1 = t1.ret;
              if (t1 != null) {
                $async$returnValue = E.Tab_Tab$fromInterop(t1);
                // goto return
                $async$goto = 1;
                break;
              }
              $async$returnValue = null;
              // goto return
              $async$goto = 1;
              break;
            case 1:
              // return
              return P._asyncReturn($async$returnValue, $async$completer);
          }
      });
      return P._asyncStartSync($async$create$1, $async$completer);
    }
  };
  E.Tabs_create_fn.prototype = {
    call$1: function(tab) {
      if (tab != null)
        this._box_0.ret = tab;
      this.completer.complete$0(0);
      return;
    },
    $signature: 21
  };
  L.Windows.prototype = {};
  D.SetTitleProps.prototype = {};
  D.GetTitleProps.prototype = {};
  D.SetBadgeTextProps.prototype = {};
  D.GetBadgeTextProps.prototype = {};
  D.OnClickDataProps.prototype = {};
  D.SetPopupProps.prototype = {};
  D.GetPopupProps.prototype = {};
  D.GetBadgeBackgroundColorProps.prototype = {};
  D.SetBadgeBackgroundColorProps.prototype = {};
  D.SetIconProps.prototype = {};
  D.BrowserAction.prototype = {};
  D.OnClicked.prototype = {};
  Q.OriginTypes.prototype = {};
  Q.RemovalOptions.prototype = {};
  Q.DataTypeSet.prototype = {};
  Q.SettingsResult.prototype = {};
  Q.BrowsingData.prototype = {};
  X.Chrome.prototype = {};
  D.ContentSettingAutomaticDownloadsSetDetails.prototype = {};
  D.ContentSettingAutomaticDownloadsGetDetails.prototype = {};
  D.ContentSettingAutomaticDownloads.prototype = {};
  Z.ContentSettingCameraSetDetails.prototype = {};
  Z.ContentSettingCameraGetDetails.prototype = {};
  Z.ContentSettingCamera.prototype = {};
  U.ContentSettingCookiesSetDetails.prototype = {};
  U.ContentSettingCookiesGetDetails.prototype = {};
  U.ContentSettingCookies.prototype = {};
  N.ContentSettingResourceIdentifier.prototype = {};
  N.ContentSettingClearDetails.prototype = {};
  N.ContentDetailsGetReturnValue.prototype = {};
  A.ContentSettingImagesSetDetails.prototype = {};
  A.ContentSettingImagesGetDetails.prototype = {};
  A.ContentSettingImages.prototype = {};
  A.ContentSettings.prototype = {};
  O.ContentSettingJSSetDetails.prototype = {};
  O.ContentSettingJSGetDetails.prototype = {};
  O.ContentSettingJS.prototype = {};
  Z.ContentSettingLocationSetDetails.prototype = {};
  Z.ContentSettingLocationGetDetails.prototype = {};
  Z.ContentSettingLocation.prototype = {};
  L.ContentSettingMicrophoneSetDetails.prototype = {};
  L.ContentSettingMicrophoneGetDetails.prototype = {};
  L.ContentSettingMicrophone.prototype = {};
  Y.ContentSettingNotificationSetDetails.prototype = {};
  Y.ContentSettingNotificationGetDetails.prototype = {};
  Y.ContentSettingNotification.prototype = {};
  R.ContentSettingPluginsSetDetails.prototype = {};
  R.ContentSettingPluginsGetDetails.prototype = {};
  R.ContentSettingPlugins.prototype = {};
  Z.ContentSettingPopupsSetDetails.prototype = {};
  Z.ContentSettingPopupsGetDetails.prototype = {};
  Z.ContentSettingPopups.prototype = {};
  V.ContentSettingUnsandboxedPluginsSetDetails.prototype = {};
  V.ContentSettingUnsandboxedPluginsGetDetails.prototype = {};
  V.ContentSettingUnsandboxedPlugins.prototype = {};
  T.ContextMenusPropsOnClickData.prototype = {};
  T.CreateContextMenusProps.prototype = {};
  T.UpdateContextMenusProps.prototype = {};
  T.ContextMenus.prototype = {};
  T.OnClicked0.prototype = {};
  M.Cookie.prototype = {};
  M.GetProps.prototype = {};
  M.GetALLProps.prototype = {};
  M.SetProps.prototype = {};
  M.RemoveProps.prototype = {};
  M.CookieChangeInfo.prototype = {};
  M.CookieStore0.prototype = {};
  M.OnChanged.prototype = {};
  M.Cookies.prototype = {};
  K.DownloadOptionsHttpHeader.prototype = {};
  K.DownloadOptions.prototype = {};
  K.Downloads.prototype = {};
  E.Extension.prototype = {};
  F.HistoryItem.prototype = {};
  F.HistoryVisitItem.prototype = {};
  F.HistorySearchQuery.prototype = {};
  F.HistoryGetVisitsDetails.prototype = {};
  F.HistoryAddURLDetails.prototype = {};
  F.HistoryDeleteURLDetails.prototype = {};
  F.HistoryOnVisitRemovedDetails.prototype = {};
  F.HistoryDeleteRangeDetails.prototype = {};
  F._HistoryOnVisited.prototype = {};
  F._HistoryOnVisitRemoved.prototype = {};
  F.History0.prototype = {};
  Q.GetAuthTokenDetails.prototype = {};
  Q.RemoveCachedAuthTokenDetails.prototype = {};
  Q.Identity.prototype = {};
  R.IconInfo.prototype = {};
  R.ExtensionInfo.prototype = {};
  R.OnInstalled.prototype = {};
  R.OnUninstalled.prototype = {};
  R.OnEnabled.prototype = {};
  R.OnDisabled.prototype = {};
  R.UninstallOptions.prototype = {};
  R.UninstallSelfOptions.prototype = {};
  R.Management.prototype = {};
  F.Button.prototype = {};
  F.Item.prototype = {};
  F.NotificationOptions.prototype = {};
  F.OnClosed.prototype = {};
  F.OnClicked1.prototype = {};
  F.OnButtonClicked.prototype = {};
  F.Notifications.prototype = {};
  B.Suggestion.prototype = {};
  B.Omnibox.prototype = {};
  E.LastError.prototype = {};
  E.MessageSender.prototype = {};
  E.PlatformInfo.prototype = {};
  E.SendMessageProps.prototype = {};
  E.Manifest.prototype = {};
  E.RuntimeOnInstalledData.prototype = {};
  E.OnInstalled0.prototype = {};
  E.OnMessage.prototype = {};
  E.OnStartup.prototype = {};
  E.OnUpdateAvailableProps.prototype = {};
  E.OnUpdateAvailable.prototype = {};
  E.Runtime0.prototype = {};
  F.Storage0.prototype = {};
  F._Local.prototype = {};
  F._Sync.prototype = {};
  F._OnChanged.prototype = {};
  E.Tab0.prototype = {};
  E.TabMutedProps0.prototype = {};
  E.TabZoomSettings.prototype = {};
  E.TabExecuteScriptProps.prototype = {};
  E.TabInsertCSSProps.prototype = {};
  E.QueryProps.prototype = {};
  E.TabCreateProps0.prototype = {};
  E.ReloadProps.prototype = {};
  E.MoveProperties.prototype = {};
  E.UpdateProperties.prototype = {};
  E.SendMessageOptions.prototype = {};
  E.TabCaptureVisibleProps.prototype = {};
  E.HighlightInfo.prototype = {};
  E.OnCreated.prototype = {};
  E.TabOnUpdatedChangeInfo.prototype = {};
  E.OnUpdated.prototype = {};
  E.MoveInfo.prototype = {};
  E.OnMoved.prototype = {};
  E.ActiveInfo0.prototype = {};
  E.OnActivated.prototype = {};
  E.OnHighligtedHighlightInfo.prototype = {};
  E.OnHighlighted.prototype = {};
  E.OnDetachedInfo.prototype = {};
  E.OnDetached.prototype = {};
  E.OnAttachedInfo.prototype = {};
  E.OnAttached.prototype = {};
  E.OnRemoveInfo.prototype = {};
  E.OnRemoved.prototype = {};
  E.OnReplaced.prototype = {};
  E.ZoomChangeInfo.prototype = {};
  E.OnZoomChange.prototype = {};
  E.Tabs0.prototype = {};
  K.Window0.prototype = {};
  K.WindowsGetInfoProps.prototype = {};
  K.WindowCreateData.prototype = {};
  K.WindowUpdateProps.prototype = {};
  K.Windows0.prototype = {};
  R.jsToMap_closure.prototype = {
    call$1: function(key) {
      return this.jsObject[key];
    },
    $signature: 4
  };
  S.messageListener_closure.prototype = {
    call$1: function(e) {
      return this.$call$body$messageListener_closure(e);
    },
    $call$body$messageListener_closure: function(e) {
      var $async$goto = 0,
        $async$completer = P._makeAsyncAwaitCompleter(type$.Null),
        $async$returnValue, toDo;
      var $async$call$1 = P._wrapJsFunctionForAsync(function($async$errorCode, $async$result) {
        if ($async$errorCode === 1)
          return P._asyncRethrow($async$result, $async$completer);
        while (true)
          switch ($async$goto) {
            case 0:
              // Function start
              toDo = e.message.$index(0, "to_do");
              if (T.IsCheck_emptyString(toDo)) {
                // goto return
                $async$goto = 1;
                break;
              }
              $async$goto = 5;
              return P._asyncAwait(V.CrxLicenseInfoBackgroundMessageHandler_handleToDo(toDo), $async$call$1);
            case 5:
              // returning from await.
              $async$goto = $async$result ? 3 : 4;
              break;
            case 3:
              // then
              $async$goto = 6;
              return P._asyncAwait(e.sendResponse.call$1("done"), $async$call$1);
            case 6:
              // returning from await.
            case 4:
              // join
              // goto return
              $async$goto = 1;
              break;
            case 1:
              // return
              return P._asyncReturn($async$returnValue, $async$completer);
          }
      });
      return P._asyncStartSync($async$call$1, $async$completer);
    },
    $signature: 22
  };
  (function aliases() {
    var _ = J.Interceptor.prototype;
    _.super$Interceptor$toString = _.toString$0;
    _.super$Interceptor$noSuchMethod = _.noSuchMethod$1;
    _ = J.JavaScriptObject.prototype;
    _.super$JavaScriptObject$toString = _.toString$0;
  })();
  (function installTearOffs() {
    var _static_1 = hunkHelpers._static_1,
      _static_0 = hunkHelpers._static_0,
      _static_2 = hunkHelpers._static_2,
      _instance = hunkHelpers.installInstanceTearOff,
      _instance_2_u = hunkHelpers._instance_2u;
    _static_1(P, "async__AsyncRun__scheduleImmediateJsOverride$closure", "_AsyncRun__scheduleImmediateJsOverride", 3);
    _static_1(P, "async__AsyncRun__scheduleImmediateWithSetImmediate$closure", "_AsyncRun__scheduleImmediateWithSetImmediate", 3);
    _static_1(P, "async__AsyncRun__scheduleImmediateWithTimer$closure", "_AsyncRun__scheduleImmediateWithTimer", 3);
    _static_0(P, "async___startMicrotaskLoop$closure", "_startMicrotaskLoop", 1);
    _static_1(P, "async___nullDataHandler$closure", "_nullDataHandler", 6);
    _static_2(P, "async___nullErrorHandler$closure", "_nullErrorHandler", 7);
    _instance(P._AsyncCompleter.prototype, "get$complete", 1, 0, function() {
      return [null];
    }, ["call$1", "call$0"], ["complete$1", "complete$0"], 14, 0);
    _instance_2_u(P._Future.prototype, "get$_completeError", "_completeError$2", 7);
    _static_1(P, "collection_MapBase__id$closure", "MapBase__id", 23);
    _instance(B._OnMessage.prototype, "get$_callback", 0, 2, function() {
      return [null];
    }, ["call$3", "call$2"], ["_callback$3", "_callback$2"], 20, 0);
  })();
  (function inheritance() {
    var _mixin = hunkHelpers.mixin,
      _inherit = hunkHelpers.inherit,
      _inheritMany = hunkHelpers.inheritMany;
    _inherit(P.Object, null);
    _inheritMany(P.Object, [H.JS_CONST, J.Interceptor, J.ArrayIterator, P.Iterable, H.ListIterator, H.FixedLengthListMixin, H.Symbol, P.MapView, H.ConstantMap, H.JSInvocationMirror, H.Closure, H.TypeErrorDecoder, P.Error, H.NullThrownFromJavaScriptException, H.ExceptionAndStackTrace, H._StackTrace, H._Required, P.MapMixin, H.LinkedHashMapCell, H.LinkedHashMapKeyIterator, H.Rti, H._FunctionParameters, P._TimerImpl, P._AsyncAwaitCompleter, P._Completer, P._FutureListener, P._Future, P._AsyncCallbackEntry, P.Stream, P._StreamController, P._AsyncStreamControllerDispatch, P._BufferingStreamSubscription, P._DelayedEvent, P._PendingEvents, P._StreamIterator, P.AsyncError, P._Zone, P.ListMixin, P._UnmodifiableMapMixin, P.StackOverflowError, P._Exception, P.Null, P._StringStackTrace, P.StringBuffer, W.CssStyleDeclarationBase, W.ImmutableListMixin, W.FixedSizeListIterator, S._Chrome, B.RuntimeMessageSender, B.RuntimeOnMessageData, B._OnInstalled, B._OnMessage, B._OnStartup, B._OnUpdateAvailable, B.Runtime, E.Tab, E.TabMutedProps, E.TabCreateProps, E._OnCreated, E._OnUpdated, E._OnMoved, E._OnActivated, E._OnHighlighted, E._OnDetached, E._OnAttached, E._OnRemoved, E._OnReplaced, E._OnZoomChange, E.Tabs, L.Windows]);
    _inheritMany(J.Interceptor, [J.JSBool, J.JSNull, J.JavaScriptObject, J.JSArray, J.JSNumber, J.JSString, H.NativeTypedData, W.EventTarget, W.AccessibleNodeList, W.Blob, W.CssTransformComponent, W.CssRule, W._CssStyleDeclaration_Interceptor_CssStyleDeclarationBase, W.CssStyleValue, W.DataTransferItemList, W.DomException, W._DomRectList_Interceptor_ListMixin, W.DomRectReadOnly, W._DomStringList_Interceptor_ListMixin, W.DomTokenList, W._FileList_Interceptor_ListMixin, W.Gamepad, W.History, W._HtmlCollection_Interceptor_ListMixin, W.Location, W.MediaList, W._MidiInputMap_Interceptor_MapMixin, W._MidiOutputMap_Interceptor_MapMixin, W.MimeType, W._MimeTypeArray_Interceptor_ListMixin, W._NodeList_Interceptor_ListMixin, W.Plugin, W._PluginArray_Interceptor_ListMixin, W._RtcStatsReport_Interceptor_MapMixin, W.SpeechGrammar, W._SpeechGrammarList_Interceptor_ListMixin, W.SpeechRecognitionResult, W._Storage_Interceptor_MapMixin, W.StyleSheet, W._TextTrackCueList_Interceptor_ListMixin, W.TimeRanges, W.Touch, W._TouchList_Interceptor_ListMixin, W.TrackDefaultList, W.Url, W.__CssRuleList_Interceptor_ListMixin, W.__GamepadList_Interceptor_ListMixin, W.__NamedNodeMap_Interceptor_ListMixin, W.__SpeechRecognitionResultList_Interceptor_ListMixin, W.__StyleSheetList_Interceptor_ListMixin, P.Length, P._LengthList_Interceptor_ListMixin, P.Number, P._NumberList_Interceptor_ListMixin, P.PointList, P._StringList_Interceptor_ListMixin, P.Transform, P._TransformList_Interceptor_ListMixin, P.AudioBuffer, P._AudioParamMap_Interceptor_MapMixin, P._SqlResultSetRowList_Interceptor_ListMixin]);
    _inheritMany(J.JavaScriptObject, [J.PlainJavaScriptObject, J.UnknownJavaScriptObject, J.JavaScriptFunction, U.JsTestability, U.JsTestabilityRegistry, D.SetTitleProps, D.GetTitleProps, D.SetBadgeTextProps, D.GetBadgeTextProps, D.OnClickDataProps, D.SetPopupProps, D.GetPopupProps, D.GetBadgeBackgroundColorProps, D.SetBadgeBackgroundColorProps, D.SetIconProps, D.BrowserAction, D.OnClicked, Q.OriginTypes, Q.RemovalOptions, Q.DataTypeSet, Q.SettingsResult, Q.BrowsingData, X.Chrome, D.ContentSettingAutomaticDownloadsSetDetails, D.ContentSettingAutomaticDownloadsGetDetails, D.ContentSettingAutomaticDownloads, Z.ContentSettingCameraSetDetails, Z.ContentSettingCameraGetDetails, Z.ContentSettingCamera, U.ContentSettingCookiesSetDetails, U.ContentSettingCookiesGetDetails, U.ContentSettingCookies, N.ContentSettingResourceIdentifier, N.ContentSettingClearDetails, N.ContentDetailsGetReturnValue, A.ContentSettingImagesSetDetails, A.ContentSettingImagesGetDetails, A.ContentSettingImages, A.ContentSettings, O.ContentSettingJSSetDetails, O.ContentSettingJSGetDetails, O.ContentSettingJS, Z.ContentSettingLocationSetDetails, Z.ContentSettingLocationGetDetails, Z.ContentSettingLocation, L.ContentSettingMicrophoneSetDetails, L.ContentSettingMicrophoneGetDetails, L.ContentSettingMicrophone, Y.ContentSettingNotificationSetDetails, Y.ContentSettingNotificationGetDetails, Y.ContentSettingNotification, R.ContentSettingPluginsSetDetails, R.ContentSettingPluginsGetDetails, R.ContentSettingPlugins, Z.ContentSettingPopupsSetDetails, Z.ContentSettingPopupsGetDetails, Z.ContentSettingPopups, V.ContentSettingUnsandboxedPluginsSetDetails, V.ContentSettingUnsandboxedPluginsGetDetails, V.ContentSettingUnsandboxedPlugins, T.ContextMenusPropsOnClickData, T.CreateContextMenusProps, T.UpdateContextMenusProps, T.ContextMenus, T.OnClicked0, M.Cookie, M.GetProps, M.GetALLProps, M.SetProps, M.RemoveProps, M.CookieChangeInfo, M.CookieStore0, M.OnChanged, M.Cookies, K.DownloadOptionsHttpHeader, K.DownloadOptions, K.Downloads, E.Extension, F.HistoryItem, F.HistoryVisitItem, F.HistorySearchQuery, F.HistoryGetVisitsDetails, F.HistoryAddURLDetails, F.HistoryDeleteURLDetails, F.HistoryOnVisitRemovedDetails, F.HistoryDeleteRangeDetails, F._HistoryOnVisited, F._HistoryOnVisitRemoved, F.History0, Q.GetAuthTokenDetails, Q.RemoveCachedAuthTokenDetails, Q.Identity, R.IconInfo, R.ExtensionInfo, R.OnInstalled, R.OnUninstalled, R.OnEnabled, R.OnDisabled, R.UninstallOptions, R.UninstallSelfOptions, R.Management, F.Button, F.Item, F.NotificationOptions, F.OnClosed, F.OnClicked1, F.OnButtonClicked, F.Notifications, B.Suggestion, B.Omnibox, E.LastError, E.MessageSender, E.PlatformInfo, E.SendMessageProps, E.Manifest, E.RuntimeOnInstalledData, E.OnInstalled0, E.OnMessage, E.OnStartup, E.OnUpdateAvailableProps, E.OnUpdateAvailable, E.Runtime0, F.Storage0, F._Local, F._Sync, F._OnChanged, E.Tab0, E.TabMutedProps0, E.TabZoomSettings, E.TabExecuteScriptProps, E.TabInsertCSSProps, E.QueryProps, E.TabCreateProps0, E.ReloadProps, E.MoveProperties, E.UpdateProperties, E.SendMessageOptions, E.TabCaptureVisibleProps, E.HighlightInfo, E.OnCreated, E.TabOnUpdatedChangeInfo, E.OnUpdated, E.MoveInfo, E.OnMoved, E.ActiveInfo0, E.OnActivated, E.OnHighligtedHighlightInfo, E.OnHighlighted, E.OnDetachedInfo, E.OnDetached, E.OnAttachedInfo, E.OnAttached, E.OnRemoveInfo, E.OnRemoved, E.OnReplaced, E.ZoomChangeInfo, E.OnZoomChange, E.Tabs0, K.Window0, K.WindowsGetInfoProps, K.WindowCreateData, K.WindowUpdateProps, K.Windows0]);
    _inherit(J.JSUnmodifiableArray, J.JSArray);
    _inheritMany(J.JSNumber, [J.JSInt, J.JSDouble]);
    _inherit(H.EfficientLengthIterable, P.Iterable);
    _inherit(P._UnmodifiableMapView_MapView__UnmodifiableMapMixin, P.MapView);
    _inherit(P.UnmodifiableMapView, P._UnmodifiableMapView_MapView__UnmodifiableMapMixin);
    _inherit(H.ConstantMapView, P.UnmodifiableMapView);
    _inherit(H.ConstantStringMap, H.ConstantMap);
    _inheritMany(H.Closure, [H.Primitives_functionNoSuchMethod_closure, H.TearOffClosure, H.initHooks_closure, H.initHooks_closure0, H.initHooks_closure1, P._AsyncRun__initializeScheduleImmediate_internalCallback, P._AsyncRun__initializeScheduleImmediate_closure, P._AsyncRun__scheduleImmediateJsOverride_internalCallback, P._AsyncRun__scheduleImmediateWithSetImmediate_internalCallback, P._TimerImpl_internalCallback, P._awaitOnObject_closure, P._awaitOnObject_closure0, P._wrapJsFunctionForAsync_closure, P._Future__addListener_closure, P._Future__prependListeners_closure, P._Future__chainForeignFuture_closure, P._Future__chainForeignFuture_closure0, P._Future__chainForeignFuture_closure1, P._Future__asyncCompleteWithValue_closure, P._Future__chainFuture_closure, P._Future__asyncCompleteError_closure, P._Future__propagateToListeners_handleWhenCompleteCallback, P._Future__propagateToListeners_handleWhenCompleteCallback_closure, P._Future__propagateToListeners_handleValueCallback, P._Future__propagateToListeners_handleError, P.Stream_length_closure, P.Stream_length_closure0, P._StreamController__subscribe_closure, P._PendingEvents_schedule_closure, P._rootHandleUncaughtError_closure, P._RootZone_bindCallback_closure, P._RootZone_bindCallbackGuarded_closure, P.MapBase_mapToString_closure, P.NoSuchMethodError_toString_closure, W.MidiInputMap_keys_closure, W.MidiOutputMap_keys_closure, W.RtcStatsReport_keys_closure, W.Storage_keys_closure, P.AudioParamMap_keys_closure, E.Tabs_create_fn, R.jsToMap_closure, S.messageListener_closure]);
    _inheritMany(P.Error, [P.TypeError, H.JsNoSuchMethodError, H.UnknownJsTypeError, H.RuntimeError, H._Error, P.AssertionError, P.NullThrownError, P.ArgumentError, P.NoSuchMethodError, P.UnsupportedError, P.UnimplementedError, P.StateError, P.ConcurrentModificationError, P.CyclicInitializationError]);
    _inherit(H.NullError, P.TypeError);
    _inheritMany(H.TearOffClosure, [H.StaticClosure, H.BoundClosure]);
    _inherit(P.MapBase, P.MapMixin);
    _inherit(H.JsLinkedHashMap, P.MapBase);
    _inherit(H.LinkedHashMapKeyIterable, H.EfficientLengthIterable);
    _inherit(H.NativeTypedArray, H.NativeTypedData);
    _inheritMany(H.NativeTypedArray, [H._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin, H._NativeTypedArrayOfInt_NativeTypedArray_ListMixin]);
    _inherit(H._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin_FixedLengthListMixin, H._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin);
    _inherit(H.NativeTypedArrayOfDouble, H._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin_FixedLengthListMixin);
    _inherit(H._NativeTypedArrayOfInt_NativeTypedArray_ListMixin_FixedLengthListMixin, H._NativeTypedArrayOfInt_NativeTypedArray_ListMixin);
    _inherit(H.NativeTypedArrayOfInt, H._NativeTypedArrayOfInt_NativeTypedArray_ListMixin_FixedLengthListMixin);
    _inheritMany(H.NativeTypedArrayOfInt, [H.NativeInt16List, H.NativeInt32List, H.NativeInt8List, H.NativeUint16List, H.NativeUint32List, H.NativeUint8ClampedList, H.NativeUint8List]);
    _inherit(H._TypeError, H._Error);
    _inherit(P._AsyncCompleter, P._Completer);
    _inherit(P._AsyncStreamController, P._StreamController);
    _inherit(P._StreamImpl, P.Stream);
    _inherit(P._ControllerStream, P._StreamImpl);
    _inherit(P._ControllerSubscription, P._BufferingStreamSubscription);
    _inherit(P._DelayedData, P._DelayedEvent);
    _inherit(P._StreamImplEvents, P._PendingEvents);
    _inherit(P._RootZone, P._Zone);
    _inheritMany(P.ArgumentError, [P.RangeError, P.IndexError]);
    _inheritMany(W.EventTarget, [W.Node, W.FileWriter, W.SourceBuffer, W._SourceBufferList_EventTarget_ListMixin, W.TextTrack, W.TextTrackCue, W._TextTrackList_EventTarget_ListMixin, W.VideoTrackList, P.AudioTrackList, P.BaseAudioContext]);
    _inheritMany(W.Node, [W.Element, W.CharacterData]);
    _inherit(W.HtmlElement, W.Element);
    _inheritMany(W.HtmlElement, [W.AnchorElement, W.AreaElement, W.FormElement, W.SelectElement]);
    _inherit(W.CssPerspective, W.CssTransformComponent);
    _inherit(W.CssStyleDeclaration, W._CssStyleDeclaration_Interceptor_CssStyleDeclarationBase);
    _inheritMany(W.CssStyleValue, [W.CssTransformValue, W.CssUnparsedValue]);
    _inherit(W._DomRectList_Interceptor_ListMixin_ImmutableListMixin, W._DomRectList_Interceptor_ListMixin);
    _inherit(W.DomRectList, W._DomRectList_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(W._DomStringList_Interceptor_ListMixin_ImmutableListMixin, W._DomStringList_Interceptor_ListMixin);
    _inherit(W.DomStringList, W._DomStringList_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(W.File, W.Blob);
    _inherit(W._FileList_Interceptor_ListMixin_ImmutableListMixin, W._FileList_Interceptor_ListMixin);
    _inherit(W.FileList, W._FileList_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(W._HtmlCollection_Interceptor_ListMixin_ImmutableListMixin, W._HtmlCollection_Interceptor_ListMixin);
    _inherit(W.HtmlCollection, W._HtmlCollection_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(W.MidiInputMap, W._MidiInputMap_Interceptor_MapMixin);
    _inherit(W.MidiOutputMap, W._MidiOutputMap_Interceptor_MapMixin);
    _inherit(W._MimeTypeArray_Interceptor_ListMixin_ImmutableListMixin, W._MimeTypeArray_Interceptor_ListMixin);
    _inherit(W.MimeTypeArray, W._MimeTypeArray_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(W._NodeList_Interceptor_ListMixin_ImmutableListMixin, W._NodeList_Interceptor_ListMixin);
    _inherit(W.NodeList, W._NodeList_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(W._PluginArray_Interceptor_ListMixin_ImmutableListMixin, W._PluginArray_Interceptor_ListMixin);
    _inherit(W.PluginArray, W._PluginArray_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(W.RtcStatsReport, W._RtcStatsReport_Interceptor_MapMixin);
    _inherit(W._SourceBufferList_EventTarget_ListMixin_ImmutableListMixin, W._SourceBufferList_EventTarget_ListMixin);
    _inherit(W.SourceBufferList, W._SourceBufferList_EventTarget_ListMixin_ImmutableListMixin);
    _inherit(W._SpeechGrammarList_Interceptor_ListMixin_ImmutableListMixin, W._SpeechGrammarList_Interceptor_ListMixin);
    _inherit(W.SpeechGrammarList, W._SpeechGrammarList_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(W.Storage, W._Storage_Interceptor_MapMixin);
    _inherit(W._TextTrackCueList_Interceptor_ListMixin_ImmutableListMixin, W._TextTrackCueList_Interceptor_ListMixin);
    _inherit(W.TextTrackCueList, W._TextTrackCueList_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(W._TextTrackList_EventTarget_ListMixin_ImmutableListMixin, W._TextTrackList_EventTarget_ListMixin);
    _inherit(W.TextTrackList, W._TextTrackList_EventTarget_ListMixin_ImmutableListMixin);
    _inherit(W._TouchList_Interceptor_ListMixin_ImmutableListMixin, W._TouchList_Interceptor_ListMixin);
    _inherit(W.TouchList, W._TouchList_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(W.__CssRuleList_Interceptor_ListMixin_ImmutableListMixin, W.__CssRuleList_Interceptor_ListMixin);
    _inherit(W._CssRuleList, W.__CssRuleList_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(W._DomRect, W.DomRectReadOnly);
    _inherit(W.__GamepadList_Interceptor_ListMixin_ImmutableListMixin, W.__GamepadList_Interceptor_ListMixin);
    _inherit(W._GamepadList, W.__GamepadList_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(W.__NamedNodeMap_Interceptor_ListMixin_ImmutableListMixin, W.__NamedNodeMap_Interceptor_ListMixin);
    _inherit(W._NamedNodeMap, W.__NamedNodeMap_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(W.__SpeechRecognitionResultList_Interceptor_ListMixin_ImmutableListMixin, W.__SpeechRecognitionResultList_Interceptor_ListMixin);
    _inherit(W._SpeechRecognitionResultList, W.__SpeechRecognitionResultList_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(W.__StyleSheetList_Interceptor_ListMixin_ImmutableListMixin, W.__StyleSheetList_Interceptor_ListMixin);
    _inherit(W._StyleSheetList, W.__StyleSheetList_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(P._LengthList_Interceptor_ListMixin_ImmutableListMixin, P._LengthList_Interceptor_ListMixin);
    _inherit(P.LengthList, P._LengthList_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(P._NumberList_Interceptor_ListMixin_ImmutableListMixin, P._NumberList_Interceptor_ListMixin);
    _inherit(P.NumberList, P._NumberList_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(P._StringList_Interceptor_ListMixin_ImmutableListMixin, P._StringList_Interceptor_ListMixin);
    _inherit(P.StringList, P._StringList_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(P._TransformList_Interceptor_ListMixin_ImmutableListMixin, P._TransformList_Interceptor_ListMixin);
    _inherit(P.TransformList, P._TransformList_Interceptor_ListMixin_ImmutableListMixin);
    _inherit(P.AudioParamMap, P._AudioParamMap_Interceptor_MapMixin);
    _inherit(P.OfflineAudioContext, P.BaseAudioContext);
    _inherit(P._SqlResultSetRowList_Interceptor_ListMixin_ImmutableListMixin, P._SqlResultSetRowList_Interceptor_ListMixin);
    _inherit(P.SqlResultSetRowList, P._SqlResultSetRowList_Interceptor_ListMixin_ImmutableListMixin);
    _mixin(H._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin, P.ListMixin);
    _mixin(H._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin_FixedLengthListMixin, H.FixedLengthListMixin);
    _mixin(H._NativeTypedArrayOfInt_NativeTypedArray_ListMixin, P.ListMixin);
    _mixin(H._NativeTypedArrayOfInt_NativeTypedArray_ListMixin_FixedLengthListMixin, H.FixedLengthListMixin);
    _mixin(P._AsyncStreamController, P._AsyncStreamControllerDispatch);
    _mixin(P._UnmodifiableMapView_MapView__UnmodifiableMapMixin, P._UnmodifiableMapMixin);
    _mixin(W._CssStyleDeclaration_Interceptor_CssStyleDeclarationBase, W.CssStyleDeclarationBase);
    _mixin(W._DomRectList_Interceptor_ListMixin, P.ListMixin);
    _mixin(W._DomRectList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W._DomStringList_Interceptor_ListMixin, P.ListMixin);
    _mixin(W._DomStringList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W._FileList_Interceptor_ListMixin, P.ListMixin);
    _mixin(W._FileList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W._HtmlCollection_Interceptor_ListMixin, P.ListMixin);
    _mixin(W._HtmlCollection_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W._MidiInputMap_Interceptor_MapMixin, P.MapMixin);
    _mixin(W._MidiOutputMap_Interceptor_MapMixin, P.MapMixin);
    _mixin(W._MimeTypeArray_Interceptor_ListMixin, P.ListMixin);
    _mixin(W._MimeTypeArray_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W._NodeList_Interceptor_ListMixin, P.ListMixin);
    _mixin(W._NodeList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W._PluginArray_Interceptor_ListMixin, P.ListMixin);
    _mixin(W._PluginArray_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W._RtcStatsReport_Interceptor_MapMixin, P.MapMixin);
    _mixin(W._SourceBufferList_EventTarget_ListMixin, P.ListMixin);
    _mixin(W._SourceBufferList_EventTarget_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W._SpeechGrammarList_Interceptor_ListMixin, P.ListMixin);
    _mixin(W._SpeechGrammarList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W._Storage_Interceptor_MapMixin, P.MapMixin);
    _mixin(W._TextTrackCueList_Interceptor_ListMixin, P.ListMixin);
    _mixin(W._TextTrackCueList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W._TextTrackList_EventTarget_ListMixin, P.ListMixin);
    _mixin(W._TextTrackList_EventTarget_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W._TouchList_Interceptor_ListMixin, P.ListMixin);
    _mixin(W._TouchList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W.__CssRuleList_Interceptor_ListMixin, P.ListMixin);
    _mixin(W.__CssRuleList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W.__GamepadList_Interceptor_ListMixin, P.ListMixin);
    _mixin(W.__GamepadList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W.__NamedNodeMap_Interceptor_ListMixin, P.ListMixin);
    _mixin(W.__NamedNodeMap_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W.__SpeechRecognitionResultList_Interceptor_ListMixin, P.ListMixin);
    _mixin(W.__SpeechRecognitionResultList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(W.__StyleSheetList_Interceptor_ListMixin, P.ListMixin);
    _mixin(W.__StyleSheetList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(P._LengthList_Interceptor_ListMixin, P.ListMixin);
    _mixin(P._LengthList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(P._NumberList_Interceptor_ListMixin, P.ListMixin);
    _mixin(P._NumberList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(P._StringList_Interceptor_ListMixin, P.ListMixin);
    _mixin(P._StringList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(P._TransformList_Interceptor_ListMixin, P.ListMixin);
    _mixin(P._TransformList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
    _mixin(P._AudioParamMap_Interceptor_MapMixin, P.MapMixin);
    _mixin(P._SqlResultSetRowList_Interceptor_ListMixin, P.ListMixin);
    _mixin(P._SqlResultSetRowList_Interceptor_ListMixin_ImmutableListMixin, W.ImmutableListMixin);
  })();
  var init = {
    typeUniverse: {eC: new Map(), tR: {}, eT: {}, tPV: {}, sEA: []},
    mangledGlobalNames: {int: "int", double: "double", num: "num", String: "String", bool: "bool", Null: "Null", List: "List"},
    mangledNames: {},
    getTypeFromName: getGlobalFromName,
    metadata: [],
    types: ["Null()", "~()", "~(String,@)", "~(~())", "@(@)", "Null(@)", "~(@)", "~(Object,StackTrace)", "Null(String,@)", "@(@,String)", "@(String)", "Null(~())", "Null(@,StackTrace)", "Null(int,@)", "~([Object?])", "Null(Object,StackTrace)", "_Future<@>(@)", "Null(Object?,Object?)", "Null(Symbol0,@)", "~(String,String)", "bool*(@,MessageSender*[Function*])", "~(Tab0*)", "Future<Null>*(RuntimeOnMessageData*)", "Object?(Object?)"],
    interceptorsByTag: null,
    leafTags: null,
    arrayRti: typeof Symbol == "function" && typeof Symbol() == "symbol" ? Symbol("$ti") : "$ti"
  };
  H._Universe_addRules(init.typeUniverse, JSON.parse('{"JavaScriptFunction":"JavaScriptObject","Chrome":"JavaScriptObject","ContextMenusPropsOnClickData":"JavaScriptObject","CreateContextMenusProps":"JavaScriptObject","UpdateContextMenusProps":"JavaScriptObject","ContextMenus":"JavaScriptObject","OnClicked0":"JavaScriptObject","Tab0":"JavaScriptObject","TabMutedProps0":"JavaScriptObject","TabZoomSettings":"JavaScriptObject","TabExecuteScriptProps":"JavaScriptObject","TabInsertCSSProps":"JavaScriptObject","QueryProps":"JavaScriptObject","TabCreateProps0":"JavaScriptObject","ReloadProps":"JavaScriptObject","MoveProperties":"JavaScriptObject","UpdateProperties":"JavaScriptObject","SendMessageOptions":"JavaScriptObject","TabCaptureVisibleProps":"JavaScriptObject","HighlightInfo":"JavaScriptObject","OnCreated":"JavaScriptObject","TabOnUpdatedChangeInfo":"JavaScriptObject","OnUpdated":"JavaScriptObject","MoveInfo":"JavaScriptObject","OnMoved":"JavaScriptObject","ActiveInfo0":"JavaScriptObject","OnActivated":"JavaScriptObject","OnHighligtedHighlightInfo":"JavaScriptObject","OnHighlighted":"JavaScriptObject","OnDetachedInfo":"JavaScriptObject","OnDetached":"JavaScriptObject","OnAttachedInfo":"JavaScriptObject","OnAttached":"JavaScriptObject","OnRemoveInfo":"JavaScriptObject","OnRemoved":"JavaScriptObject","OnReplaced":"JavaScriptObject","ZoomChangeInfo":"JavaScriptObject","OnZoomChange":"JavaScriptObject","Tabs0":"JavaScriptObject","Button":"JavaScriptObject","Item":"JavaScriptObject","NotificationOptions":"JavaScriptObject","OnClosed":"JavaScriptObject","OnClicked1":"JavaScriptObject","OnButtonClicked":"JavaScriptObject","Notifications":"JavaScriptObject","Window0":"JavaScriptObject","WindowsGetInfoProps":"JavaScriptObject","WindowCreateData":"JavaScriptObject","WindowUpdateProps":"JavaScriptObject","Windows0":"JavaScriptObject","LastError":"JavaScriptObject","MessageSender":"JavaScriptObject","PlatformInfo":"JavaScriptObject","SendMessageProps":"JavaScriptObject","Manifest":"JavaScriptObject","RuntimeOnInstalledData":"JavaScriptObject","OnInstalled0":"JavaScriptObject","OnMessage":"JavaScriptObject","OnStartup":"JavaScriptObject","OnUpdateAvailableProps":"JavaScriptObject","OnUpdateAvailable":"JavaScriptObject","Runtime0":"JavaScriptObject","SetTitleProps":"JavaScriptObject","GetTitleProps":"JavaScriptObject","SetBadgeTextProps":"JavaScriptObject","GetBadgeTextProps":"JavaScriptObject","OnClickDataProps":"JavaScriptObject","SetPopupProps":"JavaScriptObject","GetPopupProps":"JavaScriptObject","GetBadgeBackgroundColorProps":"JavaScriptObject","SetBadgeBackgroundColorProps":"JavaScriptObject","SetIconProps":"JavaScriptObject","BrowserAction":"JavaScriptObject","OnClicked":"JavaScriptObject","Cookie":"JavaScriptObject","GetProps":"JavaScriptObject","GetALLProps":"JavaScriptObject","SetProps":"JavaScriptObject","RemoveProps":"JavaScriptObject","CookieChangeInfo":"JavaScriptObject","CookieStore0":"JavaScriptObject","OnChanged":"JavaScriptObject","Cookies":"JavaScriptObject","GetAuthTokenDetails":"JavaScriptObject","RemoveCachedAuthTokenDetails":"JavaScriptObject","Identity":"JavaScriptObject","Storage0":"JavaScriptObject","_Local":"JavaScriptObject","_Sync":"JavaScriptObject","_OnChanged":"JavaScriptObject","Suggestion":"JavaScriptObject","Omnibox":"JavaScriptObject","IconInfo":"JavaScriptObject","ExtensionInfo":"JavaScriptObject","OnInstalled":"JavaScriptObject","OnUninstalled":"JavaScriptObject","OnEnabled":"JavaScriptObject","OnDisabled":"JavaScriptObject","UninstallOptions":"JavaScriptObject","UninstallSelfOptions":"JavaScriptObject","Management":"JavaScriptObject","OriginTypes":"JavaScriptObject","RemovalOptions":"JavaScriptObject","DataTypeSet":"JavaScriptObject","SettingsResult":"JavaScriptObject","BrowsingData":"JavaScriptObject","ContentSettings":"JavaScriptObject","HistoryItem":"JavaScriptObject","HistoryVisitItem":"JavaScriptObject","HistorySearchQuery":"JavaScriptObject","HistoryGetVisitsDetails":"JavaScriptObject","HistoryAddURLDetails":"JavaScriptObject","HistoryDeleteURLDetails":"JavaScriptObject","HistoryOnVisitRemovedDetails":"JavaScriptObject","HistoryDeleteRangeDetails":"JavaScriptObject","_HistoryOnVisited":"JavaScriptObject","_HistoryOnVisitRemoved":"JavaScriptObject","History0":"JavaScriptObject","DownloadOptionsHttpHeader":"JavaScriptObject","DownloadOptions":"JavaScriptObject","Downloads":"JavaScriptObject","Extension":"JavaScriptObject","ContentSettingAutomaticDownloadsSetDetails":"JavaScriptObject","ContentSettingAutomaticDownloadsGetDetails":"JavaScriptObject","ContentSettingAutomaticDownloads":"JavaScriptObject","ContentSettingCameraSetDetails":"JavaScriptObject","ContentSettingCameraGetDetails":"JavaScriptObject","ContentSettingCamera":"JavaScriptObject","ContentSettingCookiesSetDetails":"JavaScriptObject","ContentSettingCookiesGetDetails":"JavaScriptObject","ContentSettingCookies":"JavaScriptObject","ContentSettingImagesSetDetails":"JavaScriptObject","ContentSettingImagesGetDetails":"JavaScriptObject","ContentSettingImages":"JavaScriptObject","ContentSettingJSSetDetails":"JavaScriptObject","ContentSettingJSGetDetails":"JavaScriptObject","ContentSettingJS":"JavaScriptObject","ContentSettingLocationSetDetails":"JavaScriptObject","ContentSettingLocationGetDetails":"JavaScriptObject","ContentSettingLocation":"JavaScriptObject","ContentSettingMicrophoneSetDetails":"JavaScriptObject","ContentSettingMicrophoneGetDetails":"JavaScriptObject","ContentSettingMicrophone":"JavaScriptObject","ContentSettingNotificationSetDetails":"JavaScriptObject","ContentSettingNotificationGetDetails":"JavaScriptObject","ContentSettingNotification":"JavaScriptObject","ContentSettingPluginsSetDetails":"JavaScriptObject","ContentSettingPluginsGetDetails":"JavaScriptObject","ContentSettingPlugins":"JavaScriptObject","ContentSettingPopupsSetDetails":"JavaScriptObject","ContentSettingPopupsGetDetails":"JavaScriptObject","ContentSettingPopups":"JavaScriptObject","ContentSettingUnsandboxedPluginsSetDetails":"JavaScriptObject","ContentSettingUnsandboxedPluginsGetDetails":"JavaScriptObject","ContentSettingUnsandboxedPlugins":"JavaScriptObject","ContentSettingResourceIdentifier":"JavaScriptObject","ContentSettingClearDetails":"JavaScriptObject","ContentDetailsGetReturnValue":"JavaScriptObject","PlainJavaScriptObject":"JavaScriptObject","UnknownJavaScriptObject":"JavaScriptObject","JsTestability":"JavaScriptObject","JsTestabilityRegistry":"JavaScriptObject","HtmlFormControlsCollection":"HtmlCollection","NativeFloat32List":"NativeTypedArrayOfDouble","JSBool":{"bool":[]},"JSNull":{"Null":[]},"JavaScriptObject":{"Function":[],"MessageSender":[],"Tab0":[]},"JSNumber":{"num":[]},"JSInt":{"int":[],"num":[]},"JSDouble":{"num":[]},"JSString":{"String":[]},"Symbol":{"Symbol0":[]},"NullError":{"Error":[]},"JsNoSuchMethodError":{"Error":[]},"UnknownJsTypeError":{"Error":[]},"_StackTrace":{"StackTrace":[]},"Closure":{"Function":[]},"TearOffClosure":{"Function":[]},"StaticClosure":{"Function":[]},"BoundClosure":{"Function":[]},"RuntimeError":{"Error":[]},"NativeTypedArray":{"JavaScriptIndexingBehavior":["1"]},"NativeTypedArrayOfDouble":{"JavaScriptIndexingBehavior":["double"]},"NativeTypedArrayOfInt":{"JavaScriptIndexingBehavior":["int"]},"NativeInt16List":{"JavaScriptIndexingBehavior":["int"]},"NativeInt32List":{"JavaScriptIndexingBehavior":["int"]},"NativeInt8List":{"JavaScriptIndexingBehavior":["int"]},"NativeUint16List":{"JavaScriptIndexingBehavior":["int"]},"NativeUint32List":{"JavaScriptIndexingBehavior":["int"]},"NativeUint8ClampedList":{"JavaScriptIndexingBehavior":["int"]},"NativeUint8List":{"JavaScriptIndexingBehavior":["int"]},"_Error":{"Error":[]},"_TypeError":{"Error":[]},"_AsyncCompleter":{"_Completer":["1"]},"_Future":{"Future":["1"]},"_AsyncStreamController":{"_StreamController":["1"]},"_ControllerStream":{"Stream":["1"]},"_StreamImpl":{"Stream":["1"]},"AsyncError":{"Error":[]},"double":{"num":[]},"int":{"num":[]},"AssertionError":{"Error":[]},"TypeError":{"Error":[]},"NullThrownError":{"Error":[]},"ArgumentError":{"Error":[]},"RangeError":{"Error":[]},"IndexError":{"Error":[]},"NoSuchMethodError":{"Error":[]},"UnsupportedError":{"Error":[]},"UnimplementedError":{"Error":[]},"StateError":{"Error":[]},"ConcurrentModificationError":{"Error":[]},"StackOverflowError":{"Error":[]},"CyclicInitializationError":{"Error":[]},"_StringStackTrace":{"StackTrace":[]},"DomRectList":{"JavaScriptIndexingBehavior":["Rectangle<num>"]},"DomRectReadOnly":{"Rectangle":["num"]},"DomStringList":{"JavaScriptIndexingBehavior":["String"]},"FileList":{"JavaScriptIndexingBehavior":["File"]},"HtmlCollection":{"JavaScriptIndexingBehavior":["Node"]},"MimeTypeArray":{"JavaScriptIndexingBehavior":["MimeType"]},"NodeList":{"JavaScriptIndexingBehavior":["Node"]},"PluginArray":{"JavaScriptIndexingBehavior":["Plugin"]},"SourceBufferList":{"JavaScriptIndexingBehavior":["SourceBuffer"]},"SpeechGrammarList":{"JavaScriptIndexingBehavior":["SpeechGrammar"]},"TextTrackCueList":{"JavaScriptIndexingBehavior":["TextTrackCue"]},"TextTrackList":{"JavaScriptIndexingBehavior":["TextTrack"]},"TouchList":{"JavaScriptIndexingBehavior":["Touch"]},"_CssRuleList":{"JavaScriptIndexingBehavior":["CssRule"]},"_DomRect":{"Rectangle":["num"]},"_GamepadList":{"JavaScriptIndexingBehavior":["Gamepad?"]},"_NamedNodeMap":{"JavaScriptIndexingBehavior":["Node"]},"_SpeechRecognitionResultList":{"JavaScriptIndexingBehavior":["SpeechRecognitionResult"]},"_StyleSheetList":{"JavaScriptIndexingBehavior":["StyleSheet"]}}'));
  H._Universe_addErasedTypes(init.typeUniverse, JSON.parse('{"JSArray":1,"JSUnmodifiableArray":1,"ArrayIterator":1,"EfficientLengthIterable":1,"ListIterator":1,"FixedLengthListMixin":1,"ConstantMap":2,"LinkedHashMapKeyIterable":1,"LinkedHashMapKeyIterator":1,"NativeTypedArray":1,"_FutureListener":2,"_AsyncStreamControllerDispatch":1,"_ControllerSubscription":1,"_BufferingStreamSubscription":1,"_StreamImpl":1,"_DelayedEvent":1,"_DelayedData":1,"_PendingEvents":1,"_StreamImplEvents":1,"_StreamIterator":1,"ListMixin":1,"MapBase":2,"MapMixin":2,"_UnmodifiableMapMixin":2,"MapView":2,"UnmodifiableMapView":2,"_UnmodifiableMapView_MapView__UnmodifiableMapMixin":2,"Iterable":1,"ImmutableListMixin":1,"FixedSizeListIterator":1,"_RectangleBase":1}'));
  0;
  var type$ = (function rtii() {
    var findType = H.findType;
    return {
      ConstantMapView_Symbol_dynamic: findType("ConstantMapView<Symbol0,@>"),
      Error: findType("Error"),
      Function: findType("Function"),
      Future_dynamic: findType("Future<@>"),
      JSArray_dynamic: findType("JSArray<@>"),
      JSNull: findType("JSNull"),
      JavaScriptFunction: findType("JavaScriptFunction"),
      JavaScriptIndexingBehavior_dynamic: findType("JavaScriptIndexingBehavior<@>"),
      JsLinkedHashMap_Symbol_dynamic: findType("JsLinkedHashMap<Symbol0,@>"),
      Null: findType("Null"),
      Object: findType("Object"),
      Rectangle_num: findType("Rectangle<num>"),
      String: findType("String"),
      UnknownJavaScriptObject: findType("UnknownJavaScriptObject"),
      _AsyncCompleter_void: findType("_AsyncCompleter<~>"),
      _Future_dynamic: findType("_Future<@>"),
      _Future_int: findType("_Future<int>"),
      _Future_void: findType("_Future<~>"),
      bool: findType("bool"),
      double: findType("double"),
      dynamic: findType("@"),
      dynamic_Function_Object: findType("@(Object)"),
      dynamic_Function_Object_StackTrace: findType("@(Object,StackTrace)"),
      int: findType("int"),
      legacy_ActiveInfo: findType("ActiveInfo1*"),
      legacy_Never: findType("0&*"),
      legacy_Object: findType("Object*"),
      legacy_RuntimeOnInstalledData: findType("RuntimeOnInstalledData0*"),
      legacy_RuntimeOnMessageData: findType("RuntimeOnMessageData*"),
      legacy_RuntimeOnUpdateAvailableProps: findType("RuntimeOnUpdateAvailableProps*"),
      legacy_Tab: findType("Tab*"),
      legacy_TabOnAttachedInfo: findType("TabOnAttachedInfo*"),
      legacy_TabOnDetachedInfo: findType("TabOnDetachedInfo*"),
      legacy_TabOnHighlightedInfo: findType("TabOnHighlightedInfo*"),
      legacy_TabOnMovedController: findType("TabOnMovedController*"),
      legacy_TabOnReplaced: findType("TabOnReplaced*"),
      legacy_TabOnUpdatedController: findType("TabOnUpdatedController*"),
      legacy_TabRemoveInfo: findType("TabRemoveInfo*"),
      legacy_TabZoomChangeInfo: findType("TabZoomChangeInfo*"),
      legacy_WindowOnCreatedData: findType("WindowOnCreatedData*"),
      legacy_WindowOnFocusChanged: findType("WindowOnFocusChanged*"),
      legacy_WindowOnRemovedData: findType("WindowOnRemovedData*"),
      legacy_bool: findType("bool*"),
      nullable_Future_Null: findType("Future<Null>?"),
      nullable_Object: findType("Object?"),
      num: findType("num"),
      void: findType("~"),
      void_Function_Object: findType("~(Object)"),
      void_Function_Object_StackTrace: findType("~(Object,StackTrace)")
    };
  })();
  (function constants() {
    var makeConstList = hunkHelpers.makeConstList;
    C.Interceptor_methods = J.Interceptor.prototype;
    C.JSArray_methods = J.JSArray.prototype;
    C.JSInt_methods = J.JSInt.prototype;
    C.JSNull_methods = J.JSNull.prototype;
    C.JSNumber_methods = J.JSNumber.prototype;
    C.JSString_methods = J.JSString.prototype;
    C.JavaScriptFunction_methods = J.JavaScriptFunction.prototype;
    C.PlainJavaScriptObject_methods = J.PlainJavaScriptObject.prototype;
    C.UnknownJavaScriptObject_methods = J.UnknownJavaScriptObject.prototype;
    C.C_JS_CONST = function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
};
    C.C_JS_CONST0 = function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
};
    C.C_JS_CONST6 = function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
};
    C.C_JS_CONST1 = function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
};
    C.C_JS_CONST2 = function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
};
    C.C_JS_CONST5 = function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
};
    C.C_JS_CONST4 = function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
};
    C.C_JS_CONST3 = function(hooks) { return hooks; }
;
    C.C__Required = new H._Required();
    C.C__RootZone = new P._RootZone();
    C.C__StringStackTrace = new P._StringStackTrace();
    C.List_empty = makeConstList([]);
    C.List_empty0 = makeConstList([]);
    C.Map_empty = new H.ConstantStringMap(0, {}, C.List_empty0, H.findType("ConstantStringMap<Symbol0*,@>"));
    C.Symbol_call = new H.Symbol("call");
  })();
  (function staticFields() {
    $._JS_INTEROP_INTERCEPTOR_TAG = null;
    $.BoundClosure_selfFieldNameCache = null;
    $.BoundClosure_receiverFieldNameCache = null;
    $.getTagFunction = null;
    $.alternateTagFunction = null;
    $.prototypeForTagFunction = null;
    $.dispatchRecordsForInstanceTags = null;
    $.interceptorsForUncacheableTags = null;
    $.initNativeDispatchFlag = null;
    $._nextCallback = null;
    $._lastCallback = null;
    $._lastPriorityCallback = null;
    $._isInCallbackLoop = false;
    $.Zone__current = C.C__RootZone;
    $._toStringVisiting = [];
  })();
  (function lazyInitializers() {
    var _lazy = hunkHelpers.lazy,
      _lazyOld = hunkHelpers.lazyOld;
    _lazy($, "DART_CLOSURE_PROPERTY_NAME", "$get$DART_CLOSURE_PROPERTY_NAME", function() {
      return H.getIsolateAffinityTag("_$dart_dartClosure");
    });
    _lazy($, "TypeErrorDecoder_noSuchMethodPattern", "$get$TypeErrorDecoder_noSuchMethodPattern", function() {
      return H.TypeErrorDecoder_extractPattern(H.TypeErrorDecoder_provokeCallErrorOn({
        toString: function() {
          return "$receiver$";
        }
      }));
    });
    _lazy($, "TypeErrorDecoder_notClosurePattern", "$get$TypeErrorDecoder_notClosurePattern", function() {
      return H.TypeErrorDecoder_extractPattern(H.TypeErrorDecoder_provokeCallErrorOn({$method$: null,
        toString: function() {
          return "$receiver$";
        }
      }));
    });
    _lazy($, "TypeErrorDecoder_nullCallPattern", "$get$TypeErrorDecoder_nullCallPattern", function() {
      return H.TypeErrorDecoder_extractPattern(H.TypeErrorDecoder_provokeCallErrorOn(null));
    });
    _lazy($, "TypeErrorDecoder_nullLiteralCallPattern", "$get$TypeErrorDecoder_nullLiteralCallPattern", function() {
      return H.TypeErrorDecoder_extractPattern(function() {
        var $argumentsExpr$ = '$arguments$';
        try {
          null.$method$($argumentsExpr$);
        } catch (e) {
          return e.message;
        }
      }());
    });
    _lazy($, "TypeErrorDecoder_undefinedCallPattern", "$get$TypeErrorDecoder_undefinedCallPattern", function() {
      return H.TypeErrorDecoder_extractPattern(H.TypeErrorDecoder_provokeCallErrorOn(void 0));
    });
    _lazy($, "TypeErrorDecoder_undefinedLiteralCallPattern", "$get$TypeErrorDecoder_undefinedLiteralCallPattern", function() {
      return H.TypeErrorDecoder_extractPattern(function() {
        var $argumentsExpr$ = '$arguments$';
        try {
          (void 0).$method$($argumentsExpr$);
        } catch (e) {
          return e.message;
        }
      }());
    });
    _lazy($, "TypeErrorDecoder_nullPropertyPattern", "$get$TypeErrorDecoder_nullPropertyPattern", function() {
      return H.TypeErrorDecoder_extractPattern(H.TypeErrorDecoder_provokePropertyErrorOn(null));
    });
    _lazy($, "TypeErrorDecoder_nullLiteralPropertyPattern", "$get$TypeErrorDecoder_nullLiteralPropertyPattern", function() {
      return H.TypeErrorDecoder_extractPattern(function() {
        try {
          null.$method$;
        } catch (e) {
          return e.message;
        }
      }());
    });
    _lazy($, "TypeErrorDecoder_undefinedPropertyPattern", "$get$TypeErrorDecoder_undefinedPropertyPattern", function() {
      return H.TypeErrorDecoder_extractPattern(H.TypeErrorDecoder_provokePropertyErrorOn(void 0));
    });
    _lazy($, "TypeErrorDecoder_undefinedLiteralPropertyPattern", "$get$TypeErrorDecoder_undefinedLiteralPropertyPattern", function() {
      return H.TypeErrorDecoder_extractPattern(function() {
        try {
          (void 0).$method$;
        } catch (e) {
          return e.message;
        }
      }());
    });
    _lazy($, "_AsyncRun__scheduleImmediateClosure", "$get$_AsyncRun__scheduleImmediateClosure", function() {
      return P._AsyncRun__initializeScheduleImmediate();
    });
    _lazyOld($, "chrome", "$get$chrome", function() {
      return new S._Chrome(self.chrome);
    });
  })();
  (function nativeSupport() {
    !function() {
      var intern = function(s) {
        var o = {};
        o[s] = 1;
        return Object.keys(hunkHelpers.convertToFastObject(o))[0];
      };
      init.getIsolateTag = function(name) {
        return intern("___dart_" + name + init.isolateTag);
      };
      var tableProperty = "___dart_isolate_tags_";
      var usedProperties = Object[tableProperty] || (Object[tableProperty] = Object.create(null));
      var rootProperty = "_ZxYxX";
      for (var i = 0;; i++) {
        var property = intern(rootProperty + "_" + i + "_");
        if (!(property in usedProperties)) {
          usedProperties[property] = 1;
          init.isolateTag = property;
          break;
        }
      }
      init.dispatchPropertyName = init.getIsolateTag("dispatch_record");
    }();
    hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer: J.Interceptor, AbortPaymentEvent: J.Interceptor, AnimationEffectReadOnly: J.Interceptor, AnimationEffectTiming: J.Interceptor, AnimationEffectTimingReadOnly: J.Interceptor, AnimationEvent: J.Interceptor, AnimationPlaybackEvent: J.Interceptor, AnimationTimeline: J.Interceptor, AnimationWorkletGlobalScope: J.Interceptor, ApplicationCacheErrorEvent: J.Interceptor, AuthenticatorAssertionResponse: J.Interceptor, AuthenticatorAttestationResponse: J.Interceptor, AuthenticatorResponse: J.Interceptor, BackgroundFetchClickEvent: J.Interceptor, BackgroundFetchEvent: J.Interceptor, BackgroundFetchFailEvent: J.Interceptor, BackgroundFetchFetch: J.Interceptor, BackgroundFetchManager: J.Interceptor, BackgroundFetchSettledFetch: J.Interceptor, BackgroundFetchedEvent: J.Interceptor, BarProp: J.Interceptor, BarcodeDetector: J.Interceptor, BeforeInstallPromptEvent: J.Interceptor, BeforeUnloadEvent: J.Interceptor, BlobEvent: J.Interceptor, BluetoothRemoteGATTDescriptor: J.Interceptor, Body: J.Interceptor, BudgetState: J.Interceptor, CacheStorage: J.Interceptor, CanMakePaymentEvent: J.Interceptor, CanvasGradient: J.Interceptor, CanvasPattern: J.Interceptor, CanvasRenderingContext2D: J.Interceptor, Client: J.Interceptor, Clients: J.Interceptor, ClipboardEvent: J.Interceptor, CloseEvent: J.Interceptor, CompositionEvent: J.Interceptor, CookieStore: J.Interceptor, Coordinates: J.Interceptor, Credential: J.Interceptor, CredentialUserData: J.Interceptor, CredentialsContainer: J.Interceptor, Crypto: J.Interceptor, CryptoKey: J.Interceptor, CSS: J.Interceptor, CSSVariableReferenceValue: J.Interceptor, CustomElementRegistry: J.Interceptor, CustomEvent: J.Interceptor, DataTransfer: J.Interceptor, DataTransferItem: J.Interceptor, DeprecatedStorageInfo: J.Interceptor, DeprecatedStorageQuota: J.Interceptor, DeprecationReport: J.Interceptor, DetectedBarcode: J.Interceptor, DetectedFace: J.Interceptor, DetectedText: J.Interceptor, DeviceAcceleration: J.Interceptor, DeviceMotionEvent: J.Interceptor, DeviceOrientationEvent: J.Interceptor, DeviceRotationRate: J.Interceptor, DirectoryEntry: J.Interceptor, DirectoryReader: J.Interceptor, DocumentOrShadowRoot: J.Interceptor, DocumentTimeline: J.Interceptor, DOMError: J.Interceptor, DOMImplementation: J.Interceptor, Iterator: J.Interceptor, DOMMatrix: J.Interceptor, DOMMatrixReadOnly: J.Interceptor, DOMParser: J.Interceptor, DOMPoint: J.Interceptor, DOMPointReadOnly: J.Interceptor, DOMQuad: J.Interceptor, DOMStringMap: J.Interceptor, Entry: J.Interceptor, ErrorEvent: J.Interceptor, Event: J.Interceptor, InputEvent: J.Interceptor, SubmitEvent: J.Interceptor, ExtendableEvent: J.Interceptor, ExtendableMessageEvent: J.Interceptor, External: J.Interceptor, FaceDetector: J.Interceptor, FederatedCredential: J.Interceptor, FetchEvent: J.Interceptor, FileEntry: J.Interceptor, DOMFileSystem: J.Interceptor, FocusEvent: J.Interceptor, FontFace: J.Interceptor, FontFaceSetLoadEvent: J.Interceptor, FontFaceSource: J.Interceptor, ForeignFetchEvent: J.Interceptor, FormData: J.Interceptor, GamepadButton: J.Interceptor, GamepadEvent: J.Interceptor, GamepadPose: J.Interceptor, Geolocation: J.Interceptor, Position: J.Interceptor, HashChangeEvent: J.Interceptor, Headers: J.Interceptor, HTMLHyperlinkElementUtils: J.Interceptor, IdleDeadline: J.Interceptor, ImageBitmap: J.Interceptor, ImageBitmapRenderingContext: J.Interceptor, ImageCapture: J.Interceptor, ImageData: J.Interceptor, InputDeviceCapabilities: J.Interceptor, InstallEvent: J.Interceptor, IntersectionObserver: J.Interceptor, IntersectionObserverEntry: J.Interceptor, InterventionReport: J.Interceptor, KeyboardEvent: J.Interceptor, KeyframeEffect: J.Interceptor, KeyframeEffectReadOnly: J.Interceptor, MediaCapabilities: J.Interceptor, MediaCapabilitiesInfo: J.Interceptor, MediaDeviceInfo: J.Interceptor, MediaEncryptedEvent: J.Interceptor, MediaError: J.Interceptor, MediaKeyMessageEvent: J.Interceptor, MediaKeyStatusMap: J.Interceptor, MediaKeySystemAccess: J.Interceptor, MediaKeys: J.Interceptor, MediaKeysPolicy: J.Interceptor, MediaMetadata: J.Interceptor, MediaQueryListEvent: J.Interceptor, MediaSession: J.Interceptor, MediaSettingsRange: J.Interceptor, MediaStreamEvent: J.Interceptor, MediaStreamTrackEvent: J.Interceptor, MemoryInfo: J.Interceptor, MessageChannel: J.Interceptor, MessageEvent: J.Interceptor, Metadata: J.Interceptor, MIDIConnectionEvent: J.Interceptor, MIDIMessageEvent: J.Interceptor, MouseEvent: J.Interceptor, DragEvent: J.Interceptor, MutationEvent: J.Interceptor, MutationObserver: J.Interceptor, WebKitMutationObserver: J.Interceptor, MutationRecord: J.Interceptor, NavigationPreloadManager: J.Interceptor, Navigator: J.Interceptor, NavigatorAutomationInformation: J.Interceptor, NavigatorConcurrentHardware: J.Interceptor, NavigatorCookies: J.Interceptor, NavigatorUserMediaError: J.Interceptor, NodeFilter: J.Interceptor, NodeIterator: J.Interceptor, NonDocumentTypeChildNode: J.Interceptor, NonElementParentNode: J.Interceptor, NoncedElement: J.Interceptor, NotificationEvent: J.Interceptor, OffscreenCanvasRenderingContext2D: J.Interceptor, OverconstrainedError: J.Interceptor, PageTransitionEvent: J.Interceptor, PaintRenderingContext2D: J.Interceptor, PaintSize: J.Interceptor, PaintWorkletGlobalScope: J.Interceptor, PasswordCredential: J.Interceptor, Path2D: J.Interceptor, PaymentAddress: J.Interceptor, PaymentInstruments: J.Interceptor, PaymentManager: J.Interceptor, PaymentRequestEvent: J.Interceptor, PaymentRequestUpdateEvent: J.Interceptor, PaymentResponse: J.Interceptor, PerformanceEntry: J.Interceptor, PerformanceLongTaskTiming: J.Interceptor, PerformanceMark: J.Interceptor, PerformanceMeasure: J.Interceptor, PerformanceNavigation: J.Interceptor, PerformanceNavigationTiming: J.Interceptor, PerformanceObserver: J.Interceptor, PerformanceObserverEntryList: J.Interceptor, PerformancePaintTiming: J.Interceptor, PerformanceResourceTiming: J.Interceptor, PerformanceServerTiming: J.Interceptor, PerformanceTiming: J.Interceptor, Permissions: J.Interceptor, PhotoCapabilities: J.Interceptor, PointerEvent: J.Interceptor, PopStateEvent: J.Interceptor, PositionError: J.Interceptor, Presentation: J.Interceptor, PresentationConnectionAvailableEvent: J.Interceptor, PresentationConnectionCloseEvent: J.Interceptor, PresentationReceiver: J.Interceptor, ProgressEvent: J.Interceptor, PromiseRejectionEvent: J.Interceptor, PublicKeyCredential: J.Interceptor, PushEvent: J.Interceptor, PushManager: J.Interceptor, PushMessageData: J.Interceptor, PushSubscription: J.Interceptor, PushSubscriptionOptions: J.Interceptor, Range: J.Interceptor, RelatedApplication: J.Interceptor, ReportBody: J.Interceptor, ReportingObserver: J.Interceptor, ResizeObserver: J.Interceptor, ResizeObserverEntry: J.Interceptor, RTCCertificate: J.Interceptor, RTCDataChannelEvent: J.Interceptor, RTCDTMFToneChangeEvent: J.Interceptor, RTCIceCandidate: J.Interceptor, mozRTCIceCandidate: J.Interceptor, RTCLegacyStatsReport: J.Interceptor, RTCPeerConnectionIceEvent: J.Interceptor, RTCRtpContributingSource: J.Interceptor, RTCRtpReceiver: J.Interceptor, RTCRtpSender: J.Interceptor, RTCSessionDescription: J.Interceptor, mozRTCSessionDescription: J.Interceptor, RTCStatsResponse: J.Interceptor, RTCTrackEvent: J.Interceptor, Screen: J.Interceptor, ScrollState: J.Interceptor, ScrollTimeline: J.Interceptor, SecurityPolicyViolationEvent: J.Interceptor, Selection: J.Interceptor, SensorErrorEvent: J.Interceptor, SharedArrayBuffer: J.Interceptor, SpeechRecognitionAlternative: J.Interceptor, SpeechRecognitionError: J.Interceptor, SpeechRecognitionEvent: J.Interceptor, SpeechSynthesisEvent: J.Interceptor, SpeechSynthesisVoice: J.Interceptor, StaticRange: J.Interceptor, StorageEvent: J.Interceptor, StorageManager: J.Interceptor, StyleMedia: J.Interceptor, StylePropertyMap: J.Interceptor, StylePropertyMapReadonly: J.Interceptor, SyncEvent: J.Interceptor, SyncManager: J.Interceptor, TaskAttributionTiming: J.Interceptor, TextDetector: J.Interceptor, TextEvent: J.Interceptor, TextMetrics: J.Interceptor, TouchEvent: J.Interceptor, TrackDefault: J.Interceptor, TrackEvent: J.Interceptor, TransitionEvent: J.Interceptor, WebKitTransitionEvent: J.Interceptor, TreeWalker: J.Interceptor, TrustedHTML: J.Interceptor, TrustedScriptURL: J.Interceptor, TrustedURL: J.Interceptor, UIEvent: J.Interceptor, UnderlyingSourceBase: J.Interceptor, URLSearchParams: J.Interceptor, VRCoordinateSystem: J.Interceptor, VRDeviceEvent: J.Interceptor, VRDisplayCapabilities: J.Interceptor, VRDisplayEvent: J.Interceptor, VREyeParameters: J.Interceptor, VRFrameData: J.Interceptor, VRFrameOfReference: J.Interceptor, VRPose: J.Interceptor, VRSessionEvent: J.Interceptor, VRStageBounds: J.Interceptor, VRStageBoundsPoint: J.Interceptor, VRStageParameters: J.Interceptor, ValidityState: J.Interceptor, VideoPlaybackQuality: J.Interceptor, VideoTrack: J.Interceptor, VTTRegion: J.Interceptor, WheelEvent: J.Interceptor, WindowClient: J.Interceptor, WorkletAnimation: J.Interceptor, WorkletGlobalScope: J.Interceptor, XPathEvaluator: J.Interceptor, XPathExpression: J.Interceptor, XPathNSResolver: J.Interceptor, XPathResult: J.Interceptor, XMLSerializer: J.Interceptor, XSLTProcessor: J.Interceptor, Bluetooth: J.Interceptor, BluetoothCharacteristicProperties: J.Interceptor, BluetoothRemoteGATTServer: J.Interceptor, BluetoothRemoteGATTService: J.Interceptor, BluetoothUUID: J.Interceptor, BudgetService: J.Interceptor, Cache: J.Interceptor, DOMFileSystemSync: J.Interceptor, DirectoryEntrySync: J.Interceptor, DirectoryReaderSync: J.Interceptor, EntrySync: J.Interceptor, FileEntrySync: J.Interceptor, FileReaderSync: J.Interceptor, FileWriterSync: J.Interceptor, HTMLAllCollection: J.Interceptor, Mojo: J.Interceptor, MojoHandle: J.Interceptor, MojoInterfaceRequestEvent: J.Interceptor, MojoWatcher: J.Interceptor, NFC: J.Interceptor, PagePopupController: J.Interceptor, Report: J.Interceptor, Request: J.Interceptor, ResourceProgressEvent: J.Interceptor, Response: J.Interceptor, SubtleCrypto: J.Interceptor, USBAlternateInterface: J.Interceptor, USBConfiguration: J.Interceptor, USBConnectionEvent: J.Interceptor, USBDevice: J.Interceptor, USBEndpoint: J.Interceptor, USBInTransferResult: J.Interceptor, USBInterface: J.Interceptor, USBIsochronousInTransferPacket: J.Interceptor, USBIsochronousInTransferResult: J.Interceptor, USBIsochronousOutTransferPacket: J.Interceptor, USBIsochronousOutTransferResult: J.Interceptor, USBOutTransferResult: J.Interceptor, WorkerLocation: J.Interceptor, WorkerNavigator: J.Interceptor, Worklet: J.Interceptor, IDBCursor: J.Interceptor, IDBCursorWithValue: J.Interceptor, IDBFactory: J.Interceptor, IDBIndex: J.Interceptor, IDBKeyRange: J.Interceptor, IDBObjectStore: J.Interceptor, IDBObservation: J.Interceptor, IDBObserver: J.Interceptor, IDBObserverChanges: J.Interceptor, IDBVersionChangeEvent: J.Interceptor, SVGAngle: J.Interceptor, SVGAnimatedAngle: J.Interceptor, SVGAnimatedBoolean: J.Interceptor, SVGAnimatedEnumeration: J.Interceptor, SVGAnimatedInteger: J.Interceptor, SVGAnimatedLength: J.Interceptor, SVGAnimatedLengthList: J.Interceptor, SVGAnimatedNumber: J.Interceptor, SVGAnimatedNumberList: J.Interceptor, SVGAnimatedPreserveAspectRatio: J.Interceptor, SVGAnimatedRect: J.Interceptor, SVGAnimatedString: J.Interceptor, SVGAnimatedTransformList: J.Interceptor, SVGMatrix: J.Interceptor, SVGPoint: J.Interceptor, SVGPreserveAspectRatio: J.Interceptor, SVGRect: J.Interceptor, SVGUnitTypes: J.Interceptor, AudioListener: J.Interceptor, AudioParam: J.Interceptor, AudioProcessingEvent: J.Interceptor, AudioTrack: J.Interceptor, AudioWorkletGlobalScope: J.Interceptor, AudioWorkletProcessor: J.Interceptor, OfflineAudioCompletionEvent: J.Interceptor, PeriodicWave: J.Interceptor, WebGLActiveInfo: J.Interceptor, ANGLEInstancedArrays: J.Interceptor, ANGLE_instanced_arrays: J.Interceptor, WebGLBuffer: J.Interceptor, WebGLCanvas: J.Interceptor, WebGLColorBufferFloat: J.Interceptor, WebGLCompressedTextureASTC: J.Interceptor, WebGLCompressedTextureATC: J.Interceptor, WEBGL_compressed_texture_atc: J.Interceptor, WebGLCompressedTextureETC1: J.Interceptor, WEBGL_compressed_texture_etc1: J.Interceptor, WebGLCompressedTextureETC: J.Interceptor, WebGLCompressedTexturePVRTC: J.Interceptor, WEBGL_compressed_texture_pvrtc: J.Interceptor, WebGLCompressedTextureS3TC: J.Interceptor, WEBGL_compressed_texture_s3tc: J.Interceptor, WebGLCompressedTextureS3TCsRGB: J.Interceptor, WebGLContextEvent: J.Interceptor, WebGLDebugRendererInfo: J.Interceptor, WEBGL_debug_renderer_info: J.Interceptor, WebGLDebugShaders: J.Interceptor, WEBGL_debug_shaders: J.Interceptor, WebGLDepthTexture: J.Interceptor, WEBGL_depth_texture: J.Interceptor, WebGLDrawBuffers: J.Interceptor, WEBGL_draw_buffers: J.Interceptor, EXTsRGB: J.Interceptor, EXT_sRGB: J.Interceptor, EXTBlendMinMax: J.Interceptor, EXT_blend_minmax: J.Interceptor, EXTColorBufferFloat: J.Interceptor, EXTColorBufferHalfFloat: J.Interceptor, EXTDisjointTimerQuery: J.Interceptor, EXTDisjointTimerQueryWebGL2: J.Interceptor, EXTFragDepth: J.Interceptor, EXT_frag_depth: J.Interceptor, EXTShaderTextureLOD: J.Interceptor, EXT_shader_texture_lod: J.Interceptor, EXTTextureFilterAnisotropic: J.Interceptor, EXT_texture_filter_anisotropic: J.Interceptor, WebGLFramebuffer: J.Interceptor, WebGLGetBufferSubDataAsync: J.Interceptor, WebGLLoseContext: J.Interceptor, WebGLExtensionLoseContext: J.Interceptor, WEBGL_lose_context: J.Interceptor, OESElementIndexUint: J.Interceptor, OES_element_index_uint: J.Interceptor, OESStandardDerivatives: J.Interceptor, OES_standard_derivatives: J.Interceptor, OESTextureFloat: J.Interceptor, OES_texture_float: J.Interceptor, OESTextureFloatLinear: J.Interceptor, OES_texture_float_linear: J.Interceptor, OESTextureHalfFloat: J.Interceptor, OES_texture_half_float: J.Interceptor, OESTextureHalfFloatLinear: J.Interceptor, OES_texture_half_float_linear: J.Interceptor, OESVertexArrayObject: J.Interceptor, OES_vertex_array_object: J.Interceptor, WebGLProgram: J.Interceptor, WebGLQuery: J.Interceptor, WebGLRenderbuffer: J.Interceptor, WebGLRenderingContext: J.Interceptor, WebGL2RenderingContext: J.Interceptor, WebGLSampler: J.Interceptor, WebGLShader: J.Interceptor, WebGLShaderPrecisionFormat: J.Interceptor, WebGLSync: J.Interceptor, WebGLTexture: J.Interceptor, WebGLTimerQueryEXT: J.Interceptor, WebGLTransformFeedback: J.Interceptor, WebGLUniformLocation: J.Interceptor, WebGLVertexArrayObject: J.Interceptor, WebGLVertexArrayObjectOES: J.Interceptor, WebGL: J.Interceptor, WebGL2RenderingContextBase: J.Interceptor, Database: J.Interceptor, SQLError: J.Interceptor, SQLResultSet: J.Interceptor, SQLTransaction: J.Interceptor, DataView: H.NativeTypedData, ArrayBufferView: H.NativeTypedData, Float32Array: H.NativeTypedArrayOfDouble, Float64Array: H.NativeTypedArrayOfDouble, Int16Array: H.NativeInt16List, Int32Array: H.NativeInt32List, Int8Array: H.NativeInt8List, Uint16Array: H.NativeUint16List, Uint32Array: H.NativeUint32List, Uint8ClampedArray: H.NativeUint8ClampedList, CanvasPixelArray: H.NativeUint8ClampedList, Uint8Array: H.NativeUint8List, HTMLAudioElement: W.HtmlElement, HTMLBRElement: W.HtmlElement, HTMLBaseElement: W.HtmlElement, HTMLBodyElement: W.HtmlElement, HTMLButtonElement: W.HtmlElement, HTMLCanvasElement: W.HtmlElement, HTMLContentElement: W.HtmlElement, HTMLDListElement: W.HtmlElement, HTMLDataElement: W.HtmlElement, HTMLDataListElement: W.HtmlElement, HTMLDetailsElement: W.HtmlElement, HTMLDialogElement: W.HtmlElement, HTMLDivElement: W.HtmlElement, HTMLEmbedElement: W.HtmlElement, HTMLFieldSetElement: W.HtmlElement, HTMLHRElement: W.HtmlElement, HTMLHeadElement: W.HtmlElement, HTMLHeadingElement: W.HtmlElement, HTMLHtmlElement: W.HtmlElement, HTMLIFrameElement: W.HtmlElement, HTMLImageElement: W.HtmlElement, HTMLInputElement: W.HtmlElement, HTMLLIElement: W.HtmlElement, HTMLLabelElement: W.HtmlElement, HTMLLegendElement: W.HtmlElement, HTMLLinkElement: W.HtmlElement, HTMLMapElement: W.HtmlElement, HTMLMediaElement: W.HtmlElement, HTMLMenuElement: W.HtmlElement, HTMLMetaElement: W.HtmlElement, HTMLMeterElement: W.HtmlElement, HTMLModElement: W.HtmlElement, HTMLOListElement: W.HtmlElement, HTMLObjectElement: W.HtmlElement, HTMLOptGroupElement: W.HtmlElement, HTMLOptionElement: W.HtmlElement, HTMLOutputElement: W.HtmlElement, HTMLParagraphElement: W.HtmlElement, HTMLParamElement: W.HtmlElement, HTMLPictureElement: W.HtmlElement, HTMLPreElement: W.HtmlElement, HTMLProgressElement: W.HtmlElement, HTMLQuoteElement: W.HtmlElement, HTMLScriptElement: W.HtmlElement, HTMLShadowElement: W.HtmlElement, HTMLSlotElement: W.HtmlElement, HTMLSourceElement: W.HtmlElement, HTMLSpanElement: W.HtmlElement, HTMLStyleElement: W.HtmlElement, HTMLTableCaptionElement: W.HtmlElement, HTMLTableCellElement: W.HtmlElement, HTMLTableDataCellElement: W.HtmlElement, HTMLTableHeaderCellElement: W.HtmlElement, HTMLTableColElement: W.HtmlElement, HTMLTableElement: W.HtmlElement, HTMLTableRowElement: W.HtmlElement, HTMLTableSectionElement: W.HtmlElement, HTMLTemplateElement: W.HtmlElement, HTMLTextAreaElement: W.HtmlElement, HTMLTimeElement: W.HtmlElement, HTMLTitleElement: W.HtmlElement, HTMLTrackElement: W.HtmlElement, HTMLUListElement: W.HtmlElement, HTMLUnknownElement: W.HtmlElement, HTMLVideoElement: W.HtmlElement, HTMLDirectoryElement: W.HtmlElement, HTMLFontElement: W.HtmlElement, HTMLFrameElement: W.HtmlElement, HTMLFrameSetElement: W.HtmlElement, HTMLMarqueeElement: W.HtmlElement, HTMLElement: W.HtmlElement, AccessibleNodeList: W.AccessibleNodeList, HTMLAnchorElement: W.AnchorElement, HTMLAreaElement: W.AreaElement, Blob: W.Blob, CDATASection: W.CharacterData, CharacterData: W.CharacterData, Comment: W.CharacterData, ProcessingInstruction: W.CharacterData, Text: W.CharacterData, CSSPerspective: W.CssPerspective, CSSCharsetRule: W.CssRule, CSSConditionRule: W.CssRule, CSSFontFaceRule: W.CssRule, CSSGroupingRule: W.CssRule, CSSImportRule: W.CssRule, CSSKeyframeRule: W.CssRule, MozCSSKeyframeRule: W.CssRule, WebKitCSSKeyframeRule: W.CssRule, CSSKeyframesRule: W.CssRule, MozCSSKeyframesRule: W.CssRule, WebKitCSSKeyframesRule: W.CssRule, CSSMediaRule: W.CssRule, CSSNamespaceRule: W.CssRule, CSSPageRule: W.CssRule, CSSRule: W.CssRule, CSSStyleRule: W.CssRule, CSSSupportsRule: W.CssRule, CSSViewportRule: W.CssRule, CSSStyleDeclaration: W.CssStyleDeclaration, MSStyleCSSProperties: W.CssStyleDeclaration, CSS2Properties: W.CssStyleDeclaration, CSSImageValue: W.CssStyleValue, CSSKeywordValue: W.CssStyleValue, CSSNumericValue: W.CssStyleValue, CSSPositionValue: W.CssStyleValue, CSSResourceValue: W.CssStyleValue, CSSUnitValue: W.CssStyleValue, CSSURLImageValue: W.CssStyleValue, CSSStyleValue: W.CssStyleValue, CSSMatrixComponent: W.CssTransformComponent, CSSRotation: W.CssTransformComponent, CSSScale: W.CssTransformComponent, CSSSkew: W.CssTransformComponent, CSSTranslation: W.CssTransformComponent, CSSTransformComponent: W.CssTransformComponent, CSSTransformValue: W.CssTransformValue, CSSUnparsedValue: W.CssUnparsedValue, DataTransferItemList: W.DataTransferItemList, DOMException: W.DomException, ClientRectList: W.DomRectList, DOMRectList: W.DomRectList, DOMRectReadOnly: W.DomRectReadOnly, DOMStringList: W.DomStringList, DOMTokenList: W.DomTokenList, SVGAElement: W.Element, SVGAnimateElement: W.Element, SVGAnimateMotionElement: W.Element, SVGAnimateTransformElement: W.Element, SVGAnimationElement: W.Element, SVGCircleElement: W.Element, SVGClipPathElement: W.Element, SVGDefsElement: W.Element, SVGDescElement: W.Element, SVGDiscardElement: W.Element, SVGEllipseElement: W.Element, SVGFEBlendElement: W.Element, SVGFEColorMatrixElement: W.Element, SVGFEComponentTransferElement: W.Element, SVGFECompositeElement: W.Element, SVGFEConvolveMatrixElement: W.Element, SVGFEDiffuseLightingElement: W.Element, SVGFEDisplacementMapElement: W.Element, SVGFEDistantLightElement: W.Element, SVGFEFloodElement: W.Element, SVGFEFuncAElement: W.Element, SVGFEFuncBElement: W.Element, SVGFEFuncGElement: W.Element, SVGFEFuncRElement: W.Element, SVGFEGaussianBlurElement: W.Element, SVGFEImageElement: W.Element, SVGFEMergeElement: W.Element, SVGFEMergeNodeElement: W.Element, SVGFEMorphologyElement: W.Element, SVGFEOffsetElement: W.Element, SVGFEPointLightElement: W.Element, SVGFESpecularLightingElement: W.Element, SVGFESpotLightElement: W.Element, SVGFETileElement: W.Element, SVGFETurbulenceElement: W.Element, SVGFilterElement: W.Element, SVGForeignObjectElement: W.Element, SVGGElement: W.Element, SVGGeometryElement: W.Element, SVGGraphicsElement: W.Element, SVGImageElement: W.Element, SVGLineElement: W.Element, SVGLinearGradientElement: W.Element, SVGMarkerElement: W.Element, SVGMaskElement: W.Element, SVGMetadataElement: W.Element, SVGPathElement: W.Element, SVGPatternElement: W.Element, SVGPolygonElement: W.Element, SVGPolylineElement: W.Element, SVGRadialGradientElement: W.Element, SVGRectElement: W.Element, SVGScriptElement: W.Element, SVGSetElement: W.Element, SVGStopElement: W.Element, SVGStyleElement: W.Element, SVGElement: W.Element, SVGSVGElement: W.Element, SVGSwitchElement: W.Element, SVGSymbolElement: W.Element, SVGTSpanElement: W.Element, SVGTextContentElement: W.Element, SVGTextElement: W.Element, SVGTextPathElement: W.Element, SVGTextPositioningElement: W.Element, SVGTitleElement: W.Element, SVGUseElement: W.Element, SVGViewElement: W.Element, SVGGradientElement: W.Element, SVGComponentTransferFunctionElement: W.Element, SVGFEDropShadowElement: W.Element, SVGMPathElement: W.Element, Element: W.Element, AbsoluteOrientationSensor: W.EventTarget, Accelerometer: W.EventTarget, AccessibleNode: W.EventTarget, AmbientLightSensor: W.EventTarget, Animation: W.EventTarget, ApplicationCache: W.EventTarget, DOMApplicationCache: W.EventTarget, OfflineResourceList: W.EventTarget, BackgroundFetchRegistration: W.EventTarget, BatteryManager: W.EventTarget, BroadcastChannel: W.EventTarget, CanvasCaptureMediaStreamTrack: W.EventTarget, DedicatedWorkerGlobalScope: W.EventTarget, EventSource: W.EventTarget, FileReader: W.EventTarget, FontFaceSet: W.EventTarget, Gyroscope: W.EventTarget, XMLHttpRequest: W.EventTarget, XMLHttpRequestEventTarget: W.EventTarget, XMLHttpRequestUpload: W.EventTarget, LinearAccelerationSensor: W.EventTarget, Magnetometer: W.EventTarget, MediaDevices: W.EventTarget, MediaKeySession: W.EventTarget, MediaQueryList: W.EventTarget, MediaRecorder: W.EventTarget, MediaSource: W.EventTarget, MediaStream: W.EventTarget, MediaStreamTrack: W.EventTarget, MessagePort: W.EventTarget, MIDIAccess: W.EventTarget, MIDIInput: W.EventTarget, MIDIOutput: W.EventTarget, MIDIPort: W.EventTarget, NetworkInformation: W.EventTarget, Notification: W.EventTarget, OffscreenCanvas: W.EventTarget, OrientationSensor: W.EventTarget, PaymentRequest: W.EventTarget, Performance: W.EventTarget, PermissionStatus: W.EventTarget, PresentationAvailability: W.EventTarget, PresentationConnection: W.EventTarget, PresentationConnectionList: W.EventTarget, PresentationRequest: W.EventTarget, RelativeOrientationSensor: W.EventTarget, RemotePlayback: W.EventTarget, RTCDataChannel: W.EventTarget, DataChannel: W.EventTarget, RTCDTMFSender: W.EventTarget, RTCPeerConnection: W.EventTarget, webkitRTCPeerConnection: W.EventTarget, mozRTCPeerConnection: W.EventTarget, ScreenOrientation: W.EventTarget, Sensor: W.EventTarget, ServiceWorker: W.EventTarget, ServiceWorkerContainer: W.EventTarget, ServiceWorkerGlobalScope: W.EventTarget, ServiceWorkerRegistration: W.EventTarget, SharedWorker: W.EventTarget, SharedWorkerGlobalScope: W.EventTarget, SpeechRecognition: W.EventTarget, SpeechSynthesis: W.EventTarget, SpeechSynthesisUtterance: W.EventTarget, VR: W.EventTarget, VRDevice: W.EventTarget, VRDisplay: W.EventTarget, VRSession: W.EventTarget, VisualViewport: W.EventTarget, WebSocket: W.EventTarget, Window: W.EventTarget, DOMWindow: W.EventTarget, Worker: W.EventTarget, WorkerGlobalScope: W.EventTarget, WorkerPerformance: W.EventTarget, BluetoothDevice: W.EventTarget, BluetoothRemoteGATTCharacteristic: W.EventTarget, Clipboard: W.EventTarget, MojoInterfaceInterceptor: W.EventTarget, USB: W.EventTarget, IDBDatabase: W.EventTarget, IDBOpenDBRequest: W.EventTarget, IDBVersionChangeRequest: W.EventTarget, IDBRequest: W.EventTarget, IDBTransaction: W.EventTarget, AnalyserNode: W.EventTarget, RealtimeAnalyserNode: W.EventTarget, AudioBufferSourceNode: W.EventTarget, AudioDestinationNode: W.EventTarget, AudioNode: W.EventTarget, AudioScheduledSourceNode: W.EventTarget, AudioWorkletNode: W.EventTarget, BiquadFilterNode: W.EventTarget, ChannelMergerNode: W.EventTarget, AudioChannelMerger: W.EventTarget, ChannelSplitterNode: W.EventTarget, AudioChannelSplitter: W.EventTarget, ConstantSourceNode: W.EventTarget, ConvolverNode: W.EventTarget, DelayNode: W.EventTarget, DynamicsCompressorNode: W.EventTarget, GainNode: W.EventTarget, AudioGainNode: W.EventTarget, IIRFilterNode: W.EventTarget, MediaElementAudioSourceNode: W.EventTarget, MediaStreamAudioDestinationNode: W.EventTarget, MediaStreamAudioSourceNode: W.EventTarget, OscillatorNode: W.EventTarget, Oscillator: W.EventTarget, PannerNode: W.EventTarget, AudioPannerNode: W.EventTarget, webkitAudioPannerNode: W.EventTarget, ScriptProcessorNode: W.EventTarget, JavaScriptAudioNode: W.EventTarget, StereoPannerNode: W.EventTarget, WaveShaperNode: W.EventTarget, EventTarget: W.EventTarget, File: W.File, FileList: W.FileList, FileWriter: W.FileWriter, HTMLFormElement: W.FormElement, Gamepad: W.Gamepad, History: W.History, HTMLCollection: W.HtmlCollection, HTMLFormControlsCollection: W.HtmlCollection, HTMLOptionsCollection: W.HtmlCollection, Location: W.Location, MediaList: W.MediaList, MIDIInputMap: W.MidiInputMap, MIDIOutputMap: W.MidiOutputMap, MimeType: W.MimeType, MimeTypeArray: W.MimeTypeArray, Document: W.Node, DocumentFragment: W.Node, HTMLDocument: W.Node, ShadowRoot: W.Node, XMLDocument: W.Node, Attr: W.Node, DocumentType: W.Node, Node: W.Node, NodeList: W.NodeList, RadioNodeList: W.NodeList, Plugin: W.Plugin, PluginArray: W.PluginArray, RTCStatsReport: W.RtcStatsReport, HTMLSelectElement: W.SelectElement, SourceBuffer: W.SourceBuffer, SourceBufferList: W.SourceBufferList, SpeechGrammar: W.SpeechGrammar, SpeechGrammarList: W.SpeechGrammarList, SpeechRecognitionResult: W.SpeechRecognitionResult, Storage: W.Storage, CSSStyleSheet: W.StyleSheet, StyleSheet: W.StyleSheet, TextTrack: W.TextTrack, TextTrackCue: W.TextTrackCue, VTTCue: W.TextTrackCue, TextTrackCueList: W.TextTrackCueList, TextTrackList: W.TextTrackList, TimeRanges: W.TimeRanges, Touch: W.Touch, TouchList: W.TouchList, TrackDefaultList: W.TrackDefaultList, URL: W.Url, VideoTrackList: W.VideoTrackList, CSSRuleList: W._CssRuleList, ClientRect: W._DomRect, DOMRect: W._DomRect, GamepadList: W._GamepadList, NamedNodeMap: W._NamedNodeMap, MozNamedAttrMap: W._NamedNodeMap, SpeechRecognitionResultList: W._SpeechRecognitionResultList, StyleSheetList: W._StyleSheetList, SVGLength: P.Length, SVGLengthList: P.LengthList, SVGNumber: P.Number, SVGNumberList: P.NumberList, SVGPointList: P.PointList, SVGStringList: P.StringList, SVGTransform: P.Transform, SVGTransformList: P.TransformList, AudioBuffer: P.AudioBuffer, AudioParamMap: P.AudioParamMap, AudioTrackList: P.AudioTrackList, AudioContext: P.BaseAudioContext, webkitAudioContext: P.BaseAudioContext, BaseAudioContext: P.BaseAudioContext, OfflineAudioContext: P.OfflineAudioContext, SQLResultSetRowList: P.SqlResultSetRowList});
    hunkHelpers.setOrUpdateLeafTags({ArrayBuffer: true, AbortPaymentEvent: true, AnimationEffectReadOnly: true, AnimationEffectTiming: true, AnimationEffectTimingReadOnly: true, AnimationEvent: true, AnimationPlaybackEvent: true, AnimationTimeline: true, AnimationWorkletGlobalScope: true, ApplicationCacheErrorEvent: true, AuthenticatorAssertionResponse: true, AuthenticatorAttestationResponse: true, AuthenticatorResponse: true, BackgroundFetchClickEvent: true, BackgroundFetchEvent: true, BackgroundFetchFailEvent: true, BackgroundFetchFetch: true, BackgroundFetchManager: true, BackgroundFetchSettledFetch: true, BackgroundFetchedEvent: true, BarProp: true, BarcodeDetector: true, BeforeInstallPromptEvent: true, BeforeUnloadEvent: true, BlobEvent: true, BluetoothRemoteGATTDescriptor: true, Body: true, BudgetState: true, CacheStorage: true, CanMakePaymentEvent: true, CanvasGradient: true, CanvasPattern: true, CanvasRenderingContext2D: true, Client: true, Clients: true, ClipboardEvent: true, CloseEvent: true, CompositionEvent: true, CookieStore: true, Coordinates: true, Credential: true, CredentialUserData: true, CredentialsContainer: true, Crypto: true, CryptoKey: true, CSS: true, CSSVariableReferenceValue: true, CustomElementRegistry: true, CustomEvent: true, DataTransfer: true, DataTransferItem: true, DeprecatedStorageInfo: true, DeprecatedStorageQuota: true, DeprecationReport: true, DetectedBarcode: true, DetectedFace: true, DetectedText: true, DeviceAcceleration: true, DeviceMotionEvent: true, DeviceOrientationEvent: true, DeviceRotationRate: true, DirectoryEntry: true, DirectoryReader: true, DocumentOrShadowRoot: true, DocumentTimeline: true, DOMError: true, DOMImplementation: true, Iterator: true, DOMMatrix: true, DOMMatrixReadOnly: true, DOMParser: true, DOMPoint: true, DOMPointReadOnly: true, DOMQuad: true, DOMStringMap: true, Entry: true, ErrorEvent: true, Event: true, InputEvent: true, SubmitEvent: true, ExtendableEvent: true, ExtendableMessageEvent: true, External: true, FaceDetector: true, FederatedCredential: true, FetchEvent: true, FileEntry: true, DOMFileSystem: true, FocusEvent: true, FontFace: true, FontFaceSetLoadEvent: true, FontFaceSource: true, ForeignFetchEvent: true, FormData: true, GamepadButton: true, GamepadEvent: true, GamepadPose: true, Geolocation: true, Position: true, HashChangeEvent: true, Headers: true, HTMLHyperlinkElementUtils: true, IdleDeadline: true, ImageBitmap: true, ImageBitmapRenderingContext: true, ImageCapture: true, ImageData: true, InputDeviceCapabilities: true, InstallEvent: true, IntersectionObserver: true, IntersectionObserverEntry: true, InterventionReport: true, KeyboardEvent: true, KeyframeEffect: true, KeyframeEffectReadOnly: true, MediaCapabilities: true, MediaCapabilitiesInfo: true, MediaDeviceInfo: true, MediaEncryptedEvent: true, MediaError: true, MediaKeyMessageEvent: true, MediaKeyStatusMap: true, MediaKeySystemAccess: true, MediaKeys: true, MediaKeysPolicy: true, MediaMetadata: true, MediaQueryListEvent: true, MediaSession: true, MediaSettingsRange: true, MediaStreamEvent: true, MediaStreamTrackEvent: true, MemoryInfo: true, MessageChannel: true, MessageEvent: true, Metadata: true, MIDIConnectionEvent: true, MIDIMessageEvent: true, MouseEvent: true, DragEvent: true, MutationEvent: true, MutationObserver: true, WebKitMutationObserver: true, MutationRecord: true, NavigationPreloadManager: true, Navigator: true, NavigatorAutomationInformation: true, NavigatorConcurrentHardware: true, NavigatorCookies: true, NavigatorUserMediaError: true, NodeFilter: true, NodeIterator: true, NonDocumentTypeChildNode: true, NonElementParentNode: true, NoncedElement: true, NotificationEvent: true, OffscreenCanvasRenderingContext2D: true, OverconstrainedError: true, PageTransitionEvent: true, PaintRenderingContext2D: true, PaintSize: true, PaintWorkletGlobalScope: true, PasswordCredential: true, Path2D: true, PaymentAddress: true, PaymentInstruments: true, PaymentManager: true, PaymentRequestEvent: true, PaymentRequestUpdateEvent: true, PaymentResponse: true, PerformanceEntry: true, PerformanceLongTaskTiming: true, PerformanceMark: true, PerformanceMeasure: true, PerformanceNavigation: true, PerformanceNavigationTiming: true, PerformanceObserver: true, PerformanceObserverEntryList: true, PerformancePaintTiming: true, PerformanceResourceTiming: true, PerformanceServerTiming: true, PerformanceTiming: true, Permissions: true, PhotoCapabilities: true, PointerEvent: true, PopStateEvent: true, PositionError: true, Presentation: true, PresentationConnectionAvailableEvent: true, PresentationConnectionCloseEvent: true, PresentationReceiver: true, ProgressEvent: true, PromiseRejectionEvent: true, PublicKeyCredential: true, PushEvent: true, PushManager: true, PushMessageData: true, PushSubscription: true, PushSubscriptionOptions: true, Range: true, RelatedApplication: true, ReportBody: true, ReportingObserver: true, ResizeObserver: true, ResizeObserverEntry: true, RTCCertificate: true, RTCDataChannelEvent: true, RTCDTMFToneChangeEvent: true, RTCIceCandidate: true, mozRTCIceCandidate: true, RTCLegacyStatsReport: true, RTCPeerConnectionIceEvent: true, RTCRtpContributingSource: true, RTCRtpReceiver: true, RTCRtpSender: true, RTCSessionDescription: true, mozRTCSessionDescription: true, RTCStatsResponse: true, RTCTrackEvent: true, Screen: true, ScrollState: true, ScrollTimeline: true, SecurityPolicyViolationEvent: true, Selection: true, SensorErrorEvent: true, SharedArrayBuffer: true, SpeechRecognitionAlternative: true, SpeechRecognitionError: true, SpeechRecognitionEvent: true, SpeechSynthesisEvent: true, SpeechSynthesisVoice: true, StaticRange: true, StorageEvent: true, StorageManager: true, StyleMedia: true, StylePropertyMap: true, StylePropertyMapReadonly: true, SyncEvent: true, SyncManager: true, TaskAttributionTiming: true, TextDetector: true, TextEvent: true, TextMetrics: true, TouchEvent: true, TrackDefault: true, TrackEvent: true, TransitionEvent: true, WebKitTransitionEvent: true, TreeWalker: true, TrustedHTML: true, TrustedScriptURL: true, TrustedURL: true, UIEvent: true, UnderlyingSourceBase: true, URLSearchParams: true, VRCoordinateSystem: true, VRDeviceEvent: true, VRDisplayCapabilities: true, VRDisplayEvent: true, VREyeParameters: true, VRFrameData: true, VRFrameOfReference: true, VRPose: true, VRSessionEvent: true, VRStageBounds: true, VRStageBoundsPoint: true, VRStageParameters: true, ValidityState: true, VideoPlaybackQuality: true, VideoTrack: true, VTTRegion: true, WheelEvent: true, WindowClient: true, WorkletAnimation: true, WorkletGlobalScope: true, XPathEvaluator: true, XPathExpression: true, XPathNSResolver: true, XPathResult: true, XMLSerializer: true, XSLTProcessor: true, Bluetooth: true, BluetoothCharacteristicProperties: true, BluetoothRemoteGATTServer: true, BluetoothRemoteGATTService: true, BluetoothUUID: true, BudgetService: true, Cache: true, DOMFileSystemSync: true, DirectoryEntrySync: true, DirectoryReaderSync: true, EntrySync: true, FileEntrySync: true, FileReaderSync: true, FileWriterSync: true, HTMLAllCollection: true, Mojo: true, MojoHandle: true, MojoInterfaceRequestEvent: true, MojoWatcher: true, NFC: true, PagePopupController: true, Report: true, Request: true, ResourceProgressEvent: true, Response: true, SubtleCrypto: true, USBAlternateInterface: true, USBConfiguration: true, USBConnectionEvent: true, USBDevice: true, USBEndpoint: true, USBInTransferResult: true, USBInterface: true, USBIsochronousInTransferPacket: true, USBIsochronousInTransferResult: true, USBIsochronousOutTransferPacket: true, USBIsochronousOutTransferResult: true, USBOutTransferResult: true, WorkerLocation: true, WorkerNavigator: true, Worklet: true, IDBCursor: true, IDBCursorWithValue: true, IDBFactory: true, IDBIndex: true, IDBKeyRange: true, IDBObjectStore: true, IDBObservation: true, IDBObserver: true, IDBObserverChanges: true, IDBVersionChangeEvent: true, SVGAngle: true, SVGAnimatedAngle: true, SVGAnimatedBoolean: true, SVGAnimatedEnumeration: true, SVGAnimatedInteger: true, SVGAnimatedLength: true, SVGAnimatedLengthList: true, SVGAnimatedNumber: true, SVGAnimatedNumberList: true, SVGAnimatedPreserveAspectRatio: true, SVGAnimatedRect: true, SVGAnimatedString: true, SVGAnimatedTransformList: true, SVGMatrix: true, SVGPoint: true, SVGPreserveAspectRatio: true, SVGRect: true, SVGUnitTypes: true, AudioListener: true, AudioParam: true, AudioProcessingEvent: true, AudioTrack: true, AudioWorkletGlobalScope: true, AudioWorkletProcessor: true, OfflineAudioCompletionEvent: true, PeriodicWave: true, WebGLActiveInfo: true, ANGLEInstancedArrays: true, ANGLE_instanced_arrays: true, WebGLBuffer: true, WebGLCanvas: true, WebGLColorBufferFloat: true, WebGLCompressedTextureASTC: true, WebGLCompressedTextureATC: true, WEBGL_compressed_texture_atc: true, WebGLCompressedTextureETC1: true, WEBGL_compressed_texture_etc1: true, WebGLCompressedTextureETC: true, WebGLCompressedTexturePVRTC: true, WEBGL_compressed_texture_pvrtc: true, WebGLCompressedTextureS3TC: true, WEBGL_compressed_texture_s3tc: true, WebGLCompressedTextureS3TCsRGB: true, WebGLContextEvent: true, WebGLDebugRendererInfo: true, WEBGL_debug_renderer_info: true, WebGLDebugShaders: true, WEBGL_debug_shaders: true, WebGLDepthTexture: true, WEBGL_depth_texture: true, WebGLDrawBuffers: true, WEBGL_draw_buffers: true, EXTsRGB: true, EXT_sRGB: true, EXTBlendMinMax: true, EXT_blend_minmax: true, EXTColorBufferFloat: true, EXTColorBufferHalfFloat: true, EXTDisjointTimerQuery: true, EXTDisjointTimerQueryWebGL2: true, EXTFragDepth: true, EXT_frag_depth: true, EXTShaderTextureLOD: true, EXT_shader_texture_lod: true, EXTTextureFilterAnisotropic: true, EXT_texture_filter_anisotropic: true, WebGLFramebuffer: true, WebGLGetBufferSubDataAsync: true, WebGLLoseContext: true, WebGLExtensionLoseContext: true, WEBGL_lose_context: true, OESElementIndexUint: true, OES_element_index_uint: true, OESStandardDerivatives: true, OES_standard_derivatives: true, OESTextureFloat: true, OES_texture_float: true, OESTextureFloatLinear: true, OES_texture_float_linear: true, OESTextureHalfFloat: true, OES_texture_half_float: true, OESTextureHalfFloatLinear: true, OES_texture_half_float_linear: true, OESVertexArrayObject: true, OES_vertex_array_object: true, WebGLProgram: true, WebGLQuery: true, WebGLRenderbuffer: true, WebGLRenderingContext: true, WebGL2RenderingContext: true, WebGLSampler: true, WebGLShader: true, WebGLShaderPrecisionFormat: true, WebGLSync: true, WebGLTexture: true, WebGLTimerQueryEXT: true, WebGLTransformFeedback: true, WebGLUniformLocation: true, WebGLVertexArrayObject: true, WebGLVertexArrayObjectOES: true, WebGL: true, WebGL2RenderingContextBase: true, Database: true, SQLError: true, SQLResultSet: true, SQLTransaction: true, DataView: true, ArrayBufferView: false, Float32Array: true, Float64Array: true, Int16Array: true, Int32Array: true, Int8Array: true, Uint16Array: true, Uint32Array: true, Uint8ClampedArray: true, CanvasPixelArray: true, Uint8Array: false, HTMLAudioElement: true, HTMLBRElement: true, HTMLBaseElement: true, HTMLBodyElement: true, HTMLButtonElement: true, HTMLCanvasElement: true, HTMLContentElement: true, HTMLDListElement: true, HTMLDataElement: true, HTMLDataListElement: true, HTMLDetailsElement: true, HTMLDialogElement: true, HTMLDivElement: true, HTMLEmbedElement: true, HTMLFieldSetElement: true, HTMLHRElement: true, HTMLHeadElement: true, HTMLHeadingElement: true, HTMLHtmlElement: true, HTMLIFrameElement: true, HTMLImageElement: true, HTMLInputElement: true, HTMLLIElement: true, HTMLLabelElement: true, HTMLLegendElement: true, HTMLLinkElement: true, HTMLMapElement: true, HTMLMediaElement: true, HTMLMenuElement: true, HTMLMetaElement: true, HTMLMeterElement: true, HTMLModElement: true, HTMLOListElement: true, HTMLObjectElement: true, HTMLOptGroupElement: true, HTMLOptionElement: true, HTMLOutputElement: true, HTMLParagraphElement: true, HTMLParamElement: true, HTMLPictureElement: true, HTMLPreElement: true, HTMLProgressElement: true, HTMLQuoteElement: true, HTMLScriptElement: true, HTMLShadowElement: true, HTMLSlotElement: true, HTMLSourceElement: true, HTMLSpanElement: true, HTMLStyleElement: true, HTMLTableCaptionElement: true, HTMLTableCellElement: true, HTMLTableDataCellElement: true, HTMLTableHeaderCellElement: true, HTMLTableColElement: true, HTMLTableElement: true, HTMLTableRowElement: true, HTMLTableSectionElement: true, HTMLTemplateElement: true, HTMLTextAreaElement: true, HTMLTimeElement: true, HTMLTitleElement: true, HTMLTrackElement: true, HTMLUListElement: true, HTMLUnknownElement: true, HTMLVideoElement: true, HTMLDirectoryElement: true, HTMLFontElement: true, HTMLFrameElement: true, HTMLFrameSetElement: true, HTMLMarqueeElement: true, HTMLElement: false, AccessibleNodeList: true, HTMLAnchorElement: true, HTMLAreaElement: true, Blob: false, CDATASection: true, CharacterData: true, Comment: true, ProcessingInstruction: true, Text: true, CSSPerspective: true, CSSCharsetRule: true, CSSConditionRule: true, CSSFontFaceRule: true, CSSGroupingRule: true, CSSImportRule: true, CSSKeyframeRule: true, MozCSSKeyframeRule: true, WebKitCSSKeyframeRule: true, CSSKeyframesRule: true, MozCSSKeyframesRule: true, WebKitCSSKeyframesRule: true, CSSMediaRule: true, CSSNamespaceRule: true, CSSPageRule: true, CSSRule: true, CSSStyleRule: true, CSSSupportsRule: true, CSSViewportRule: true, CSSStyleDeclaration: true, MSStyleCSSProperties: true, CSS2Properties: true, CSSImageValue: true, CSSKeywordValue: true, CSSNumericValue: true, CSSPositionValue: true, CSSResourceValue: true, CSSUnitValue: true, CSSURLImageValue: true, CSSStyleValue: false, CSSMatrixComponent: true, CSSRotation: true, CSSScale: true, CSSSkew: true, CSSTranslation: true, CSSTransformComponent: false, CSSTransformValue: true, CSSUnparsedValue: true, DataTransferItemList: true, DOMException: true, ClientRectList: true, DOMRectList: true, DOMRectReadOnly: false, DOMStringList: true, DOMTokenList: true, SVGAElement: true, SVGAnimateElement: true, SVGAnimateMotionElement: true, SVGAnimateTransformElement: true, SVGAnimationElement: true, SVGCircleElement: true, SVGClipPathElement: true, SVGDefsElement: true, SVGDescElement: true, SVGDiscardElement: true, SVGEllipseElement: true, SVGFEBlendElement: true, SVGFEColorMatrixElement: true, SVGFEComponentTransferElement: true, SVGFECompositeElement: true, SVGFEConvolveMatrixElement: true, SVGFEDiffuseLightingElement: true, SVGFEDisplacementMapElement: true, SVGFEDistantLightElement: true, SVGFEFloodElement: true, SVGFEFuncAElement: true, SVGFEFuncBElement: true, SVGFEFuncGElement: true, SVGFEFuncRElement: true, SVGFEGaussianBlurElement: true, SVGFEImageElement: true, SVGFEMergeElement: true, SVGFEMergeNodeElement: true, SVGFEMorphologyElement: true, SVGFEOffsetElement: true, SVGFEPointLightElement: true, SVGFESpecularLightingElement: true, SVGFESpotLightElement: true, SVGFETileElement: true, SVGFETurbulenceElement: true, SVGFilterElement: true, SVGForeignObjectElement: true, SVGGElement: true, SVGGeometryElement: true, SVGGraphicsElement: true, SVGImageElement: true, SVGLineElement: true, SVGLinearGradientElement: true, SVGMarkerElement: true, SVGMaskElement: true, SVGMetadataElement: true, SVGPathElement: true, SVGPatternElement: true, SVGPolygonElement: true, SVGPolylineElement: true, SVGRadialGradientElement: true, SVGRectElement: true, SVGScriptElement: true, SVGSetElement: true, SVGStopElement: true, SVGStyleElement: true, SVGElement: true, SVGSVGElement: true, SVGSwitchElement: true, SVGSymbolElement: true, SVGTSpanElement: true, SVGTextContentElement: true, SVGTextElement: true, SVGTextPathElement: true, SVGTextPositioningElement: true, SVGTitleElement: true, SVGUseElement: true, SVGViewElement: true, SVGGradientElement: true, SVGComponentTransferFunctionElement: true, SVGFEDropShadowElement: true, SVGMPathElement: true, Element: false, AbsoluteOrientationSensor: true, Accelerometer: true, AccessibleNode: true, AmbientLightSensor: true, Animation: true, ApplicationCache: true, DOMApplicationCache: true, OfflineResourceList: true, BackgroundFetchRegistration: true, BatteryManager: true, BroadcastChannel: true, CanvasCaptureMediaStreamTrack: true, DedicatedWorkerGlobalScope: true, EventSource: true, FileReader: true, FontFaceSet: true, Gyroscope: true, XMLHttpRequest: true, XMLHttpRequestEventTarget: true, XMLHttpRequestUpload: true, LinearAccelerationSensor: true, Magnetometer: true, MediaDevices: true, MediaKeySession: true, MediaQueryList: true, MediaRecorder: true, MediaSource: true, MediaStream: true, MediaStreamTrack: true, MessagePort: true, MIDIAccess: true, MIDIInput: true, MIDIOutput: true, MIDIPort: true, NetworkInformation: true, Notification: true, OffscreenCanvas: true, OrientationSensor: true, PaymentRequest: true, Performance: true, PermissionStatus: true, PresentationAvailability: true, PresentationConnection: true, PresentationConnectionList: true, PresentationRequest: true, RelativeOrientationSensor: true, RemotePlayback: true, RTCDataChannel: true, DataChannel: true, RTCDTMFSender: true, RTCPeerConnection: true, webkitRTCPeerConnection: true, mozRTCPeerConnection: true, ScreenOrientation: true, Sensor: true, ServiceWorker: true, ServiceWorkerContainer: true, ServiceWorkerGlobalScope: true, ServiceWorkerRegistration: true, SharedWorker: true, SharedWorkerGlobalScope: true, SpeechRecognition: true, SpeechSynthesis: true, SpeechSynthesisUtterance: true, VR: true, VRDevice: true, VRDisplay: true, VRSession: true, VisualViewport: true, WebSocket: true, Window: true, DOMWindow: true, Worker: true, WorkerGlobalScope: true, WorkerPerformance: true, BluetoothDevice: true, BluetoothRemoteGATTCharacteristic: true, Clipboard: true, MojoInterfaceInterceptor: true, USB: true, IDBDatabase: true, IDBOpenDBRequest: true, IDBVersionChangeRequest: true, IDBRequest: true, IDBTransaction: true, AnalyserNode: true, RealtimeAnalyserNode: true, AudioBufferSourceNode: true, AudioDestinationNode: true, AudioNode: true, AudioScheduledSourceNode: true, AudioWorkletNode: true, BiquadFilterNode: true, ChannelMergerNode: true, AudioChannelMerger: true, ChannelSplitterNode: true, AudioChannelSplitter: true, ConstantSourceNode: true, ConvolverNode: true, DelayNode: true, DynamicsCompressorNode: true, GainNode: true, AudioGainNode: true, IIRFilterNode: true, MediaElementAudioSourceNode: true, MediaStreamAudioDestinationNode: true, MediaStreamAudioSourceNode: true, OscillatorNode: true, Oscillator: true, PannerNode: true, AudioPannerNode: true, webkitAudioPannerNode: true, ScriptProcessorNode: true, JavaScriptAudioNode: true, StereoPannerNode: true, WaveShaperNode: true, EventTarget: false, File: true, FileList: true, FileWriter: true, HTMLFormElement: true, Gamepad: true, History: true, HTMLCollection: true, HTMLFormControlsCollection: true, HTMLOptionsCollection: true, Location: true, MediaList: true, MIDIInputMap: true, MIDIOutputMap: true, MimeType: true, MimeTypeArray: true, Document: true, DocumentFragment: true, HTMLDocument: true, ShadowRoot: true, XMLDocument: true, Attr: true, DocumentType: true, Node: false, NodeList: true, RadioNodeList: true, Plugin: true, PluginArray: true, RTCStatsReport: true, HTMLSelectElement: true, SourceBuffer: true, SourceBufferList: true, SpeechGrammar: true, SpeechGrammarList: true, SpeechRecognitionResult: true, Storage: true, CSSStyleSheet: true, StyleSheet: true, TextTrack: true, TextTrackCue: true, VTTCue: true, TextTrackCueList: true, TextTrackList: true, TimeRanges: true, Touch: true, TouchList: true, TrackDefaultList: true, URL: true, VideoTrackList: true, CSSRuleList: true, ClientRect: true, DOMRect: true, GamepadList: true, NamedNodeMap: true, MozNamedAttrMap: true, SpeechRecognitionResultList: true, StyleSheetList: true, SVGLength: true, SVGLengthList: true, SVGNumber: true, SVGNumberList: true, SVGPointList: true, SVGStringList: true, SVGTransform: true, SVGTransformList: true, AudioBuffer: true, AudioParamMap: true, AudioTrackList: true, AudioContext: true, webkitAudioContext: true, BaseAudioContext: false, OfflineAudioContext: true, SQLResultSetRowList: true});
    H.NativeTypedArray.$nativeSuperclassTag = "ArrayBufferView";
    H._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin.$nativeSuperclassTag = "ArrayBufferView";
    H._NativeTypedArrayOfDouble_NativeTypedArray_ListMixin_FixedLengthListMixin.$nativeSuperclassTag = "ArrayBufferView";
    H.NativeTypedArrayOfDouble.$nativeSuperclassTag = "ArrayBufferView";
    H._NativeTypedArrayOfInt_NativeTypedArray_ListMixin.$nativeSuperclassTag = "ArrayBufferView";
    H._NativeTypedArrayOfInt_NativeTypedArray_ListMixin_FixedLengthListMixin.$nativeSuperclassTag = "ArrayBufferView";
    H.NativeTypedArrayOfInt.$nativeSuperclassTag = "ArrayBufferView";
    W._SourceBufferList_EventTarget_ListMixin.$nativeSuperclassTag = "EventTarget";
    W._SourceBufferList_EventTarget_ListMixin_ImmutableListMixin.$nativeSuperclassTag = "EventTarget";
    W._TextTrackList_EventTarget_ListMixin.$nativeSuperclassTag = "EventTarget";
    W._TextTrackList_EventTarget_ListMixin_ImmutableListMixin.$nativeSuperclassTag = "EventTarget";
  })();
  Function.prototype.call$1 = function(a) {
    return this(a);
  };
  Function.prototype.call$2 = function(a, b) {
    return this(a, b);
  };
  Function.prototype.call$0 = function() {
    return this();
  };
  Function.prototype.call$3 = function(a, b, c) {
    return this(a, b, c);
  };
  Function.prototype.call$4 = function(a, b, c, d) {
    return this(a, b, c, d);
  };
  Function.prototype.call$1$1 = function(a) {
    return this(a);
  };
  convertAllToFastObject(holders);
  convertToFastObject($);
  (function(callback) {
    if (typeof document === "undefined") {
      callback(null);
      return;
    }
    if (typeof document.currentScript != 'undefined') {
      callback(document.currentScript);
      return;
    }
    var scripts = document.scripts;
    function onLoad(event) {
      for (var i = 0; i < scripts.length; ++i)
        scripts[i].removeEventListener("load", onLoad, false);
      callback(event.target);
    }
    for (var i = 0; i < scripts.length; ++i)
      scripts[i].addEventListener("load", onLoad, false);
  })(function(currentScript) {
    init.currentScript = currentScript;
    if (typeof dartMainRunner === "function")
      dartMainRunner(S.main, []);
    else
      S.main([]);
  });
})();

