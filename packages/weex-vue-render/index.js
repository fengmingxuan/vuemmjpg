/* 'WEEX VUE RENDER undefined, Build 2018-09-17 14:02. */


(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.WeexVueRender = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}
function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var semver = createCommonjsModule(function (module, exports) {
exports = module.exports = SemVer;

// The debug function is excluded entirely from the minified version.
/* nomin */ var debug;
/* nomin */ if (typeof process === 'object' &&
    /* nomin */ process.env &&
    /* nomin */ false &&
    /* nomin */ /\bsemver\b/i.test(false))
  /* nomin */ { debug = function() {
    /* nomin */ var args = Array.prototype.slice.call(arguments, 0);
    /* nomin */ args.unshift('SEMVER');
    /* nomin */ console.log.apply(console, args);
    /* nomin */ }; }
/* nomin */ else
  /* nomin */ { debug = function() {}; }

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0';

var MAX_LENGTH = 256;
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

// Max safe segment length for coercion.
var MAX_SAFE_COMPONENT_LENGTH = 16;

// The actual regexps go on exports.re
var re = exports.re = [];
var src = exports.src = [];
var R = 0;

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++;
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
var NUMERICIDENTIFIERLOOSE = R++;
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+';


// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++;
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';


// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++;
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')';

var MAINVERSIONLOOSE = R++;
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')';

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++;
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')';

var PRERELEASEIDENTIFIERLOOSE = R++;
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')';


// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++;
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';

var PRERELEASELOOSE = R++;
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))';

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++;
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+';

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++;
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))';


// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++;
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?';

src[FULL] = '^' + FULLPLAIN + '$';

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?';

var LOOSE = R++;
src[LOOSE] = '^' + LOOSEPLAIN + '$';

var GTLT = R++;
src[GTLT] = '((?:<|>)?=?)';

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++;
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
var XRANGEIDENTIFIER = R++;
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';

var XRANGEPLAIN = R++;
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?';

var XRANGEPLAINLOOSE = R++;
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?';

var XRANGE = R++;
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
var XRANGELOOSE = R++;
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$';

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
var COERCE = R++;
src[COERCE] = '(?:^|[^\\d])' +
              '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:$|[^\\d])';

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++;
src[LONETILDE] = '(?:~>?)';

var TILDETRIM = R++;
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
var tildeTrimReplace = '$1~';

var TILDE = R++;
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
var TILDELOOSE = R++;
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$';

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++;
src[LONECARET] = '(?:\\^)';

var CARETTRIM = R++;
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
var caretTrimReplace = '$1^';

var CARET = R++;
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
var CARETLOOSE = R++;
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$';

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++;
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
var COMPARATOR = R++;
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$';


// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++;
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')';

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
var comparatorTrimReplace = '$1$2$3';


// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++;
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$';

var HYPHENRANGELOOSE = R++;
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$';

// Star ranges basically just allow anything at all.
var STAR = R++;
src[STAR] = '(<|>)?=?\\s*\\*';

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i]);
  if (!re[i])
    { re[i] = new RegExp(src[i]); }
}

exports.parse = parse;
function parse(version, loose) {
  if (version instanceof SemVer)
    { return version; }

  if (typeof version !== 'string')
    { return null; }

  if (version.length > MAX_LENGTH)
    { return null; }

  var r = loose ? re[LOOSE] : re[FULL];
  if (!r.test(version))
    { return null; }

  try {
    return new SemVer(version, loose);
  } catch (er) {
    return null;
  }
}

exports.valid = valid;
function valid(version, loose) {
  var v = parse(version, loose);
  return v ? v.version : null;
}


exports.clean = clean;
function clean(version, loose) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), loose);
  return s ? s.version : null;
}

exports.SemVer = SemVer;

function SemVer(version, loose) {
  if (version instanceof SemVer) {
    if (version.loose === loose)
      { return version; }
    else
      { version = version.version; }
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version);
  }

  if (version.length > MAX_LENGTH)
    { throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters') }

  if (!(this instanceof SemVer))
    { return new SemVer(version, loose); }

  debug('SemVer', version, loose);
  this.loose = loose;
  var m = version.trim().match(loose ? re[LOOSE] : re[FULL]);

  if (!m)
    { throw new TypeError('Invalid Version: ' + version); }

  this.raw = version;

  // these are actually numbers
  this.major = +m[1];
  this.minor = +m[2];
  this.patch = +m[3];

  if (this.major > MAX_SAFE_INTEGER || this.major < 0)
    { throw new TypeError('Invalid major version') }

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0)
    { throw new TypeError('Invalid minor version') }

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0)
    { throw new TypeError('Invalid patch version') }

  // numberify any prerelease numeric ids
  if (!m[4])
    { this.prerelease = []; }
  else
    { this.prerelease = m[4].split('.').map(function(id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id;
        if (num >= 0 && num < MAX_SAFE_INTEGER)
          { return num; }
      }
      return id;
    }); }

  this.build = m[5] ? m[5].split('.') : [];
  this.format();
}

SemVer.prototype.format = function() {
  this.version = this.major + '.' + this.minor + '.' + this.patch;
  if (this.prerelease.length)
    { this.version += '-' + this.prerelease.join('.'); }
  return this.version;
};

SemVer.prototype.toString = function() {
  return this.version;
};

SemVer.prototype.compare = function(other) {
  debug('SemVer.compare', this.version, this.loose, other);
  if (!(other instanceof SemVer))
    { other = new SemVer(other, this.loose); }

  return this.compareMain(other) || this.comparePre(other);
};

SemVer.prototype.compareMain = function(other) {
  if (!(other instanceof SemVer))
    { other = new SemVer(other, this.loose); }

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch);
};

SemVer.prototype.comparePre = function(other) {
  var this$1 = this;

  if (!(other instanceof SemVer))
    { other = new SemVer(other, this.loose); }

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length)
    { return -1; }
  else if (!this.prerelease.length && other.prerelease.length)
    { return 1; }
  else if (!this.prerelease.length && !other.prerelease.length)
    { return 0; }

  var i = 0;
  do {
    var a = this$1.prerelease[i];
    var b = other.prerelease[i];
    debug('prerelease compare', i, a, b);
    if (a === undefined && b === undefined)
      { return 0; }
    else if (b === undefined)
      { return 1; }
    else if (a === undefined)
      { return -1; }
    else if (a === b)
      { continue; }
    else
      { return compareIdentifiers(a, b); }
  } while (++i);
};

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function(release, identifier) {
  var this$1 = this;

  switch (release) {
    case 'premajor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor = 0;
      this.major++;
      this.inc('pre', identifier);
      break;
    case 'preminor':
      this.prerelease.length = 0;
      this.patch = 0;
      this.minor++;
      this.inc('pre', identifier);
      break;
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0;
      this.inc('patch', identifier);
      this.inc('pre', identifier);
      break;
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0)
        { this.inc('patch', identifier); }
      this.inc('pre', identifier);
      break;

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0)
        { this.major++; }
      this.minor = 0;
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0)
        { this.minor++; }
      this.patch = 0;
      this.prerelease = [];
      break;
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0)
        { this.patch++; }
      this.prerelease = [];
      break;
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0)
        { this.prerelease = [0]; }
      else {
        var i = this.prerelease.length;
        while (--i >= 0) {
          if (typeof this$1.prerelease[i] === 'number') {
            this$1.prerelease[i]++;
            i = -2;
          }
        }
        if (i === -1) // didn't increment anything
          { this.prerelease.push(0); }
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1]))
            { this.prerelease = [identifier, 0]; }
        } else
          { this.prerelease = [identifier, 0]; }
      }
      break;

    default:
      throw new Error('invalid increment argument: ' + release);
  }
  this.format();
  this.raw = this.version;
  return this;
};

exports.inc = inc;
function inc(version, release, loose, identifier) {
  if (typeof(loose) === 'string') {
    identifier = loose;
    loose = undefined;
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version;
  } catch (er) {
    return null;
  }
}

exports.diff = diff;
function diff(version1, version2) {
  if (eq(version1, version2)) {
    return null;
  } else {
    var v1 = parse(version1);
    var v2 = parse(version2);
    if (v1.prerelease.length || v2.prerelease.length) {
      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return 'pre'+key;
          }
        }
      }
      return 'prerelease';
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return key;
        }
      }
    }
  }
}

exports.compareIdentifiers = compareIdentifiers;

var numeric = /^[0-9]+$/;
function compareIdentifiers(a, b) {
  var anum = numeric.test(a);
  var bnum = numeric.test(b);

  if (anum && bnum) {
    a = +a;
    b = +b;
  }

  return (anum && !bnum) ? -1 :
         (bnum && !anum) ? 1 :
         a < b ? -1 :
         a > b ? 1 :
         0;
}

exports.rcompareIdentifiers = rcompareIdentifiers;
function rcompareIdentifiers(a, b) {
  return compareIdentifiers(b, a);
}

exports.major = major;
function major(a, loose) {
  return new SemVer(a, loose).major;
}

exports.minor = minor;
function minor(a, loose) {
  return new SemVer(a, loose).minor;
}

exports.patch = patch;
function patch(a, loose) {
  return new SemVer(a, loose).patch;
}

exports.compare = compare;
function compare(a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose));
}

exports.compareLoose = compareLoose;
function compareLoose(a, b) {
  return compare(a, b, true);
}

exports.rcompare = rcompare;
function rcompare(a, b, loose) {
  return compare(b, a, loose);
}

exports.sort = sort;
function sort(list, loose) {
  return list.sort(function(a, b) {
    return exports.compare(a, b, loose);
  });
}

exports.rsort = rsort;
function rsort(list, loose) {
  return list.sort(function(a, b) {
    return exports.rcompare(a, b, loose);
  });
}

exports.gt = gt;
function gt(a, b, loose) {
  return compare(a, b, loose) > 0;
}

exports.lt = lt;
function lt(a, b, loose) {
  return compare(a, b, loose) < 0;
}

exports.eq = eq;
function eq(a, b, loose) {
  return compare(a, b, loose) === 0;
}

exports.neq = neq;
function neq(a, b, loose) {
  return compare(a, b, loose) !== 0;
}

exports.gte = gte;
function gte(a, b, loose) {
  return compare(a, b, loose) >= 0;
}

exports.lte = lte;
function lte(a, b, loose) {
  return compare(a, b, loose) <= 0;
}

exports.cmp = cmp;
function cmp(a, op, b, loose) {
  var ret;
  switch (op) {
    case '===':
      if (typeof a === 'object') { a = a.version; }
      if (typeof b === 'object') { b = b.version; }
      ret = a === b;
      break;
    case '!==':
      if (typeof a === 'object') { a = a.version; }
      if (typeof b === 'object') { b = b.version; }
      ret = a !== b;
      break;
    case '': case '=': case '==': ret = eq(a, b, loose); break;
    case '!=': ret = neq(a, b, loose); break;
    case '>': ret = gt(a, b, loose); break;
    case '>=': ret = gte(a, b, loose); break;
    case '<': ret = lt(a, b, loose); break;
    case '<=': ret = lte(a, b, loose); break;
    default: throw new TypeError('Invalid operator: ' + op);
  }
  return ret;
}

exports.Comparator = Comparator;
function Comparator(comp, loose) {
  if (comp instanceof Comparator) {
    if (comp.loose === loose)
      { return comp; }
    else
      { comp = comp.value; }
  }

  if (!(this instanceof Comparator))
    { return new Comparator(comp, loose); }

  debug('comparator', comp, loose);
  this.loose = loose;
  this.parse(comp);

  if (this.semver === ANY)
    { this.value = ''; }
  else
    { this.value = this.operator + this.semver.version; }

  debug('comp', this);
}

var ANY = {};
Comparator.prototype.parse = function(comp) {
  var r = this.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var m = comp.match(r);

  if (!m)
    { throw new TypeError('Invalid comparator: ' + comp); }

  this.operator = m[1];
  if (this.operator === '=')
    { this.operator = ''; }

  // if it literally is just '>' or '' then allow anything.
  if (!m[2])
    { this.semver = ANY; }
  else
    { this.semver = new SemVer(m[2], this.loose); }
};

Comparator.prototype.toString = function() {
  return this.value;
};

Comparator.prototype.test = function(version) {
  debug('Comparator.test', version, this.loose);

  if (this.semver === ANY)
    { return true; }

  if (typeof version === 'string')
    { version = new SemVer(version, this.loose); }

  return cmp(version, this.operator, this.semver, this.loose);
};

Comparator.prototype.intersects = function(comp, loose) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required');
  }

  var rangeTmp;

  if (this.operator === '') {
    rangeTmp = new Range(comp.value, loose);
    return satisfies(this.value, rangeTmp, loose);
  } else if (comp.operator === '') {
    rangeTmp = new Range(this.value, loose);
    return satisfies(comp.semver, rangeTmp, loose);
  }

  var sameDirectionIncreasing =
    (this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '>=' || comp.operator === '>');
  var sameDirectionDecreasing =
    (this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '<=' || comp.operator === '<');
  var sameSemVer = this.semver.version === comp.semver.version;
  var differentDirectionsInclusive =
    (this.operator === '>=' || this.operator === '<=') &&
    (comp.operator === '>=' || comp.operator === '<=');
  var oppositeDirectionsLessThan =
    cmp(this.semver, '<', comp.semver, loose) &&
    ((this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '<=' || comp.operator === '<'));
  var oppositeDirectionsGreaterThan =
    cmp(this.semver, '>', comp.semver, loose) &&
    ((this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '>=' || comp.operator === '>'));

  return sameDirectionIncreasing || sameDirectionDecreasing ||
    (sameSemVer && differentDirectionsInclusive) ||
    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
};


exports.Range = Range;
function Range(range, loose) {
  if (range instanceof Range) {
    if (range.loose === loose) {
      return range;
    } else {
      return new Range(range.raw, loose);
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, loose);
  }

  if (!(this instanceof Range))
    { return new Range(range, loose); }

  this.loose = loose;

  // First, split based on boolean or ||
  this.raw = range;
  this.set = range.split(/\s*\|\|\s*/).map(function(range) {
    return this.parseRange(range.trim());
  }, this).filter(function(c) {
    // throw out any that are not relevant for whatever reason
    return c.length;
  });

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range);
  }

  this.format();
}

Range.prototype.format = function() {
  this.range = this.set.map(function(comps) {
    return comps.join(' ').trim();
  }).join('||').trim();
  return this.range;
};

Range.prototype.toString = function() {
  return this.range;
};

Range.prototype.parseRange = function(range) {
  var loose = this.loose;
  range = range.trim();
  debug('range', range, loose);
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
  range = range.replace(hr, hyphenReplace);
  debug('hyphen replace', range);
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
  debug('comparator trim', range, re[COMPARATORTRIM]);

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace);

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace);

  // normalize spaces
  range = range.split(/\s+/).join(' ');

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
  var set = range.split(' ').map(function(comp) {
    return parseComparator(comp, loose);
  }).join(' ').split(/\s+/);
  if (this.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function(comp) {
      return !!comp.match(compRe);
    });
  }
  set = set.map(function(comp) {
    return new Comparator(comp, loose);
  });

  return set;
};

Range.prototype.intersects = function(range, loose) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required');
  }

  return this.set.some(function(thisComparators) {
    return thisComparators.every(function(thisComparator) {
      return range.set.some(function(rangeComparators) {
        return rangeComparators.every(function(rangeComparator) {
          return thisComparator.intersects(rangeComparator, loose);
        });
      });
    });
  });
};

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators;
function toComparators(range, loose) {
  return new Range(range, loose).set.map(function(comp) {
    return comp.map(function(c) {
      return c.value;
    }).join(' ').trim().split(' ');
  });
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator(comp, loose) {
  debug('comp', comp);
  comp = replaceCarets(comp, loose);
  debug('caret', comp);
  comp = replaceTildes(comp, loose);
  debug('tildes', comp);
  comp = replaceXRanges(comp, loose);
  debug('xrange', comp);
  comp = replaceStars(comp, loose);
  debug('stars', comp);
  return comp;
}

function isX(id) {
  return !id || id.toLowerCase() === 'x' || id === '*';
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceTilde(comp, loose);
  }).join(' ');
}

function replaceTilde(comp, loose) {
  var r = loose ? re[TILDELOOSE] : re[TILDE];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      { ret = ''; }
    else if (isX(m))
      { ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'; }
    else if (isX(p))
      // ~1.2 == >=1.2.0 <1.3.0
      { ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'; }
    else if (pr) {
      debug('replaceTilde pr', pr);
      if (pr.charAt(0) !== '-')
        { pr = '-' + pr; }
      ret = '>=' + M + '.' + m + '.' + p + pr +
            ' <' + M + '.' + (+m + 1) + '.0';
    } else
      // ~1.2.3 == >=1.2.3 <1.3.0
      { ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0'; }

    debug('tilde return', ret);
    return ret;
  });
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets(comp, loose) {
  return comp.trim().split(/\s+/).map(function(comp) {
    return replaceCaret(comp, loose);
  }).join(' ');
}

function replaceCaret(comp, loose) {
  debug('caret', comp, loose);
  var r = loose ? re[CARETLOOSE] : re[CARET];
  return comp.replace(r, function(_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr);
    var ret;

    if (isX(M))
      { ret = ''; }
    else if (isX(m))
      { ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'; }
    else if (isX(p)) {
      if (M === '0')
        { ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'; }
      else
        { ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0'; }
    } else if (pr) {
      debug('replaceCaret pr', pr);
      if (pr.charAt(0) !== '-')
        { pr = '-' + pr; }
      if (M === '0') {
        if (m === '0')
          { ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + m + '.' + (+p + 1); }
        else
          { ret = '>=' + M + '.' + m + '.' + p + pr +
                ' <' + M + '.' + (+m + 1) + '.0'; }
      } else
        { ret = '>=' + M + '.' + m + '.' + p + pr +
              ' <' + (+M + 1) + '.0.0'; }
    } else {
      debug('no pr');
      if (M === '0') {
        if (m === '0')
          { ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1); }
        else
          { ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0'; }
      } else
        { ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0'; }
    }

    debug('caret return', ret);
    return ret;
  });
}

function replaceXRanges(comp, loose) {
  debug('replaceXRanges', comp, loose);
  return comp.split(/\s+/).map(function(comp) {
    return replaceXRange(comp, loose);
  }).join(' ');
}

function replaceXRange(comp, loose) {
  comp = comp.trim();
  var r = loose ? re[XRANGELOOSE] : re[XRANGE];
  return comp.replace(r, function(ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr);
    var xM = isX(M);
    var xm = xM || isX(m);
    var xp = xm || isX(p);
    var anyX = xp;

    if (gtlt === '=' && anyX)
      { gtlt = ''; }

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0';
      } else {
        // nothing is forbidden
        ret = '*';
      }
    } else if (gtlt && anyX) {
      // replace X with 0
      if (xm)
        { m = 0; }
      if (xp)
        { p = 0; }

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>=';
        if (xm) {
          M = +M + 1;
          m = 0;
          p = 0;
        } else if (xp) {
          m = +m + 1;
          p = 0;
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<';
        if (xm)
          { M = +M + 1; }
        else
          { m = +m + 1; }
      }

      ret = gtlt + M + '.' + m + '.' + p;
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
    }

    debug('xRange return', ret);

    return ret;
  });
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars(comp, loose) {
  debug('replaceStars', comp, loose);
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '');
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace($0,
                       from, fM, fm, fp, fpr, fb,
                       to, tM, tm, tp, tpr, tb) {

  if (isX(fM))
    { from = ''; }
  else if (isX(fm))
    { from = '>=' + fM + '.0.0'; }
  else if (isX(fp))
    { from = '>=' + fM + '.' + fm + '.0'; }
  else
    { from = '>=' + from; }

  if (isX(tM))
    { to = ''; }
  else if (isX(tm))
    { to = '<' + (+tM + 1) + '.0.0'; }
  else if (isX(tp))
    { to = '<' + tM + '.' + (+tm + 1) + '.0'; }
  else if (tpr)
    { to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr; }
  else
    { to = '<=' + to; }

  return (from + ' ' + to).trim();
}


// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function(version) {
  var this$1 = this;

  if (!version)
    { return false; }

  if (typeof version === 'string')
    { version = new SemVer(version, this.loose); }

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this$1.set[i], version))
      { return true; }
  }
  return false;
};

function testSet(set, version) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version))
      { return false; }
  }

  if (version.prerelease.length) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (var i = 0; i < set.length; i++) {
      debug(set[i].semver);
      if (set[i].semver === ANY)
        { continue; }

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver;
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch)
          { return true; }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false;
  }

  return true;
}

exports.satisfies = satisfies;
function satisfies(version, range, loose) {
  try {
    range = new Range(range, loose);
  } catch (er) {
    return false;
  }
  return range.test(version);
}

exports.maxSatisfying = maxSatisfying;
function maxSatisfying(versions, range, loose) {
  var max = null;
  var maxSV = null;
  try {
    var rangeObj = new Range(range, loose);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) { // satisfies(v, range, loose)
      if (!max || maxSV.compare(v) === -1) { // compare(max, v, true)
        max = v;
        maxSV = new SemVer(max, loose);
      }
    }
  });
  return max;
}

exports.minSatisfying = minSatisfying;
function minSatisfying(versions, range, loose) {
  var min = null;
  var minSV = null;
  try {
    var rangeObj = new Range(range, loose);
  } catch (er) {
    return null;
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) { // satisfies(v, range, loose)
      if (!min || minSV.compare(v) === 1) { // compare(min, v, true)
        min = v;
        minSV = new SemVer(min, loose);
      }
    }
  });
  return min;
}

exports.validRange = validRange;
function validRange(range, loose) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, loose).range || '*';
  } catch (er) {
    return null;
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr;
function ltr(version, range, loose) {
  return outside(version, range, '<', loose);
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr;
function gtr(version, range, loose) {
  return outside(version, range, '>', loose);
}

exports.outside = outside;
function outside(version, range, hilo, loose) {
  version = new SemVer(version, loose);
  range = new Range(range, loose);

  var gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case '>':
      gtfn = gt;
      ltefn = lte;
      ltfn = lt;
      comp = '>';
      ecomp = '>=';
      break;
    case '<':
      gtfn = lt;
      ltefn = gte;
      ltfn = gt;
      comp = '<';
      ecomp = '<=';
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, loose)) {
    return false;
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i];

    var high = null;
    var low = null;

    comparators.forEach(function(comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0');
      }
      high = high || comparator;
      low = low || comparator;
      if (gtfn(comparator.semver, high.semver, loose)) {
        high = comparator;
      } else if (ltfn(comparator.semver, low.semver, loose)) {
        low = comparator;
      }
    });

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}

exports.prerelease = prerelease;
function prerelease(version, loose) {
  var parsed = parse(version, loose);
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null;
}

exports.intersects = intersects;
function intersects(r1, r2, loose) {
  r1 = new Range(r1, loose);
  r2 = new Range(r2, loose);
  return r1.intersects(r2)
}

exports.coerce = coerce;
function coerce(version) {
  if (version instanceof SemVer)
    { return version; }

  if (typeof version !== 'string')
    { return null; }

  var match = version.match(re[COERCE]);

  if (match == null)
    { return null; }

  return parse((match[1] || '0') + '.' + (match[2] || '0') + '.' + (match[3] || '0')); 
}
});

__$styleInject("* {\n  color: initial;\n  cursor: initial;\n  direction: initial;\n  font: initial;\n  font-family: initial;\n  font-size: initial;\n  font-style: initial;\n  font-variant: initial;\n  font-weight: initial;\n  line-height: initial;\n  text-align: initial;\n  text-indent: initial;\n  visibility: initial;\n  white-space: initial;\n  word-spacing: initial;\n  font-family: BlinkMacSystemFont, 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  -webkit-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\nhtml, body {\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n}\n\na,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\ntextarea {\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\n\np, ol, ul, dl {\n  margin: 0;\n  padding: 0;\n}\n\nli {\n  list-style: none;\n}\n\nfigure {\n  margin: 0;\n}\n\ntextarea {\n  resize: none;\n}\n",undefined);

__$styleInject("a, .weex-a {\n  display: block;\n  position: relative;\n  text-decoration: none;\n}\n\nbody > .weex-div {\n  max-height: 100%;\n}\n\n.weex-div {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  box-align: stretch;\n  -webkit-align-content: flex-start;\n      -ms-flex-line-pack: start;\n          align-content: flex-start;\n}\n\ninput, textarea, .weex-input, .weex-textarea {\n  position: relative;\n  font-size: 0.4267rem;\n}\ninput:focus, textarea:focus, .weex-input:focus, .weex-textarea:focus {\n  outline: none;\n}\n\nfigure, img, .weex-image, .weex-img {\n  display: block;\n  position: relative;\n  background-repeat: no-repeat;\n}\n\n.weex-toast {\n  font-size: 0.32rem;\n  line-height: 0.426667rem;\n  position: fixed;\n  box-sizing: border-box;\n  max-width: 80%;\n  bottom: 2.666667rem;\n  left: 50%;\n  padding: 0.213333rem;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  opacity: 0.6;\n  -webkit-transition: all 0.4s ease-in-out;\n          transition: all 0.4s ease-in-out;\n  border-radius: 0.066667rem;\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n      transform: translateX(-50%);\n}\n\n.weex-toast.hide {\n  opacity: 0;\n}\n\n.weex-alert .weex-alert-ok {\n  width: 100%;\n}\n\n.weex-confirm .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-confirm .btn-group .btn.btn-ok {\n  border-right: 1px solid #ddd;\n}\n\n.weex-modal-wrap {\n  display: none;\n  position: fixed;\n  z-index: 999999999;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.weex-modal-node {\n  position: fixed;\n  z-index: 9999999999;\n  top: 50%;\n  left: 50%;\n  width: 6.666667rem;\n  min-height: 2.666667rem;\n  border-radius: 0.066667rem;\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  background-color: #fff;\n}\n\n.weex-modal-node.hide {\n  display: none;\n}\n\n.weex-modal-node .content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  width: 100%;\n  min-height: 1.866667rem;\n  box-sizing: border-box;\n  font-size: 0.32rem;\n  line-height: 0.426667rem;\n  padding: 0.213333rem;\n  border-bottom: 1px solid #ddd;\n}\n\n.weex-modal-node .btn-group {\n  width: 100%;\n  height: 0.8rem;\n  font-size: 0.373333rem;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.amfe-modal-node .btn-group .btn {\n  text-align: center;\n}\n\n.weex-modal-node .btn-group .btn {\n  box-sizing: border-box;\n  height: 0.8rem;\n  line-height: 0.8rem;\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  text-align: center;\n}\n\n.weex-prompt .input-wrap {\n  box-sizing: border-box;\n  width: 100%;\n  margin-top: 0.133333rem;\n  height: 0.96rem;\n}\n\n.weex-prompt .input-wrap .input {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.56rem;\n  line-height: 0.56rem;\n  font-size: 0.32rem;\n  border: 1px solid #999;\n}\n\n.weex-prompt .btn-group .btn {\n  float: left;\n  width: 50%;\n}\n\n.weex-prompt .btn-group .btn.btn-ok {\n  border-right: 1px solid #ddd;\n}\n\nbody > .weex-list,\nbody > .weex-scroller {\n  max-height: 100%;\n}\n\n.weex-list-wrapper,\n.weex-scroller-wrapper {\n  display: block;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.weex-list-inner,\n.weex-scroller-inner {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  min-height: 100%;\n  overflow: hidden;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n.weex-scroller-wrapper.weex-scroller-horizontal {\n  overflow-y: hidden;\n}\n\n.weex-scroller-horizontal .weex-scroller-inner {\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  overflow-x: scroll;\n  width: auto;\n  height: 100%;\n}\n.weex-scroller-horizontal .weex-scroller-inner > * {\n  float: left;\n}\n\n.sticky {\n  position: fixed;\n  z-index: 9999;\n}\n\n.weex-cell {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n}\n\n.weex-refresh,\n.weex-loading {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  position: absolute;\n  visibility: hidden;\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.weex-refresh {\n  top: 0;\n}\n\n.weex-loading {\n  bottom: 0;\n  bottom: -2.8267rem;\n}\n\n.weex-slider-wrapper {\n  overflow: hidden;\n  position: relative;\n}\n\n.weex-slider-inner {\n  position: absolute;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.weex-slider-cell {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\n.weex-indicator {\n  position: absolute;\n  margin: 0;\n  padding: 0;\n}\n\n.weex-indicator-item {\n  display: inline-block;\n  position: relative;\n  border-radius: 50%;\n  width: 0.2667rem;\n  height: 0.2667rem;\n  background-color: #BBBBBB;\n}\n.weex-indicator-item + .weex-indicator-item {\n  margin-left: 0.1333rem;\n}\n\n.weex-indicator-item-active {\n  background-color: blue;\n}\n\n.weex-refresh-indicator,\n.weex-loading-indicator {\n  position: relative;\n  width: 1rem;\n  height: 1rem;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow: visible;\n  background: none;\n}\n.weex-refresh-indicator:before,\n.weex-loading-indicator:before {\n  display: block;\n  content: '';\n  font-size: 0.16rem;\n  /* 12px */\n  width: 1em;\n  height: 1em;\n  left: -60%;\n  top: 40%;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: weex-spinner 1.1s infinite ease;\n          animation: weex-spinner 1.1s infinite ease;\n  -webkit-transform: translate3d(1rem, 0, 0);\n          transform: translate3d(1rem, 0, 0);\n}\n\n@-webkit-keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n\n@keyframes weex-spinner {\n  0%,\n  100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n.weex-switch {\n  border: 1px solid #dfdfdf;\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  box-sizing: content-box;\n  background-clip: content-box;\n  color: #64bd63;\n  width: 1.3333rem;\n  height: 0.8rem;\n  background-color: white;\n  border-color: #dfdfdf;\n  box-shadow: #dfdfdf 0 0 0 0 inset;\n  border-radius: 0.8rem;\n  -webkit-transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n          transition: border 0.4s, box-shadow 0.4s, background-color 1.2s;\n}\n\n.weex-switch-checked {\n  background-color: #64bd63;\n  border-color: #64bd63;\n  box-shadow: #64bd63 0 0 0 0.5333rem inset;\n}\n\n.weex-switch-checked.weex-switch-disabled {\n  background-color: #A0CCA0;\n  box-shadow: #A0CCA0 0 0 0 0.5333rem inset;\n}\n\n.weex-switch-disabled {\n  background-color: #EEEEEE;\n}\n\n.weex-switch-inner {\n  width: 0.8rem;\n  height: 0.8rem;\n  background: #fff;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transition: background-color 0.4s, left 0.2s;\n          transition: background-color 0.4s, left 0.2s;\n}\n\n.weex-switch-checked > .weex-switch-inner {\n  left: 0.5333rem;\n}\n\np, .weex-text {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  position: relative;\n  white-space: pre-wrap;\n  font-size: 0.4267rem;\n  word-wrap: break-word;\n  overflow: visible;\n}\n\n.weex-web {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  box-sizing: border-box;\n}\n",undefined);

/* eslint-disable */

var isInitialized = false;

// major events supported:
//   panstart
//   panmove
//   panend
//   swipe
//   longpress
// extra events supported:
//   dualtouchstart
//   dualtouch
//   dualtouchend
//   tap
//   doubletap
//   pressend

var doc = window.document;
var docEl = doc.documentElement;
var slice = Array.prototype.slice;
var gestures = {};
var lastTap = null;

/**
 * find the closest common ancestor
 * if there's no one, return null
 *
 * @param  {Element} el1 first element
 * @param  {Element} el2 second element
 * @return {Element}     common ancestor
 */
function getCommonAncestor(el1, el2) {
  var el = el1;
  while (el) {
    if (el.contains(el2) || el == el2) {
      return el
    }
    el = el.parentNode;
  }
  return null
}

/**
 * fire a HTMLEvent
 *
 * @param  {Element} element which element to fire a event on
 * @param  {string}  type    type of event
 * @param  {object}  extra   extra data for the event object
 */
function fireEvent(element, type, extra) {
  var event = doc.createEvent('HTMLEvents');
  event.initEvent(type, true, true);

  if (typeof extra === 'object') {
    for (var p in extra) {
      event[p] = extra[p];
    }
  }

  element.dispatchEvent(event);
}

/**
 * calc the transform
 * assume 4 points ABCD on the coordinate system
 * > rotate：angle rotating from AB to CD
 * > scale：scale ratio from AB to CD
 * > translate：translate shift from A to C
 *
 * @param  {number} x1 abscissa of A
 * @param  {number} y1 ordinate of A
 * @param  {number} x2 abscissa of B
 * @param  {number} y2 ordinate of B
 * @param  {number} x3 abscissa of C
 * @param  {number} y3 ordinate of C
 * @param  {number} x4 abscissa of D
 * @param  {number} y4 ordinate of D
 * @return {object}    transform object like
 *   {rotate, scale, translate[2], matrix[3][3]}
 */
function calc(x1, y1, x2, y2, x3, y3, x4, y4) {
  var rotate = Math.atan2(y4 - y3, x4 - x3) - Math.atan2(y2 - y1, x2 - x1);
  var scale = Math.sqrt((Math.pow(y4 - y3, 2)
    + Math.pow(x4 - x3, 2)) / (Math.pow(y2 - y1, 2)
    + Math.pow(x2 - x1, 2)));
  var translate = [
    x3
    - scale * x1 * Math.cos(rotate)
    + scale * y1 * Math.sin(rotate),
    y3
    - scale * y1 * Math.cos(rotate)
    - scale * x1 * Math.sin(rotate)];

  return {
    rotate: rotate,
    scale: scale,
    translate: translate,
    matrix: [
      [scale * Math.cos(rotate), -scale * Math.sin(rotate), translate[0]],
      [scale * Math.sin(rotate), scale * Math.cos(rotate), translate[1]],
      [0, 0, 1]
    ]
  }
}

/**
 * take over the touchstart events. Add new touches to the gestures.
 * If there is no previous records, then bind touchmove, tochend
 * and touchcancel events.
 * new touches initialized with state 'tapping', and within 500 milliseconds
 * if the state is still tapping, then trigger gesture 'press'.
 * If there are two touche points, then the 'dualtouchstart' is triggerd. The
 * node of the touch gesture is their cloest common ancestor.
 *
 * @event
 * @param  {event} event
 */
function touchstartHandler(event) {

  if (Object.keys(gestures).length === 0) {
    docEl.addEventListener('touchmove', touchmoveHandler, false);
    docEl.addEventListener('touchend', touchendHandler, false);
    docEl.addEventListener('touchcancel', touchcancelHandler, false);
  }

  // record every touch
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var touchRecord = {};

    for (var p in touch) {
      touchRecord[p] = touch[p];
    }

    var gesture = {
      startTouch: touchRecord,
      startTime: Date.now(),
      status: 'tapping',
      element: event.srcElement || event.target,
      pressingHandler: setTimeout(function (element, touch) {
        return function () {
          if (gesture.status === 'tapping') {
            gesture.status = 'pressing';

            fireEvent(element, 'longpress', {
              // add touch data for weex
              touch: touch,
              touches: event.touches,
              changedTouches: event.changedTouches,
              touchEvent: event
            });
          }

          clearTimeout(gesture.pressingHandler);
          gesture.pressingHandler = null;
        }
      }(event.srcElement || event.target, event.changedTouches[i]), 500)
    };
    gestures[touch.identifier] = gesture;
  }

  if (Object.keys(gestures).length == 2) {
    var elements = [];

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchstart', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }
}

/**
 * take over touchmove events, and handle pan and dual related gestures.
 *
 * 1. traverse every touch point：
 * > if 'tapping' and the shift is over 10 pixles, then it's a 'panning'.
 * 2. if there are two touch points, then calc the tranform and trigger
 *   'dualtouch'.
 *
 * @event
 * @param  {event} event
 */
function touchmoveHandler(event) {
  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var gesture = gestures[touch.identifier];

    if (!gesture) {
      return
    }

    if (!gesture.lastTouch) {
      gesture.lastTouch = gesture.startTouch;
    }
    if (!gesture.lastTime) {
      gesture.lastTime = gesture.startTime;
    }
    if (!gesture.velocityX) {
      gesture.velocityX = 0;
    }
    if (!gesture.velocityY) {
      gesture.velocityY = 0;
    }
    if (!gesture.duration) {
      gesture.duration = 0;
    }

    var time =  Date.now() - gesture.lastTime;
    var vx = (touch.clientX - gesture.lastTouch.clientX) / time;
    var vy = (touch.clientY - gesture.lastTouch.clientY) / time;

    var RECORD_DURATION = 70;
    if (time > RECORD_DURATION) {
      time = RECORD_DURATION;
    }
    if (gesture.duration + time > RECORD_DURATION) {
      gesture.duration = RECORD_DURATION - time;
    }

    gesture.velocityX = (gesture.velocityX * gesture.duration + vx * time)
      / (gesture.duration + time);
    gesture.velocityY = (gesture.velocityY * gesture.duration + vy * time)
      / (gesture.duration + time);
    gesture.duration += time;

    gesture.lastTouch = {};

    for (var p in touch) {
      gesture.lastTouch[p] = touch[p];
    }
    gesture.lastTime = Date.now();

    var displacementX = touch.clientX - gesture.startTouch.clientX;
    var displacementY = touch.clientY - gesture.startTouch.clientY;
    var distance = Math.sqrt(Math.pow(displacementX, 2)
      + Math.pow(displacementY, 2));
    var isVertical = !(Math.abs(displacementX) > Math.abs(displacementY));
    var direction = isVertical
      ? displacementY >= 0 ? 'down' : 'up'
      : displacementX >= 0 ? 'right' : 'left';

    // magic number 10: moving 10px means pan, not tap
    if ((gesture.status === 'tapping' || gesture.status === 'pressing')
        && distance > 10) {
      gesture.status = 'panning';
      gesture.isVertical = isVertical;
      gesture.direction = direction;

      fireEvent(gesture.element, 'panstart', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }

    if (gesture.status === 'panning') {
      gesture.panTime = Date.now();

      fireEvent(gesture.element, 'panmove', {
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: direction
      });
    }
  }

  if (Object.keys(gestures).length == 2) {
    var position = [];
    var current = [];
    var elements = [];
    var transform;

    for (var i = 0; i < event.touches.length; i++) {
      var touch = event.touches[i];
      var gesture = gestures[touch.identifier];
      position.push([gesture.startTouch.clientX, gesture.startTouch.clientY]);
      current.push([touch.clientX, touch.clientY]);
    }

    for (var p in gestures) {
      elements.push(gestures[p].element);
    }

    transform = calc(
      position[0][0],
      position[0][1],
      position[1][0],
      position[1][1],
      current[0][0],
      current[0][1],
      current[1][0],
      current[1][1]
    );
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouch', {
      transform: transform,
      touches: event.touches,
      touchEvent: event
    });
  }
}

/**
 * handle touchend event
 *
 * 1. if there are tow touch points, then trigger 'dualtouchend'如
 *
 * 2. traverse every touch piont：
 * > if tapping, then trigger 'tap'.
 * If there is a tap 300 milliseconds before, then it's a 'doubletap'.
 * > if padding, then decide to trigger 'panend' or 'swipe'
 * > if pressing, then trigger 'pressend'.
 *
 * 3. remove listeners.
 *
 * @event
 * @param  {event} event
 */
function touchendHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'tapping') {
      gesture.timestamp = Date.now();
      fireEvent(gesture.element, 'tap', {
        touch: touch,
        touchEvent: event
      });

      if (lastTap && gesture.timestamp - lastTap.timestamp < 300) {
        fireEvent(gesture.element, 'doubletap', {
          touch: touch,
          touchEvent: event
        });
      }

      lastTap = gesture;
    }

    if (gesture.status === 'panning') {
      var now = Date.now();
      var duration = now - gesture.startTime;
      var displacementX = touch.clientX - gesture.startTouch.clientX;
      var displacementY = touch.clientY - gesture.startTouch.clientY;

      var velocity = Math.sqrt(gesture.velocityY * gesture.velocityY
        + gesture.velocityX * gesture.velocityX);
      var isSwipe = velocity > 0.5 && (now - gesture.lastTime) < 100;
      var extra = {
        duration: duration,
        isSwipe: isSwipe,
        velocityX: gesture.velocityX,
        velocityY: gesture.velocityY,
        displacementX: displacementX,
        displacementY: displacementY,
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event,
        isVertical: gesture.isVertical,
        direction: gesture.direction
      };

      fireEvent(gesture.element, 'panend', extra);
      if (isSwipe) {
        fireEvent(gesture.element, 'swipe', extra);
      }
    }

    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }

    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

/**
 * handle touchcancel
 *
 * 1. if there are two touch points, then trigger 'dualtouchend'
 *
 * 2. traverse everty touch point:
 * > if pannnig, then trigger 'panend'
 * > if pressing, then trigger 'pressend'
 *
 * 3. remove listeners
 *
 * @event
 * @param  {event} event
 */
function touchcancelHandler(event) {

  if (Object.keys(gestures).length == 2) {
    var elements = [];
    for (var p in gestures) {
      elements.push(gestures[p].element);
    }
    fireEvent(getCommonAncestor(elements[0], elements[1]), 'dualtouchend', {
      touches: slice.call(event.touches),
      touchEvent: event
    });
  }

  for (var i = 0; i < event.changedTouches.length; i++) {
    var touch = event.changedTouches[i];
    var id = touch.identifier;
    var gesture = gestures[id];

    if (!gesture) {
      continue
    }

    if (gesture.pressingHandler) {
      clearTimeout(gesture.pressingHandler);
      gesture.pressingHandler = null;
    }

    if (gesture.status === 'panning') {
      fireEvent(gesture.element, 'panend', {
        touch: touch,
        touches: event.touches,
        changedTouches: event.changedTouches,
        touchEvent: event
      });
    }
    if (gesture.status === 'pressing') {
      fireEvent(gesture.element, 'pressend', {
        touch: touch,
        touchEvent: event
      });
    }
    delete gestures[id];
  }

  if (Object.keys(gestures).length === 0) {
    docEl.removeEventListener('touchmove', touchmoveHandler, false);
    docEl.removeEventListener('touchend', touchendHandler, false);
    docEl.removeEventListener('touchcancel', touchcancelHandler, false);
  }
}

if (!isInitialized) {
  docEl.addEventListener('touchstart', touchstartHandler, false);
  isInitialized = true;
}

/* eslint-disable */

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from

/* istanbul ignore if */
if (!Array.from) {
  Array.from = (function() {
    var toStr = Object.prototype.toString;
    var isCallable = function(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') { __g = global; } // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') { __e = core; } // eslint-disable-line no-undef
});

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var isObject = _isObject;
var _anObject = function (it) {
  if (!isObject(it)) { throw TypeError(it + ' is not an object!'); }
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var isObject$1 = _isObject;
var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = isObject$1(document$1) && isObject$1(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject$2 = _isObject;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!isObject$2(it)) { return it; }
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))) { return val; }
  if (typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it))) { return val; }
  if (!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it))) { return val; }
  throw TypeError("Can't convert object to primitive value");
};

var anObject = _anObject;
var IE8_DOM_DEFINE = _ie8DomDefine;
var toPrimitive = _toPrimitive;
var dP$1 = Object.defineProperty;

var f$1 = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) { try {
    return dP$1(O, P, Attributes);
  } catch (e) { /* empty */ } }
  if ('get' in Attributes || 'set' in Attributes) { throw TypeError('Accessors not supported!'); }
  if ('value' in Attributes) { O[P] = Attributes.value; }
  return O;
};

var _objectDp = {
	f: f$1
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var dP = _objectDp;
var createDesc = _propertyDesc;
var _hide = _descriptors ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _redefine = createCommonjsModule(function (module) {
var global = _global;
var hide = _hide;
var has = _has;
var SRC = _uid('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

_core.inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) { has(val, 'name') || hide(val, 'name', key); }
  if (O[key] === val) { return; }
  if (isFunction) { has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

var _aFunction = function (it) {
  if (typeof it != 'function') { throw TypeError(it + ' is not a function!'); }
  return it;
};

// optional / simple context binding
var aFunction = _aFunction;
var _ctx = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) { return fn; }
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var global$1 = _global;
var core = _core;
var hide = _hide;
var redefine = _redefine;
var ctx = _ctx;
var PROTOTYPE = 'prototype';

var $export$1 = function (type, name, source) {
  var IS_FORCED = type & $export$1.F;
  var IS_GLOBAL = type & $export$1.G;
  var IS_STATIC = type & $export$1.S;
  var IS_PROTO = type & $export$1.P;
  var IS_BIND = type & $export$1.B;
  var target = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) { source = name; }
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global$1) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) { redefine(target, key, out, type & $export$1.U); }
    // export
    if (exports[key] != out) { hide(exports, key, exp); }
    if (IS_PROTO && expProto[key] != out) { expProto[key] = out; }
  }
};
global$1.core = core;
// type bitmap
$export$1.F = 1;   // forced
$export$1.G = 2;   // global
$export$1.S = 4;   // static
$export$1.P = 8;   // proto
$export$1.B = 16;  // bind
$export$1.W = 32;  // wrap
$export$1.U = 64;  // safe
$export$1.R = 128; // real proto method for `library`
var _export = $export$1;

var toString$1 = {}.toString;

var _cof = function (it) {
  return toString$1.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _cof;
// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) { throw TypeError("Can't call method on  " + it); }
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject$1 = _iobject;
var defined = _defined;
var _toIobject = function (it) {
  return IObject$1(defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength
var toInteger = _toInteger;
var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var toInteger$1 = _toInteger;
var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes
var toIObject$1 = _toIobject;
var toLength = _toLength;
var toAbsoluteIndex = _toAbsoluteIndex;
var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject$1($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) { while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) { return true; }
    // Array#indexOf ignores holes, Array#includes - not
    } } else { for (;length > index; index++) { if (IS_INCLUDES || index in O) {
      if (O[index] === el) { return IS_INCLUDES || index || 0; }
    } } } return !IS_INCLUDES && -1;
  };
};

var _library = false;

var _shared = createCommonjsModule(function (module) {
var core = _core;
var global = _global;
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: _library ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});
});

var shared = _shared('keys');
var uid = _uid;
var _sharedKey = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

var has = _has;
var toIObject = _toIobject;
var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) { if (key != IE_PROTO) { has(O, key) && result.push(key); } }
  // Don't enum bug & hidden keys
  while (names.length > i) { if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  } }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = _objectKeysInternal;
var enumBugKeys = _enumBugKeys;

var _objectKeys = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// 7.1.13 ToObject(argument)
var defined$1 = _defined;
var _toObject = function (it) {
  return Object(defined$1(it));
};

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = _objectKeys;
var gOPS = _objectGops;
var pIE = _objectPie;
var toObject = _toObject;
var IObject = _iobject;
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  var arguments$1 = arguments;
 // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments$1[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) { if (isEnum.call(S, key = keys[j++])) { T[key] = S[key]; } }
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)
var $export = _export;

$export($export.S + $export.F, 'Object', { assign: _objectAssign });

/* eslint-disable */

// https://gist.github.com/WebReflection/5593554

/* istanbul ignore if */
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = (function(Object, magic) {
    var set;
    function setPrototypeOf(O, proto) {
      set.call(O, proto);
      return O;
    }
    try {
      // this works already in Firefox and Safari
      set = Object.getOwnPropertyDescriptor(Object.prototype, magic).set;
      set.call({}, null);
    } catch (e) {
      if (
        // IE < 11 cannot be shimmed
        Object.prototype !== {}[magic] ||
        // neither can any browser that actually
        // implemented __proto__ correctly
        // (all but old V8 will return here)
        {__proto__: null}.__proto__ === void 0
        // this case means null objects cannot be passed
        // through setPrototypeOf in a reliable way
        // which means here a **Sham** is needed instead
      ) {
        return;
      }
      // nodejs 0.8 and 0.10 are (buggy and..) fine here
      // probably Chrome or some old Mobile stock browser
      set = function(proto) {
        this[magic] = proto;
      };
      // please note that this will **not** work
      // in those browsers that do not inherit
      // __proto__ by mistake from Object.prototype
      // in these cases we should probably throw an error
      // or at least be informed about the issue
      setPrototypeOf.polyfill = setPrototypeOf(
        setPrototypeOf({}, null),
        Object.prototype
      ) instanceof Object;
      // setPrototypeOf.polyfill === true means it works as meant
      // setPrototypeOf.polyfill === false means it's not 100% reliable
      // setPrototypeOf.polyfill === undefined
      // or
      // setPrototypeOf.polyfill ==  null means it's not a polyfill
      // which means it works as expected
      // we can even delete Object.prototype.__proto__;
    }
    return setPrototypeOf;
  }(Object, '__proto__'));
}

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');
var uid = _uid;
var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof$1 = _cof;
var TAG = _wks('toStringTag');
// ES3 wrong here
var ARG = cof$1(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof$1(O)
    // ES3 arguments fallback
    : (B = cof$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()
var classof = _classof;
var test = {};
test[_wks('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  _redefine(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

var toInteger$2 = _toInteger;
var defined$2 = _defined;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined$2(that));
    var i = toInteger$2(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) { return TO_STRING ? '' : undefined; }
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _iterators = {};

var dP$2 = _objectDp;
var anObject$2 = _anObject;
var getKeys$1 = _objectKeys;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$2(O);
  var keys = getKeys$1(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) { dP$2.f(O, P = keys[i++], Properties[P]); }
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject$1 = _anObject;
var dPs = _objectDps;
var enumBugKeys$1 = _enumBugKeys;
var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = enumBugKeys$1.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) { delete createDict[PROTOTYPE$1][enumBugKeys$1[i]]; }
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = anObject$1(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else { result = createDict(); }
  return Properties === undefined ? result : dPs(result, Properties);
};

var def = _objectDp.f;
var has$1 = _has;
var TAG$1 = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !has$1(it = stat ? it : it.prototype, TAG$1)) { def(it, TAG$1, { configurable: true, value: tag }); }
};

var create$1 = _objectCreate;
var descriptor = _propertyDesc;
var setToStringTag$1 = _setToStringTag;
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = create$1(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag$1(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has$2 = _has;
var toObject$1 = _toObject;
var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = toObject$1(O);
  if (has$2(O, IE_PROTO$2)) { return O[IE_PROTO$2]; }
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var LIBRARY = _library;
var $export$2 = _export;
var redefine$1 = _redefine;
var hide$1 = _hide;
var Iterators = _iterators;
var $iterCreate = _iterCreate;
var setToStringTag = _setToStringTag;
var getPrototypeOf = _objectGpo;
var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) { return proto[kind]; }
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') { hide$1(IteratorPrototype, ITERATOR, returnThis); }
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide$1(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) { for (key in methods) {
      if (!(key in proto)) { redefine$1(proto, key, methods[key]); }
    } } else { $export$2($export$2.P + $export$2.F * (BUGGY || VALUES_BUG), NAME, methods); }
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) { return { value: undefined, done: true }; }
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) { _hide(ArrayProto, UNSCOPABLES, {}); }
var _addToUnscopables = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

var addToUnscopables = _addToUnscopables;
var step = _iterStep;
var Iterators$2 = _iterators;
var toIObject$2 = _toIobject;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = toIObject$2(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') { return step(0, index); }
  if (kind == 'values') { return step(0, O[index]); }
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$2.Arguments = Iterators$2.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var $iterators = es6_array_iterator;
var getKeys$2 = _objectKeys;
var redefine$2 = _redefine;
var global$2 = _global;
var hide$2 = _hide;
var Iterators$1 = _iterators;
var wks = _wks;
var ITERATOR$1 = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators$1.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys$2(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global$2[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR$1]) { hide$2(proto, ITERATOR$1, ArrayValues); }
    if (!proto[TO_STRING_TAG]) { hide$2(proto, TO_STRING_TAG, NAME); }
    Iterators$1[NAME] = ArrayValues;
    if (explicit) { for (key in $iterators) { if (!proto[key]) { redefine$2(proto, key, $iterators[key], true); } } }
  }
}

var _anInstance = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

// call something on iterator step with safe closing on error
var anObject$3 = _anObject;
var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject$3(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) { anObject$3(ret.call(iterator)); }
    throw e;
  }
};

// check on default Array iterator
var Iterators$3 = _iterators;
var ITERATOR$2 = _wks('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (Iterators$3.Array === it || ArrayProto$1[ITERATOR$2] === it);
};

var classof$2 = _classof;
var ITERATOR$3 = _wks('iterator');
var Iterators$4 = _iterators;
var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) { return it[ITERATOR$3]
    || it['@@iterator']
    || Iterators$4[classof$2(it)]; }
};

var _forOf = createCommonjsModule(function (module) {
var ctx = _ctx;
var call = _iterCall;
var isArrayIter = _isArrayIter;
var anObject = _anObject;
var toLength = _toLength;
var getIterFn = core_getIteratorMethod;
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') { throw TypeError(iterable + ' is not iterable!'); }
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) { for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) { return result; }
  } } else { for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) { return result; }
  } }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject$4 = _anObject;
var aFunction$2 = _aFunction;
var SPECIES = _wks('species');
var _speciesConstructor = function (O, D) {
  var C = anObject$4(O).constructor;
  var S;
  return C === undefined || (S = anObject$4(C)[SPECIES]) == undefined ? D : aFunction$2(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

var ctx$2 = _ctx;
var invoke = _invoke;
var html = _html;
var cel = _domCreate;
var global$4 = _global;
var process$2 = global$4.process;
var setTask = global$4.setImmediate;
var clearTask = global$4.clearImmediate;
var MessageChannel = global$4.MessageChannel;
var Dispatch = global$4.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var arguments$1 = arguments;

    var args = [];
    var i = 1;
    while (arguments.length > i) { args.push(arguments$1[i++]); }
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_cof(process$2) == 'process') {
    defer = function (id) {
      process$2.nextTick(ctx$2(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx$2(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$2(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global$4.addEventListener && typeof postMessage == 'function' && !global$4.importScripts) {
    defer = function (id) {
      global$4.postMessage(id + '', '*');
    };
    global$4.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx$2(run, id, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask
};

var global$5 = _global;
var macrotask = _task.set;
var Observer = global$5.MutationObserver || global$5.WebKitMutationObserver;
var process$3 = global$5.process;
var Promise$1 = global$5.Promise;
var isNode$1 = _cof(process$3) == 'process';

var _microtask = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode$1 && (parent = process$3.domain)) { parent.exit(); }
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) { notify(); }
        else { last = undefined; }
        throw e;
      }
    } last = undefined;
    if (parent) { parent.enter(); }
  };

  // Node.js
  if (isNode$1) {
    notify = function () {
      process$3.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global$5.navigator && global$5.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise$1.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$5, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) { last.next = task; }
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

// 25.4.1.5 NewPromiseCapability(C)
var aFunction$3 = _aFunction;

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) { throw TypeError('Bad Promise constructor'); }
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction$3(resolve);
  this.reject = aFunction$3(reject);
}

var f$4 = function (C) {
  return new PromiseCapability(C);
};

var _newPromiseCapability = {
	f: f$4
};

var _perform = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

var global$6 = _global;
var navigator$1 = global$6.navigator;

var _userAgent = navigator$1 && navigator$1.userAgent || '';

var anObject$5 = _anObject;
var isObject$4 = _isObject;
var newPromiseCapability$1 = _newPromiseCapability;

var _promiseResolve = function (C, x) {
  anObject$5(C);
  if (isObject$4(x) && x.constructor === C) { return x; }
  var promiseCapability = newPromiseCapability$1.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var redefine$3 = _redefine;
var _redefineAll = function (target, src, safe) {
  for (var key in src) { redefine$3(target, key, src[key], safe); }
  return target;
};

var global$7 = _global;
var dP$3 = _objectDp;
var DESCRIPTORS = _descriptors;
var SPECIES$1 = _wks('species');

var _setSpecies = function (KEY) {
  var C = global$7[KEY];
  if (DESCRIPTORS && C && !C[SPECIES$1]) { dP$3.f(C, SPECIES$1, {
    configurable: true,
    get: function () { return this; }
  }); }
};

var ITERATOR$4 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$4]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) { return false; }
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$4]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$4] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

var LIBRARY$1 = _library;
var global$3 = _global;
var ctx$1 = _ctx;
var classof$1 = _classof;
var $export$3 = _export;
var isObject$3 = _isObject;
var aFunction$1 = _aFunction;
var anInstance = _anInstance;
var forOf = _forOf;
var speciesConstructor = _speciesConstructor;
var task = _task.set;
var microtask = _microtask();
var newPromiseCapabilityModule = _newPromiseCapability;
var perform = _perform;
var userAgent = _userAgent;
var promiseResolve = _promiseResolve;
var PROMISE = 'Promise';
var TypeError$1 = global$3.TypeError;
var process$1 = global$3.process;
var versions = process$1 && process$1.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global$3[PROMISE];
var isNode = classof$1(process$1) == 'process';
var empty = function () { /* empty */ };
var Internal;
var newGenericPromiseCapability;
var OwnPromiseCapability;
var Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject$3(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) { return; }
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) { onHandleUnhandled(promise); }
            promise._h = 1;
          }
          if (handler === true) { result = value; }
          else {
            if (domain) { domain.enter(); }
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else { resolve(result); }
        } else { reject(value); }
      } catch (e) {
        if (domain && !exited) { domain.exit(); }
        reject(e);
      }
    };
    while (chain.length > i) { run(chain[i++]); } // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) { onUnhandled(promise); }
  });
};
var onUnhandled = function (promise) {
  task.call(global$3, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process$1.emit('unhandledRejection', value, promise);
        } else if (handler = global$3.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global$3.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) { throw result.v; }
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global$3, function () {
    var handler;
    if (isNode) {
      process$1.emit('rejectionHandled', promise);
    } else if (handler = global$3.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) { return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) { promise._a = promise._c.slice(); }
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) { return; }
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) { throw TypeError$1("Promise can't be resolved itself"); }
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx$1($resolve, wrapper, 1), ctx$1($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction$1(executor);
    Internal.call(this);
    try {
      executor(ctx$1($resolve, this, 1), ctx$1($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process$1.domain : undefined;
      this._c.push(reaction);
      if (this._a) { this._a.push(reaction); }
      if (this._s) { notify(this, false); }
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx$1($resolve, promise, 1);
    this.reject = ctx$1($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export$3($export$3.G + $export$3.W + $export$3.F * !USE_NATIVE, { Promise: $Promise });
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
$export$3($export$3.S + $export$3.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$3($export$3.S + $export$3.F * (LIBRARY$1 || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY$1 && this === Wrapper ? $Promise : this, x);
  }
});
$export$3($export$3.S + $export$3.F * !(USE_NATIVE && _iterDetect(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) { return; }
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) { reject(result.v); }
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) { reject(result.v); }
    return capability.promise;
  }
});

var DEFAULT_VIEWPORT_WIDTH = 750;

function parseViewportWidth (config) {
  var width = DEFAULT_VIEWPORT_WIDTH;
  if (config && config.width) {
    width = Number(config.width) || config.width;
  }
  return width
}

function setViewport (config) {
  if ( config === void 0 ) config = {};

  var doc = window.document;

  if (doc) {
    var viewportWidth = parseViewportWidth(config);

    // set root font-size
    doc.documentElement.style.fontSize = viewportWidth / 10 + 'px';

    /**
     * why not to use window.screen.width to get screenWidth ? Because in some
     * old webkit browser on android system it get the device pixel width, which
     * is the screenWidth multiply by the device pixel ratio.
     */
    var screenWidth = document.documentElement.getBoundingClientRect().width;
    var scale = screenWidth / viewportWidth;
    var contents = [
      ("width=" + viewportWidth),
      ("initial-scale=" + scale),
      ("maximum-scale=" + scale),
      ("minimum-scale=" + scale),
      "user-scalable=no"
    ];

    var meta = doc.querySelector('meta[name="viewport"]');
    if (!meta) {
      meta = doc.createElement('meta');
      meta.setAttribute('name', 'viewport');
      document.querySelector('head').appendChild(meta);
    }

    meta.setAttribute('content', contents.join(','));
  }
}

var event = {
  /**
   * openUrl
   * @param  {string} url
   */
  openURL: function (url) {
    location.href = url;
  }

};

var meta = {
  event: [{
    name: 'openURL',
    args: ['string']
  }]
};

var Event$1 = {
  init: function (Weex) {
    Weex.registerApiModule('event', event, meta);
  }
};

var supportGeolocation = 'geolocation' in navigator;
var errorMsg = "[h5-render]: browser doesn't support geolocation.";

var geolocation = {
  // options:
  //   - enableHighAccuracy optional, value is true or false, false by default.
  //   - timeout [none-native] optional, value is a number (milliseconds), default vaule is FINFINITY.
  //   - maximumAge [none-native] optional, value is a number (milliseconds), default value is 0.
  getCurrentPosition: function getCurrentPosition (successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos); };
    var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
    if (supportGeolocation) {
      navigator.geolocation.getCurrentPosition(successCb, errorCb, options);
    }
    else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  // options: the same with `getCurrentPosition`.
  watchPosition: function watchPosition (successCbId, errorCbId, options) {
    var this$1 = this;

    var successCb = function (pos) { return this$1.sender.performCallback(successCbId, pos, true); };
    var errorCb = function (err) { return this$1.sender.performCallback(errorCbId, err); };
    if (supportGeolocation) {
      var id = navigator.geolocation.watchPosition(function (pos) {
        pos.watchId = id;
        successCb(pos);
      }, errorCb, options);
    }
    else {
      console.warn(errorMsg);
      errorCb(new Error(errorMsg));
    }
  },

  clearWatch: function clearWatch (watchId) {
    if (supportGeolocation) {
      navigator.geolocation.clearWatch(watchId);
    }
    else {
      console.warn(errorMsg);
    }
  }
};

var meta$1 = {
  geolocation: [{
    name: 'getCurrentPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'watchPosition',
    args: ['function', 'function', 'object']
  }, {
    name: 'clearWatch',
    args: ['string']
  }]
};

var Geolocation = {
  init: function init (Weex) {
    Weex.registerApiModule('geolocation', geolocation, meta$1);
  }
};

var pageInfo = {

  setTitle: function (title) {
    title = title || 'Weex HTML5';
    try {
      title = decodeURIComponent(title);
    }
    catch (e) {}
    document.title = title;
  }
};

var meta$2 = {
  pageInfo: [{
    name: 'setTitle',
    args: ['string']
  }]
};

var PageInfo = {
  init: function (Weex) {
    Weex.registerApiModule('pageInfo', pageInfo, meta$2);
  }
};

/* global localStorage */
var supportLocalStorage = typeof localStorage !== 'undefined';
var SUCCESS = 'success';
var FAILED = 'failed';
var INVALID_PARAM = 'invalid_param';
var UNDEFINED = 'undefined';

var storage = {

  /**
   * When passed a key name and value, will add that key to the storage,
   * or update that key's value if it already exists.
   * @param {string} key
   * @param {string} value
   * @param {function} callbackId
   */
  setItem: function (key, value, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key || !value) {
      sender.performCallback(callbackId, {
        result: 'failed',
        data: INVALID_PARAM
      });
      return
    }
    try {
      localStorage.setItem(key, value);
      sender.performCallback(callbackId, {
        result: SUCCESS,
        data: UNDEFINED
      });
    }
    catch (e) {
      // accept any exception thrown during a storage attempt as a quota error
      sender.performCallback(callbackId, {
        result: FAILED,
        data: UNDEFINED
      });
    }
  },

  /**
   * When passed a key name, will return that key's value.
   * @param {string} key
   * @param {function} callbackId
   */
  getItem: function (key, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return
    }
    var val = localStorage.getItem(key);
    sender.performCallback(callbackId, {
      result: val ? SUCCESS : FAILED,
      data: val || UNDEFINED
    });
  },

  /**
   *When passed a key name, will remove that key from the storage.
   * @param {string} key
   * @param {function} callbackId
   */
  removeItem: function (key, callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    if (!key) {
      sender.performCallback(callbackId, {
        result: FAILED,
        data: INVALID_PARAM
      });
      return
    }
    localStorage.removeItem(key);
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: UNDEFINED
    });
  },

  /**
   * Returns an integer representing the number of data items stored in the Storage object.
   * @param {function} callbackId
   */
  length: function (callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    var len = localStorage.length;
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: len
    });
  },

  /**
   * Returns an array that contains all keys stored in Storage object.
   * @param {function} callbackId
   */
  getAllKeys: function (callbackId) {
    if (!supportLocalStorage) {
      console.error('your browser is not support localStorage yet.');
      return
    }
    var sender = this.sender;
    var _arr = [];
    for (var i = 0; i < localStorage.length; i++) {
      _arr.push(localStorage.key(i));
    }
    sender.performCallback(callbackId, {
      result: SUCCESS,
      data: _arr
    });
  }
};

var meta$3 = {
  storage: [{
    name: 'setItem',
    args: ['string', 'string', 'function']
  }, {
    name: 'getItem',
    args: ['string', 'function']
  }, {
    name: 'removeItem',
    args: ['string', 'function']
  }, {
    name: 'length',
    args: ['function']
  }, {
    name: 'getAllKeys',
    args: ['function']
  }]
};

var Storage = {
  init: function (Weex) {
    Weex.registerApiModule('storage', storage, meta$3);
  }
};

(typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){var b={};Object.defineProperty(this,"params",{set:function(a){if("object"==typeof a){for(var c in b){ delete b[c]; }for(var c in a){ b[c]=a[c]; }}},get:function(){return b},enumerable:!0}),Object.defineProperty(this,"search",{set:function(a){if("string"==typeof a){0===a.indexOf("?")&&(a=a.substr(1));var c=a.split("&");for(var d in b){ delete b[d]; }for(var e=0;e<c.length;e++){var f=c[e].split("=");if(void 0!==f[1]&&(f[1]=f[1].toString()),f[0]){ try{b[decodeURIComponent(f[0])]=decodeURIComponent(f[1]);}catch(g){b[f[0]]=f[1];} }}}},get:function(){var a=[];for(var c in b){ if(void 0!==b[c]){ if(""!==b[c]){ try{a.push(encodeURIComponent(c)+"="+encodeURIComponent(b[c]));}catch(d){a.push(c+"="+b[c]);} }else { try{a.push(encodeURIComponent(c));}catch(d){a.push(c);} } } }return a.length?"?"+a.join("&"):""},enumerable:!0});var c;Object.defineProperty(this,"hash",{set:function(a){"string"==typeof a&&(a&&a.indexOf("#")<0&&(a="#"+a),c=a||"");},get:function(){return c},enumerable:!0}),this.set=function(a){a=a||"";var b;if(!(b=a.match(new RegExp("^([a-z0-9-]+:)?[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?([#][^?]*)?$","i")))){ throw new Error("Wrong uri scheme."); }this.protocol=b[1]||("object"==typeof location?location.protocol:""),this.username=b[2]||"",this.password=b[3]||"",this.hostname=this.host=b[4],this.port=b[5]||"",this.pathname=b[6]||"/",this.search=b[7]||"",this.hash=b[8]||"",this.origin=this.protocol+"//"+this.hostname;},this.toString=function(){var a=this.protocol+"//";return this.username&&(a+=this.username,this.password&&(a+=":"+this.password),a+="@"),a+=this.host,this.port&&"80"!==this.port&&(a+=":"+this.port),this.pathname&&(a+=this.pathname),this.search&&(a+=this.search),this.hash&&(a+=this.hash),a},a&&this.set(a.toString());}b.httpurl=function(a){return new c(a)};}(window,window.lib||(window.lib={}));

var index$2 = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject$2(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index$4 = shouldUseNative() ? Object.assign : function (target, source) {
	var arguments$1 = arguments;

	var from;
	var to = toObject$2(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments$1[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var strictUriEncode = index$2;
var objectAssign = index$4;

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

var extract = function (str) {
	return str.split('?')[1] || '';
};

var parse$1 = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

var stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

var index$1 = {
	extract: extract,
	parse: parse$1,
	stringify: stringify
};

/* global lib, XMLHttpRequest */
/* deps: httpurl */

var utils;

var jsonpCnt = 0;
var ERROR_STATE = -1;

function _jsonp (config, callback, progressCallback) {
  var cbName = 'jsonp_' + (++jsonpCnt);
  var url;

  if (!config.url) {
    console.error('[h5-render] config.url should be set in _jsonp for \'fetch\' API.');
  }

  global[cbName] = (function (cb) {
    return function (response) {
      callback({
        status: 200,
        ok: true,
        statusText: 'OK',
        data: response
      });
      delete global[cb];
    }
  })(cbName);

  var script = document.createElement('script');
  try {
    url = lib.httpurl(config.url);
  }
  catch (err) {
    console.error('[h5-render] invalid config.url in _jsonp for \'fetch\' API: '
      + config.url);
  }
  url.params.callback = cbName;
  script.type = 'text/javascript';
  script.src = url.toString();
  // script.onerror is not working on IE or safari.
  // but they are not considered here.
  script.onerror = (function (cb) {
    return function (err) {
      console.error('[h5-render] unexpected error in _jsonp for \'fetch\' API', err);
      callback({
        status: ERROR_STATE,
        ok: false,
        statusText: '',
        data: ''
      });
      delete global[cb];
    }
  })(cbName);
  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(script, null);
}

function _xhr (config, callback, progressCallback) {
  var xhr = new XMLHttpRequest();
  xhr.responseType = config.type;
  xhr.open(config.method, config.url, true);

  // cors cookie support
  if (config.withCredentials === true) {
    xhr.withCredentials = true;
  }

  var headers = config.headers || {};
  for (var k in headers) {
    xhr.setRequestHeader(k, headers[k]);
  }

  xhr.onload = function (res) {
    callback({
      status: xhr.status,
      ok: xhr.status >= 200 && xhr.status < 300,
      statusText: xhr.statusText,
      data: xhr.response,
      headers: xhr.getAllResponseHeaders().split('\n')
        .reduce(function (obj, headerStr) {
          var headerArr = headerStr.match(/(.+): (.+)/);
          if (headerArr) {
            obj[headerArr[1]] = headerArr[2];
          }
          return obj
        }, {})
    });
  };

  if (progressCallback) {
    xhr.onprogress = function (e) {
      progressCallback({
        readyState: xhr.readyState,
        status: xhr.status,
        length: e.loaded,
        total: e.total,
        statusText: xhr.statusText,
        headers: xhr.getAllResponseHeaders().split('\n')
          .reduce(function (obj, headerStr) {
            var headerArr = headerStr.match(/(.+): (.+)/);
            if (headerArr) {
              obj[headerArr[1]] = headerArr[2];
            }
            return obj
          }, {})
      });
    };
  }

  xhr.onerror = function (err) {
    console.error('[h5-render] unexpected error in _xhr for \'fetch\' API', err);
    callback({
      status: ERROR_STATE,
      ok: false,
      statusText: '',
      data: ''
    });
  };

  xhr.send(config.body);
}

var stream = {

  /**
   * sendHttp
   * @deprecated
   * Note: This API is deprecated. Please use stream.fetch instead.
   * send a http request through XHR.
   * @param  {obj} params
   *  - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH',
   *  - url: url requested
   * @param  {string} callbackId
   */
  sendHttp: function (param, callbackId) {
    if (typeof param === 'string') {
      try {
        param = JSON.parse(param);
      }
      catch (e) {
        return
      }
    }
    if (typeof param !== 'object' || !param.url) {
      return console.error(
        '[h5-render] invalid config or invalid config.url for sendHttp API')
    }

    var sender = this.sender;
    var method = param.method || 'GET';
    var xhr = new XMLHttpRequest();
    xhr.open(method, param.url, true);
    xhr.onload = function () {
      sender.performCallback(callbackId, this.responseText);
    };
    xhr.onerror = function (error) {
      return console.error('[h5-render] unexpected error in sendHttp API', error)
      // sender.performCallback(
      //   callbackId,
      //   new Error('unexpected error in sendHttp API')
      // )
    };
    xhr.send();
  },

  /**
   * fetch
   * use stream.fetch to request for a json file, a plain text file or
   * a arraybuffer for a file stream. (You can use Blob and FileReader
   * API implemented by most modern browsers to read a arraybuffer.)
   * @param  {object} options config options
   *   - method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'PATCH'
   *   - headers {obj}
   *   - url {string}
   *   - mode {string} 'cors' | 'no-cors' | 'same-origin' | 'navigate'
   *   - withCredentials {boolean}
   *   - body
   *   - type {string} 'json' | 'jsonp' | 'text'
   * @param  {string} callbackId
   * @param  {string} progressCallbackId
   */
  fetch: function (options, callbackId, progressCallbackId) {
    var DEFAULT_METHOD = 'GET';
    var DEFAULT_MODE = 'cors';
    var DEFAULT_TYPE = 'text';

    var methodOptions = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'PATCH'];
    var modeOptions = ['cors', 'no-cors', 'same-origin', 'navigate'];
    var typeOptions = ['text', 'json', 'jsonp', 'arraybuffer'];

    // const fallback = false  // fallback from 'fetch' API to XHR.
    var sender = this.sender;

    var config = utils.extend({}, options);

    // validate options.method
    if (typeof config.method === 'undefined') {
      config.method = DEFAULT_METHOD;
      console.warn('[h5-render] options.method for \'fetch\' API has been set to '
        + 'default value \'' + config.method + '\'');
    }
    else if (methodOptions.indexOf((config.method + '')
        .toUpperCase()) === -1) {
      return console.error('[h5-render] options.method \''
        + config.method
        + '\' for \'fetch\' API should be one of '
        + methodOptions + '.')
    }

    // validate options.url
    if (!config.url) {
      return console.error('[h5-render] options.url should be set for \'fetch\' API.')
    }

    // validate body content for method 'GET'.
    if (config.method.toUpperCase() === 'GET') {
      var body = config.body;
      if (utils.isPlainObject(body)) {
        body = index$1.stringify(body);
      }
      var url = config.url;
      var hashIdx = url.indexOf('#');
      hashIdx <= -1 && (hashIdx = url.length);
      var hash = url.substr(hashIdx);
      hash && (hash = '#' + hash);
      url = url.substring(0, hashIdx);
      url += (config.url.indexOf('?') <= -1 ? '?' : '&') + body + hash;
      config.url = url;
    }

    // validate options.mode
    if (typeof config.mode === 'undefined') {
      config.mode = DEFAULT_MODE;
    }
    else if (modeOptions.indexOf((config.mode + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.mode \''
        + config.mode
        + '\' for \'fetch\' API should be one of '
        + modeOptions + '.')
    }

    // validate options.type
    if (typeof config.type === 'undefined') {
      config.type = DEFAULT_TYPE;
      console.warn('[h5-render] options.type for \'fetch\' API has been set to '
        + 'default value \'' + config.type + '\'.');
    }
    else if (typeOptions.indexOf((config.type + '').toLowerCase()) === -1) {
      return console.error('[h5-render] options.type \''
          + config.type
          + '\' for \'fetch\' API should be one of '
          + typeOptions + '.')
    }

    // validate options.headers
    config.headers = config.headers || {};
    if (!utils.isPlainObject(config.headers)) {
      return console.error('[h5-render] options.headers should be a plain object')
    }

    // validate options.timeout
    config.timeout = parseInt(config.timeout, 10) || 2500;

    var _callArgs = [config, function (res) {
      sender.performCallback(callbackId, res);
    }];
    if (progressCallbackId) {
      _callArgs.push(function (res) {
        // Set 'keepAlive' to true for sending continuous callbacks
        sender.performCallback(progressCallbackId, res, true);
      });
    }

    if (config.type === 'jsonp') {
      _jsonp.apply(this, _callArgs);
    }
    else {
      _xhr.apply(this, _callArgs);
    }
  }

};

var meta$4 = {
  stream: [{
    name: 'sendHttp',
    args: ['object', 'function']
  }, {
    name: 'fetch',
    args: ['object', 'function', 'function']
  }]
};

var Stream = {
  init: function (Weex) {
    utils = Weex.utils;
    Weex.registerApiModule('stream', stream, meta$4);
  }
};

/**

AUCTION:
taskQueue
Clipboard.setString()  NOW not works, facing to user-act lose of taskQueue.

works in Chrome Firefox Opera. but not in Safari.
@see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand#Browser_compatibility

Clipboard.getString() unimplemented. There is no easy way to do paste from clipboard to js variable.

So look out your app behavior, when downgrade to html5 render.
Any idea is welcome.
**/

var WEEX_CLIPBOARD_ID = '__weex_clipboard_id__';

var clipboard = {

  getString: function (callbackId) {
    // not supported in html5
    console.log('clipboard.getString() is not supported now.');
  },

  setString: function (text) {
    // not support safari
    if (typeof text === 'string' && text !== '' && document.execCommand) {
      var tempInput = element();
      tempInput.value = text;

      tempInput.select();
      document.execCommand('copy');
      // var out = document.execCommand('copy');
      // console.log("execCommand out is " + out);
      tempInput.value = '';
      tempInput.blur();
    }
    else {
      console.log('only support string input now');
    }
  }

};

function element () {
  var tempInput = document.getElementById(WEEX_CLIPBOARD_ID);
  if (!tempInput) {
    tempInput = document.createElement('input');
    tempInput.setAttribute('id', WEEX_CLIPBOARD_ID);
    tempInput.style.cssText = 'height:1px;width:1px;border:none;';
    // tempInput.style.cssText = "height:40px;width:300px;border:solid;"
    document.body.appendChild(tempInput);
  }
  return tempInput
}

var meta$5 = {
  clipboard: [{
    name: 'getString',
    args: ['function']
  }, {
    name: 'setString',
    args: ['string']
  }]
};

var Clipboard = {
  init: function (Weex) {
    Weex.registerApiModule('clipboard', clipboard, meta$5);
  }
};

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */
function bind (fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
}

function debounce (func, wait) {
  var timerId;
  function later () {
    timerId = null;
    func.apply(null);
  }
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(later, wait);
  }
}

function throttle (func, wait) {
  var last = 0;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var context = this;
    var time = new Date().getTime();
    if (time - last > wait) {
      func.apply(context, args);
      last = time;
    }
  }
}

/**
 * Create Event.
 * @param {DOMString} type
 * @param {Object} props
 */
// export function createEvent (context, type, props) {
//   const event = new Event(type, { bubbles: false })
//   // event.preventDefault()
//   event.stopPropagation()
//
//   extend(event, props)
//
//   Object.defineProperty(event, 'target', {
//     enumerable: true,
//     value: context || null
//   })
//
//   return event
// }

/**
 * Create Custom Event.
 * @param {DOMString} type
 * @param {Object} props
 */
// export function createCustomEvent (context, type, props) {
//   // compatibility: http://caniuse.com/#search=customevent
//   // const event = new CustomEvent(type)
//   const event = document.createEvent('CustomEvent')
//   event.initCustomEvent(type, false, true, {})
//   // event.preventDefault()
//   event.stopPropagation()
//
//   extend(event, props)
//
//   // TODO: event.target is readonly
//   // Object.defineProperty(event, 'target', {
//   //   enumerable: true,
//   //   value: context || null
//   // })
//
//   return event
// }

function mapFormEvents (context) {
  var eventMap = {};['input', 'change', 'focus', 'blur'].forEach(function (type) {
    eventMap[type] = function (event) {
      if (context.$el) {
        context.value = context.$el.value;
        event.value = context.$el.value;
      }
      context.$emit(type, event);
    };
  });
  return eventMap
}

function getParentScroller (vnode) {
  if (!vnode) { return null }
  if (vnode.weexType === 'scroller' || vnode.weexType === 'list') {
    return vnode
  }
  return getParentScroller(vnode.$parent)
}

function hasIntersection (rect, ctRect) {
  return (rect.left < ctRect.right && rect.right > ctRect.left)
    && (rect.top < ctRect.bottom && rect.bottom > ctRect.top)
}

function isComponentVisible (component) {
  if (component.$el) {
    var scroller = getParentScroller(component);
    if (scroller && scroller.$el) {
      var visible = hasIntersection(
        component.$el.getBoundingClientRect(),
        scroller.$el.getBoundingClientRect()
      );
      return visible
    }
  }
  return false
}

// TODO: improve the efficiency
function watchAppear (context) {
  if (!context) { return null }

  context.$nextTick(function () {
    if (context.$options && context.$options._parentListeners) {
      var on = context.$options._parentListeners;
      if (on.appear || on.disappear) {
        context._visible = isComponentVisible(context);
        if (context._visible) {
          // TODO: create custom event object
          on.appear && on.appear.fn({});
        }
        var handler = throttle(function (event) {
          var visible = isComponentVisible(context);
          if (visible !== context._visible) {
            context._visible = visible;
            var listener = visible ? on.appear : on.disappear;
            if (listener && listener.fn) {
              listener.fn(event);
            }
          }
        }, 100);

        // TODO: more reliable
        var scroller = getParentScroller(context);
        var element = (scroller && scroller.$el) || window;
        element.addEventListener('scroll', handler, false);
      }
    }
  });
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  }
}

/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c.toUpperCase(); })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

function camelToKebab (name) {
  if (!name) { return '' }
  return name.replace(/([A-Z])/g, function (g, g1) {
    return ("-" + (g1.toLowerCase()))
  })
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

function appendStyle (css, styleId, replace) {
  var style = document.getElementById(styleId);
  if (style && replace) {
    style.parentNode.removeChild(style);
    style = null;
  }
  if (!style) {
    style = document.createElement('style');
    style.type = 'text/css';
    styleId && (style.id = styleId);
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  style.appendChild(document.createTextNode(css));
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString$2 = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString$2.call(obj) === OBJECT_STRING
}

function nextFrame (callback) {
  var runner = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || (function (cb) { return setTimeout(cb, 16); });
  runner(callback);
}

function toCSSText (object) {
  var cssText = '';
  if (object) {
    for (var key in object) {
      cssText += (hyphenate(key)) + ":" + (object[key]) + ";";
    }
  }
  return cssText
}


var utils$1 = Object.freeze({
	cached: cached,
	camelize: camelize,
	capitalize: capitalize,
	hyphenate: hyphenate,
	camelToKebab: camelToKebab,
	extend: extend,
	appendStyle: appendStyle,
	isPlainObject: isPlainObject,
	nextFrame: nextFrame,
	toCSSText: toCSSText,
	bind: bind,
	debounce: debounce,
	throttle: throttle,
	mapFormEvents: mapFormEvents,
	getParentScroller: getParentScroller,
	hasIntersection: hasIntersection,
	isComponentVisible: isComponentVisible,
	watchAppear: watchAppear
});

function transitionOnce (vnode, config, callback) {
  var duration = config.duration || 1000; // ms
  var timing = config.timingFunction || 'ease';
  var delay = config.delay || 0;  // ms

  // TODO: parse transition properties
  var transitionValue = "all " + duration + "ms " + timing + " " + delay + "ms";

  var dom = vnode.$el;
  var transitionEndHandler = function (event) {
    event.stopPropagation();
    dom.removeEventListener('webkitTransitionEnd', transitionEndHandler);
    dom.removeEventListener('transitionend', transitionEndHandler);
    dom.style.transition = '';
    dom.style.webkitTransition = '';
    callback();
  };

  dom.style.transition = transitionValue;
  dom.style.webkitTransition = transitionValue;
  dom.addEventListener('webkitTransitionEnd', transitionEndHandler);
  dom.addEventListener('transitionend', transitionEndHandler);

  nextFrame(function () {
    dom.style.cssText += toCSSText(config.styles || {});
  });
}

var animation = {
  /**
   * transition
   * @param  {String} vnode
   * @param  {Object} config
   * @param  {String} callback
   */
  transition: function transition (vnode, config, callback) {
    // TODO: Make sure the transition is only run once
    return transitionOnce(vnode, config, function () {
      callback && callback();
    })
  }
};

function getParentScroller$1 (vnode) {
  if (!vnode) { return null }
  if (vnode.weexType === 'scroller' || vnode.weexType === 'list') {
    return vnode
  }
  return getParentScroller$1(vnode.$parent)
}

var dom = {
  /**
   * scrollToElement
   * @param  {String} vnode
   * @param  {Object} options {offset:Number}
   *   ps: scroll-to has 'ease' and 'duration'(ms) as options.
   */
  scrollToElement: function (vnode, options) {
    var scroller = getParentScroller$1(vnode);

    if (scroller && scroller.$el && vnode.$el) {
      var offset = vnode.$el.offsetTop;

      if (options) {
        offset += Number(options.offset) || 0;
      }
      else {
        console.warn('[Vue Render] The second parameter of "scrollToElement" is required, '
          + 'otherwise it may not works well on native.');
      }

      // TODO: add animation
      scroller.$el.scrollTop = offset;
    }
  },

  /**
   * getComponentRect
   * @param {String} vnode
   * @param {Function} callback
   */
  getComponentRect: function (vnode, callback) {
    var info = { result: false };

    if (vnode && vnode === 'viewport') {
      info.result = true;
      info.size = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        top: 0,
        left: 0,
        right: document.documentElement.clientWidth,
        bottom: document.documentElement.clientHeight
      };
    }
    else if (vnode && vnode.$el) {
      info.result = true;
      info.size = vnode.$el.getBoundingClientRect();
    }

    var message = info.result ? info : {
      result: false,
      errMsg: 'Illegal parameter'
    };

    callback && callback(message);
    return message
  },

  /**
   * for adding fontFace
   * @param {string} key fontFace
   * @param {object} styles rules
   */
  addRule: function (key, styles) {
    key = camelToKebab(key);
    var stylesText = '';
    for (var k in styles) {
      if (styles.hasOwnProperty(k)) {
        stylesText += camelToKebab(k) + ':' + styles[k] + ';';
      }
    }
    var styleText = "@" + key + "{" + stylesText + "}";
    appendStyle(styleText, 'dom-added-rules');
  }
};

var queue$1 = [];
var isProcessing = false;
var toastWin;
var TOAST_WIN_CLASS_NAME = 'weex-toast';

var DEFAULT_DURATION = 0.8;

function showToastWindow (msg, callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd);
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
    callback && callback();
  };
  if (!toastWin) {
    toastWin = document.createElement('div');
    toastWin.classList.add(TOAST_WIN_CLASS_NAME, 'hide');
    document.body.appendChild(toastWin);
  }
  toastWin.textContent = msg;
  toastWin.addEventListener('transitionend', handleTransitionEnd);
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
  setTimeout(function () {
    toastWin.classList.remove('hide');
  }, 0);
}

function hideToastWindow (callback) {
  var handleTransitionEnd = function () {
    toastWin.removeEventListener('transitionend', handleTransitionEnd);
    toastWin.removeEventListener('webkitTransitionEnd', handleTransitionEnd);
    callback && callback();
  };
  if (!toastWin) {
    return
  }
  toastWin.addEventListener('transitionend', handleTransitionEnd);
  toastWin.addEventListener('webkitTransitionEnd', handleTransitionEnd);
  setTimeout(function () {
    toastWin.classList.add('hide');
  }, 0);
}

var toast = {
  push: function (msg, duration) {
    queue$1.push({
      msg: msg,
      duration: duration || DEFAULT_DURATION
    });
    this.show();
  },

  show: function () {
    var that = this;

    // All messages had been toasted already, so remove the toast window,
    if (!queue$1.length) {
      toastWin && toastWin.parentNode.removeChild(toastWin);
      toastWin = null;
      return
    }

    // the previous toast is not ended yet.
    if (isProcessing) {
      return
    }
    isProcessing = true;

    var toastInfo = queue$1.shift();
    showToastWindow(toastInfo.msg, function () {
      setTimeout(function () {
        hideToastWindow(function () {
          isProcessing = false;
          that.show();
        });
      }, toastInfo.duration * 1000);
    });
  }
};

// there will be only one instance of modal.
var MODAL_WRAP_CLASS = 'weex-modal-wrap';
var MODAL_NODE_CLASS = 'weex-modal-node';

function Modal () {
  this.wrap = document.querySelector(MODAL_WRAP_CLASS);
  this.node = document.querySelector(MODAL_NODE_CLASS);
  if (!this.wrap) {
    this.createWrap();
  }
  if (!this.node) {
    this.createNode();
  }
  this.clearNode();
  this.createNodeContent();
  this.bindEvents();
}

Modal.prototype = {

  show: function () {
    this.wrap.style.display = 'block';
    this.node.classList.remove('hide');
  },

  destroy: function () {
    document.body.removeChild(this.wrap);
    document.body.removeChild(this.node);
    this.wrap = null;
    this.node = null;
  },

  createWrap: function () {
    this.wrap = document.createElement('div');
    this.wrap.className = MODAL_WRAP_CLASS;
    document.body.appendChild(this.wrap);
  },

  createNode: function () {
    this.node = document.createElement('div');
    this.node.classList.add(MODAL_NODE_CLASS, 'hide');
    document.body.appendChild(this.node);
  },

  clearNode: function () {
    this.node.innerHTML = '';
  },

  createNodeContent: function () {

    // do nothing.
    // child classes can override this method.
  },

  bindEvents: function () {
    this.wrap.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  }
};

var CONTENT_CLASS = 'content';
var MSG_CLASS = 'content-msg';
var BUTTON_GROUP_CLASS = 'btn-group';
var BUTTON_CLASS = 'btn';

function Alert (config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  Modal.call(this);
  this.node.classList.add('weex-alert');
}

Alert.prototype = Object.create(Modal.prototype);

Alert.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS);
  this.node.appendChild(buttonGroup);
  var button = document.createElement('div');
  button.classList.add(BUTTON_CLASS, 'alert-ok');
  button.appendChild(document.createTextNode(this.okTitle));
  buttonGroup.appendChild(button);
};

Alert.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var button = this.node.querySelector('.' + BUTTON_CLASS);
  button.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback();
  }.bind(this));
};

var CONTENT_CLASS$1 = 'content';
var MSG_CLASS$1 = 'content-msg';
var BUTTON_GROUP_CLASS$1 = 'btn-group';
var BUTTON_CLASS$1 = 'btn';

function Confirm (config) {
  this.msg = config.message || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal.call(this);
  this.node.classList.add('weex-confirm');
}

Confirm.prototype = Object.create(Modal.prototype);

Confirm.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$1);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$1);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$1);
  this.node.appendChild(buttonGroup);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$1);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$1);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Confirm.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$1 + '.btn-cancel');
  btnOk.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.okTitle);
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    this.destroy();
    this.callback && this.callback(this.cancelTitle);
  }.bind(this));
};

var CONTENT_CLASS$2 = 'content';
var MSG_CLASS$2 = 'content-msg';
var BUTTON_GROUP_CLASS$2 = 'btn-group';
var BUTTON_CLASS$2 = 'btn';
var INPUT_WRAP_CLASS = 'input-wrap';
var INPUT_CLASS = 'input';

function Prompt (config) {
  this.msg = config.message || '';
  this.defaultMsg = config.default || '';
  this.callback = config.callback;
  this.okTitle = config.okTitle || 'OK';
  this.cancelTitle = config.cancelTitle || 'Cancel';
  Modal.call(this);
  this.node.classList.add('weex-prompt');
}

Prompt.prototype = Object.create(Modal.prototype);

Prompt.prototype.createNodeContent = function () {
  var content = document.createElement('div');
  content.classList.add(CONTENT_CLASS$2);
  this.node.appendChild(content);

  var msg = document.createElement('div');
  msg.classList.add(MSG_CLASS$2);
  msg.appendChild(document.createTextNode(this.msg));
  content.appendChild(msg);

  var inputWrap = document.createElement('div');
  inputWrap.classList.add(INPUT_WRAP_CLASS);
  content.appendChild(inputWrap);
  var input = document.createElement('input');
  input.classList.add(INPUT_CLASS);
  input.type = 'text';
  input.autofocus = true;
  input.placeholder = this.defaultMsg;
  inputWrap.appendChild(input);

  var buttonGroup = document.createElement('div');
  buttonGroup.classList.add(BUTTON_GROUP_CLASS$2);
  var btnOk = document.createElement('div');
  btnOk.appendChild(document.createTextNode(this.okTitle));
  btnOk.classList.add('btn-ok', BUTTON_CLASS$2);
  var btnCancel = document.createElement('div');
  btnCancel.appendChild(document.createTextNode(this.cancelTitle));
  btnCancel.classList.add('btn-cancel', BUTTON_CLASS$2);
  buttonGroup.appendChild(btnOk);
  buttonGroup.appendChild(btnCancel);
  this.node.appendChild(buttonGroup);
};

Prompt.prototype.bindEvents = function () {
  Modal.prototype.bindEvents.call(this);
  var btnOk = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-ok');
  var btnCancel = this.node.querySelector('.' + BUTTON_CLASS$2 + '.btn-cancel');
  var that = this;
  btnOk.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.okTitle,
      data: val
    });
  }.bind(this));
  btnCancel.addEventListener('click', function () {
    var val = document.querySelector('input').value;
    this.destroy();
    this.callback && this.callback({
      result: that.cancelTitle,
      data: val
    });
  }.bind(this));
};

// TODO: rewrite the modal styles
var modal = {

  // duration: default is 0.8 seconds.
  toast: function (config) {
    toast.push(config.message, config.duration);
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - callback
  alert: function (config, callback) {
    config.callback = function () {
      callback && callback();
    };
    new Alert(config).show();
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  confirm: function (config, callback) {
    config.callback = function (val) {
      callback && callback(val);
    };
    new Confirm(config).show();
  },

  // config:
  //  - message: string
  //  - okTitle: title of ok button
  //  - cancelTitle: title of cancel button
  //  - callback
  prompt: function (config, callback) {
    config.callback = function (val) {
      callback && callback(val);
    };
    new Prompt(config).show();
  }
};

/**
 * Navigator module
 */

// TODO: config.animated
var navigator$2 = {
  push: function (config, callback) {
    window.location.href = config.url;
    callback && callback();
  },

  pop: function (config, callback) {
    window.history.back();
    callback && callback();
  }
};

/**
 * Webview module
 */

var webview = {
  goBack: function goBack (vnode) {
    if (vnode && typeof vnode.goBack === 'function') {
      vnode.goBack();
    }
  },
  goForward: function goForward (vnode) {
    if (vnode && typeof vnode.goForward === 'function') {
      vnode.goForward();
    }
  },
  reload: function reload (vnode) {
    if (vnode && typeof vnode.reload === 'function') {
      vnode.reload();
    }
  }
};

// modules from render/browesr
// custom modules
var modules = {
  animation: animation,
  dom: dom,
  modal: modal,
  navigator: navigator$2,
  webview: webview
};

function requireWeexModule (name) {
  if (modules[name]) {
    return modules[name]
  }
  return null
}

function init$1 (weex) {
  weex.install(Event$1);
  weex.install(Geolocation);
  weex.install(PageInfo);
  weex.install(Storage);
  weex.install(Stream);
  weex.install(Clipboard);
}

(typeof window === 'undefined') && (window = {ctrl: {}, lib: {}});!window.ctrl && (window.ctrl = {});!window.lib && (window.lib = {});!function(a,b){function c(a){Object.defineProperty(this,"val",{value:a.toString(),enumerable:!0}),this.gt=function(a){return c.compare(this,a)>0},this.gte=function(a){return c.compare(this,a)>=0},this.lt=function(a){return c.compare(this,a)<0},this.lte=function(a){return c.compare(this,a)<=0},this.eq=function(a){return 0===c.compare(this,a)};}b.env=b.env||{},c.prototype.toString=function(){return this.val},c.prototype.valueOf=function(){for(var a=this.val.split("."),b=[],c=0;c<a.length;c++){var d=parseInt(a[c],10);isNaN(d)&&(d=0);var e=d.toString();e.length<5&&(e=Array(6-e.length).join("0")+e),b.push(e),1===b.length&&b.push(".");}return parseFloat(b.join(""))},c.compare=function(a,b){a=a.toString().split("."),b=b.toString().split(".");for(var c=0;c<a.length||c<b.length;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(window.isNaN(d)&&(d=0),window.isNaN(e)&&(e=0),e>d){ return-1; }if(d>e){ return 1 }}return 0},b.version=function(a){return new c(a)};}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.location.search.replace(/^\?/,"");if(b.env.params={},c){ for(var d=c.split("&"),e=0;e<d.length;e++){d[e]=d[e].split("=");try{b.env.params[d[e][0]]=decodeURIComponent(d[e][1]);}catch(f){b.env.params[d[e][0]]=d[e][1];}} }}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;if(c=d.match(/Windows\sPhone\s(?:OS\s)?([\d\.]+)/)){ b.env.os={name:"Windows Phone",isWindowsPhone:!0,version:c[1]}; }else if(d.match(/Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/))){ b.env.os={version:c[1]},d.match(/Mobile\s+Safari/)?(b.env.os.name="Android",b.env.os.isAndroid=!0):(b.env.os.name="AndroidPad",b.env.os.isAndroidPad=!0); }else if(c=d.match(/(iPhone|iPad|iPod)/)){var e=c[1];c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.os={name:e,isIPhone:"iPhone"===e||"iPod"===e,isIPad:"iPad"===e,isIOS:!0,version:c[1].split("_").join(".")};}else { b.env.os={name:"unknown",version:"0.0.0"}; }b.version&&(b.env.os.version=b.version(b.env.os.version));}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d=a.navigator.userAgent;(c=d.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/))?b.env.browser={name:"UC",isUC:!0,version:c[1]}:(c=d.match(/MQQBrowser\/([\d\.]+)/))?b.env.browser={name:"QQ",isQQ:!0,version:c[1]}:(c=d.match(/Firefox\/([\d\.]+)/))?b.env.browser={name:"Firefox",isFirefox:!0,version:c[1]}:(c=d.match(/MSIE\s([\d\.]+)/))||(c=d.match(/IEMobile\/([\d\.]+)/))?(b.env.browser={version:c[1]},d.match(/IEMobile/)?(b.env.browser.name="IEMobile",b.env.browser.isIEMobile=!0):(b.env.browser.name="IE",b.env.browser.isIE=!0),d.match(/Android|iPhone/)&&(b.env.browser.isIELikeWebkit=!0)):(c=d.match(/(?:Chrome|CriOS)\/([\d\.]+)/))?(b.env.browser={name:"Chrome",isChrome:!0,version:c[1]},d.match(/Version\/[\d+\.]+\s*Chrome/)&&(b.env.browser.name="Chrome Webview",b.env.browser.isWebview=!0)):d.match(/Safari/)&&(c=d.match(/Android[\s\/]([\d\.]+)/))?b.env.browser={name:"Android",isAndroid:!0,version:c[1]}:d.match(/iPhone|iPad|iPod/)?d.match(/Safari/)?(c=d.match(/Version\/([\d\.]+)/),b.env.browser={name:"Safari",isSafari:!0,version:c[1]}):(c=d.match(/OS ([\d_\.]+) like Mac OS X/),b.env.browser={name:"iOS Webview",isWebview:!0,version:c[1].replace(/\_/g,".")}):b.env.browser={name:"unknown",version:"0.0.0"},b.version&&(b.env.browser.version=b.version(b.env.browser.version));}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c=a.navigator.userAgent;c.match(/Weibo/i)?b.env.thirdapp={appname:"Weibo",isWeibo:!0}:c.match(/MicroMessenger/i)?b.env.thirdapp={appname:"Weixin",isWeixin:!0}:b.env.thirdapp=!1;}(window,window.lib||(window.lib={})),function(a,b){b.env=b.env||{};var c,d,e=a.navigator.userAgent;(d=e.match(/WindVane[\/\s]([\d\.\_]+)/))&&(c=d[1]);var f=!1,g="",h="",i="";(d=e.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i))&&(f=!0,g=d[1],i=d[2],h=g.indexOf("-PD")>0?b.env.os.isIOS?"iPad":b.env.os.isAndroid?"AndroidPad":b.env.os.name:b.env.os.name),!g&&e.indexOf("TBIOS")>0&&(g="TB"),f?b.env.aliapp={windvane:b.version(c||"0.0.0"),appname:g||"unkown",version:b.version(i||"0.0.0"),platform:h||b.env.os.name}:b.env.aliapp=!1,b.env.taobaoApp=b.env.aliapp;}(window,window.lib||(window.lib={}));

var lib$1 = window.lib;
var env = {
  platform: 'Web',
  weexVersion: '0.10.0', // TODO: get version from package.json (not sure)
  userAgent: navigator.userAgent,
  appName: lib$1.env.aliapp ? lib$1.env.aliapp.appname : navigator.appName,
  appVersion: lib$1.env.aliapp ? lib$1.env.aliapp.version.val : null,
  osName: lib$1.env.browser ? lib$1.env.browser.name : null,
  osVersion: lib$1.env.browser ? lib$1.env.browser.version.val : null,
  deviceModel: lib$1.env.os.name || null,
  deviceWidth: window.innerWidth,
  deviceHeight: window.innerHeight
};

// 750 by default currently
var scale = 2;

var units = {
  REM: 12 * scale,
  VW: env.deviceWidth / 100,
  VH: env.deviceHeight / 100,
  VMIN: Math.min(env.deviceWidth, env.deviceHeight) / 100,
  VMAX: Math.max(env.deviceWidth, env.deviceHeight) / 100,
  CM: 96 / 2.54 * scale,
  MM: 96 / 25.4 * scale,
  Q: 96 / 25.4 / 4 * scale,
  IN: 96 * scale,
  PT: 96 / 72 * scale,
  PC: 96 / 6 * scale,
  PX: scale
};

Object.freeze(units);
Object.freeze(env);

window.CSS_UNIT = units;
window.WXEnvironment = env;

var weexModules = {};

var weex$1 = {
  utils: utils$1,
  units: window.CSS_UNIT,
  config: {
    env: window.WXEnvironment,
    bundleUrl: location.href
  },

  requireModule: function requireModule (moduleName) {
    var module = requireWeexModule(moduleName);
    if (module) {
      return module
    }
    return weexModules[moduleName]
  },

  registerModule: function registerModule () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return (ref = this).registerApiModule.apply(ref, args)
    var ref;
  },

  // @deprecated
  require: function require () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    console.log("[Vue Render] \"weex.require\" is deprecated, please use \"weex.requireModule\" instead.");
    return (ref = this).requireModule.apply(ref, args)
    var ref;
  },

  // @deprecated
  // TODO: rename to registerModule
  registerApiModule: function registerApiModule (name, module, meta) {
    var this$1 = this;

    if (!weexModules[name]) {
      weexModules[name] = {};
    }
    for (var key in module) {
      if (module.hasOwnProperty(key)) {
        weexModules[name][key] = bind(module[key], this$1);
      }
    }
  },

  // @deprecated
  getRoot: function getRoot () {},

  // @deprecated
  sender: {
    performCallback: function performCallback (callback, data, keepAlive) {
      if (typeof callback === 'function') {
        return callback(data)
      }
      return null
    }
  },

  // @deprecated
  install: function install (module) {
    module.init(this);
  }
};

// import 'lazyimg'
init$1(weex$1);

window.weex = weex$1;
window.global = window;

var supportedEvents = [
  'click', 'longpress', 'appear', 'disappear' ];

var base = {
  mounted: function mounted () {
    watchAppear(this);
  },

  methods: {
    createEventMap: function createEventMap (extras) {
      var this$1 = this;
      if ( extras === void 0 ) extras = [];

      var eventMap = {};
      supportedEvents.concat(extras).forEach(function (name) {
        eventMap[name] = function (event) { return this$1.$emit(name, event); };
      });
      return eventMap
    }
  }
};

var event$1 = {
  methods: {
    /**
     * Create Event.
     * @param {DOMString} type
     * @param {Object} props
     */
    createEvent: function createEvent (context, type, props) {
      var event = new Event(type, { bubbles: false });
      // event.preventDefault()
      event.stopPropagation();

      extend(event, props);

      Object.defineProperty(event, 'target', {
        enumerable: true,
        value: context || null
      });

      return event
    },

    /**
     * Create Custom Event.
     * @param {DOMString} type
     * @param {Object} props
     */
    createCustomEvent: function createCustomEvent (context, type, props) {
      // compatibility: http://caniuse.com/#search=customevent
      // const event = new CustomEvent(type)
      var event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, false, true, {});
      // event.preventDefault()
      event.stopPropagation();

      extend(event, props);

      // TODO: event.target is readonly
      // Object.defineProperty(event, 'target', {
      //   enumerable: true,
      //   value: context || null
      // })

      return event
    },

    /**
     * Check and emit longpress event.
     * @param {Object} event
     */
    handleLongPress: function handleLongPress (context, event) {
      // TODO: check the condition
      context.$emit('longpress', context.createCustomEvent('longpress'));
    },

    /**
     * Check and emit appear event.
     * @param {Object} event
     */
    handleAppear: function handleAppear (context, event) {
      // TODO: check the condition
      context.$emit('appear', context.createCustomEvent('appear'));
    },

    /**
     * Check and emit disappear event.
     * @param {Object} event
     */
    handDisappear: function handDisappear (context, event) {
      // TODO: check the condition
      context.$emit('disappear', context.createCustomEvent('disappear'));
    }
  }
};

var scrollable = {
  methods: {
    updateLayout: function updateLayout () {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this.wrapperWidth = rect.width;
        this.wrapperHeight = rect.height;
      }
    },

    handleScroll: function handleScroll (event) {
      if (this.reachBottom()) {
        this.$emit('loadmore', event);
      }
    },

    reachTop: function reachTop () {
      var wrapper = this.$refs.wrapper;
      return (!!wrapper) && (wrapper.scrollTop <= 0)
    },

    reachBottom: function reachBottom () {
      var wrapper = this.$refs.wrapper;
      var inner = this.$refs.inner;
      var offset = Number(this.loadmoreoffset) || 0;

      if (wrapper && inner) {
        var innerHeight = inner.getBoundingClientRect().height;
        var wrapperHeight = wrapper.getBoundingClientRect().height;
        return wrapper.scrollTop >= innerHeight - wrapperHeight - offset
      }
      return false
    }
  }
};

/**
 * Validate the CSS color value.
 */
function isCSSColor (value) {
  return /^[a-z]+$/i.test(value) // match color name
    || /^#([a-f0-9]{3}){1,2}$/i.test(value) // match #ABCDEF
    || /^rgb\s*\((\s*[0-9.]+\s*,){2}\s*[0-9.]+\s*\)/i.test(value) // match rgb(0,0,0)
    || /^rgba\s*\((\s*[0-9.]+\s*,){3}\s*[0-9.]+\s*\)/i.test(value) // match rgba(0,0,0,0)
}

function isCSSLength (value) {
  return /^[+-]?[0-9]+.?([0-9]+)?(px|%)?$/.test(String(value))
}

function position (value) {
  return ['absolute', 'relative', 'fixed', 'sticky'].indexOf(value) !== -1
}

function opacity (value) {
  var count = parseFloat(value);
  return count >= 0 && count <= 1
}

function display (value) {
  return ['flex'].indexOf(value) !== -1
}

function flexDirection (value) {
  return ['row', 'column'].indexOf(value) !== -1
}

function justifyContent (value) {
  return ['flex-start', 'flex-end', 'center', 'space-between'].indexOf(value) !== -1
}

function alignItems (value) {
  return ['stretch', 'flex-start', 'flex-end', 'center'].indexOf(value) !== -1
}

function flex (value) {
  return /^\d{1,3}$/.test(String(value))
}

function fontStyle (value) {
  return ['normal', 'italic', 'oblique'].indexOf(value) !== -1
}

function fontWeight (value) {
  return ['normal', 'bold', 'light', 'bolder', 'lighter'].indexOf(value) !== -1
}

function textDecoration (value) {
  return ['none', 'underline', 'line-through'].indexOf(value) !== -1
}

function textAlign (value) {
  return ['left', 'center', 'right'].indexOf(value) !== -1
}

function overflow (value) {
  return ['visible', 'hidden'].indexOf(value) !== -1
}

function textOverflow (value) {
  return ['clip', 'ellipsis'].indexOf(value) !== -1
}

/**
 * Common style validator.
 * @param {any} value
 * @param {String} key
 */
function common (value, key) {
  if (/^[\w-]*color$/.test(String(key))) {
    return isCSSColor(value)
  }

  // check width and height
  if (/^(width|height)$/.test(String(key))) {
    return isCSSLength(value)
  }

  // check postions
  if (/^(top|right|bottom|left)$/.test(String(key))) {
    return isCSSLength(value)
  }

  // checkout border-radius
  if (/^border-((top|right|bottom|left)-){0,2}(width|radius)$/.test(String(key))) {
    return isCSSLength(value)
  }

  // check border-style
  if (/border-((top|right|bottom|left)-)?style/.test(String(key))) {
    return ['solid', 'dashed', 'dotted'].indexOf(value) !== -1
  }

  // check margins and paddings
  if (/^((margin|padding)-)?(top|right|bottom|left)/.test(String(key))) {
    return isCSSLength(value)
  }

  switch (String(key)) {
    case 'font-size': return isCSSLength(value)
  }

  return true
}


var styleValidator = Object.freeze({
	isCSSColor: isCSSColor,
	isCSSLength: isCSSLength,
	position: position,
	opacity: opacity,
	display: display,
	flexDirection: flexDirection,
	justifyContent: justifyContent,
	alignItems: alignItems,
	flex: flex,
	fontStyle: fontStyle,
	fontWeight: fontWeight,
	textDecoration: textDecoration,
	textAlign: textAlign,
	overflow: overflow,
	textOverflow: textOverflow,
	common: common
});

function isString (value) {
  return Object.prototype.toString.call(value) === '[object String]'
}


var propValidator = Object.freeze({
	isString: isString
});

var supportedStyles = {
  '*': [
    '@box-model', '@border', '@position', '@flexbox', '@font', '@text', '@bg',
    'lines', 'item-size', 'item-color', 'item-selected-color'
  ],
  '@box-model': [
    'width', 'height', 'position',
    'padding-top', 'padding-bottom', 'padding-left', 'padding-right',
    'margin-top', 'margin-bottom', 'margin-left', 'margin-right'
  ],
  '@border': [
    'border-style', 'border-width', 'border-color', 'border-radius',
    'border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style',
    'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width',
    'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color',
    'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius'
  ],
  '@position': ['position', 'top', 'left', 'right', 'bottom'],
  '@flexbox': [
    'flex', 'flex-direction', 'justify-content', 'align-items', 'flex-wrap'
  ],
  '@font': ['font-size', 'font-weight', 'font-style', 'font-family', 'line-height'],
  '@text': ['text-align', 'text-decoration', 'text-overflow', 'color'],
  '@bg': ['background-color', 'opacity'],

  'a': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'div': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'text': ['@box-model', '@border', '@position', '@font', '@text', '@bg', 'lines'],
  'slider': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'switch': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'indicator': ['@box-model', '@border', '@position', '@flexbox', '@bg', 'item-size', 'item-color', 'item-selected-color'],
  'input': ['@box-model', '@border', '@position', '@font', '@text', '@bg'],
  'textarea': ['@box-model', '@border', '@position', '@font', '@text', '@bg', 'rows'],
  'scroller': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'loading': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'refresh': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'list': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'cell': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'video': ['@box-model', '@border', '@position', '@flexbox', '@bg'],
  'web': ['@box-model', '@border', '@position', '@flexbox', '@bg']
};

/**
 * Flatten a multiple dimension array.
 */
function flatten (array) {
  return array.reduce(function (dist, item) {
    return dist.concat(Array.isArray(item) ? flatten(item) : item)
  }, [])
}

/**
 * Check if the value is in the list.
 * @param {String} type
 * @param {String} value
 * @param {Object} dict
 */
function checkSupported (type, value, dict) {
  if ( dict === void 0 ) dict = {};

  var tagType = dict[type] ? type : '*';
  if (Array.isArray(dict[tagType])) {
    return flatten(dict[tagType].map(function (k) { return dict[k] || k; })).indexOf(value) !== -1
  }
  return false
}

/**
 * Check if the style is supported for the component.
 * @param {String} type
 * @param {String} style
 */
function isSupportedStyle (type, style) {
  return checkSupported(type, style, supportedStyles)
}

/**
 * Check if the property is supported for the component.
 * @param {String} type
 * @param {String} property
 */

var onfail = function nope () {};
var showConsole = true;

function warn () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var message = args.join(' ');
  showConsole && console.warn(message);
  onfail(message);
  return message
}

/**
 * Configure the validator.
 * @param {Object} configs
 */


/**
 * Validate the styles of the component.
 * @param {String} type
 * @param {Object} styles
 */
function validateStyles (type, styles) {
  if ( styles === void 0 ) styles = {};

  var isValid = true;

  if (isPlainObject(type)) {
    styles = type;
    type = '*';
  }

  for (var key in styles) {
    if (!isSupportedStyle(type, hyphenate(key))) {
      isValid = false;
      warn((type === '*')
        ? ("[Style Validator] Not support to use the \"" + key + "\" style property.")
        : ("[Style Validator] <" + type + "> is not support to use the \"" + key + "\" style property.")
      );
    }
    else {
      var validator = styleValidator[camelize(key)] || common;
      if (!validator(styles[key], hyphenate(key))) {
        isValid = false;
        warn(("[Style Validator] The style \"" + key + "\" is not support the \"" + (styles[key]) + "\" value."));
      }
    }
  }
  return isValid
}

/**
 * Validate the properties of the component.
 * @param {String} type
 * @param {Object} props
 */

var _switch = {
  mixins: [base],
  props: {
    checked: {
      type: [Boolean, String],
      default: false
    },
    disabled: {
      type: [Boolean, String],
      default: false
    }
  },
  data: function data () {
    return {
      isChecked: (this.checked !== 'false' && this.checked !== false),
      isDisabled: (this.disabled !== 'false' && this.disabled !== false)
    }
  },
  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-switch'];
      this.isChecked && classArray.push('weex-switch-checked');
      this.isDisabled && classArray.push('weex-switch-disabled');
      return classArray.join(' ')
    }
  },
  methods: {
    toggle: function toggle () {
      // TODO: handle the events
      if (!this.isDisabled) {
        this.isChecked = !this.isChecked;
        this.$emit('change', { value: this.isChecked });
      }
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    /* istanbul ignore next */
    {
      validateStyles('switch', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('span', {
      attrs: { 'weex-type': 'switch' },
      staticClass: this.wrapperClass,
      on: {
        click: function (event$$1) {
          this$1.$emit('click', event$$1);
          this$1.toggle();
        }
      }
    }, [createElement('small', { staticClass: 'weex-switch-inner' })])
  }
};

var a = {
  mixins: [base],
  props: {
    href: String
  },
  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('a', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('html:a', {
      attrs: {
        'weex-type': 'a',
        href: this.href
      },
      on: this.createEventMap(),
      staticClass: 'weex-a'
    }, this.$slots.default)
  }
};

function trimTextNode (children) {
  if (Array.isArray(children)) {
    return children.filter(function (vnode) { return !!vnode.tag; })
  }
  return children
}

var div = {
  mixins: [base],
  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('div', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('html:div', {
      attrs: { 'weex-type': 'div' },
      on: this.createEventMap(),
      staticClass: 'weex-div'
    }, trimTextNode(this.$slots.default))
  }
};

var image = {
  mixins: [base],
  props: {
    src: {
      type: String,
      required: true
    },
    resize: {
      validator: function validator (value) {
        /* istanbul ignore next */
        return ['cover', 'contain', 'stretch'].indexOf(value) !== -1
      }
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('image', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    var cssText = "background-image:url(\"" + (this.src) + "\");";

    // compatibility: http://caniuse.com/#search=background-size
    cssText += (this.resize && this.resize !== 'stretch')
      ? ("background-size: " + (this.resize) + ";")
      : "background-size: 100% 100%;";

    return createElement('figure', {
      attrs: { 'weex-type': 'image' },
      on: this.createEventMap(['load']),
      staticClass: 'weex-image',
      style: cssText
    })
  }
};

var input = {
  mixins: [base],
  props: {
    type: {
      type: String,
      default: 'text',
      validator: function validator (value) {
        return [
          'email', 'number', 'password', 'search', 'tel', 'text', 'url' ].indexOf(value) !== -1
      }
    },
    value: String,
    placeholder: String,
    disabled: {
      type: [String, Boolean],
      default: false
    },
    autofocus: {
      type: [String, Boolean],
      default: false
    },
    maxlength: [String, Number]
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('input', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('html:input', {
      attrs: {
        'weex-type': 'input',
        type: this.type,
        value: this.value,
        disabled: (this.disabled !== 'false' && this.disabled !== false),
        autofocus: (this.autofocus !== 'false' && this.autofocus !== false),
        placeholder: this.placeholder,
        maxlength: this.maxlength
      },
      on: extend(this.createEventMap(), mapFormEvents(this)),
      staticClass: 'weex-input'
    })
  }
};

var header = {
  mixins: [base],

  data: function data () {
    return {
      sticky: false,
      initTop: 0,
      initHeight: 0,
      placeholder: null
    }
  },

  mounted: function mounted () {
    this.initTop = this.$el.offsetTop;
    this.initHeight = this.$el.offsetHeight;
    this.placeholder = window.document.createElement('div');
  },

  methods: {
    addSticky: function addSticky (offsetY) {
      this.$el.style.position = '';
      this.sticky = true;
      this.$el.style.top = offsetY + 'px';
      this.placeholder.style.display = 'block';
      this.placeholder.style.width = this.$el.offsetWidth + 'px';
      this.placeholder.style.height = this.$el.offsetHeight + 'px';
      this.$el.parentNode.insertBefore(this.placeholder, this.$el);
    },

    removeSticky: function removeSticky () {
      this.sticky = false;
      this.$el.style.top = '0';
      try {
        this.$el.parentNode.removeChild(this.placeholder);
      }
      catch (e) {
      }
    },

    moveUp: function moveUp (offsetY) {
      this.$el.style.position = 'absolute';
      this.$el.style.top = offsetY + 'px';
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('header', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('html:header', {
      attrs: { 'weex-type': 'header' },
      on: this.createEventMap(),
      ref: 'header',
      staticClass: 'weex-header',
      class: { sticky: this.sticky }
    }, this.$slots.default)
  }
};

var LoadingIndicator = {
  name: 'loading-indicator',
  render: function render (createElement) {
    this.weexType = 'loading-indicator';
    return createElement('mark', {
      attrs: { 'weex-type': 'loading-indicator' },
      staticClass: 'weex-loading-indicator'
    })
  }
};

var refresh = {
  // name: 'refresh',
  components: { LoadingIndicator: LoadingIndicator },
  props: {
    display: {
      type: String,
      default: 'show',
      validator: function validator (value) {
        return ['show', 'hide'].indexOf(value) !== -1
      }
    }
  },
  data: function data () {
    return {
      height: 0
    }
  },
  methods: {
    show: function show () {
      // TODO: no fixed height
      this.$emit('refresh');
      this.height = '1.6rem';
      this.visibility = 'visible';
    },
    reset: function reset () {
      this.height = 0;
      this.visibility = 'hidden';
      this.$emit('refreshfinish');
    },
    getChildren: function getChildren () {
      var children = this.$slots.default || [];
      if (this.display === 'show') {
        return children
      }
      return children.filter(function (vnode) {
        return vnode.componentOptions
          && vnode.componentOptions.tag !== 'loading-indicator'
      })
    }
  },
  render: function render (createElement) {
    return createElement('aside', {
      ref: 'refresh',
      attrs: { 'weex-type': 'refresh' },
      style: { height: this.height, visibility: this.visibility },
      staticClass: 'weex-refresh'
    }, this.getChildren())
  }
};

var loading = {
  // name: 'loading',
  components: { LoadingIndicator: LoadingIndicator },
  props: {
    display: {
      type: String,
      default: 'show',
      validator: function validator (value) {
        return ['show', 'hide'].indexOf(value) !== -1
      }
    }
  },
  data: function data () {
    return {
      height: 0
    }
  },
  methods: {
    show: function show () {
      this.$emit('loading');
      this.height = '1.6rem';
      this.visibility = 'visible';
    },
    reset: function reset () {
      this.height = 0;
      this.visibility = 'hidden';
      this.$emit('loadingfinish');
    },
    getChildren: function getChildren () {
      var children = this.$slots.default || [];
      if (this.display === 'show') {
        return children
      }
      return children.filter(function (vnode) {
        return vnode.componentOptions
          && vnode.componentOptions.tag !== 'loading-indicator'
      })
    }
  },
  render: function render (createElement) {
    return createElement('aside', {
      ref: 'loading',
      attrs: { 'weex-type': 'loading' },
      style: { height: this.height, visibility: this.visibility },
      staticClass: 'weex-loading'
    }, this.getChildren())
  }
};

// import header from './header'
// export function createHeader (context, createElement) {
//   return createElement(header)
// }

function createLoading (context, createElement, vnode) {
  var options = vnode.componentOptions;
  return createElement(loading, extend({
    on: options.listeners
  }, vnode.data), options.children)
}

function createRefresh (context, createElement, vnode) {
  var options = vnode.componentOptions;
  return createElement(refresh, extend({
    on: options.listeners
  }, vnode.data), options.children)
}

var listMixin = {
  methods: {
    moveTo: function moveTo (offsetY, done) {
      if ( offsetY === void 0 ) offsetY = 0;

      var inner = this.$refs.inner;
      if (inner) {
        inner.style.willChange = "transform";
        inner.style.transition = "transform .2s ease-in-out";
        inner.style.transform = "translate3d(0, " + offsetY + ", 0)";
        setTimeout(function () {
          inner.style.transition = '';
          inner.style.willChange = '';
          done && done();
        }, 200);
      }
    },

    done: function done () {
      this.moveTo(0);
      this._refresh && this._refresh.child.reset();
      this._loading && this._loading.child.reset();
    },

    showRefresh: function showRefresh () {
      this.moveTo('1.6rem');
      if (this._refresh && this._refresh.child) {
        this._refresh.child.show();
      }
    },

    showLoading: function showLoading () {
      this.moveTo('-1.6rem');
      if (this._loading && this._loading.child) {
        this._loading.child.show();
      }
    },

    handleTouchStart: function handleTouchStart (event) {
      // event.preventDefault()
      event.stopPropagation();
      if (this._loading || this._refresh) {
        var touch = event.changedTouches[0];
        this._touchParams = {
          reachTop: this.reachTop(),
          reachBottom: this.reachBottom(),
          startTouchEvent: touch,
          startX: touch.pageX,
          startY: touch.pageY,
          timeStamp: event.timeStamp
        };
      }
    },

    handleTouchMove: function handleTouchMove (event) {
      // event.preventDefault()
      event.stopPropagation();
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var startY = ref.startY;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner && (reachTop && this._refresh || reachBottom && this._loading)) {
          var touch = event.changedTouches[0];
          var offsetY = touch.pageY - startY;
          this._touchParams.offsetY = offsetY;
          if (offsetY) {
            inner.style.transform = "translate3d(0, " + offsetY + "px, 0)";
          }
        }
      }
    },

    handleTouchEnd: function handleTouchEnd (event) {
      // event.preventDefault()
      event.stopPropagation();
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var offsetY = ref.offsetY;
        var reachTop = ref.reachTop;
        var reachBottom = ref.reachBottom;
        if (inner && (reachTop && this._refresh || reachBottom && this._loading)) {
          if (offsetY > 120) {
            this.showRefresh();
          }
          else if (offsetY < -120) {
            this.showLoading();
          }
          else {
            this.done(0);
          }
        }
      }
      delete this._touchParams;
    },

    handleListScroll: function handleListScroll (event) {
      this.handleScroll(event);
      var scrollTop = this.$el.scrollTop;
      var top = this.$el.offsetTop;

      var h = this.$children.filter(function (vm) { return vm.$refs.header; });
      if (scrollTop < h[0].initTop) {
        return h[0].removeSticky()
      }
      if (scrollTop > h[h.length - 1].initTop) {
        return h[h.length - 1].addSticky(top)
      }
      for (var i = 1; i < h.length; i++) {
        if (h[i - 1].initTop < scrollTop) {
          if (scrollTop < h[i].initTop && scrollTop + h[i - 1].initHeight > h[i].initTop) {
            h[i - 1].moveUp(h[i].$refs.header.offsetTop - h[i - 1].initHeight);
            h[i].removeSticky();
          }
          else if (scrollTop + h[i - 1].initHeight < h[i].initTop) {
            h[i - 1].addSticky(top);
            h[i].removeSticky();
          }
        }
      }
    }
  }
};

var index$6 = {
  mixins: [base, event$1, scrollable, listMixin],
  props: {
    loadmoreoffset: {
      type: [String, Number],
      default: 0
    }
  },

  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-list', 'weex-list-wrapper'];
      this._refresh && classArray.push('with-refresh');
      this._loading && classArray.push('with-loading');
      return classArray.join(' ')
    }
  },

  methods: {
    createChildren: function createChildren (h) {
      var this$1 = this;

      var slots = this.$slots.default || [];
      this._cells = slots.filter(function (vnode) {
        if (!vnode.tag || !vnode.componentOptions) { return false }
        switch (vnode.componentOptions.tag) {
          case 'loading': this$1._loading = createLoading(this$1, h, vnode); return false
          case 'refresh': this$1._refresh = createRefresh(this$1, h, vnode); return false
        }
        return true
      });
      return [
        this._refresh,
        h('html:div', {
          ref: 'inner',
          staticClass: 'weex-list-inner'
        }, this._cells),
        this._loading
      ]
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    this.weexType = 'list';

    /* istanbul ignore next */
    {
      validateStyles('list', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    this.$nextTick(function () {
      this$1.updateLayout();
    });

    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'weex-type': 'list' },
      staticClass: this.wrapperClass,
      on: extend(this.createEventMap(), {
        scroll: this.handleListScroll,
        touchstart: this.handleTouchStart,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      })
    }, this.createChildren(createElement))
  }
};

var cell = {
  mixins: [base],
  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('cell', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('section', {
      attrs: { 'weex-type': 'cell' },
      on: this.createEventMap(),
      staticClass: 'weex-cell'
    }, this.$slots.default)
  }
};

var scroller = {
  mixins: [base, scrollable, listMixin],
  props: {
    scrollDirection: {
      type: [String],
      default: 'vertical',
      validator: function validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) !== -1
      }
    },
    loadmoreoffset: {
      type: [String, Number],
      default: 0
    },
    // TODO: support loadmore retry
    loadmoreretry: {
      type: [String, Number],
      default: 0
    }
  },

  computed: {
    wrapperClass: function wrapperClass () {
      var classArray = ['weex-scroller', 'weex-scroller-wrapper'];
      if (this.scrollDirection === 'horizontal') {
        classArray.push('weex-scroller-horizontal');
      }
      return classArray.join(' ')
    }
  },

  methods: {
    createChildren: function createChildren (h) {
      var this$1 = this;

      var slots = this.$slots.default || [];
      this._cells = slots.filter(function (vnode) {
        if (!vnode.tag || !vnode.componentOptions) { return false }
        switch (vnode.componentOptions.tag) {
          case 'loading': this$1._loading = createLoading(this$1, h, vnode); return false
          case 'refresh': this$1._refresh = createRefresh(this$1, h, vnode); return false
        }
        return true
      });
      return [
        this._refresh,
        h('html:div', {
          ref: 'inner',
          staticClass: 'weex-scroller-inner'
        }, this._cells),
        this._loading
      ]
    },
    scrollTo: function scrollTo (vnode) {
      if (vnode && vnode.$el) {
        // TODO: add animation
        this.$el.scrollTop = vnode.$el.offsetTop;
      }
    }
  },

  render: function render (createElement) {
    var this$1 = this;

    this.weexType = 'scroller';

    /* istanbul ignore next */
    {
      validateStyles('scroller', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    this._cells = this.$slots.default || [];
    this.$nextTick(function () {
      this$1.updateLayout();
    });

    return createElement('main', {
      ref: 'wrapper',
      attrs: { 'weex-type': 'scroller' },
      staticClass: this.wrapperClass,
      on: extend(this.createEventMap(), {
        scroll: this.handleScroll,
        touchstart: this.handleTouchStart,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      })
    }, this.createChildren(createElement))
  }
};

function _render (context, h) {
  var children = [];
  for (var i = 0; i < Number(context.count); ++i) {
    var classNames = ['weex-indicator-item'];
    if (i === Number(context.active)) {
      classNames.push('weex-indicator-item-active');
    }
    children.push(h('mark', {
      staticClass: classNames.join(' ')
    }));
  }
  return h('nav', {
    attrs: { 'weex-type': 'indicator' },
    staticClass: 'weex-indicator'
  }, children)
}

/**
 * calculate and reset indicator's top and left.
 */
function _reLayout (context) {
  var el = context.$el;
  var mergedStyle = context.$vnode.data.mergedStyle;
  var ctRect = extend({}, context.getParentRect());
  extend(ctRect, { left: 0, top: 0 });
  var ref = ['width', 'height', 'left', 'top']
    .reduce(function (pre, name) {
      pre[name] = parseFloat(mergedStyle[name] || ctRect[name]);
      return pre
    }, {});
  var ctWidth = ref.width;
  var ctHeight = ref.height;
  var left = ref.left;
  var top = ref.top;
  var width, size;

  if (el.children.length === 1) {
    width = size = window.getComputedStyle(el.children[0]);
  }
  else {
    var itemComputedStyle = window.getComputedStyle(el.children[1]);
    var padding = parseFloat(itemComputedStyle.marginLeft);
    size = parseFloat(itemComputedStyle.width);
    width = el.children.length * (size + padding) - padding;
  }

  el.style.width = width + 'px';
  el.style.height = size + 'px';
  el.style.left = left + ctWidth / 2 - width / 2 + 'px';
  el.style.top = top + ctHeight / 2 - size / 2 + 'px';
}

var indicator = {
  name: 'indicator',
  props: {
    count: [Number, String],
    active: [Number, String]
  },
  mounted: function () {
    _reLayout(this);
  },
  render: function render (createElement) {
    this.prerender();
    return _render(this, createElement)
  }
};

var TRANSITION_TIME = 200;

var slideMixin = {
  methods: {
    // get standard index
    normalizeIndex: function normalizeIndex (index) {
      var newIndex = (index + this.frameCount) % this.frameCount;
      return Math.min(Math.max(newIndex, 0), this.frameCount - 1)
    },

    slideTo: function slideTo (index) {
      var this$1 = this;

      var newIndex = this.normalizeIndex(index);
      this.innerOffset += Math.sign(this.currentIndex - index) * this.wrapperWidth;

      var inner = this.$refs.inner;
      if (inner) {
        // TODO: will-change | set styles together
        inner.style.transition = "transform .2s ease-in-out";
        inner.style.transform = "translate3d(" + (this.innerOffset) + "px, 0, 0)";
        setTimeout(function () {
          inner.style.transition = '';
        }, TRANSITION_TIME);
      }

      if (newIndex !== this.currentIndex) {
        this.currentIndex = newIndex;
        this.$emit('change', this.createEvent('change', {
          index: this.currentIndex
        }));
        setTimeout(function () { this$1.reorder(); }, TRANSITION_TIME);
      }
    },

    reorder: function reorder () {
      var this$1 = this;

      this.$nextTick(function () {
        var prevIndex = this$1.normalizeIndex(this$1.currentIndex - 1);
        var nextIndex = this$1.normalizeIndex(this$1.currentIndex + 1);
        // TODO: clone frame when prevIndex === nextIndex
        // if (prevIndex !== nextIndex) {
        // }
        var prevCell = this$1._cells[prevIndex];
        var nextCell = this$1._cells[nextIndex];
        if (prevCell && prevCell.elm) {
          var prevOffset = -this$1.wrapperWidth - this$1.innerOffset;
          prevCell.elm.style.transform = "translate3d(" + prevOffset + "px, 0, 0)";
        }
        if (nextCell && nextCell.elm) {
          var nextOffset = this$1.wrapperWidth - this$1.innerOffset;
          nextCell.elm.style.transform = "translate3d(" + nextOffset + "px, 0, 0)";
        }
      });
    },

    next: function next () {
      this.slideTo(this.currentIndex + 1);
    },

    prev: function prev () {
      this.slideTo(this.currentIndex - 1);
    },

    handleTouchStart: function handleTouchStart (event) {
      event.preventDefault();
      event.stopPropagation();
      // console.log('touch start', event)
      var touch = event.changedTouches[0];
      // console.log('touch start', event.target, event.target.pageY)
      // console.log('touches', touch)
      this._touchParams = {
        originalTransform: this.$refs.inner.style.transform,
        startTouchEvent: touch,
        startX: touch.pageX,
        startY: touch.pageY,
        timeStamp: event.timeStamp
      };
    },

    handleTouchMove: function handleTouchMove (event) {
      event.preventDefault();
      event.stopPropagation();
      // console.log('touch move')
      if (this._touchParams) {
        var inner = this.$refs.inner;
        var ref = this._touchParams;
        var startX = ref.startX;
        var touch = event.changedTouches[0];
        var offsetX = touch.pageX - startX;
        // console.log('offsetX', offsetX, 'startX', startX, 'pageX', touch.pageX)
        this._touchParams.offsetX = offsetX;

        if (inner && offsetX) {
          inner.style.transform = "translate3d(" + (this.innerOffset + offsetX) + "px, 0, 0)";
        }
      }
    },

    handleTouchEnd: function handleTouchEnd (event) {
      event.preventDefault();
      event.stopPropagation();
      // console.log('touch end')
      var inner = this.$refs.inner;
      if (this._touchParams) {
        var ref = this._touchParams;
        var offsetX = ref.offsetX;
        if (inner) {
          var reset = Math.abs(offsetX / this.wrapperWidth) < 0.2;
          var direction = offsetX > 0 ? 1 : -1;
          var newIndex = reset ? this.currentIndex : (this.currentIndex - direction);
          this.slideTo(newIndex);
        }
      }
      delete this._touchParams;
    }
  }
};

var index$7 = {
  mixins: [base, event$1, slideMixin],
  props: {
    'auto-play': {
      type: [String, Boolean],
      default: false
    },
    interval: {
      type: [String, Number],
      default: 3000
    }
  },

  data: function data () {
    return {
      currentIndex: 0,
      frameCount: 0
    }
  },

  methods: {
    computeWrapperSize: function computeWrapperSize () {
      var wrapper = this.$refs.wrapper;
      if (wrapper) {
        var rect = wrapper.getBoundingClientRect();
        this.wrapperWidth = rect.width;
        this.wrapperHeight = rect.height;
      }
    },

    updateLayout: function updateLayout () {
      this.computeWrapperSize();
      var inner = this.$refs.inner;
      if (inner) {
        inner.style.width = this.wrapperWidth * this.frameCount + 'px';
      }
    },

    formatChildren: function formatChildren (createElement) {
      var children = this.$slots.default || [];
      var indicatorVnode;
      var cells = children.filter(function (vnode) {
        if (!vnode.tag) { return false }
        if (vnode.componentOptions && vnode.componentOptions.tag === 'indicator') {
          indicatorVnode = vnode;
          return false
        }
        return true
      }).map(function (vnode) {
        return createElement('li', {
          ref: 'cells',
          staticClass: 'weex-slider-cell'
        }, [vnode])
      });
      this._indicator = createElement(indicator, {
        staticClass: indicatorVnode.data.staticClass,
        staticStyle: indicatorVnode.data.staticStyle,
        attrs: {
          count: cells.length,
          active: this.currentIndex
        }
      });
      return cells
    }
  },

  created: function created () {
    var this$1 = this;

    this.weexType = 'slider';
    this.currentIndex = 0;
    this.innerOffset = 0;
    this._indicator = null;
    this.$nextTick(function () {
      this$1.updateLayout();
    });
  },

  beforeUpdate: function beforeUpdate () {
    this.updateLayout();
    this.reorder();
  },

  mounted: function mounted () {
    if (this.autoPlay && this.autoPlay !== 'false') {
      var interval = Number(this.interval);
      this._lastSlideTime = Date.now();

      var autoPlayFn = bind(function () {
        clearTimeout(this._autoPlayTimer);
        var now = Date.now();
        var nextTick = interval - now + this._lastSlideTime;
        nextTick = nextTick > 100 ? nextTick : interval;

        this.next();
        this._lastSlideTime = now;
        this._autoPlayTimer = setTimeout(autoPlayFn, nextTick);
      }, this);

      this._autoPlayTimer = setTimeout(autoPlayFn, interval);
    }

    this.reorder();
  },

  render: function render (createElement) {
    this.prerender();
    /* istanbul ignore next */
    {
      validateStyles('slider', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    this._cells = this.formatChildren(createElement);
    this.frameCount = this._cells.length;

    return createElement(
      'nav',
      {
        ref: 'wrapper',
        attrs: { 'weex-type': 'slider' },
        staticClass: 'weex-slider weex-slider-wrapper',
        on: extend(this.createEventMap(), {
          touchstart: this.handleTouchStart,
          touchmove: throttle(bind(this.handleTouchMove, this), 25),
          touchend: this.handleTouchEnd
        })
      },
      [
        createElement('ul', {
          ref: 'inner',
          staticClass: 'weex-slider-inner'
        }, this._cells),
        this._indicator
      ]
    )
  }
};

var warning = {
  render: function render () {
    // TODO: add tag nesting validation
    {
      var tag = this.$options._componentTag;
      var parentTag = this.$parent.$options._componentTag;
      console.warn(("[Vue Render] The <" + tag + "> can't be the child of <" + parentTag + ">."));
    }
    return null
  }
};

/**
 * Get text styles
 */
function getTextStyle (context) {
  if ( context === void 0 ) context = {};

  var vnode = context.$vnode || {};
  var staticStyle = vnode.data && vnode.data.staticStyle || {};
  var mergedStyle = vnode.data && vnode.data.mergedStyle || {};
  var lines = parseInt(mergedStyle.lines) || 0;
  if (lines > 0) {
    return extend(staticStyle, {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      webkitLineClamp: lines
    })
  }
  return staticStyle
}

var text = {
  mixins: [base],
  props: {
    lines: [Number, String],
    value: [String]
  },

  render: function render (createElement) {
    this.prerender();
    /* istanbul ignore next */
    {
      validateStyles('text', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('p', {
      attrs: { 'weex-type': 'text' },
      on: this.createEventMap(),
      staticClass: 'weex-text',
      staticStyle: getTextStyle(this)
    }, this.$slots.default || [this.value])
  }
};

var textarea = {
  mixins: [base],
  props: {
    value: String,
    placeholder: String,
    disabled: {
      type: [String, Boolean],
      default: false
    },
    autofocus: {
      type: [String, Boolean],
      default: false
    },
    rows: {
      type: [String, Number],
      default: 2
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('textarea', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('html:textarea', {
      attrs: {
        'weex-type': 'textarea',
        value: this.value,
        disabled: (this.disabled !== 'false' && this.disabled !== false),
        autofocus: (this.autofocus !== 'false' && this.autofocus !== false),
        placeholder: this.placeholder,
        rows: this.rows
      },
      on: extend(this.createEventMap(), mapFormEvents(this)),
      staticClass: 'weex-textarea'
    }, this.value)
  }
};

var video = {
  mixins: [base],
  props: {
    src: String,
    playStatus: {
      type: String,
      default: 'pause',
      validator: function validator (value) {
        return ['play', 'pause'].indexOf(value) !== -1
      }
    },

    autoplay: {
      type: [String, Boolean],
      default: false
    },
    autoPlay: {
      type: [String, Boolean],
      default: false
    },

    playsinline: {
      type: [String, Boolean],
      default: false
    },
    controls: {
      type: [String, Boolean],
      default: false
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('video', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    // TODO: support playStatus
    return createElement('html:video', {
      attrs: {
        'weex-type': 'video',
        autoplay: (this.autoplay !== 'false' && this.autoplay !== false),
        autoPlay: (this.autoplay !== 'false' && this.autoplay !== false),
        controls: this.controls,
        src: this.src
      },
      on: this.createEventMap(['start', 'pause', 'finish', 'fail']),
      staticClass: 'weex-video'
    })
  }
};

var web = {
  mixins: [base, event$1],
  props: {
    src: String
  },
  methods: {
    // TODO: check cross-origin
    goBack: function goBack () {
      if (this.$el) {
        this.$el.contentWindow.history.back();
      }
    },
    goForward: function goForward () {
      if (this.$el) {
        this.$el.contentWindow.history.forward();
      }
    },
    reload: function reload () {
      if (this.$el) {
        this.$el.contentWindow.history.reload();
      }
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    if (this.$el) {
      this.$emit('pagefinish', this.createCustomEvent(this, 'pagestart', { url: this.src }));
      this.$el.addEventListener('load', function (event$$1) {
        this$1.$emit('pagefinish', this$1.createCustomEvent(this$1, 'pagefinish', { url: this$1.src }));
      });
    }
  },

  render: function render (createElement) {
    /* istanbul ignore next */
    {
      validateStyles('web', this.$vnode.data && this.$vnode.data.staticStyle);
    }

    return createElement('iframe', {
      attrs: {
        'weex-type': 'web',
        src: this.src
      },
      on: this.createEventMap(['error']),
      staticClass: 'weex-web'
    })
  }
};



var components$1 = Object.freeze({
	switch: _switch,
	a: a,
	div: div,
	container: div,
	image: image,
	img: image,
	input: input,
	header: header,
	list: index$6,
	cell: cell,
	scroller: scroller,
	slider: index$7,
	indicator: warning,
	refresh: warning,
	loading: warning,
	LoadingIndicator: LoadingIndicator,
	text: text,
	textarea: textarea,
	video: video,
	web: web
});

// import { validateStyles } from '../validator'

// let warned = false

function getHeadStyleMap () {
  return Array.from(document.styleSheets)
    .reduce(function (pre, styleSheet) {
      var rules = styleSheet.rules || styleSheet.cssRules;
      Array.from(rules).forEach(function (rule) {
        var selector = rule.selectorText || '';
        var match = selector.match(/^\.([^.]+)$/);
        if (match && match[1]) {
          pre[match[1]] = rule.cssText.match(/{([^}]+)}/)[1].trim().split(';')
            .reduce(function (styleObj, statement) {
              statement = statement.trim();
              if (statement) {
                var resArr = statement.split(':').map(function (part) { return part.trim(); });
                styleObj[resArr[0]] = resArr[1];
              }
              return styleObj
            }, {});
        }
      });
      return pre
    }, {})
}

// function getWarnText (prop) {
//   return `[Vue Rneder] "${prop}" is not a standard CSS property,`
//     + 'it may not support very well on weex vue render.'
// }

// function normalize (styles) {
//   const realStyle = {}
//   for (const key in styles) {
//     let value = styles[key]

//     // TODO: add more reliable check
//     if (typeof value === 'number') {
//       value += 'px'
//     }

//     // warn for unsupported properties
//     switch (key) {
//       case 'lines':
//       case 'item-color':
//       case 'itemColor':
//       case 'item-selected-color':
//       case 'itemSelectedColor':
//       case 'item-size':
//       case 'itemSize': console.warn(getWarnText(key)); break
//     }

//     realStyle[key] = value
//   }
//   return realStyle
// }

// function getStyleMap (component) {
//   if (component && component.$vnode && component.$vnode.context) {
//     const $options = component.$vnode.context.$options
//     if ($options && $options.style) {
//       if (!warned) {
//         warned = true
//         console.error('[Invalid Bundle Format] This bundle format is '
//           + 'generated for Android and iOS platform, '
//           + 'please use "vue-loader" to compile the ".vue" file on the web.')
//       }
//       return $options.style
//     }
//   }
// }

// function getStaticClass (component) {
//   if (component && component.$vnode && component.$vnode.data) {
//     const data = component.$vnode.data
//     return [].concat(data.staticClass, data.class)
//   }
// }

// function getComponentStyle (context) {
  // const styleMap = getStyleMap(context)
  // const staticClass = getStaticClass(context)

  // if (styleMap && Array.isArray(staticClass)) {
  //   const styles = staticClass.reduce((res, name) => {
  //     return extend(res, styleMap[name])
  //   }, {})

  //   return normalize(styles)
  // }
// }

// function mergeStyles (context) {
//   const styles = getComponentStyle(context)
//   if (context.$el && styles) {
//     validateStyles(context.$options && context.$options._componentTag, styles)
//     for (const key in styles) {
//       context.$el.style[key] = styles[key]
//     }
//   }
// }

var styleMixin = {
  beforeCreate: function beforeCreate () {
    // get static class style map from document's styleSheets.
    if (!weex.styleMap) {
      weex.styleMap = getHeadStyleMap();
      Object.freeze(weex);
    }
  },
  // mounted () {
  //   console.log('call mounted: merged styles')
  //   mergeStyles(this)
  // },
  // beforeUpdate () {
  //   console.log('call beforeUpdate: merged styles')
  //   mergeStyles(this)
  // },

  methods: {
    prerender: function prerender () {
      this.mergeStyles();
    },

    // get style from staticClass and staticStyle.
    getComponentStyle: function getComponentStyle () {
      var style = {};
      var data = this.$vnode && this.$vnode.data || {};
      var staticStyle = data.staticStyle || {};
      var classNames = (data.staticClass || '').split(' ');

      // apply static class styles. This relies on getHeadStyleMap
      // being already triggered once in the hook beforeCreate.
      if (weex.styleMap) {
        classNames.forEach(function (className) {
          var styleObj = weex.styleMap[className] || {};
          extend(style, styleObj);
        });
      }

      // apply static inline styles.
      extend(style, staticStyle);

      return style
    },

    // merge static styles and static class styles into $vnode.data.mergedStyles.
    mergeStyles: function mergeStyles () {
      if (this.$vnode && this.$vnode.data) {
        this.$vnode.data.mergedStyle = this.getComponentStyle();
      }
    },

    getParentRect: function getParentRect () {
      var parentElm = this.$options._parentElm;
      return parentElm && parentElm.getBoundingClientRect()
    },

    getParentRectAsync: function getParentRectAsync (cb) {
      this.$nextTick(function () {
        return cb && cb.call(this, this.getParentRectSync())
      });
    }
  }
};

function install$1 (Vue) {
  setViewport();

  Vue.prototype.$getConfig = function () {
    console.warn('[Vue Render] "this.$getConfig" is deprecated, please use "weex.config" instead.');
    return window.weex.config
  };

  var htmlRegex = /^html:/i;
  Vue.config.isReservedTag = function (tag) { return htmlRegex.test(tag); };
  Vue.config.parsePlatformTagName = function (tag) { return tag.replace(htmlRegex, ''); };

  for (var name in components$1) {
    Vue.component(name, components$1[name]);
  }

  /* istanbul ignore next */
  {
    if (semver.lt(Vue.version, '2.1.5')) {
      console.warn("[Vue Render] The version of Vue should be " +
        "greater than 2.1.5, current is " + (Vue.version) + ".");
    }
    console.info("[Vue Render] Registered components: "
      + "[" + (Object.keys(components$1).join(', ')) + "].");

    // merge styles to inline
    Vue.mixin(styleMixin);
  }
}

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install$1(window.Vue);
}

var index = {
  install: install$1
};

return index;

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9zZW12ZXIvc2VtdmVyLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL2Jyb3dzZXIvcmVuZGVyL2dlc3R1cmUuanMiLCIuLi8uLi9odG1sNS9zaGFyZWQvYXJyYXlGcm9tLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FuLW9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2V4cG9ydC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lvYmplY3QuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLW9iamVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwiLi4vLi4vaHRtbDUvc2hhcmVkL29iamVjdFNldFByb3RvdHlwZU9mLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbmV3LXByb21pc2UtY2FwYWJpbGl0eS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3BlcmZvcm0uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191c2VyLWFnZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvbWlzZS1yZXNvbHZlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2Vudi92aWV3cG9ydC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci9icm93c2VyL2V4dGVuZC9hcGkvZXZlbnQuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvYnJvd3Nlci9leHRlbmQvYXBpL2dlb2xvY2F0aW9uLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL2Jyb3dzZXIvZXh0ZW5kL2FwaS9wYWdlSW5mby5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci9icm93c2VyL2V4dGVuZC9hcGkvc3RvcmFnZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9odHRwdXJsL2J1aWxkL2h0dHB1cmwuY29tbW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL2luZGV4LmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL2Jyb3dzZXIvZXh0ZW5kL2FwaS9zdHJlYW0uanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvYnJvd3Nlci9leHRlbmQvYXBpL2NsaXBib2FyZC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvZnVuYy5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvZXZlbnQuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL3V0aWxzL2NvbXBvbmVudC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvdXRpbHMvaW5kZXguanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvYW5pbWF0aW9uLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL2RvbS5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9tb2RhbC90b2FzdC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9tb2RhbC9tb2RhbC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9tb2RhbC9hbGVydC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9tb2RhbC9jb25maXJtLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9tb2R1bGVzL21vZGFsL3Byb21wdC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9tb2RhbC9pbmRleC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9uYXZpZ2F0b3IuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL21vZHVsZXMvd2Vidmlldy5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbW9kdWxlcy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9lbnZkL2J1aWxkL2VudmQuY29tbW9uLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9lbnYvV1hFbnZpcm9ubWVudC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvZW52L3dlZXguanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2Vudi9pbmRleC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbWl4aW5zL2Jhc2UuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL21peGlucy9ldmVudC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvbWl4aW5zL3Njcm9sbGFibGUuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL3ZhbGlkYXRvci9zdHlsZS5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvdmFsaWRhdG9yL3Byb3AuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL3ZhbGlkYXRvci9jaGVjay5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvdmFsaWRhdG9yL2luZGV4LmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3N3aXRjaC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9hLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL2Rpdi5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9pbWFnZS5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9pbnB1dC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL2hlYWRlci5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL2xvYWRpbmctaW5kaWNhdG9yLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3Njcm9sbGFibGUvcmVmcmVzaC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL2xvYWRpbmcuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9zaGFyZWQuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9saXN0L2xpc3RNaXhpbi5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zY3JvbGxhYmxlL2xpc3QvaW5kZXguanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9saXN0L2NlbGwuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvc2Nyb2xsYWJsZS9zY3JvbGxlci5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy9zbGlkZXIvaW5kaWNhdG9yLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3NsaWRlci9zbGlkZU1peGluLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3NsaWRlci9pbmRleC5qcyIsIi4uLy4uL2h0bWw1L3JlbmRlci92dWUvY29tcG9uZW50cy93YXJuaW5nLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9jb21wb25lbnRzL3RleHQuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvdmlkZW8uanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2NvbXBvbmVudHMvd2ViLmpzIiwiLi4vLi4vaHRtbDUvcmVuZGVyL3Z1ZS9taXhpbnMvc3R5bGUuanMiLCIuLi8uLi9odG1sNS9yZW5kZXIvdnVlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFNlbVZlcjtcblxuLy8gVGhlIGRlYnVnIGZ1bmN0aW9uIGlzIGV4Y2x1ZGVkIGVudGlyZWx5IGZyb20gdGhlIG1pbmlmaWVkIHZlcnNpb24uXG4vKiBub21pbiAqLyB2YXIgZGVidWc7XG4vKiBub21pbiAqLyBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnICYmXG4gICAgLyogbm9taW4gKi8gcHJvY2Vzcy5lbnYgJiZcbiAgICAvKiBub21pbiAqLyBwcm9jZXNzLmVudi5OT0RFX0RFQlVHICYmXG4gICAgLyogbm9taW4gKi8gL1xcYnNlbXZlclxcYi9pLnRlc3QocHJvY2Vzcy5lbnYuTk9ERV9ERUJVRykpXG4gIC8qIG5vbWluICovIGRlYnVnID0gZnVuY3Rpb24oKSB7XG4gICAgLyogbm9taW4gKi8gdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIC8qIG5vbWluICovIGFyZ3MudW5zaGlmdCgnU0VNVkVSJyk7XG4gICAgLyogbm9taW4gKi8gY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJncyk7XG4gICAgLyogbm9taW4gKi8gfTtcbi8qIG5vbWluICovIGVsc2VcbiAgLyogbm9taW4gKi8gZGVidWcgPSBmdW5jdGlvbigpIHt9O1xuXG4vLyBOb3RlOiB0aGlzIGlzIHRoZSBzZW12ZXIub3JnIHZlcnNpb24gb2YgdGhlIHNwZWMgdGhhdCBpdCBpbXBsZW1lbnRzXG4vLyBOb3QgbmVjZXNzYXJpbHkgdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiB0aGlzIGNvZGUuXG5leHBvcnRzLlNFTVZFUl9TUEVDX1ZFUlNJT04gPSAnMi4wLjAnO1xuXG52YXIgTUFYX0xFTkdUSCA9IDI1NjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgfHwgOTAwNzE5OTI1NDc0MDk5MTtcblxuLy8gTWF4IHNhZmUgc2VnbWVudCBsZW5ndGggZm9yIGNvZXJjaW9uLlxudmFyIE1BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEggPSAxNjtcblxuLy8gVGhlIGFjdHVhbCByZWdleHBzIGdvIG9uIGV4cG9ydHMucmVcbnZhciByZSA9IGV4cG9ydHMucmUgPSBbXTtcbnZhciBzcmMgPSBleHBvcnRzLnNyYyA9IFtdO1xudmFyIFIgPSAwO1xuXG4vLyBUaGUgZm9sbG93aW5nIFJlZ3VsYXIgRXhwcmVzc2lvbnMgY2FuIGJlIHVzZWQgZm9yIHRva2VuaXppbmcsXG4vLyB2YWxpZGF0aW5nLCBhbmQgcGFyc2luZyBTZW1WZXIgdmVyc2lvbiBzdHJpbmdzLlxuXG4vLyAjIyBOdW1lcmljIElkZW50aWZpZXJcbi8vIEEgc2luZ2xlIGAwYCwgb3IgYSBub24temVybyBkaWdpdCBmb2xsb3dlZCBieSB6ZXJvIG9yIG1vcmUgZGlnaXRzLlxuXG52YXIgTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJdID0gJzB8WzEtOV1cXFxcZConO1xudmFyIE5VTUVSSUNJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gPSAnWzAtOV0rJztcblxuXG4vLyAjIyBOb24tbnVtZXJpYyBJZGVudGlmaWVyXG4vLyBaZXJvIG9yIG1vcmUgZGlnaXRzLCBmb2xsb3dlZCBieSBhIGxldHRlciBvciBoeXBoZW4sIGFuZCB0aGVuIHplcm8gb3Jcbi8vIG1vcmUgbGV0dGVycywgZGlnaXRzLCBvciBoeXBoZW5zLlxuXG52YXIgTk9OTlVNRVJJQ0lERU5USUZJRVIgPSBSKys7XG5zcmNbTk9OTlVNRVJJQ0lERU5USUZJRVJdID0gJ1xcXFxkKlthLXpBLVotXVthLXpBLVowLTktXSonO1xuXG5cbi8vICMjIE1haW4gVmVyc2lvblxuLy8gVGhyZWUgZG90LXNlcGFyYXRlZCBudW1lcmljIGlkZW50aWZpZXJzLlxuXG52YXIgTUFJTlZFUlNJT04gPSBSKys7XG5zcmNbTUFJTlZFUlNJT05dID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSXSArICcpXFxcXC4nICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICcoJyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBNQUlOVkVSU0lPTkxPT1NFID0gUisrO1xuc3JjW01BSU5WRVJTSU9OTE9PU0VdID0gJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJylcXFxcLicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW05VTUVSSUNJREVOVElGSUVSTE9PU0VdICsgJyknO1xuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUiA9IFIrKztcbnNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gPSAnKD86JyArIHNyY1tOVU1FUklDSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd8JyArIHNyY1tOT05OVU1FUklDSURFTlRJRklFUl0gKyAnKSc7XG5cbnZhciBQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdID0gJyg/OicgKyBzcmNbTlVNRVJJQ0lERU5USUZJRVJMT09TRV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3wnICsgc3JjW05PTk5VTUVSSUNJREVOVElGSUVSXSArICcpJztcblxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uXG4vLyBIeXBoZW4sIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGRvdC1zZXBhcmF0ZWQgcHJlLXJlbGVhc2UgdmVyc2lvblxuLy8gaWRlbnRpZmllcnMuXG5cbnZhciBQUkVSRUxFQVNFID0gUisrO1xuc3JjW1BSRVJFTEVBU0VdID0gJyg/Oi0oJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUl0gKyAnKSopKSc7XG5cbnZhciBQUkVSRUxFQVNFTE9PU0UgPSBSKys7XG5zcmNbUFJFUkVMRUFTRUxPT1NFXSA9ICcoPzotPygnICsgc3JjW1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdICtcbiAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuJyArIHNyY1tQUkVSRUxFQVNFSURFTlRJRklFUkxPT1NFXSArICcpKikpJztcblxuLy8gIyMgQnVpbGQgTWV0YWRhdGEgSWRlbnRpZmllclxuLy8gQW55IGNvbWJpbmF0aW9uIG9mIGRpZ2l0cywgbGV0dGVycywgb3IgaHlwaGVucy5cblxudmFyIEJVSUxESURFTlRJRklFUiA9IFIrKztcbnNyY1tCVUlMRElERU5USUZJRVJdID0gJ1swLTlBLVphLXotXSsnO1xuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxudmFyIEJVSUxEID0gUisrO1xuc3JjW0JVSUxEXSA9ICcoPzpcXFxcKygnICsgc3JjW0JVSUxESURFTlRJRklFUl0gK1xuICAgICAgICAgICAgICcoPzpcXFxcLicgKyBzcmNbQlVJTERJREVOVElGSUVSXSArICcpKikpJztcblxuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxudmFyIEZVTEwgPSBSKys7XG52YXIgRlVMTFBMQUlOID0gJ3Y/JyArIHNyY1tNQUlOVkVSU0lPTl0gK1xuICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFXSArICc/JyArXG4gICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/Jztcblxuc3JjW0ZVTExdID0gJ14nICsgRlVMTFBMQUlOICsgJyQnO1xuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG52YXIgTE9PU0VQTEFJTiA9ICdbdj1cXFxcc10qJyArIHNyY1tNQUlOVkVSU0lPTkxPT1NFXSArXG4gICAgICAgICAgICAgICAgIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgc3JjW0JVSUxEXSArICc/JztcblxudmFyIExPT1NFID0gUisrO1xuc3JjW0xPT1NFXSA9ICdeJyArIExPT1NFUExBSU4gKyAnJCc7XG5cbnZhciBHVExUID0gUisrO1xuc3JjW0dUTFRdID0gJygoPzo8fD4pPz0/KSc7XG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbnZhciBYUkFOR0VJREVOVElGSUVSTE9PU0UgPSBSKys7XG5zcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSA9IHNyY1tOVU1FUklDSURFTlRJRklFUkxPT1NFXSArICd8eHxYfFxcXFwqJztcbnZhciBYUkFOR0VJREVOVElGSUVSID0gUisrO1xuc3JjW1hSQU5HRUlERU5USUZJRVJdID0gc3JjW05VTUVSSUNJREVOVElGSUVSXSArICd8eHxYfFxcXFwqJztcblxudmFyIFhSQU5HRVBMQUlOID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOXSA9ICdbdj1cXFxcc10qKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUl0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnKD86XFxcXC4oJyArIHNyY1tYUkFOR0VJREVOVElGSUVSXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJyg/OicgKyBzcmNbUFJFUkVMRUFTRV0gKyAnKT8nICtcbiAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAnKT8pPyc7XG5cbnZhciBYUkFOR0VQTEFJTkxPT1NFID0gUisrO1xuc3JjW1hSQU5HRVBMQUlOTE9PU0VdID0gJ1t2PVxcXFxzXSooJyArIHNyY1tYUkFOR0VJREVOVElGSUVSTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcoPzpcXFxcLignICsgc3JjW1hSQU5HRUlERU5USUZJRVJMT09TRV0gKyAnKScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyg/OlxcXFwuKCcgKyBzcmNbWFJBTkdFSURFTlRJRklFUkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnKD86JyArIHNyY1tQUkVSRUxFQVNFTE9PU0VdICsgJyk/JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmNbQlVJTERdICsgJz8nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcpPyk/JztcblxudmFyIFhSQU5HRSA9IFIrKztcbnNyY1tYUkFOR0VdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKicgKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFhSQU5HRUxPT1NFID0gUisrO1xuc3JjW1hSQU5HRUxPT1NFXSA9ICdeJyArIHNyY1tHVExUXSArICdcXFxccyonICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyQnO1xuXG4vLyBDb2VyY2lvbi5cbi8vIEV4dHJhY3QgYW55dGhpbmcgdGhhdCBjb3VsZCBjb25jZWl2YWJseSBiZSBhIHBhcnQgb2YgYSB2YWxpZCBzZW12ZXJcbnZhciBDT0VSQ0UgPSBSKys7XG5zcmNbQ09FUkNFXSA9ICcoPzpefFteXFxcXGRdKScgK1xuICAgICAgICAgICAgICAnKFxcXFxkezEsJyArIE1BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEggKyAnfSknICtcbiAgICAgICAgICAgICAgJyg/OlxcXFwuKFxcXFxkezEsJyArIE1BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEggKyAnfSkpPycgK1xuICAgICAgICAgICAgICAnKD86XFxcXC4oXFxcXGR7MSwnICsgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCArICd9KSk/JyArXG4gICAgICAgICAgICAgICcoPzokfFteXFxcXGRdKSc7XG5cbi8vIFRpbGRlIHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJyZWFzb25hYmx5IGF0IG9yIGdyZWF0ZXIgdGhhblwiXG52YXIgTE9ORVRJTERFID0gUisrO1xuc3JjW0xPTkVUSUxERV0gPSAnKD86fj4/KSc7XG5cbnZhciBUSUxERVRSSU0gPSBSKys7XG5zcmNbVElMREVUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbTE9ORVRJTERFXSArICdcXFxccysnO1xucmVbVElMREVUUklNXSA9IG5ldyBSZWdFeHAoc3JjW1RJTERFVFJJTV0sICdnJyk7XG52YXIgdGlsZGVUcmltUmVwbGFjZSA9ICckMX4nO1xuXG52YXIgVElMREUgPSBSKys7XG5zcmNbVElMREVdID0gJ14nICsgc3JjW0xPTkVUSUxERV0gKyBzcmNbWFJBTkdFUExBSU5dICsgJyQnO1xudmFyIFRJTERFTE9PU0UgPSBSKys7XG5zcmNbVElMREVMT09TRV0gPSAnXicgKyBzcmNbTE9ORVRJTERFXSArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICckJztcblxuLy8gQ2FyZXQgcmFuZ2VzLlxuLy8gTWVhbmluZyBpcyBcImF0IGxlYXN0IGFuZCBiYWNrd2FyZHMgY29tcGF0aWJsZSB3aXRoXCJcbnZhciBMT05FQ0FSRVQgPSBSKys7XG5zcmNbTE9ORUNBUkVUXSA9ICcoPzpcXFxcXiknO1xuXG52YXIgQ0FSRVRUUklNID0gUisrO1xuc3JjW0NBUkVUVFJJTV0gPSAnKFxcXFxzKiknICsgc3JjW0xPTkVDQVJFVF0gKyAnXFxcXHMrJztcbnJlW0NBUkVUVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDQVJFVFRSSU1dLCAnZycpO1xudmFyIGNhcmV0VHJpbVJlcGxhY2UgPSAnJDFeJztcblxudmFyIENBUkVUID0gUisrO1xuc3JjW0NBUkVUXSA9ICdeJyArIHNyY1tMT05FQ0FSRVRdICsgc3JjW1hSQU5HRVBMQUlOXSArICckJztcbnZhciBDQVJFVExPT1NFID0gUisrO1xuc3JjW0NBUkVUTE9PU0VdID0gJ14nICsgc3JjW0xPTkVDQVJFVF0gKyBzcmNbWFJBTkdFUExBSU5MT09TRV0gKyAnJCc7XG5cbi8vIEEgc2ltcGxlIGd0L2x0L2VxIHRoaW5nLCBvciBqdXN0IFwiXCIgdG8gaW5kaWNhdGUgXCJhbnkgdmVyc2lvblwiXG52YXIgQ09NUEFSQVRPUkxPT1NFID0gUisrO1xuc3JjW0NPTVBBUkFUT1JMT09TRV0gPSAnXicgKyBzcmNbR1RMVF0gKyAnXFxcXHMqKCcgKyBMT09TRVBMQUlOICsgJykkfF4kJztcbnZhciBDT01QQVJBVE9SID0gUisrO1xuc3JjW0NPTVBBUkFUT1JdID0gJ14nICsgc3JjW0dUTFRdICsgJ1xcXFxzKignICsgRlVMTFBMQUlOICsgJykkfF4kJztcblxuXG4vLyBBbiBleHByZXNzaW9uIHRvIHN0cmlwIGFueSB3aGl0ZXNwYWNlIGJldHdlZW4gdGhlIGd0bHQgYW5kIHRoZSB0aGluZ1xuLy8gaXQgbW9kaWZpZXMsIHNvIHRoYXQgYD4gMS4yLjNgID09PiBgPjEuMi4zYFxudmFyIENPTVBBUkFUT1JUUklNID0gUisrO1xuc3JjW0NPTVBBUkFUT1JUUklNXSA9ICcoXFxcXHMqKScgKyBzcmNbR1RMVF0gK1xuICAgICAgICAgICAgICAgICAgICAgICdcXFxccyooJyArIExPT1NFUExBSU4gKyAnfCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknO1xuXG4vLyB0aGlzIG9uZSBoYXMgdG8gdXNlIHRoZSAvZyBmbGFnXG5yZVtDT01QQVJBVE9SVFJJTV0gPSBuZXcgUmVnRXhwKHNyY1tDT01QQVJBVE9SVFJJTV0sICdnJyk7XG52YXIgY29tcGFyYXRvclRyaW1SZXBsYWNlID0gJyQxJDIkMyc7XG5cblxuLy8gU29tZXRoaW5nIGxpa2UgYDEuMi4zIC0gMS4yLjRgXG4vLyBOb3RlIHRoYXQgdGhlc2UgYWxsIHVzZSB0aGUgbG9vc2UgZm9ybSwgYmVjYXVzZSB0aGV5J2xsIGJlXG4vLyBjaGVja2VkIGFnYWluc3QgZWl0aGVyIHRoZSBzdHJpY3Qgb3IgbG9vc2UgY29tcGFyYXRvciBmb3JtXG4vLyBsYXRlci5cbnZhciBIWVBIRU5SQU5HRSA9IFIrKztcbnNyY1tIWVBIRU5SQU5HRV0gPSAnXlxcXFxzKignICsgc3JjW1hSQU5HRVBMQUlOXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgJ1xcXFxzKy1cXFxccysnICtcbiAgICAgICAgICAgICAgICAgICAnKCcgKyBzcmNbWFJBTkdFUExBSU5dICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAnXFxcXHMqJCc7XG5cbnZhciBIWVBIRU5SQU5HRUxPT1NFID0gUisrO1xuc3JjW0hZUEhFTlJBTkdFTE9PU0VdID0gJ15cXFxccyooJyArIHNyY1tYUkFOR0VQTEFJTkxPT1NFXSArICcpJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnXFxcXHMrLVxcXFxzKycgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJygnICsgc3JjW1hSQU5HRVBMQUlOTE9PU0VdICsgJyknICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdcXFxccyokJztcblxuLy8gU3RhciByYW5nZXMgYmFzaWNhbGx5IGp1c3QgYWxsb3cgYW55dGhpbmcgYXQgYWxsLlxudmFyIFNUQVIgPSBSKys7XG5zcmNbU1RBUl0gPSAnKDx8Pik/PT9cXFxccypcXFxcKic7XG5cbi8vIENvbXBpbGUgdG8gYWN0dWFsIHJlZ2V4cCBvYmplY3RzLlxuLy8gQWxsIGFyZSBmbGFnLWZyZWUsIHVubGVzcyB0aGV5IHdlcmUgY3JlYXRlZCBhYm92ZSB3aXRoIGEgZmxhZy5cbmZvciAodmFyIGkgPSAwOyBpIDwgUjsgaSsrKSB7XG4gIGRlYnVnKGksIHNyY1tpXSk7XG4gIGlmICghcmVbaV0pXG4gICAgcmVbaV0gPSBuZXcgUmVnRXhwKHNyY1tpXSk7XG59XG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbmZ1bmN0aW9uIHBhcnNlKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKVxuICAgIHJldHVybiB2ZXJzaW9uO1xuXG4gIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHZlcnNpb24ubGVuZ3RoID4gTUFYX0xFTkdUSClcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgciA9IGxvb3NlID8gcmVbTE9PU0VdIDogcmVbRlVMTF07XG4gIGlmICghci50ZXN0KHZlcnNpb24pKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydHMudmFsaWQgPSB2YWxpZDtcbmZ1bmN0aW9uIHZhbGlkKHZlcnNpb24sIGxvb3NlKSB7XG4gIHZhciB2ID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gdiA/IHYudmVyc2lvbiA6IG51bGw7XG59XG5cblxuZXhwb3J0cy5jbGVhbiA9IGNsZWFuO1xuZnVuY3Rpb24gY2xlYW4odmVyc2lvbiwgbG9vc2UpIHtcbiAgdmFyIHMgPSBwYXJzZSh2ZXJzaW9uLnRyaW0oKS5yZXBsYWNlKC9eWz12XSsvLCAnJyksIGxvb3NlKTtcbiAgcmV0dXJuIHMgPyBzLnZlcnNpb24gOiBudWxsO1xufVxuXG5leHBvcnRzLlNlbVZlciA9IFNlbVZlcjtcblxuZnVuY3Rpb24gU2VtVmVyKHZlcnNpb24sIGxvb3NlKSB7XG4gIGlmICh2ZXJzaW9uIGluc3RhbmNlb2YgU2VtVmVyKSB7XG4gICAgaWYgKHZlcnNpb24ubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgZWxzZVxuICAgICAgdmVyc2lvbiA9IHZlcnNpb24udmVyc2lvbjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFZlcnNpb246ICcgKyB2ZXJzaW9uKTtcbiAgfVxuXG4gIGlmICh2ZXJzaW9uLmxlbmd0aCA+IE1BWF9MRU5HVEgpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmVyc2lvbiBpcyBsb25nZXIgdGhhbiAnICsgTUFYX0xFTkdUSCArICcgY2hhcmFjdGVycycpXG5cbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgcmV0dXJuIG5ldyBTZW1WZXIodmVyc2lvbiwgbG9vc2UpO1xuXG4gIGRlYnVnKCdTZW1WZXInLCB2ZXJzaW9uLCBsb29zZSk7XG4gIHRoaXMubG9vc2UgPSBsb29zZTtcbiAgdmFyIG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChsb29zZSA/IHJlW0xPT1NFXSA6IHJlW0ZVTExdKTtcblxuICBpZiAoIW0pXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBWZXJzaW9uOiAnICsgdmVyc2lvbik7XG5cbiAgdGhpcy5yYXcgPSB2ZXJzaW9uO1xuXG4gIC8vIHRoZXNlIGFyZSBhY3R1YWxseSBudW1iZXJzXG4gIHRoaXMubWFqb3IgPSArbVsxXTtcbiAgdGhpcy5taW5vciA9ICttWzJdO1xuICB0aGlzLnBhdGNoID0gK21bM107XG5cbiAgaWYgKHRoaXMubWFqb3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWFqb3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWFqb3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMubWlub3IgPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMubWlub3IgPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG5cbiAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgcGF0Y2ggdmVyc2lvbicpXG5cbiAgLy8gbnVtYmVyaWZ5IGFueSBwcmVyZWxlYXNlIG51bWVyaWMgaWRzXG4gIGlmICghbVs0XSlcbiAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgZWxzZVxuICAgIHRoaXMucHJlcmVsZWFzZSA9IG1bNF0uc3BsaXQoJy4nKS5tYXAoZnVuY3Rpb24oaWQpIHtcbiAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoaWQpKSB7XG4gICAgICAgIHZhciBudW0gPSAraWQ7XG4gICAgICAgIGlmIChudW0gPj0gMCAmJiBudW0gPCBNQVhfU0FGRV9JTlRFR0VSKVxuICAgICAgICAgIHJldHVybiBudW07XG4gICAgICB9XG4gICAgICByZXR1cm4gaWQ7XG4gICAgfSk7XG5cbiAgdGhpcy5idWlsZCA9IG1bNV0gPyBtWzVdLnNwbGl0KCcuJykgOiBbXTtcbiAgdGhpcy5mb3JtYXQoKTtcbn1cblxuU2VtVmVyLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy52ZXJzaW9uID0gdGhpcy5tYWpvciArICcuJyArIHRoaXMubWlub3IgKyAnLicgKyB0aGlzLnBhdGNoO1xuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICB0aGlzLnZlcnNpb24gKz0gJy0nICsgdGhpcy5wcmVyZWxlYXNlLmpvaW4oJy4nKTtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGRlYnVnKCdTZW1WZXIuY29tcGFyZScsIHRoaXMudmVyc2lvbiwgdGhpcy5sb29zZSwgb3RoZXIpO1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gdGhpcy5jb21wYXJlTWFpbihvdGhlcikgfHwgdGhpcy5jb21wYXJlUHJlKG90aGVyKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZU1haW4gPSBmdW5jdGlvbihvdGhlcikge1xuICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpXG4gICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWFqb3IsIG90aGVyLm1ham9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMubWlub3IsIG90aGVyLm1pbm9yKSB8fFxuICAgICAgICAgY29tcGFyZUlkZW50aWZpZXJzKHRoaXMucGF0Y2gsIG90aGVyLnBhdGNoKTtcbn07XG5cblNlbVZlci5wcm90b3R5cGUuY29tcGFyZVByZSA9IGZ1bmN0aW9uKG90aGVyKSB7XG4gIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSlcbiAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMubG9vc2UpO1xuXG4gIC8vIE5PVCBoYXZpbmcgYSBwcmVyZWxlYXNlIGlzID4gaGF2aW5nIG9uZVxuICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiAhb3RoZXIucHJlcmVsZWFzZS5sZW5ndGgpXG4gICAgcmV0dXJuIC0xO1xuICBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiBvdGhlci5wcmVyZWxlYXNlLmxlbmd0aClcbiAgICByZXR1cm4gMTtcbiAgZWxzZSBpZiAoIXRoaXMucHJlcmVsZWFzZS5sZW5ndGggJiYgIW90aGVyLnByZXJlbGVhc2UubGVuZ3RoKVxuICAgIHJldHVybiAwO1xuXG4gIHZhciBpID0gMDtcbiAgZG8ge1xuICAgIHZhciBhID0gdGhpcy5wcmVyZWxlYXNlW2ldO1xuICAgIHZhciBiID0gb3RoZXIucHJlcmVsZWFzZVtpXTtcbiAgICBkZWJ1ZygncHJlcmVsZWFzZSBjb21wYXJlJywgaSwgYSwgYik7XG4gICAgaWYgKGEgPT09IHVuZGVmaW5lZCAmJiBiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMDtcbiAgICBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChhID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gLTE7XG4gICAgZWxzZSBpZiAoYSA9PT0gYilcbiAgICAgIGNvbnRpbnVlO1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYik7XG4gIH0gd2hpbGUgKCsraSk7XG59O1xuXG4vLyBwcmVtaW5vciB3aWxsIGJ1bXAgdGhlIHZlcnNpb24gdXAgdG8gdGhlIG5leHQgbWlub3IgcmVsZWFzZSwgYW5kIGltbWVkaWF0ZWx5XG4vLyBkb3duIHRvIHByZS1yZWxlYXNlLiBwcmVtYWpvciBhbmQgcHJlcGF0Y2ggd29yayB0aGUgc2FtZSB3YXkuXG5TZW1WZXIucHJvdG90eXBlLmluYyA9IGZ1bmN0aW9uKHJlbGVhc2UsIGlkZW50aWZpZXIpIHtcbiAgc3dpdGNoIChyZWxlYXNlKSB7XG4gICAgY2FzZSAncHJlbWFqb3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IgPSAwO1xuICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJlbWlub3InOlxuICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3ByZXBhdGNoJzpcbiAgICAgIC8vIElmIHRoaXMgaXMgYWxyZWFkeSBhIHByZXJlbGVhc2UsIGl0IHdpbGwgYnVtcCB0byB0aGUgbmV4dCB2ZXJzaW9uXG4gICAgICAvLyBkcm9wIGFueSBwcmVyZWxlYXNlcyB0aGF0IG1pZ2h0IGFscmVhZHkgZXhpc3QsIHNpbmNlIHRoZXkgYXJlIG5vdFxuICAgICAgLy8gcmVsZXZhbnQgYXQgdGhpcyBwb2ludC5cbiAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwO1xuICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcik7XG4gICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcik7XG4gICAgICBicmVhaztcbiAgICAvLyBJZiB0aGUgaW5wdXQgaXMgYSBub24tcHJlcmVsZWFzZSB2ZXJzaW9uLCB0aGlzIGFjdHMgdGhlIHNhbWUgYXNcbiAgICAvLyBwcmVwYXRjaC5cbiAgICBjYXNlICdwcmVyZWxlYXNlJzpcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLmluYygncGF0Y2gnLCBpZGVudGlmaWVyKTtcbiAgICAgIHRoaXMuaW5jKCdwcmUnLCBpZGVudGlmaWVyKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbWFqb3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1tYWpvciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1ham9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1ham9yLlxuICAgICAgLy8gMS4wLjAtNSBidW1wcyB0byAxLjAuMFxuICAgICAgLy8gMS4xLjAgYnVtcHMgdG8gMi4wLjBcbiAgICAgIGlmICh0aGlzLm1pbm9yICE9PSAwIHx8IHRoaXMucGF0Y2ggIT09IDAgfHwgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5tYWpvcisrO1xuICAgICAgdGhpcy5taW5vciA9IDA7XG4gICAgICB0aGlzLnBhdGNoID0gMDtcbiAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlub3InOlxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHByZS1taW5vciB2ZXJzaW9uLCBidW1wIHVwIHRvIHRoZSBzYW1lIG1pbm9yIHZlcnNpb24uXG4gICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1pbm9yLlxuICAgICAgLy8gMS4yLjAtNSBidW1wcyB0byAxLjIuMFxuICAgICAgLy8gMS4yLjEgYnVtcHMgdG8gMS4zLjBcbiAgICAgIGlmICh0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApXG4gICAgICAgIHRoaXMubWlub3IrKztcbiAgICAgIHRoaXMucGF0Y2ggPSAwO1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW107XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwYXRjaCc6XG4gICAgICAvLyBJZiB0aGlzIGlzIG5vdCBhIHByZS1yZWxlYXNlIHZlcnNpb24sIGl0IHdpbGwgaW5jcmVtZW50IHRoZSBwYXRjaC5cbiAgICAgIC8vIElmIGl0IGlzIGEgcHJlLXJlbGVhc2UgaXQgd2lsbCBidW1wIHVwIHRvIHRoZSBzYW1lIHBhdGNoIHZlcnNpb24uXG4gICAgICAvLyAxLjIuMC01IHBhdGNoZXMgdG8gMS4yLjBcbiAgICAgIC8vIDEuMi4wIHBhdGNoZXMgdG8gMS4yLjFcbiAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnBhdGNoKys7XG4gICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIFRoaXMgcHJvYmFibHkgc2hvdWxkbid0IGJlIHVzZWQgcHVibGljbHkuXG4gICAgLy8gMS4wLjAgXCJwcmVcIiB3b3VsZCBiZWNvbWUgMS4wLjAtMCB3aGljaCBpcyB0aGUgd3JvbmcgZGlyZWN0aW9uLlxuICAgIGNhc2UgJ3ByZSc6XG4gICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlID0gWzBdO1xuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBpID0gdGhpcy5wcmVyZWxlYXNlLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKC0taSA+PSAwKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZXJlbGVhc2VbaV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2VbaV0rKztcbiAgICAgICAgICAgIGkgPSAtMjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IC0xKSAvLyBkaWRuJ3QgaW5jcmVtZW50IGFueXRoaW5nXG4gICAgICAgICAgdGhpcy5wcmVyZWxlYXNlLnB1c2goMCk7XG4gICAgICB9XG4gICAgICBpZiAoaWRlbnRpZmllcikge1xuICAgICAgICAvLyAxLjIuMC1iZXRhLjEgYnVtcHMgdG8gMS4yLjAtYmV0YS4yLFxuICAgICAgICAvLyAxLjIuMC1iZXRhLmZvb2JseiBvciAxLjIuMC1iZXRhIGJ1bXBzIHRvIDEuMi4wLWJldGEuMFxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlWzBdID09PSBpZGVudGlmaWVyKSB7XG4gICAgICAgICAgaWYgKGlzTmFOKHRoaXMucHJlcmVsZWFzZVsxXSkpXG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF07XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBpbmNyZW1lbnQgYXJndW1lbnQ6ICcgKyByZWxlYXNlKTtcbiAgfVxuICB0aGlzLmZvcm1hdCgpO1xuICB0aGlzLnJhdyA9IHRoaXMudmVyc2lvbjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5leHBvcnRzLmluYyA9IGluYztcbmZ1bmN0aW9uIGluYyh2ZXJzaW9uLCByZWxlYXNlLCBsb29zZSwgaWRlbnRpZmllcikge1xuICBpZiAodHlwZW9mKGxvb3NlKSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZGVudGlmaWVyID0gbG9vc2U7XG4gICAgbG9vc2UgPSB1bmRlZmluZWQ7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKS5pbmMocmVsZWFzZSwgaWRlbnRpZmllcikudmVyc2lvbjtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5leHBvcnRzLmRpZmYgPSBkaWZmO1xuZnVuY3Rpb24gZGlmZih2ZXJzaW9uMSwgdmVyc2lvbjIpIHtcbiAgaWYgKGVxKHZlcnNpb24xLCB2ZXJzaW9uMikpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdjEgPSBwYXJzZSh2ZXJzaW9uMSk7XG4gICAgdmFyIHYyID0gcGFyc2UodmVyc2lvbjIpO1xuICAgIGlmICh2MS5wcmVyZWxlYXNlLmxlbmd0aCB8fCB2Mi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICAgIGlmIChrZXkgPT09ICdtYWpvcicgfHwga2V5ID09PSAnbWlub3InIHx8IGtleSA9PT0gJ3BhdGNoJykge1xuICAgICAgICAgIGlmICh2MVtrZXldICE9PSB2MltrZXldKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3ByZScra2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdwcmVyZWxlYXNlJztcbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIHYxKSB7XG4gICAgICBpZiAoa2V5ID09PSAnbWFqb3InIHx8IGtleSA9PT0gJ21pbm9yJyB8fCBrZXkgPT09ICdwYXRjaCcpIHtcbiAgICAgICAgaWYgKHYxW2tleV0gIT09IHYyW2tleV0pIHtcbiAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMuY29tcGFyZUlkZW50aWZpZXJzID0gY29tcGFyZUlkZW50aWZpZXJzO1xuXG52YXIgbnVtZXJpYyA9IC9eWzAtOV0rJC87XG5mdW5jdGlvbiBjb21wYXJlSWRlbnRpZmllcnMoYSwgYikge1xuICB2YXIgYW51bSA9IG51bWVyaWMudGVzdChhKTtcbiAgdmFyIGJudW0gPSBudW1lcmljLnRlc3QoYik7XG5cbiAgaWYgKGFudW0gJiYgYm51bSkge1xuICAgIGEgPSArYTtcbiAgICBiID0gK2I7XG4gIH1cblxuICByZXR1cm4gKGFudW0gJiYgIWJudW0pID8gLTEgOlxuICAgICAgICAgKGJudW0gJiYgIWFudW0pID8gMSA6XG4gICAgICAgICBhIDwgYiA/IC0xIDpcbiAgICAgICAgIGEgPiBiID8gMSA6XG4gICAgICAgICAwO1xufVxuXG5leHBvcnRzLnJjb21wYXJlSWRlbnRpZmllcnMgPSByY29tcGFyZUlkZW50aWZpZXJzO1xuZnVuY3Rpb24gcmNvbXBhcmVJZGVudGlmaWVycyhhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlSWRlbnRpZmllcnMoYiwgYSk7XG59XG5cbmV4cG9ydHMubWFqb3IgPSBtYWpvcjtcbmZ1bmN0aW9uIG1ham9yKGEsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5tYWpvcjtcbn1cblxuZXhwb3J0cy5taW5vciA9IG1pbm9yO1xuZnVuY3Rpb24gbWlub3IoYSwgbG9vc2UpIHtcbiAgcmV0dXJuIG5ldyBTZW1WZXIoYSwgbG9vc2UpLm1pbm9yO1xufVxuXG5leHBvcnRzLnBhdGNoID0gcGF0Y2g7XG5mdW5jdGlvbiBwYXRjaChhLCBsb29zZSkge1xuICByZXR1cm4gbmV3IFNlbVZlcihhLCBsb29zZSkucGF0Y2g7XG59XG5cbmV4cG9ydHMuY29tcGFyZSA9IGNvbXBhcmU7XG5mdW5jdGlvbiBjb21wYXJlKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgU2VtVmVyKGEsIGxvb3NlKS5jb21wYXJlKG5ldyBTZW1WZXIoYiwgbG9vc2UpKTtcbn1cblxuZXhwb3J0cy5jb21wYXJlTG9vc2UgPSBjb21wYXJlTG9vc2U7XG5mdW5jdGlvbiBjb21wYXJlTG9vc2UoYSwgYikge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCB0cnVlKTtcbn1cblxuZXhwb3J0cy5yY29tcGFyZSA9IHJjb21wYXJlO1xuZnVuY3Rpb24gcmNvbXBhcmUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYiwgYSwgbG9vc2UpO1xufVxuXG5leHBvcnRzLnNvcnQgPSBzb3J0O1xuZnVuY3Rpb24gc29ydChsaXN0LCBsb29zZSkge1xuICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5jb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMucnNvcnQgPSByc29ydDtcbmZ1bmN0aW9uIHJzb3J0KGxpc3QsIGxvb3NlKSB7XG4gIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBleHBvcnRzLnJjb21wYXJlKGEsIGIsIGxvb3NlKTtcbiAgfSk7XG59XG5cbmV4cG9ydHMuZ3QgPSBndDtcbmZ1bmN0aW9uIGd0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDA7XG59XG5cbmV4cG9ydHMubHQgPSBsdDtcbmZ1bmN0aW9uIGx0KGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA8IDA7XG59XG5cbmV4cG9ydHMuZXEgPSBlcTtcbmZ1bmN0aW9uIGVxKGEsIGIsIGxvb3NlKSB7XG4gIHJldHVybiBjb21wYXJlKGEsIGIsIGxvb3NlKSA9PT0gMDtcbn1cblxuZXhwb3J0cy5uZXEgPSBuZXE7XG5mdW5jdGlvbiBuZXEoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpICE9PSAwO1xufVxuXG5leHBvcnRzLmd0ZSA9IGd0ZTtcbmZ1bmN0aW9uIGd0ZShhLCBiLCBsb29zZSkge1xuICByZXR1cm4gY29tcGFyZShhLCBiLCBsb29zZSkgPj0gMDtcbn1cblxuZXhwb3J0cy5sdGUgPSBsdGU7XG5mdW5jdGlvbiBsdGUoYSwgYiwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXBhcmUoYSwgYiwgbG9vc2UpIDw9IDA7XG59XG5cbmV4cG9ydHMuY21wID0gY21wO1xuZnVuY3Rpb24gY21wKGEsIG9wLCBiLCBsb29zZSkge1xuICB2YXIgcmV0O1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIGEgPSBhLnZlcnNpb247XG4gICAgICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnKSBiID0gYi52ZXJzaW9uO1xuICAgICAgcmV0ID0gYSA9PT0gYjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyE9PSc6XG4gICAgICBpZiAodHlwZW9mIGEgPT09ICdvYmplY3QnKSBhID0gYS52ZXJzaW9uO1xuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JykgYiA9IGIudmVyc2lvbjtcbiAgICAgIHJldCA9IGEgIT09IGI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcnOiBjYXNlICc9JzogY2FzZSAnPT0nOiByZXQgPSBlcShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGNhc2UgJyE9JzogcmV0ID0gbmVxKGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPic6IHJldCA9IGd0KGEsIGIsIGxvb3NlKTsgYnJlYWs7XG4gICAgY2FzZSAnPj0nOiByZXQgPSBndGUoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8JzogcmV0ID0gbHQoYSwgYiwgbG9vc2UpOyBicmVhaztcbiAgICBjYXNlICc8PSc6IHJldCA9IGx0ZShhLCBiLCBsb29zZSk7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgb3BlcmF0b3I6ICcgKyBvcCk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0cy5Db21wYXJhdG9yID0gQ29tcGFyYXRvcjtcbmZ1bmN0aW9uIENvbXBhcmF0b3IoY29tcCwgbG9vc2UpIHtcbiAgaWYgKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSB7XG4gICAgaWYgKGNvbXAubG9vc2UgPT09IGxvb3NlKVxuICAgICAgcmV0dXJuIGNvbXA7XG4gICAgZWxzZVxuICAgICAgY29tcCA9IGNvbXAudmFsdWU7XG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpXG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcblxuICBkZWJ1ZygnY29tcGFyYXRvcicsIGNvbXAsIGxvb3NlKTtcbiAgdGhpcy5sb29zZSA9IGxvb3NlO1xuICB0aGlzLnBhcnNlKGNvbXApO1xuXG4gIGlmICh0aGlzLnNlbXZlciA9PT0gQU5ZKVxuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgZWxzZVxuICAgIHRoaXMudmFsdWUgPSB0aGlzLm9wZXJhdG9yICsgdGhpcy5zZW12ZXIudmVyc2lvbjtcblxuICBkZWJ1ZygnY29tcCcsIHRoaXMpO1xufVxuXG52YXIgQU5ZID0ge307XG5Db21wYXJhdG9yLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGNvbXApIHtcbiAgdmFyIHIgPSB0aGlzLmxvb3NlID8gcmVbQ09NUEFSQVRPUkxPT1NFXSA6IHJlW0NPTVBBUkFUT1JdO1xuICB2YXIgbSA9IGNvbXAubWF0Y2gocik7XG5cbiAgaWYgKCFtKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY29tcGFyYXRvcjogJyArIGNvbXApO1xuXG4gIHRoaXMub3BlcmF0b3IgPSBtWzFdO1xuICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJz0nKVxuICAgIHRoaXMub3BlcmF0b3IgPSAnJztcblxuICAvLyBpZiBpdCBsaXRlcmFsbHkgaXMganVzdCAnPicgb3IgJycgdGhlbiBhbGxvdyBhbnl0aGluZy5cbiAgaWYgKCFtWzJdKVxuICAgIHRoaXMuc2VtdmVyID0gQU5ZO1xuICBlbHNlXG4gICAgdGhpcy5zZW12ZXIgPSBuZXcgU2VtVmVyKG1bMl0sIHRoaXMubG9vc2UpO1xufTtcblxuQ29tcGFyYXRvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5Db21wYXJhdG9yLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24odmVyc2lvbikge1xuICBkZWJ1ZygnQ29tcGFyYXRvci50ZXN0JywgdmVyc2lvbiwgdGhpcy5sb29zZSk7XG5cbiAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpXG4gICAgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJylcbiAgICB2ZXJzaW9uID0gbmV3IFNlbVZlcih2ZXJzaW9uLCB0aGlzLmxvb3NlKTtcblxuICByZXR1cm4gY21wKHZlcnNpb24sIHRoaXMub3BlcmF0b3IsIHRoaXMuc2VtdmVyLCB0aGlzLmxvb3NlKTtcbn07XG5cbkNvbXBhcmF0b3IucHJvdG90eXBlLmludGVyc2VjdHMgPSBmdW5jdGlvbihjb21wLCBsb29zZSkge1xuICBpZiAoIShjb21wIGluc3RhbmNlb2YgQ29tcGFyYXRvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhIENvbXBhcmF0b3IgaXMgcmVxdWlyZWQnKTtcbiAgfVxuXG4gIHZhciByYW5nZVRtcDtcblxuICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJycpIHtcbiAgICByYW5nZVRtcCA9IG5ldyBSYW5nZShjb21wLnZhbHVlLCBsb29zZSk7XG4gICAgcmV0dXJuIHNhdGlzZmllcyh0aGlzLnZhbHVlLCByYW5nZVRtcCwgbG9vc2UpO1xuICB9IGVsc2UgaWYgKGNvbXAub3BlcmF0b3IgPT09ICcnKSB7XG4gICAgcmFuZ2VUbXAgPSBuZXcgUmFuZ2UodGhpcy52YWx1ZSwgbG9vc2UpO1xuICAgIHJldHVybiBzYXRpc2ZpZXMoY29tcC5zZW12ZXIsIHJhbmdlVG1wLCBsb29zZSk7XG4gIH1cblxuICB2YXIgc2FtZURpcmVjdGlvbkluY3JlYXNpbmcgPVxuICAgICh0aGlzLm9wZXJhdG9yID09PSAnPj0nIHx8IHRoaXMub3BlcmF0b3IgPT09ICc+JykgJiZcbiAgICAoY29tcC5vcGVyYXRvciA9PT0gJz49JyB8fCBjb21wLm9wZXJhdG9yID09PSAnPicpO1xuICB2YXIgc2FtZURpcmVjdGlvbkRlY3JlYXNpbmcgPVxuICAgICh0aGlzLm9wZXJhdG9yID09PSAnPD0nIHx8IHRoaXMub3BlcmF0b3IgPT09ICc8JykgJiZcbiAgICAoY29tcC5vcGVyYXRvciA9PT0gJzw9JyB8fCBjb21wLm9wZXJhdG9yID09PSAnPCcpO1xuICB2YXIgc2FtZVNlbVZlciA9IHRoaXMuc2VtdmVyLnZlcnNpb24gPT09IGNvbXAuc2VtdmVyLnZlcnNpb247XG4gIHZhciBkaWZmZXJlbnREaXJlY3Rpb25zSW5jbHVzaXZlID1cbiAgICAodGhpcy5vcGVyYXRvciA9PT0gJz49JyB8fCB0aGlzLm9wZXJhdG9yID09PSAnPD0nKSAmJlxuICAgIChjb21wLm9wZXJhdG9yID09PSAnPj0nIHx8IGNvbXAub3BlcmF0b3IgPT09ICc8PScpO1xuICB2YXIgb3Bwb3NpdGVEaXJlY3Rpb25zTGVzc1RoYW4gPVxuICAgIGNtcCh0aGlzLnNlbXZlciwgJzwnLCBjb21wLnNlbXZlciwgbG9vc2UpICYmXG4gICAgKCh0aGlzLm9wZXJhdG9yID09PSAnPj0nIHx8IHRoaXMub3BlcmF0b3IgPT09ICc+JykgJiZcbiAgICAoY29tcC5vcGVyYXRvciA9PT0gJzw9JyB8fCBjb21wLm9wZXJhdG9yID09PSAnPCcpKTtcbiAgdmFyIG9wcG9zaXRlRGlyZWN0aW9uc0dyZWF0ZXJUaGFuID1cbiAgICBjbXAodGhpcy5zZW12ZXIsICc+JywgY29tcC5zZW12ZXIsIGxvb3NlKSAmJlxuICAgICgodGhpcy5vcGVyYXRvciA9PT0gJzw9JyB8fCB0aGlzLm9wZXJhdG9yID09PSAnPCcpICYmXG4gICAgKGNvbXAub3BlcmF0b3IgPT09ICc+PScgfHwgY29tcC5vcGVyYXRvciA9PT0gJz4nKSk7XG5cbiAgcmV0dXJuIHNhbWVEaXJlY3Rpb25JbmNyZWFzaW5nIHx8IHNhbWVEaXJlY3Rpb25EZWNyZWFzaW5nIHx8XG4gICAgKHNhbWVTZW1WZXIgJiYgZGlmZmVyZW50RGlyZWN0aW9uc0luY2x1c2l2ZSkgfHxcbiAgICBvcHBvc2l0ZURpcmVjdGlvbnNMZXNzVGhhbiB8fCBvcHBvc2l0ZURpcmVjdGlvbnNHcmVhdGVyVGhhbjtcbn07XG5cblxuZXhwb3J0cy5SYW5nZSA9IFJhbmdlO1xuZnVuY3Rpb24gUmFuZ2UocmFuZ2UsIGxvb3NlKSB7XG4gIGlmIChyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSB7XG4gICAgaWYgKHJhbmdlLmxvb3NlID09PSBsb29zZSkge1xuICAgICAgcmV0dXJuIHJhbmdlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLnJhdywgbG9vc2UpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyYW5nZSBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLnZhbHVlLCBsb29zZSk7XG4gIH1cblxuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmFuZ2UpKVxuICAgIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB0aGlzLmxvb3NlID0gbG9vc2U7XG5cbiAgLy8gRmlyc3QsIHNwbGl0IGJhc2VkIG9uIGJvb2xlYW4gb3IgfHxcbiAgdGhpcy5yYXcgPSByYW5nZTtcbiAgdGhpcy5zZXQgPSByYW5nZS5zcGxpdCgvXFxzKlxcfFxcfFxccyovKS5tYXAoZnVuY3Rpb24ocmFuZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVJhbmdlKHJhbmdlLnRyaW0oKSk7XG4gIH0sIHRoaXMpLmZpbHRlcihmdW5jdGlvbihjKSB7XG4gICAgLy8gdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgcmVsZXZhbnQgZm9yIHdoYXRldmVyIHJlYXNvblxuICAgIHJldHVybiBjLmxlbmd0aDtcbiAgfSk7XG5cbiAgaWYgKCF0aGlzLnNldC5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFNlbVZlciBSYW5nZTogJyArIHJhbmdlKTtcbiAgfVxuXG4gIHRoaXMuZm9ybWF0KCk7XG59XG5cblJhbmdlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yYW5nZSA9IHRoaXMuc2V0Lm1hcChmdW5jdGlvbihjb21wcykge1xuICAgIHJldHVybiBjb21wcy5qb2luKCcgJykudHJpbSgpO1xuICB9KS5qb2luKCd8fCcpLnRyaW0oKTtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMucmFuZ2U7XG59O1xuXG5SYW5nZS5wcm90b3R5cGUucGFyc2VSYW5nZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gIHZhciBsb29zZSA9IHRoaXMubG9vc2U7XG4gIHJhbmdlID0gcmFuZ2UudHJpbSgpO1xuICBkZWJ1ZygncmFuZ2UnLCByYW5nZSwgbG9vc2UpO1xuICAvLyBgMS4yLjMgLSAxLjIuNGAgPT4gYD49MS4yLjMgPD0xLjIuNGBcbiAgdmFyIGhyID0gbG9vc2UgPyByZVtIWVBIRU5SQU5HRUxPT1NFXSA6IHJlW0hZUEhFTlJBTkdFXTtcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKGhyLCBoeXBoZW5SZXBsYWNlKTtcbiAgZGVidWcoJ2h5cGhlbiByZXBsYWNlJywgcmFuZ2UpO1xuICAvLyBgPiAxLjIuMyA8IDEuMi41YCA9PiBgPjEuMi4zIDwxLjIuNWBcbiAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW0NPTVBBUkFUT1JUUklNXSwgY29tcGFyYXRvclRyaW1SZXBsYWNlKTtcbiAgZGVidWcoJ2NvbXBhcmF0b3IgdHJpbScsIHJhbmdlLCByZVtDT01QQVJBVE9SVFJJTV0pO1xuXG4gIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSk7XG5cbiAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVtDQVJFVFRSSU1dLCBjYXJldFRyaW1SZXBsYWNlKTtcblxuICAvLyBub3JtYWxpemUgc3BhY2VzXG4gIHJhbmdlID0gcmFuZ2Uuc3BsaXQoL1xccysvKS5qb2luKCcgJyk7XG5cbiAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgLy8gcmVhZHkgdG8gYmUgc3BsaXQgaW50byBjb21wYXJhdG9ycy5cblxuICB2YXIgY29tcFJlID0gbG9vc2UgPyByZVtDT01QQVJBVE9STE9PU0VdIDogcmVbQ09NUEFSQVRPUl07XG4gIHZhciBzZXQgPSByYW5nZS5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIHBhcnNlQ29tcGFyYXRvcihjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKS5zcGxpdCgvXFxzKy8pO1xuICBpZiAodGhpcy5sb29zZSkge1xuICAgIC8vIGluIGxvb3NlIG1vZGUsIHRocm93IG91dCBhbnkgdGhhdCBhcmUgbm90IHZhbGlkIGNvbXBhcmF0b3JzXG4gICAgc2V0ID0gc2V0LmZpbHRlcihmdW5jdGlvbihjb21wKSB7XG4gICAgICByZXR1cm4gISFjb21wLm1hdGNoKGNvbXBSZSk7XG4gICAgfSk7XG4gIH1cbiAgc2V0ID0gc2V0Lm1hcChmdW5jdGlvbihjb21wKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYXJhdG9yKGNvbXAsIGxvb3NlKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHNldDtcbn07XG5cblJhbmdlLnByb3RvdHlwZS5pbnRlcnNlY3RzID0gZnVuY3Rpb24ocmFuZ2UsIGxvb3NlKSB7XG4gIGlmICghKHJhbmdlIGluc3RhbmNlb2YgUmFuZ2UpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYSBSYW5nZSBpcyByZXF1aXJlZCcpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuc2V0LnNvbWUoZnVuY3Rpb24odGhpc0NvbXBhcmF0b3JzKSB7XG4gICAgcmV0dXJuIHRoaXNDb21wYXJhdG9ycy5ldmVyeShmdW5jdGlvbih0aGlzQ29tcGFyYXRvcikge1xuICAgICAgcmV0dXJuIHJhbmdlLnNldC5zb21lKGZ1bmN0aW9uKHJhbmdlQ29tcGFyYXRvcnMpIHtcbiAgICAgICAgcmV0dXJuIHJhbmdlQ29tcGFyYXRvcnMuZXZlcnkoZnVuY3Rpb24ocmFuZ2VDb21wYXJhdG9yKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNDb21wYXJhdG9yLmludGVyc2VjdHMocmFuZ2VDb21wYXJhdG9yLCBsb29zZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy8gTW9zdGx5IGp1c3QgZm9yIHRlc3RpbmcgYW5kIGxlZ2FjeSBBUEkgcmVhc29uc1xuZXhwb3J0cy50b0NvbXBhcmF0b3JzID0gdG9Db21wYXJhdG9ycztcbmZ1bmN0aW9uIHRvQ29tcGFyYXRvcnMocmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKS5zZXQubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gY29tcC5tYXAoZnVuY3Rpb24oYykge1xuICAgICAgcmV0dXJuIGMudmFsdWU7XG4gICAgfSkuam9pbignICcpLnRyaW0oKS5zcGxpdCgnICcpO1xuICB9KTtcbn1cblxuLy8gY29tcHJpc2VkIG9mIHhyYW5nZXMsIHRpbGRlcywgc3RhcnMsIGFuZCBndGx0J3MgYXQgdGhpcyBwb2ludC5cbi8vIGFscmVhZHkgcmVwbGFjZWQgdGhlIGh5cGhlbiByYW5nZXNcbi8vIHR1cm4gaW50byBhIHNldCBvZiBKVVNUIGNvbXBhcmF0b3JzLlxuZnVuY3Rpb24gcGFyc2VDb21wYXJhdG9yKGNvbXAsIGxvb3NlKSB7XG4gIGRlYnVnKCdjb21wJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlQ2FyZXRzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlVGlsZGVzKGNvbXAsIGxvb3NlKTtcbiAgZGVidWcoJ3RpbGRlcycsIGNvbXApO1xuICBjb21wID0gcmVwbGFjZVhSYW5nZXMoY29tcCwgbG9vc2UpO1xuICBkZWJ1ZygneHJhbmdlJywgY29tcCk7XG4gIGNvbXAgPSByZXBsYWNlU3RhcnMoY29tcCwgbG9vc2UpO1xuICBkZWJ1Zygnc3RhcnMnLCBjb21wKTtcbiAgcmV0dXJuIGNvbXA7XG59XG5cbmZ1bmN0aW9uIGlzWChpZCkge1xuICByZXR1cm4gIWlkIHx8IGlkLnRvTG93ZXJDYXNlKCkgPT09ICd4JyB8fCBpZCA9PT0gJyonO1xufVxuXG4vLyB+LCB+PiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIH4yLCB+Mi54LCB+Mi54LngsIH4+Miwgfj4yLnggfj4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIH4yLjAsIH4yLjAueCwgfj4yLjAsIH4+Mi4wLnggLS0+ID49Mi4wLjAgPDIuMS4wXG4vLyB+MS4yLCB+MS4yLngsIH4+MS4yLCB+PjEuMi54IC0tPiA+PTEuMi4wIDwxLjMuMFxuLy8gfjEuMi4zLCB+PjEuMi4zIC0tPiA+PTEuMi4zIDwxLjMuMFxuLy8gfjEuMi4wLCB+PjEuMi4wIC0tPiA+PTEuMi4wIDwxLjMuMFxuZnVuY3Rpb24gcmVwbGFjZVRpbGRlcyhjb21wLCBsb29zZSkge1xuICByZXR1cm4gY29tcC50cmltKCkuc3BsaXQoL1xccysvKS5tYXAoZnVuY3Rpb24oY29tcCkge1xuICAgIHJldHVybiByZXBsYWNlVGlsZGUoY29tcCwgbG9vc2UpO1xuICB9KS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VUaWxkZShjb21wLCBsb29zZSkge1xuICB2YXIgciA9IGxvb3NlID8gcmVbVElMREVMT09TRV0gOiByZVtUSUxERV07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygndGlsZGUnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKVxuICAgICAgLy8gfjEuMiA9PSA+PTEuMi4wIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICBlbHNlIGlmIChwcikge1xuICAgICAgZGVidWcoJ3JlcGxhY2VUaWxkZSBwcicsIHByKTtcbiAgICAgIGlmIChwci5jaGFyQXQoMCkgIT09ICctJylcbiAgICAgICAgcHIgPSAnLScgKyBwcjtcbiAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9IGVsc2VcbiAgICAgIC8vIH4xLjIuMyA9PSA+PTEuMi4zIDwxLjMuMFxuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcblxuICAgIGRlYnVnKCd0aWxkZSByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG4vLyBeIC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gXjIsIF4yLngsIF4yLngueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4yLjAsIF4yLjAueCAtLT4gPj0yLjAuMCA8My4wLjBcbi8vIF4xLjIsIF4xLjIueCAtLT4gPj0xLjIuMCA8Mi4wLjBcbi8vIF4xLjIuMyAtLT4gPj0xLjIuMyA8Mi4wLjBcbi8vIF4xLjIuMCAtLT4gPj0xLjIuMCA8Mi4wLjBcbmZ1bmN0aW9uIHJlcGxhY2VDYXJldHMoY29tcCwgbG9vc2UpIHtcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZUNhcmV0KGNvbXAsIGxvb3NlKTtcbiAgfSkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlQ2FyZXQoY29tcCwgbG9vc2UpIHtcbiAgZGVidWcoJ2NhcmV0JywgY29tcCwgbG9vc2UpO1xuICB2YXIgciA9IGxvb3NlID8gcmVbQ0FSRVRMT09TRV0gOiByZVtDQVJFVF07XG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgZnVuY3Rpb24oXywgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygnY2FyZXQnLCBjb21wLCBfLCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHJldDtcblxuICAgIGlmIChpc1goTSkpXG4gICAgICByZXQgPSAnJztcbiAgICBlbHNlIGlmIChpc1gobSkpXG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgZWxzZSBpZiAoaXNYKHApKSB7XG4gICAgICBpZiAoTSA9PT0gJzAnKVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLjAgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZUNhcmV0IHByJywgcHIpO1xuICAgICAgaWYgKHByLmNoYXJBdCgwKSAhPT0gJy0nKVxuICAgICAgICBwciA9ICctJyArIHByO1xuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKVxuICAgICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICsgcHIgK1xuICAgICAgICAgICAgICAgICcgPCcgKyBNICsgJy4nICsgKCttICsgMSkgKyAnLjAnO1xuICAgICAgfSBlbHNlXG4gICAgICAgIHJldCA9ICc+PScgKyBNICsgJy4nICsgbSArICcuJyArIHAgKyBwciArXG4gICAgICAgICAgICAgICcgPCcgKyAoK00gKyAxKSArICcuMC4wJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ25vIHByJyk7XG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpXG4gICAgICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4nICsgcCArXG4gICAgICAgICAgICAgICAgJyA8JyArIE0gKyAnLicgKyBtICsgJy4nICsgKCtwICsgMSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgICAnIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXQgPSAnPj0nICsgTSArICcuJyArIG0gKyAnLicgKyBwICtcbiAgICAgICAgICAgICAgJyA8JyArICgrTSArIDEpICsgJy4wLjAnO1xuICAgIH1cblxuICAgIGRlYnVnKCdjYXJldCByZXR1cm4nLCByZXQpO1xuICAgIHJldHVybiByZXQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlWFJhbmdlcyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVhSYW5nZXMnLCBjb21wLCBsb29zZSk7XG4gIHJldHVybiBjb21wLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKGNvbXApIHtcbiAgICByZXR1cm4gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSk7XG4gIH0pLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVhSYW5nZShjb21wLCBsb29zZSkge1xuICBjb21wID0gY29tcC50cmltKCk7XG4gIHZhciByID0gbG9vc2UgPyByZVtYUkFOR0VMT09TRV0gOiByZVtYUkFOR0VdO1xuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIGZ1bmN0aW9uKHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpIHtcbiAgICBkZWJ1ZygneFJhbmdlJywgY29tcCwgcmV0LCBndGx0LCBNLCBtLCBwLCBwcik7XG4gICAgdmFyIHhNID0gaXNYKE0pO1xuICAgIHZhciB4bSA9IHhNIHx8IGlzWChtKTtcbiAgICB2YXIgeHAgPSB4bSB8fCBpc1gocCk7XG4gICAgdmFyIGFueVggPSB4cDtcblxuICAgIGlmIChndGx0ID09PSAnPScgJiYgYW55WClcbiAgICAgIGd0bHQgPSAnJztcblxuICAgIGlmICh4TSkge1xuICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgIHJldCA9ICc8MC4wLjAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBmb3JiaWRkZW5cbiAgICAgICAgcmV0ID0gJyonO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3RsdCAmJiBhbnlYKSB7XG4gICAgICAvLyByZXBsYWNlIFggd2l0aCAwXG4gICAgICBpZiAoeG0pXG4gICAgICAgIG0gPSAwO1xuICAgICAgaWYgKHhwKVxuICAgICAgICBwID0gMDtcblxuICAgICAgaWYgKGd0bHQgPT09ICc+Jykge1xuICAgICAgICAvLyA+MSA9PiA+PTIuMC4wXG4gICAgICAgIC8vID4xLjIgPT4gPj0xLjMuMFxuICAgICAgICAvLyA+MS4yLjMgPT4gPj0gMS4yLjRcbiAgICAgICAgZ3RsdCA9ICc+PSc7XG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDE7XG4gICAgICAgICAgbSA9IDA7XG4gICAgICAgICAgcCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoeHApIHtcbiAgICAgICAgICBtID0gK20gKyAxO1xuICAgICAgICAgIHAgPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGd0bHQgPT09ICc8PScpIHtcbiAgICAgICAgLy8gPD0wLjcueCBpcyBhY3R1YWxseSA8MC44LjAsIHNpbmNlIGFueSAwLjcueCBzaG91bGRcbiAgICAgICAgLy8gcGFzcy4gIFNpbWlsYXJseSwgPD03LnggaXMgYWN0dWFsbHkgPDguMC4wLCBldGMuXG4gICAgICAgIGd0bHQgPSAnPCc7XG4gICAgICAgIGlmICh4bSlcbiAgICAgICAgICBNID0gK00gKyAxO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgbSA9ICttICsgMTtcbiAgICAgIH1cblxuICAgICAgcmV0ID0gZ3RsdCArIE0gKyAnLicgKyBtICsgJy4nICsgcDtcbiAgICB9IGVsc2UgaWYgKHhtKSB7XG4gICAgICByZXQgPSAnPj0nICsgTSArICcuMC4wIDwnICsgKCtNICsgMSkgKyAnLjAuMCc7XG4gICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgcmV0ID0gJz49JyArIE0gKyAnLicgKyBtICsgJy4wIDwnICsgTSArICcuJyArICgrbSArIDEpICsgJy4wJztcbiAgICB9XG5cbiAgICBkZWJ1ZygneFJhbmdlIHJldHVybicsIHJldCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cblxuLy8gQmVjYXVzZSAqIGlzIEFORC1lZCB3aXRoIGV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgY29tcGFyYXRvcixcbi8vIGFuZCAnJyBtZWFucyBcImFueSB2ZXJzaW9uXCIsIGp1c3QgcmVtb3ZlIHRoZSAqcyBlbnRpcmVseS5cbmZ1bmN0aW9uIHJlcGxhY2VTdGFycyhjb21wLCBsb29zZSkge1xuICBkZWJ1ZygncmVwbGFjZVN0YXJzJywgY29tcCwgbG9vc2UpO1xuICAvLyBMb29zZW5lc3MgaXMgaWdub3JlZCBoZXJlLiAgc3RhciBpcyBhbHdheXMgYXMgbG9vc2UgYXMgaXQgZ2V0cyFcbiAgcmV0dXJuIGNvbXAudHJpbSgpLnJlcGxhY2UocmVbU1RBUl0sICcnKTtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gc3RyaW5nLnJlcGxhY2UocmVbSFlQSEVOUkFOR0VdKVxuLy8gTSwgbSwgcGF0Y2gsIHByZXJlbGVhc2UsIGJ1aWxkXG4vLyAxLjIgLSAzLjQuNSA9PiA+PTEuMi4wIDw9My40LjVcbi8vIDEuMi4zIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wIEFueSAzLjQueCB3aWxsIGRvXG4vLyAxLjIgLSAzLjQgPT4gPj0xLjIuMCA8My41LjBcbmZ1bmN0aW9uIGh5cGhlblJlcGxhY2UoJDAsXG4gICAgICAgICAgICAgICAgICAgICAgIGZyb20sIGZNLCBmbSwgZnAsIGZwciwgZmIsXG4gICAgICAgICAgICAgICAgICAgICAgIHRvLCB0TSwgdG0sIHRwLCB0cHIsIHRiKSB7XG5cbiAgaWYgKGlzWChmTSkpXG4gICAgZnJvbSA9ICcnO1xuICBlbHNlIGlmIChpc1goZm0pKVxuICAgIGZyb20gPSAnPj0nICsgZk0gKyAnLjAuMCc7XG4gIGVsc2UgaWYgKGlzWChmcCkpXG4gICAgZnJvbSA9ICc+PScgKyBmTSArICcuJyArIGZtICsgJy4wJztcbiAgZWxzZVxuICAgIGZyb20gPSAnPj0nICsgZnJvbTtcblxuICBpZiAoaXNYKHRNKSlcbiAgICB0byA9ICcnO1xuICBlbHNlIGlmIChpc1godG0pKVxuICAgIHRvID0gJzwnICsgKCt0TSArIDEpICsgJy4wLjAnO1xuICBlbHNlIGlmIChpc1godHApKVxuICAgIHRvID0gJzwnICsgdE0gKyAnLicgKyAoK3RtICsgMSkgKyAnLjAnO1xuICBlbHNlIGlmICh0cHIpXG4gICAgdG8gPSAnPD0nICsgdE0gKyAnLicgKyB0bSArICcuJyArIHRwICsgJy0nICsgdHByO1xuICBlbHNlXG4gICAgdG8gPSAnPD0nICsgdG87XG5cbiAgcmV0dXJuIChmcm9tICsgJyAnICsgdG8pLnRyaW0oKTtcbn1cblxuXG4vLyBpZiBBTlkgb2YgdGhlIHNldHMgbWF0Y2ggQUxMIG9mIGl0cyBjb21wYXJhdG9ycywgdGhlbiBwYXNzXG5SYW5nZS5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgaWYgKCF2ZXJzaW9uKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gPT09ICdzdHJpbmcnKVxuICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMubG9vc2UpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGVzdFNldCh0aGlzLnNldFtpXSwgdmVyc2lvbikpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiB0ZXN0U2V0KHNldCwgdmVyc2lvbikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmICghc2V0W2ldLnRlc3QodmVyc2lvbikpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAodmVyc2lvbi5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgIC8vIEZpbmQgdGhlIHNldCBvZiB2ZXJzaW9ucyB0aGF0IGFyZSBhbGxvd2VkIHRvIGhhdmUgcHJlcmVsZWFzZXNcbiAgICAvLyBGb3IgZXhhbXBsZSwgXjEuMi4zLXByLjEgZGVzdWdhcnMgdG8gPj0xLjIuMy1wci4xIDwyLjAuMFxuICAgIC8vIFRoYXQgc2hvdWxkIGFsbG93IGAxLjIuMy1wci4yYCB0byBwYXNzLlxuICAgIC8vIEhvd2V2ZXIsIGAxLjIuNC1hbHBoYS5ub3RyZWFkeWAgc2hvdWxkIE5PVCBiZSBhbGxvd2VkLFxuICAgIC8vIGV2ZW4gdGhvdWdoIGl0J3Mgd2l0aGluIHRoZSByYW5nZSBzZXQgYnkgdGhlIGNvbXBhcmF0b3JzLlxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWJ1ZyhzZXRbaV0uc2VtdmVyKTtcbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyID09PSBBTlkpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFsbG93ZWQgPSBzZXRbaV0uc2VtdmVyO1xuICAgICAgICBpZiAoYWxsb3dlZC5tYWpvciA9PT0gdmVyc2lvbi5tYWpvciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5taW5vciA9PT0gdmVyc2lvbi5taW5vciAmJlxuICAgICAgICAgICAgYWxsb3dlZC5wYXRjaCA9PT0gdmVyc2lvbi5wYXRjaClcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBWZXJzaW9uIGhhcyBhIC1wcmUsIGJ1dCBpdCdzIG5vdCBvbmUgb2YgdGhlIG9uZXMgd2UgbGlrZS5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0cy5zYXRpc2ZpZXMgPSBzYXRpc2ZpZXM7XG5mdW5jdGlvbiBzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHRyeSB7XG4gICAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHJhbmdlLnRlc3QodmVyc2lvbik7XG59XG5cbmV4cG9ydHMubWF4U2F0aXNmeWluZyA9IG1heFNhdGlzZnlpbmc7XG5mdW5jdGlvbiBtYXhTYXRpc2Z5aW5nKHZlcnNpb25zLCByYW5nZSwgbG9vc2UpIHtcbiAgdmFyIG1heCA9IG51bGw7XG4gIHZhciBtYXhTViA9IG51bGw7XG4gIHRyeSB7XG4gICAgdmFyIHJhbmdlT2JqID0gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSk7XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmVyc2lvbnMuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgIGlmIChyYW5nZU9iai50ZXN0KHYpKSB7IC8vIHNhdGlzZmllcyh2LCByYW5nZSwgbG9vc2UpXG4gICAgICBpZiAoIW1heCB8fCBtYXhTVi5jb21wYXJlKHYpID09PSAtMSkgeyAvLyBjb21wYXJlKG1heCwgdiwgdHJ1ZSlcbiAgICAgICAgbWF4ID0gdjtcbiAgICAgICAgbWF4U1YgPSBuZXcgU2VtVmVyKG1heCwgbG9vc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIG1heDtcbn1cblxuZXhwb3J0cy5taW5TYXRpc2Z5aW5nID0gbWluU2F0aXNmeWluZztcbmZ1bmN0aW9uIG1pblNhdGlzZnlpbmcodmVyc2lvbnMsIHJhbmdlLCBsb29zZSkge1xuICB2YXIgbWluID0gbnVsbDtcbiAgdmFyIG1pblNWID0gbnVsbDtcbiAgdHJ5IHtcbiAgICB2YXIgcmFuZ2VPYmogPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2ZXJzaW9ucy5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgaWYgKHJhbmdlT2JqLnRlc3QodikpIHsgLy8gc2F0aXNmaWVzKHYsIHJhbmdlLCBsb29zZSlcbiAgICAgIGlmICghbWluIHx8IG1pblNWLmNvbXBhcmUodikgPT09IDEpIHsgLy8gY29tcGFyZShtaW4sIHYsIHRydWUpXG4gICAgICAgIG1pbiA9IHY7XG4gICAgICAgIG1pblNWID0gbmV3IFNlbVZlcihtaW4sIGxvb3NlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBtaW47XG59XG5cbmV4cG9ydHMudmFsaWRSYW5nZSA9IHZhbGlkUmFuZ2U7XG5mdW5jdGlvbiB2YWxpZFJhbmdlKHJhbmdlLCBsb29zZSkge1xuICB0cnkge1xuICAgIC8vIFJldHVybiAnKicgaW5zdGVhZCBvZiAnJyBzbyB0aGF0IHRydXRoaW5lc3Mgd29ya3MuXG4gICAgLy8gVGhpcyB3aWxsIHRocm93IGlmIGl0J3MgaW52YWxpZCBhbnl3YXlcbiAgICByZXR1cm4gbmV3IFJhbmdlKHJhbmdlLCBsb29zZSkucmFuZ2UgfHwgJyonO1xuICB9IGNhdGNoIChlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIERldGVybWluZSBpZiB2ZXJzaW9uIGlzIGxlc3MgdGhhbiBhbGwgdGhlIHZlcnNpb25zIHBvc3NpYmxlIGluIHRoZSByYW5nZVxuZXhwb3J0cy5sdHIgPSBsdHI7XG5mdW5jdGlvbiBsdHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPCcsIGxvb3NlKTtcbn1cblxuLy8gRGV0ZXJtaW5lIGlmIHZlcnNpb24gaXMgZ3JlYXRlciB0aGFuIGFsbCB0aGUgdmVyc2lvbnMgcG9zc2libGUgaW4gdGhlIHJhbmdlLlxuZXhwb3J0cy5ndHIgPSBndHI7XG5mdW5jdGlvbiBndHIodmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSB7XG4gIHJldHVybiBvdXRzaWRlKHZlcnNpb24sIHJhbmdlLCAnPicsIGxvb3NlKTtcbn1cblxuZXhwb3J0cy5vdXRzaWRlID0gb3V0c2lkZTtcbmZ1bmN0aW9uIG91dHNpZGUodmVyc2lvbiwgcmFuZ2UsIGhpbG8sIGxvb3NlKSB7XG4gIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIGxvb3NlKTtcbiAgcmFuZ2UgPSBuZXcgUmFuZ2UocmFuZ2UsIGxvb3NlKTtcblxuICB2YXIgZ3RmbiwgbHRlZm4sIGx0Zm4sIGNvbXAsIGVjb21wO1xuICBzd2l0Y2ggKGhpbG8pIHtcbiAgICBjYXNlICc+JzpcbiAgICAgIGd0Zm4gPSBndDtcbiAgICAgIGx0ZWZuID0gbHRlO1xuICAgICAgbHRmbiA9IGx0O1xuICAgICAgY29tcCA9ICc+JztcbiAgICAgIGVjb21wID0gJz49JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJzwnOlxuICAgICAgZ3RmbiA9IGx0O1xuICAgICAgbHRlZm4gPSBndGU7XG4gICAgICBsdGZuID0gZ3Q7XG4gICAgICBjb21wID0gJzwnO1xuICAgICAgZWNvbXAgPSAnPD0nO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ011c3QgcHJvdmlkZSBhIGhpbG8gdmFsIG9mIFwiPFwiIG9yIFwiPlwiJyk7XG4gIH1cblxuICAvLyBJZiBpdCBzYXRpc2lmZXMgdGhlIHJhbmdlIGl0IGlzIG5vdCBvdXRzaWRlXG4gIGlmIChzYXRpc2ZpZXModmVyc2lvbiwgcmFuZ2UsIGxvb3NlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEZyb20gbm93IG9uLCB2YXJpYWJsZSB0ZXJtcyBhcmUgYXMgaWYgd2UncmUgaW4gXCJndHJcIiBtb2RlLlxuICAvLyBidXQgbm90ZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgZmxpcHBlZCBmb3IgdGhlIFwibHRyXCIgZnVuY3Rpb24uXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByYW5nZS5zZXQubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgY29tcGFyYXRvcnMgPSByYW5nZS5zZXRbaV07XG5cbiAgICB2YXIgaGlnaCA9IG51bGw7XG4gICAgdmFyIGxvdyA9IG51bGw7XG5cbiAgICBjb21wYXJhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBhcmF0b3IpIHtcbiAgICAgIGlmIChjb21wYXJhdG9yLnNlbXZlciA9PT0gQU5ZKSB7XG4gICAgICAgIGNvbXBhcmF0b3IgPSBuZXcgQ29tcGFyYXRvcignPj0wLjAuMCcpXG4gICAgICB9XG4gICAgICBoaWdoID0gaGlnaCB8fCBjb21wYXJhdG9yO1xuICAgICAgbG93ID0gbG93IHx8IGNvbXBhcmF0b3I7XG4gICAgICBpZiAoZ3Rmbihjb21wYXJhdG9yLnNlbXZlciwgaGlnaC5zZW12ZXIsIGxvb3NlKSkge1xuICAgICAgICBoaWdoID0gY29tcGFyYXRvcjtcbiAgICAgIH0gZWxzZSBpZiAobHRmbihjb21wYXJhdG9yLnNlbXZlciwgbG93LnNlbXZlciwgbG9vc2UpKSB7XG4gICAgICAgIGxvdyA9IGNvbXBhcmF0b3I7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBJZiB0aGUgZWRnZSB2ZXJzaW9uIGNvbXBhcmF0b3IgaGFzIGEgb3BlcmF0b3IgdGhlbiBvdXIgdmVyc2lvblxuICAgIC8vIGlzbid0IG91dHNpZGUgaXRcbiAgICBpZiAoaGlnaC5vcGVyYXRvciA9PT0gY29tcCB8fCBoaWdoLm9wZXJhdG9yID09PSBlY29tcCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBsb3dlc3QgdmVyc2lvbiBjb21wYXJhdG9yIGhhcyBhbiBvcGVyYXRvciBhbmQgb3VyIHZlcnNpb25cbiAgICAvLyBpcyBsZXNzIHRoYW4gaXQgdGhlbiBpdCBpc24ndCBoaWdoZXIgdGhhbiB0aGUgcmFuZ2VcbiAgICBpZiAoKCFsb3cub3BlcmF0b3IgfHwgbG93Lm9wZXJhdG9yID09PSBjb21wKSAmJlxuICAgICAgICBsdGVmbih2ZXJzaW9uLCBsb3cuc2VtdmVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAobG93Lm9wZXJhdG9yID09PSBlY29tcCAmJiBsdGZuKHZlcnNpb24sIGxvdy5zZW12ZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnRzLnByZXJlbGVhc2UgPSBwcmVyZWxlYXNlO1xuZnVuY3Rpb24gcHJlcmVsZWFzZSh2ZXJzaW9uLCBsb29zZSkge1xuICB2YXIgcGFyc2VkID0gcGFyc2UodmVyc2lvbiwgbG9vc2UpO1xuICByZXR1cm4gKHBhcnNlZCAmJiBwYXJzZWQucHJlcmVsZWFzZS5sZW5ndGgpID8gcGFyc2VkLnByZXJlbGVhc2UgOiBudWxsO1xufVxuXG5leHBvcnRzLmludGVyc2VjdHMgPSBpbnRlcnNlY3RzO1xuZnVuY3Rpb24gaW50ZXJzZWN0cyhyMSwgcjIsIGxvb3NlKSB7XG4gIHIxID0gbmV3IFJhbmdlKHIxLCBsb29zZSlcbiAgcjIgPSBuZXcgUmFuZ2UocjIsIGxvb3NlKVxuICByZXR1cm4gcjEuaW50ZXJzZWN0cyhyMilcbn1cblxuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG5mdW5jdGlvbiBjb2VyY2UodmVyc2lvbikge1xuICBpZiAodmVyc2lvbiBpbnN0YW5jZW9mIFNlbVZlcilcbiAgICByZXR1cm4gdmVyc2lvbjtcblxuICBpZiAodHlwZW9mIHZlcnNpb24gIT09ICdzdHJpbmcnKVxuICAgIHJldHVybiBudWxsO1xuXG4gIHZhciBtYXRjaCA9IHZlcnNpb24ubWF0Y2gocmVbQ09FUkNFXSk7XG5cbiAgaWYgKG1hdGNoID09IG51bGwpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIHBhcnNlKChtYXRjaFsxXSB8fCAnMCcpICsgJy4nICsgKG1hdGNoWzJdIHx8ICcwJykgKyAnLicgKyAobWF0Y2hbM10gfHwgJzAnKSk7IFxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBpc0luaXRpYWxpemVkID0gZmFsc2VcblxuLy8gbWFqb3IgZXZlbnRzIHN1cHBvcnRlZDpcbi8vICAgcGFuc3RhcnRcbi8vICAgcGFubW92ZVxuLy8gICBwYW5lbmRcbi8vICAgc3dpcGVcbi8vICAgbG9uZ3ByZXNzXG4vLyBleHRyYSBldmVudHMgc3VwcG9ydGVkOlxuLy8gICBkdWFsdG91Y2hzdGFydFxuLy8gICBkdWFsdG91Y2hcbi8vICAgZHVhbHRvdWNoZW5kXG4vLyAgIHRhcFxuLy8gICBkb3VibGV0YXBcbi8vICAgcHJlc3NlbmRcblxudmFyIGRvYyA9IHdpbmRvdy5kb2N1bWVudFxudmFyIGRvY0VsID0gZG9jLmRvY3VtZW50RWxlbWVudFxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG52YXIgZ2VzdHVyZXMgPSB7fVxudmFyIGxhc3RUYXAgPSBudWxsXG5cbi8qKlxuICogZmluZCB0aGUgY2xvc2VzdCBjb21tb24gYW5jZXN0b3JcbiAqIGlmIHRoZXJlJ3Mgbm8gb25lLCByZXR1cm4gbnVsbFxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsMSBmaXJzdCBlbGVtZW50XG4gKiBAcGFyYW0gIHtFbGVtZW50fSBlbDIgc2Vjb25kIGVsZW1lbnRcbiAqIEByZXR1cm4ge0VsZW1lbnR9ICAgICBjb21tb24gYW5jZXN0b3JcbiAqL1xuZnVuY3Rpb24gZ2V0Q29tbW9uQW5jZXN0b3IoZWwxLCBlbDIpIHtcbiAgdmFyIGVsID0gZWwxXG4gIHdoaWxlIChlbCkge1xuICAgIGlmIChlbC5jb250YWlucyhlbDIpIHx8IGVsID09IGVsMikge1xuICAgICAgcmV0dXJuIGVsXG4gICAgfVxuICAgIGVsID0gZWwucGFyZW50Tm9kZVxuICB9XG4gIHJldHVybiBudWxsXG59XG5cbi8qKlxuICogZmlyZSBhIEhUTUxFdmVudFxuICpcbiAqIEBwYXJhbSAge0VsZW1lbnR9IGVsZW1lbnQgd2hpY2ggZWxlbWVudCB0byBmaXJlIGEgZXZlbnQgb25cbiAqIEBwYXJhbSAge3N0cmluZ30gIHR5cGUgICAgdHlwZSBvZiBldmVudFxuICogQHBhcmFtICB7b2JqZWN0fSAgZXh0cmEgICBleHRyYSBkYXRhIGZvciB0aGUgZXZlbnQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGZpcmVFdmVudChlbGVtZW50LCB0eXBlLCBleHRyYSkge1xuICB2YXIgZXZlbnQgPSBkb2MuY3JlYXRlRXZlbnQoJ0hUTUxFdmVudHMnKVxuICBldmVudC5pbml0RXZlbnQodHlwZSwgdHJ1ZSwgdHJ1ZSlcblxuICBpZiAodHlwZW9mIGV4dHJhID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodmFyIHAgaW4gZXh0cmEpIHtcbiAgICAgIGV2ZW50W3BdID0gZXh0cmFbcF1cbiAgICB9XG4gIH1cblxuICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpXG59XG5cbi8qKlxuICogY2FsYyB0aGUgdHJhbnNmb3JtXG4gKiBhc3N1bWUgNCBwb2ludHMgQUJDRCBvbiB0aGUgY29vcmRpbmF0ZSBzeXN0ZW1cbiAqID4gcm90YXRl77yaYW5nbGUgcm90YXRpbmcgZnJvbSBBQiB0byBDRFxuICogPiBzY2FsZe+8mnNjYWxlIHJhdGlvIGZyb20gQUIgdG8gQ0RcbiAqID4gdHJhbnNsYXRl77yadHJhbnNsYXRlIHNoaWZ0IGZyb20gQSB0byBDXG4gKlxuICogQHBhcmFtICB7bnVtYmVyfSB4MSBhYnNjaXNzYSBvZiBBXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHkxIG9yZGluYXRlIG9mIEFcbiAqIEBwYXJhbSAge251bWJlcn0geDIgYWJzY2lzc2Egb2YgQlxuICogQHBhcmFtICB7bnVtYmVyfSB5MiBvcmRpbmF0ZSBvZiBCXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHgzIGFic2Npc3NhIG9mIENcbiAqIEBwYXJhbSAge251bWJlcn0geTMgb3JkaW5hdGUgb2YgQ1xuICogQHBhcmFtICB7bnVtYmVyfSB4NCBhYnNjaXNzYSBvZiBEXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHk0IG9yZGluYXRlIG9mIERcbiAqIEByZXR1cm4ge29iamVjdH0gICAgdHJhbnNmb3JtIG9iamVjdCBsaWtlXG4gKiAgIHtyb3RhdGUsIHNjYWxlLCB0cmFuc2xhdGVbMl0sIG1hdHJpeFszXVszXX1cbiAqL1xuZnVuY3Rpb24gY2FsYyh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzLCB4NCwgeTQpIHtcbiAgdmFyIHJvdGF0ZSA9IE1hdGguYXRhbjIoeTQgLSB5MywgeDQgLSB4MykgLSBNYXRoLmF0YW4yKHkyIC0geTEsIHgyIC0geDEpXG4gIHZhciBzY2FsZSA9IE1hdGguc3FydCgoTWF0aC5wb3coeTQgLSB5MywgMilcbiAgICArIE1hdGgucG93KHg0IC0geDMsIDIpKSAvIChNYXRoLnBvdyh5MiAtIHkxLCAyKVxuICAgICsgTWF0aC5wb3coeDIgLSB4MSwgMikpKVxuICB2YXIgdHJhbnNsYXRlID0gW1xuICAgIHgzXG4gICAgLSBzY2FsZSAqIHgxICogTWF0aC5jb3Mocm90YXRlKVxuICAgICsgc2NhbGUgKiB5MSAqIE1hdGguc2luKHJvdGF0ZSksXG4gICAgeTNcbiAgICAtIHNjYWxlICogeTEgKiBNYXRoLmNvcyhyb3RhdGUpXG4gICAgLSBzY2FsZSAqIHgxICogTWF0aC5zaW4ocm90YXRlKV1cblxuICByZXR1cm4ge1xuICAgIHJvdGF0ZTogcm90YXRlLFxuICAgIHNjYWxlOiBzY2FsZSxcbiAgICB0cmFuc2xhdGU6IHRyYW5zbGF0ZSxcbiAgICBtYXRyaXg6IFtcbiAgICAgIFtzY2FsZSAqIE1hdGguY29zKHJvdGF0ZSksIC1zY2FsZSAqIE1hdGguc2luKHJvdGF0ZSksIHRyYW5zbGF0ZVswXV0sXG4gICAgICBbc2NhbGUgKiBNYXRoLnNpbihyb3RhdGUpLCBzY2FsZSAqIE1hdGguY29zKHJvdGF0ZSksIHRyYW5zbGF0ZVsxXV0sXG4gICAgICBbMCwgMCwgMV1cbiAgICBdXG4gIH1cbn1cblxuLyoqXG4gKiB0YWtlIG92ZXIgdGhlIHRvdWNoc3RhcnQgZXZlbnRzLiBBZGQgbmV3IHRvdWNoZXMgdG8gdGhlIGdlc3R1cmVzLlxuICogSWYgdGhlcmUgaXMgbm8gcHJldmlvdXMgcmVjb3JkcywgdGhlbiBiaW5kIHRvdWNobW92ZSwgdG9jaGVuZFxuICogYW5kIHRvdWNoY2FuY2VsIGV2ZW50cy5cbiAqIG5ldyB0b3VjaGVzIGluaXRpYWxpemVkIHdpdGggc3RhdGUgJ3RhcHBpbmcnLCBhbmQgd2l0aGluIDUwMCBtaWxsaXNlY29uZHNcbiAqIGlmIHRoZSBzdGF0ZSBpcyBzdGlsbCB0YXBwaW5nLCB0aGVuIHRyaWdnZXIgZ2VzdHVyZSAncHJlc3MnLlxuICogSWYgdGhlcmUgYXJlIHR3byB0b3VjaGUgcG9pbnRzLCB0aGVuIHRoZSAnZHVhbHRvdWNoc3RhcnQnIGlzIHRyaWdnZXJkLiBUaGVcbiAqIG5vZGUgb2YgdGhlIHRvdWNoIGdlc3R1cmUgaXMgdGhlaXIgY2xvZXN0IGNvbW1vbiBhbmNlc3Rvci5cbiAqXG4gKiBAZXZlbnRcbiAqIEBwYXJhbSAge2V2ZW50fSBldmVudFxuICovXG5mdW5jdGlvbiB0b3VjaHN0YXJ0SGFuZGxlcihldmVudCkge1xuXG4gIGlmIChPYmplY3Qua2V5cyhnZXN0dXJlcykubGVuZ3RoID09PSAwKSB7XG4gICAgZG9jRWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2htb3ZlSGFuZGxlciwgZmFsc2UpXG4gICAgZG9jRWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaGVuZEhhbmRsZXIsIGZhbHNlKVxuICAgIGRvY0VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hjYW5jZWxIYW5kbGVyLCBmYWxzZSlcbiAgfVxuXG4gIC8vIHJlY29yZCBldmVyeSB0b3VjaFxuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB2YXIgdG91Y2hSZWNvcmQgPSB7fVxuXG4gICAgZm9yICh2YXIgcCBpbiB0b3VjaCkge1xuICAgICAgdG91Y2hSZWNvcmRbcF0gPSB0b3VjaFtwXVxuICAgIH1cblxuICAgIHZhciBnZXN0dXJlID0ge1xuICAgICAgc3RhcnRUb3VjaDogdG91Y2hSZWNvcmQsXG4gICAgICBzdGFydFRpbWU6IERhdGUubm93KCksXG4gICAgICBzdGF0dXM6ICd0YXBwaW5nJyxcbiAgICAgIGVsZW1lbnQ6IGV2ZW50LnNyY0VsZW1lbnQgfHwgZXZlbnQudGFyZ2V0LFxuICAgICAgcHJlc3NpbmdIYW5kbGVyOiBzZXRUaW1lb3V0KGZ1bmN0aW9uIChlbGVtZW50LCB0b3VjaCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChnZXN0dXJlLnN0YXR1cyA9PT0gJ3RhcHBpbmcnKSB7XG4gICAgICAgICAgICBnZXN0dXJlLnN0YXR1cyA9ICdwcmVzc2luZydcblxuICAgICAgICAgICAgZmlyZUV2ZW50KGVsZW1lbnQsICdsb25ncHJlc3MnLCB7XG4gICAgICAgICAgICAgIC8vIGFkZCB0b3VjaCBkYXRhIGZvciB3ZWV4XG4gICAgICAgICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgICAgICAgdG91Y2hlczogZXZlbnQudG91Y2hlcyxcbiAgICAgICAgICAgICAgY2hhbmdlZFRvdWNoZXM6IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICAgICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjbGVhclRpbWVvdXQoZ2VzdHVyZS5wcmVzc2luZ0hhbmRsZXIpXG4gICAgICAgICAgZ2VzdHVyZS5wcmVzc2luZ0hhbmRsZXIgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH0oZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC50YXJnZXQsIGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldKSwgNTAwKVxuICAgIH1cbiAgICBnZXN0dXJlc1t0b3VjaC5pZGVudGlmaWVyXSA9IGdlc3R1cmVcbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhnZXN0dXJlcykubGVuZ3RoID09IDIpIHtcbiAgICB2YXIgZWxlbWVudHMgPSBbXVxuXG4gICAgZm9yICh2YXIgcCBpbiBnZXN0dXJlcykge1xuICAgICAgZWxlbWVudHMucHVzaChnZXN0dXJlc1twXS5lbGVtZW50KVxuICAgIH1cblxuICAgIGZpcmVFdmVudChnZXRDb21tb25BbmNlc3RvcihlbGVtZW50c1swXSwgZWxlbWVudHNbMV0pLCAnZHVhbHRvdWNoc3RhcnQnLCB7XG4gICAgICB0b3VjaGVzOiBzbGljZS5jYWxsKGV2ZW50LnRvdWNoZXMpLFxuICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogdGFrZSBvdmVyIHRvdWNobW92ZSBldmVudHMsIGFuZCBoYW5kbGUgcGFuIGFuZCBkdWFsIHJlbGF0ZWQgZ2VzdHVyZXMuXG4gKlxuICogMS4gdHJhdmVyc2UgZXZlcnkgdG91Y2ggcG9pbnTvvJpcbiAqID4gaWYgJ3RhcHBpbmcnIGFuZCB0aGUgc2hpZnQgaXMgb3ZlciAxMCBwaXhsZXMsIHRoZW4gaXQncyBhICdwYW5uaW5nJy5cbiAqIDIuIGlmIHRoZXJlIGFyZSB0d28gdG91Y2ggcG9pbnRzLCB0aGVuIGNhbGMgdGhlIHRyYW5mb3JtIGFuZCB0cmlnZ2VyXG4gKiAgICdkdWFsdG91Y2gnLlxuICpcbiAqIEBldmVudFxuICogQHBhcmFtICB7ZXZlbnR9IGV2ZW50XG4gKi9cbmZ1bmN0aW9uIHRvdWNobW92ZUhhbmRsZXIoZXZlbnQpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0b3VjaCA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzW2ldXG4gICAgdmFyIGdlc3R1cmUgPSBnZXN0dXJlc1t0b3VjaC5pZGVudGlmaWVyXVxuXG4gICAgaWYgKCFnZXN0dXJlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWdlc3R1cmUubGFzdFRvdWNoKSB7XG4gICAgICBnZXN0dXJlLmxhc3RUb3VjaCA9IGdlc3R1cmUuc3RhcnRUb3VjaFxuICAgIH1cbiAgICBpZiAoIWdlc3R1cmUubGFzdFRpbWUpIHtcbiAgICAgIGdlc3R1cmUubGFzdFRpbWUgPSBnZXN0dXJlLnN0YXJ0VGltZVxuICAgIH1cbiAgICBpZiAoIWdlc3R1cmUudmVsb2NpdHlYKSB7XG4gICAgICBnZXN0dXJlLnZlbG9jaXR5WCA9IDBcbiAgICB9XG4gICAgaWYgKCFnZXN0dXJlLnZlbG9jaXR5WSkge1xuICAgICAgZ2VzdHVyZS52ZWxvY2l0eVkgPSAwXG4gICAgfVxuICAgIGlmICghZ2VzdHVyZS5kdXJhdGlvbikge1xuICAgICAgZ2VzdHVyZS5kdXJhdGlvbiA9IDBcbiAgICB9XG5cbiAgICB2YXIgdGltZSA9ICBEYXRlLm5vdygpIC0gZ2VzdHVyZS5sYXN0VGltZVxuICAgIHZhciB2eCA9ICh0b3VjaC5jbGllbnRYIC0gZ2VzdHVyZS5sYXN0VG91Y2guY2xpZW50WCkgLyB0aW1lXG4gICAgdmFyIHZ5ID0gKHRvdWNoLmNsaWVudFkgLSBnZXN0dXJlLmxhc3RUb3VjaC5jbGllbnRZKSAvIHRpbWVcblxuICAgIHZhciBSRUNPUkRfRFVSQVRJT04gPSA3MFxuICAgIGlmICh0aW1lID4gUkVDT1JEX0RVUkFUSU9OKSB7XG4gICAgICB0aW1lID0gUkVDT1JEX0RVUkFUSU9OXG4gICAgfVxuICAgIGlmIChnZXN0dXJlLmR1cmF0aW9uICsgdGltZSA+IFJFQ09SRF9EVVJBVElPTikge1xuICAgICAgZ2VzdHVyZS5kdXJhdGlvbiA9IFJFQ09SRF9EVVJBVElPTiAtIHRpbWVcbiAgICB9XG5cbiAgICBnZXN0dXJlLnZlbG9jaXR5WCA9IChnZXN0dXJlLnZlbG9jaXR5WCAqIGdlc3R1cmUuZHVyYXRpb24gKyB2eCAqIHRpbWUpXG4gICAgICAvIChnZXN0dXJlLmR1cmF0aW9uICsgdGltZSlcbiAgICBnZXN0dXJlLnZlbG9jaXR5WSA9IChnZXN0dXJlLnZlbG9jaXR5WSAqIGdlc3R1cmUuZHVyYXRpb24gKyB2eSAqIHRpbWUpXG4gICAgICAvIChnZXN0dXJlLmR1cmF0aW9uICsgdGltZSlcbiAgICBnZXN0dXJlLmR1cmF0aW9uICs9IHRpbWVcblxuICAgIGdlc3R1cmUubGFzdFRvdWNoID0ge31cblxuICAgIGZvciAodmFyIHAgaW4gdG91Y2gpIHtcbiAgICAgIGdlc3R1cmUubGFzdFRvdWNoW3BdID0gdG91Y2hbcF1cbiAgICB9XG4gICAgZ2VzdHVyZS5sYXN0VGltZSA9IERhdGUubm93KClcblxuICAgIHZhciBkaXNwbGFjZW1lbnRYID0gdG91Y2guY2xpZW50WCAtIGdlc3R1cmUuc3RhcnRUb3VjaC5jbGllbnRYXG4gICAgdmFyIGRpc3BsYWNlbWVudFkgPSB0b3VjaC5jbGllbnRZIC0gZ2VzdHVyZS5zdGFydFRvdWNoLmNsaWVudFlcbiAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3coZGlzcGxhY2VtZW50WCwgMilcbiAgICAgICsgTWF0aC5wb3coZGlzcGxhY2VtZW50WSwgMikpXG4gICAgdmFyIGlzVmVydGljYWwgPSAhKE1hdGguYWJzKGRpc3BsYWNlbWVudFgpID4gTWF0aC5hYnMoZGlzcGxhY2VtZW50WSkpXG4gICAgdmFyIGRpcmVjdGlvbiA9IGlzVmVydGljYWxcbiAgICAgID8gZGlzcGxhY2VtZW50WSA+PSAwID8gJ2Rvd24nIDogJ3VwJ1xuICAgICAgOiBkaXNwbGFjZW1lbnRYID49IDAgPyAncmlnaHQnIDogJ2xlZnQnXG5cbiAgICAvLyBtYWdpYyBudW1iZXIgMTA6IG1vdmluZyAxMHB4IG1lYW5zIHBhbiwgbm90IHRhcFxuICAgIGlmICgoZ2VzdHVyZS5zdGF0dXMgPT09ICd0YXBwaW5nJyB8fCBnZXN0dXJlLnN0YXR1cyA9PT0gJ3ByZXNzaW5nJylcbiAgICAgICAgJiYgZGlzdGFuY2UgPiAxMCkge1xuICAgICAgZ2VzdHVyZS5zdGF0dXMgPSAncGFubmluZydcbiAgICAgIGdlc3R1cmUuaXNWZXJ0aWNhbCA9IGlzVmVydGljYWxcbiAgICAgIGdlc3R1cmUuZGlyZWN0aW9uID0gZGlyZWN0aW9uXG5cbiAgICAgIGZpcmVFdmVudChnZXN0dXJlLmVsZW1lbnQsICdwYW5zdGFydCcsIHtcbiAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICB0b3VjaGVzOiBldmVudC50b3VjaGVzLFxuICAgICAgICBjaGFuZ2VkVG91Y2hlczogZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50LFxuICAgICAgICBpc1ZlcnRpY2FsOiBnZXN0dXJlLmlzVmVydGljYWwsXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChnZXN0dXJlLnN0YXR1cyA9PT0gJ3Bhbm5pbmcnKSB7XG4gICAgICBnZXN0dXJlLnBhblRpbWUgPSBEYXRlLm5vdygpXG5cbiAgICAgIGZpcmVFdmVudChnZXN0dXJlLmVsZW1lbnQsICdwYW5tb3ZlJywge1xuICAgICAgICBkaXNwbGFjZW1lbnRYOiBkaXNwbGFjZW1lbnRYLFxuICAgICAgICBkaXNwbGFjZW1lbnRZOiBkaXNwbGFjZW1lbnRZLFxuICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgIHRvdWNoZXM6IGV2ZW50LnRvdWNoZXMsXG4gICAgICAgIGNoYW5nZWRUb3VjaGVzOiBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgdG91Y2hFdmVudDogZXZlbnQsXG4gICAgICAgIGlzVmVydGljYWw6IGdlc3R1cmUuaXNWZXJ0aWNhbCxcbiAgICAgICAgZGlyZWN0aW9uOiBkaXJlY3Rpb25cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGdlc3R1cmVzKS5sZW5ndGggPT0gMikge1xuICAgIHZhciBwb3NpdGlvbiA9IFtdXG4gICAgdmFyIGN1cnJlbnQgPSBbXVxuICAgIHZhciBlbGVtZW50cyA9IFtdXG4gICAgdmFyIHRyYW5zZm9ybVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudC50b3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG91Y2ggPSBldmVudC50b3VjaGVzW2ldXG4gICAgICB2YXIgZ2VzdHVyZSA9IGdlc3R1cmVzW3RvdWNoLmlkZW50aWZpZXJdXG4gICAgICBwb3NpdGlvbi5wdXNoKFtnZXN0dXJlLnN0YXJ0VG91Y2guY2xpZW50WCwgZ2VzdHVyZS5zdGFydFRvdWNoLmNsaWVudFldKVxuICAgICAgY3VycmVudC5wdXNoKFt0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZXSlcbiAgICB9XG5cbiAgICBmb3IgKHZhciBwIGluIGdlc3R1cmVzKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGdlc3R1cmVzW3BdLmVsZW1lbnQpXG4gICAgfVxuXG4gICAgdHJhbnNmb3JtID0gY2FsYyhcbiAgICAgIHBvc2l0aW9uWzBdWzBdLFxuICAgICAgcG9zaXRpb25bMF1bMV0sXG4gICAgICBwb3NpdGlvblsxXVswXSxcbiAgICAgIHBvc2l0aW9uWzFdWzFdLFxuICAgICAgY3VycmVudFswXVswXSxcbiAgICAgIGN1cnJlbnRbMF1bMV0sXG4gICAgICBjdXJyZW50WzFdWzBdLFxuICAgICAgY3VycmVudFsxXVsxXVxuICAgIClcbiAgICBmaXJlRXZlbnQoZ2V0Q29tbW9uQW5jZXN0b3IoZWxlbWVudHNbMF0sIGVsZW1lbnRzWzFdKSwgJ2R1YWx0b3VjaCcsIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgICAgdG91Y2hlczogZXZlbnQudG91Y2hlcyxcbiAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIGhhbmRsZSB0b3VjaGVuZCBldmVudFxuICpcbiAqIDEuIGlmIHRoZXJlIGFyZSB0b3cgdG91Y2ggcG9pbnRzLCB0aGVuIHRyaWdnZXIgJ2R1YWx0b3VjaGVuZCflpoJcbiAqXG4gKiAyLiB0cmF2ZXJzZSBldmVyeSB0b3VjaCBwaW9udO+8mlxuICogPiBpZiB0YXBwaW5nLCB0aGVuIHRyaWdnZXIgJ3RhcCcuXG4gKiBJZiB0aGVyZSBpcyBhIHRhcCAzMDAgbWlsbGlzZWNvbmRzIGJlZm9yZSwgdGhlbiBpdCdzIGEgJ2RvdWJsZXRhcCcuXG4gKiA+IGlmIHBhZGRpbmcsIHRoZW4gZGVjaWRlIHRvIHRyaWdnZXIgJ3BhbmVuZCcgb3IgJ3N3aXBlJ1xuICogPiBpZiBwcmVzc2luZywgdGhlbiB0cmlnZ2VyICdwcmVzc2VuZCcuXG4gKlxuICogMy4gcmVtb3ZlIGxpc3RlbmVycy5cbiAqXG4gKiBAZXZlbnRcbiAqIEBwYXJhbSAge2V2ZW50fSBldmVudFxuICovXG5mdW5jdGlvbiB0b3VjaGVuZEhhbmRsZXIoZXZlbnQpIHtcblxuICBpZiAoT2JqZWN0LmtleXMoZ2VzdHVyZXMpLmxlbmd0aCA9PSAyKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gW11cbiAgICBmb3IgKHZhciBwIGluIGdlc3R1cmVzKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGdlc3R1cmVzW3BdLmVsZW1lbnQpXG4gICAgfVxuICAgIGZpcmVFdmVudChnZXRDb21tb25BbmNlc3RvcihlbGVtZW50c1swXSwgZWxlbWVudHNbMV0pLCAnZHVhbHRvdWNoZW5kJywge1xuICAgICAgdG91Y2hlczogc2xpY2UuY2FsbChldmVudC50b3VjaGVzKSxcbiAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgfSlcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1tpXVxuICAgIHZhciBpZCA9IHRvdWNoLmlkZW50aWZpZXJcbiAgICB2YXIgZ2VzdHVyZSA9IGdlc3R1cmVzW2lkXVxuXG4gICAgaWYgKCFnZXN0dXJlKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmIChnZXN0dXJlLnByZXNzaW5nSGFuZGxlcikge1xuICAgICAgY2xlYXJUaW1lb3V0KGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyKVxuICAgICAgZ2VzdHVyZS5wcmVzc2luZ0hhbmRsZXIgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKGdlc3R1cmUuc3RhdHVzID09PSAndGFwcGluZycpIHtcbiAgICAgIGdlc3R1cmUudGltZXN0YW1wID0gRGF0ZS5ub3coKVxuICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3RhcCcsIHtcbiAgICAgICAgdG91Y2g6IHRvdWNoLFxuICAgICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgICAgfSlcblxuICAgICAgaWYgKGxhc3RUYXAgJiYgZ2VzdHVyZS50aW1lc3RhbXAgLSBsYXN0VGFwLnRpbWVzdGFtcCA8IDMwMCkge1xuICAgICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAnZG91YmxldGFwJywge1xuICAgICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBsYXN0VGFwID0gZ2VzdHVyZVxuICAgIH1cblxuICAgIGlmIChnZXN0dXJlLnN0YXR1cyA9PT0gJ3Bhbm5pbmcnKSB7XG4gICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKVxuICAgICAgdmFyIGR1cmF0aW9uID0gbm93IC0gZ2VzdHVyZS5zdGFydFRpbWVcbiAgICAgIHZhciBkaXNwbGFjZW1lbnRYID0gdG91Y2guY2xpZW50WCAtIGdlc3R1cmUuc3RhcnRUb3VjaC5jbGllbnRYXG4gICAgICB2YXIgZGlzcGxhY2VtZW50WSA9IHRvdWNoLmNsaWVudFkgLSBnZXN0dXJlLnN0YXJ0VG91Y2guY2xpZW50WVxuXG4gICAgICB2YXIgdmVsb2NpdHkgPSBNYXRoLnNxcnQoZ2VzdHVyZS52ZWxvY2l0eVkgKiBnZXN0dXJlLnZlbG9jaXR5WVxuICAgICAgICArIGdlc3R1cmUudmVsb2NpdHlYICogZ2VzdHVyZS52ZWxvY2l0eVgpXG4gICAgICB2YXIgaXNTd2lwZSA9IHZlbG9jaXR5ID4gMC41ICYmIChub3cgLSBnZXN0dXJlLmxhc3RUaW1lKSA8IDEwMFxuICAgICAgdmFyIGV4dHJhID0ge1xuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIGlzU3dpcGU6IGlzU3dpcGUsXG4gICAgICAgIHZlbG9jaXR5WDogZ2VzdHVyZS52ZWxvY2l0eVgsXG4gICAgICAgIHZlbG9jaXR5WTogZ2VzdHVyZS52ZWxvY2l0eVksXG4gICAgICAgIGRpc3BsYWNlbWVudFg6IGRpc3BsYWNlbWVudFgsXG4gICAgICAgIGRpc3BsYWNlbWVudFk6IGRpc3BsYWNlbWVudFksXG4gICAgICAgIHRvdWNoOiB0b3VjaCxcbiAgICAgICAgdG91Y2hlczogZXZlbnQudG91Y2hlcyxcbiAgICAgICAgY2hhbmdlZFRvdWNoZXM6IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICB0b3VjaEV2ZW50OiBldmVudCxcbiAgICAgICAgaXNWZXJ0aWNhbDogZ2VzdHVyZS5pc1ZlcnRpY2FsLFxuICAgICAgICBkaXJlY3Rpb246IGdlc3R1cmUuZGlyZWN0aW9uXG4gICAgICB9XG5cbiAgICAgIGZpcmVFdmVudChnZXN0dXJlLmVsZW1lbnQsICdwYW5lbmQnLCBleHRyYSlcbiAgICAgIGlmIChpc1N3aXBlKSB7XG4gICAgICAgIGZpcmVFdmVudChnZXN0dXJlLmVsZW1lbnQsICdzd2lwZScsIGV4dHJhKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChnZXN0dXJlLnN0YXR1cyA9PT0gJ3ByZXNzaW5nJykge1xuICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3ByZXNzZW5kJywge1xuICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgICB9KVxuICAgIH1cblxuICAgIGRlbGV0ZSBnZXN0dXJlc1tpZF1cbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhnZXN0dXJlcykubGVuZ3RoID09PSAwKSB7XG4gICAgZG9jRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdG91Y2htb3ZlSGFuZGxlciwgZmFsc2UpXG4gICAgZG9jRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0b3VjaGVuZEhhbmRsZXIsIGZhbHNlKVxuICAgIGRvY0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdG91Y2hjYW5jZWxIYW5kbGVyLCBmYWxzZSlcbiAgfVxufVxuXG4vKipcbiAqIGhhbmRsZSB0b3VjaGNhbmNlbFxuICpcbiAqIDEuIGlmIHRoZXJlIGFyZSB0d28gdG91Y2ggcG9pbnRzLCB0aGVuIHRyaWdnZXIgJ2R1YWx0b3VjaGVuZCdcbiAqXG4gKiAyLiB0cmF2ZXJzZSBldmVydHkgdG91Y2ggcG9pbnQ6XG4gKiA+IGlmIHBhbm5uaWcsIHRoZW4gdHJpZ2dlciAncGFuZW5kJ1xuICogPiBpZiBwcmVzc2luZywgdGhlbiB0cmlnZ2VyICdwcmVzc2VuZCdcbiAqXG4gKiAzLiByZW1vdmUgbGlzdGVuZXJzXG4gKlxuICogQGV2ZW50XG4gKiBAcGFyYW0gIHtldmVudH0gZXZlbnRcbiAqL1xuZnVuY3Rpb24gdG91Y2hjYW5jZWxIYW5kbGVyKGV2ZW50KSB7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGdlc3R1cmVzKS5sZW5ndGggPT0gMikge1xuICAgIHZhciBlbGVtZW50cyA9IFtdXG4gICAgZm9yICh2YXIgcCBpbiBnZXN0dXJlcykge1xuICAgICAgZWxlbWVudHMucHVzaChnZXN0dXJlc1twXS5lbGVtZW50KVxuICAgIH1cbiAgICBmaXJlRXZlbnQoZ2V0Q29tbW9uQW5jZXN0b3IoZWxlbWVudHNbMF0sIGVsZW1lbnRzWzFdKSwgJ2R1YWx0b3VjaGVuZCcsIHtcbiAgICAgIHRvdWNoZXM6IHNsaWNlLmNhbGwoZXZlbnQudG91Y2hlcyksXG4gICAgICB0b3VjaEV2ZW50OiBldmVudFxuICAgIH0pXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbaV1cbiAgICB2YXIgaWQgPSB0b3VjaC5pZGVudGlmaWVyXG4gICAgdmFyIGdlc3R1cmUgPSBnZXN0dXJlc1tpZF1cblxuICAgIGlmICghZ2VzdHVyZSkge1xuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpZiAoZ2VzdHVyZS5wcmVzc2luZ0hhbmRsZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChnZXN0dXJlLnByZXNzaW5nSGFuZGxlcilcbiAgICAgIGdlc3R1cmUucHJlc3NpbmdIYW5kbGVyID0gbnVsbFxuICAgIH1cblxuICAgIGlmIChnZXN0dXJlLnN0YXR1cyA9PT0gJ3Bhbm5pbmcnKSB7XG4gICAgICBmaXJlRXZlbnQoZ2VzdHVyZS5lbGVtZW50LCAncGFuZW5kJywge1xuICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgIHRvdWNoZXM6IGV2ZW50LnRvdWNoZXMsXG4gICAgICAgIGNoYW5nZWRUb3VjaGVzOiBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgdG91Y2hFdmVudDogZXZlbnRcbiAgICAgIH0pXG4gICAgfVxuICAgIGlmIChnZXN0dXJlLnN0YXR1cyA9PT0gJ3ByZXNzaW5nJykge1xuICAgICAgZmlyZUV2ZW50KGdlc3R1cmUuZWxlbWVudCwgJ3ByZXNzZW5kJywge1xuICAgICAgICB0b3VjaDogdG91Y2gsXG4gICAgICAgIHRvdWNoRXZlbnQ6IGV2ZW50XG4gICAgICB9KVxuICAgIH1cbiAgICBkZWxldGUgZ2VzdHVyZXNbaWRdXG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZ2VzdHVyZXMpLmxlbmd0aCA9PT0gMCkge1xuICAgIGRvY0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRvdWNobW92ZUhhbmRsZXIsIGZhbHNlKVxuICAgIGRvY0VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdG91Y2hlbmRIYW5kbGVyLCBmYWxzZSlcbiAgICBkb2NFbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRvdWNoY2FuY2VsSGFuZGxlciwgZmFsc2UpXG4gIH1cbn1cblxuaWYgKCFpc0luaXRpYWxpemVkKSB7XG4gIGRvY0VsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0b3VjaHN0YXJ0SGFuZGxlciwgZmFsc2UpXG4gIGlzSW5pdGlhbGl6ZWQgPSB0cnVlXG59XG5cbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8vIFByb2R1Y3Rpb24gc3RlcHMgb2YgRUNNQS0yNjIsIEVkaXRpb24gNiwgMjIuMS4yLjFcbi8vIFJlZmVyZW5jZTogaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWFycmF5LmZyb21cblxuLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5pZiAoIUFycmF5LmZyb20pIHtcbiAgQXJyYXkuZnJvbSA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICAgIHZhciBpc0NhbGxhYmxlID0gZnVuY3Rpb24oZm4pIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG4gICAgfTtcbiAgICB2YXIgdG9JbnRlZ2VyID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBudW1iZXIgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICBpZiAobnVtYmVyID09PSAwIHx8ICFpc0Zpbml0ZShudW1iZXIpKSB7XG4gICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gKG51bWJlciA+IDAgPyAxIDogLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhudW1iZXIpKTtcbiAgICB9O1xuICAgIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDE7XG4gICAgdmFyIHRvTGVuZ3RoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciBsZW4gPSB0b0ludGVnZXIodmFsdWUpO1xuICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGxlbiwgMCksIG1heFNhZmVJbnRlZ2VyKTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIGxlbmd0aCBwcm9wZXJ0eSBvZiB0aGUgZnJvbSBtZXRob2QgaXMgMS5cbiAgICByZXR1cm4gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwRm4sIHRoaXNBcmcgKi8pIHtcbiAgICAgIC8vIDEuIExldCBDIGJlIHRoZSB0aGlzIHZhbHVlLlxuICAgICAgdmFyIEMgPSB0aGlzO1xuXG4gICAgICAvLyAyLiBMZXQgaXRlbXMgYmUgVG9PYmplY3QoYXJyYXlMaWtlKS5cbiAgICAgIHZhciBpdGVtcyA9IE9iamVjdChhcnJheUxpa2UpO1xuXG4gICAgICAvLyAzLiBSZXR1cm5JZkFicnVwdChpdGVtcykuXG4gICAgICBpZiAoYXJyYXlMaWtlID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkuZnJvbSByZXF1aXJlcyBhbiBhcnJheS1saWtlIG9iamVjdCAtIG5vdCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyA0LiBJZiBtYXBmbiBpcyB1bmRlZmluZWQsIHRoZW4gbGV0IG1hcHBpbmcgYmUgZmFsc2UuXG4gICAgICB2YXIgbWFwRm4gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgdW5kZWZpbmVkO1xuICAgICAgdmFyIFQ7XG4gICAgICBpZiAodHlwZW9mIG1hcEZuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA1LiBlbHNlXG4gICAgICAgIC8vIDUuIGEgSWYgSXNDYWxsYWJsZShtYXBmbikgaXMgZmFsc2UsIHRocm93IGEgVHlwZUVycm9yIGV4Y2VwdGlvbi5cbiAgICAgICAgaWYgKCFpc0NhbGxhYmxlKG1hcEZuKSkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LmZyb206IHdoZW4gcHJvdmlkZWQsIHRoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyA1LiBiLiBJZiB0aGlzQXJnIHdhcyBzdXBwbGllZCwgbGV0IFQgYmUgdGhpc0FyZzsgZWxzZSBsZXQgVCBiZSB1bmRlZmluZWQuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xuICAgICAgICAgIFQgPSBhcmd1bWVudHNbMl07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gMTAuIExldCBsZW5WYWx1ZSBiZSBHZXQoaXRlbXMsIFwibGVuZ3RoXCIpLlxuICAgICAgLy8gMTEuIExldCBsZW4gYmUgVG9MZW5ndGgobGVuVmFsdWUpLlxuICAgICAgdmFyIGxlbiA9IHRvTGVuZ3RoKGl0ZW1zLmxlbmd0aCk7XG5cbiAgICAgIC8vIDEzLiBJZiBJc0NvbnN0cnVjdG9yKEMpIGlzIHRydWUsIHRoZW5cbiAgICAgIC8vIDEzLiBhLiBMZXQgQSBiZSB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgdGhlIFtbQ29uc3RydWN0XV0gaW50ZXJuYWwgbWV0aG9kIG9mIEMgd2l0aCBhbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmcgdGhlIHNpbmdsZSBpdGVtIGxlbi5cbiAgICAgIC8vIDE0LiBhLiBFbHNlLCBMZXQgQSBiZSBBcnJheUNyZWF0ZShsZW4pLlxuICAgICAgdmFyIEEgPSBpc0NhbGxhYmxlKEMpID8gT2JqZWN0KG5ldyBDKGxlbikpIDogbmV3IEFycmF5KGxlbik7XG5cbiAgICAgIC8vIDE2LiBMZXQgayBiZSAwLlxuICAgICAgdmFyIGsgPSAwO1xuICAgICAgLy8gMTcuIFJlcGVhdCwgd2hpbGUgayA8IGxlbuKApiAoYWxzbyBzdGVwcyBhIC0gaClcbiAgICAgIHZhciBrVmFsdWU7XG4gICAgICB3aGlsZSAoayA8IGxlbikge1xuICAgICAgICBrVmFsdWUgPSBpdGVtc1trXTtcbiAgICAgICAgaWYgKG1hcEZuKSB7XG4gICAgICAgICAgQVtrXSA9IHR5cGVvZiBUID09PSAndW5kZWZpbmVkJyA/IG1hcEZuKGtWYWx1ZSwgaykgOiBtYXBGbi5jYWxsKFQsIGtWYWx1ZSwgayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQVtrXSA9IGtWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBrICs9IDE7XG4gICAgICB9XG4gICAgICAvLyAxOC4gTGV0IHB1dFN0YXR1cyBiZSBQdXQoQSwgXCJsZW5ndGhcIiwgbGVuLCB0cnVlKS5cbiAgICAgIEEubGVuZ3RoID0gbGVuO1xuICAgICAgLy8gMjAuIFJldHVybiBBLlxuICAgICAgcmV0dXJuIEE7XG4gICAgfTtcbiAgfSgpKTtcbn1cbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKSB9KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vNTU5MzU1NFxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbmlmICghT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gIE9iamVjdC5zZXRQcm90b3R5cGVPZiA9IChmdW5jdGlvbihPYmplY3QsIG1hZ2ljKSB7XG4gICAgdmFyIHNldDtcbiAgICBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgc2V0LmNhbGwoTywgcHJvdG8pO1xuICAgICAgcmV0dXJuIE87XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyB0aGlzIHdvcmtzIGFscmVhZHkgaW4gRmlyZWZveCBhbmQgU2FmYXJpXG4gICAgICBzZXQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsIG1hZ2ljKS5zZXQ7XG4gICAgICBzZXQuY2FsbCh7fSwgbnVsbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKFxuICAgICAgICAvLyBJRSA8IDExIGNhbm5vdCBiZSBzaGltbWVkXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUgIT09IHt9W21hZ2ljXSB8fFxuICAgICAgICAvLyBuZWl0aGVyIGNhbiBhbnkgYnJvd3NlciB0aGF0IGFjdHVhbGx5XG4gICAgICAgIC8vIGltcGxlbWVudGVkIF9fcHJvdG9fXyBjb3JyZWN0bHlcbiAgICAgICAgLy8gKGFsbCBidXQgb2xkIFY4IHdpbGwgcmV0dXJuIGhlcmUpXG4gICAgICAgIHtfX3Byb3RvX186IG51bGx9Ll9fcHJvdG9fXyA9PT0gdm9pZCAwXG4gICAgICAgIC8vIHRoaXMgY2FzZSBtZWFucyBudWxsIG9iamVjdHMgY2Fubm90IGJlIHBhc3NlZFxuICAgICAgICAvLyB0aHJvdWdoIHNldFByb3RvdHlwZU9mIGluIGEgcmVsaWFibGUgd2F5XG4gICAgICAgIC8vIHdoaWNoIG1lYW5zIGhlcmUgYSAqKlNoYW0qKiBpcyBuZWVkZWQgaW5zdGVhZFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIG5vZGVqcyAwLjggYW5kIDAuMTAgYXJlIChidWdneSBhbmQuLikgZmluZSBoZXJlXG4gICAgICAvLyBwcm9iYWJseSBDaHJvbWUgb3Igc29tZSBvbGQgTW9iaWxlIHN0b2NrIGJyb3dzZXJcbiAgICAgIHNldCA9IGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgICAgIHRoaXNbbWFnaWNdID0gcHJvdG87XG4gICAgICB9O1xuICAgICAgLy8gcGxlYXNlIG5vdGUgdGhhdCB0aGlzIHdpbGwgKipub3QqKiB3b3JrXG4gICAgICAvLyBpbiB0aG9zZSBicm93c2VycyB0aGF0IGRvIG5vdCBpbmhlcml0XG4gICAgICAvLyBfX3Byb3RvX18gYnkgbWlzdGFrZSBmcm9tIE9iamVjdC5wcm90b3R5cGVcbiAgICAgIC8vIGluIHRoZXNlIGNhc2VzIHdlIHNob3VsZCBwcm9iYWJseSB0aHJvdyBhbiBlcnJvclxuICAgICAgLy8gb3IgYXQgbGVhc3QgYmUgaW5mb3JtZWQgYWJvdXQgdGhlIGlzc3VlXG4gICAgICBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9IHNldFByb3RvdHlwZU9mKFxuICAgICAgICBzZXRQcm90b3R5cGVPZih7fSwgbnVsbCksXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGVcbiAgICAgICkgaW5zdGFuY2VvZiBPYmplY3Q7XG4gICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PT0gdHJ1ZSBtZWFucyBpdCB3b3JrcyBhcyBtZWFudFxuICAgICAgLy8gc2V0UHJvdG90eXBlT2YucG9seWZpbGwgPT09IGZhbHNlIG1lYW5zIGl0J3Mgbm90IDEwMCUgcmVsaWFibGVcbiAgICAgIC8vIHNldFByb3RvdHlwZU9mLnBvbHlmaWxsID09PSB1bmRlZmluZWRcbiAgICAgIC8vIG9yXG4gICAgICAvLyBzZXRQcm90b3R5cGVPZi5wb2x5ZmlsbCA9PSAgbnVsbCBtZWFucyBpdCdzIG5vdCBhIHBvbHlmaWxsXG4gICAgICAvLyB3aGljaCBtZWFucyBpdCB3b3JrcyBhcyBleHBlY3RlZFxuICAgICAgLy8gd2UgY2FuIGV2ZW4gZGVsZXRlIE9iamVjdC5wcm90b3R5cGUuX19wcm90b19fO1xuICAgIH1cbiAgICByZXR1cm4gc2V0UHJvdG90eXBlT2Y7XG4gIH0oT2JqZWN0LCAnX19wcm90b19fJykpO1xufVxuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciB0ZXN0ID0ge307XG50ZXN0W3JlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmICh0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIFNhZmFyaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgfSBlbHNlIGlmIChPYnNlcnZlciAmJiAhKGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci5zdGFuZGFsb25lKSkge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlIHdpdGhvdXQgYW4gYXJndW1lbnQgdGhyb3dzIGFuIGVycm9yIGluIExHIFdlYk9TIDJcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWwubmF2aWdhdG9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50IHx8ICcnO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi9fdXNlci1hZ2VudCcpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4IHx8ICcnO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZVxuICAgICAgLy8gdjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9ODMwNTY1XG4gICAgICAvLyB3ZSBjYW4ndCBkZXRlY3QgaXQgc3luY2hyb25vdXNseSwgc28ganVzdCBjaGVjayB2ZXJzaW9uc1xuICAgICAgJiYgdjguaW5kZXhPZignNi42JykgIT09IDBcbiAgICAgICYmIHVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUvNjYnKSA9PT0gLTE7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsImNvbnN0IERFRkFVTFRfVklFV1BPUlRfV0lEVEggPSBwcm9jZXNzLmVudi5WSUVXUE9SVF9XSURUSFxuXG5mdW5jdGlvbiBwYXJzZVZpZXdwb3J0V2lkdGggKGNvbmZpZykge1xuICBsZXQgd2lkdGggPSBERUZBVUxUX1ZJRVdQT1JUX1dJRFRIXG4gIGlmIChjb25maWcgJiYgY29uZmlnLndpZHRoKSB7XG4gICAgd2lkdGggPSBOdW1iZXIoY29uZmlnLndpZHRoKSB8fCBjb25maWcud2lkdGhcbiAgfVxuICByZXR1cm4gd2lkdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFZpZXdwb3J0IChjb25maWcgPSB7fSkge1xuICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnRcblxuICBpZiAoZG9jKSB7XG4gICAgY29uc3Qgdmlld3BvcnRXaWR0aCA9IHBhcnNlVmlld3BvcnRXaWR0aChjb25maWcpXG5cbiAgICAvLyBzZXQgcm9vdCBmb250LXNpemVcbiAgICBkb2MuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gdmlld3BvcnRXaWR0aCAvIDEwICsgJ3B4J1xuXG4gICAgLyoqXG4gICAgICogd2h5IG5vdCB0byB1c2Ugd2luZG93LnNjcmVlbi53aWR0aCB0byBnZXQgc2NyZWVuV2lkdGggPyBCZWNhdXNlIGluIHNvbWVcbiAgICAgKiBvbGQgd2Via2l0IGJyb3dzZXIgb24gYW5kcm9pZCBzeXN0ZW0gaXQgZ2V0IHRoZSBkZXZpY2UgcGl4ZWwgd2lkdGgsIHdoaWNoXG4gICAgICogaXMgdGhlIHNjcmVlbldpZHRoIG11bHRpcGx5IGJ5IHRoZSBkZXZpY2UgcGl4ZWwgcmF0aW8uXG4gICAgICovXG4gICAgY29uc3Qgc2NyZWVuV2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICBjb25zdCBzY2FsZSA9IHNjcmVlbldpZHRoIC8gdmlld3BvcnRXaWR0aFxuICAgIGNvbnN0IGNvbnRlbnRzID0gW1xuICAgICAgYHdpZHRoPSR7dmlld3BvcnRXaWR0aH1gLFxuICAgICAgYGluaXRpYWwtc2NhbGU9JHtzY2FsZX1gLFxuICAgICAgYG1heGltdW0tc2NhbGU9JHtzY2FsZX1gLFxuICAgICAgYG1pbmltdW0tc2NhbGU9JHtzY2FsZX1gLFxuICAgICAgYHVzZXItc2NhbGFibGU9bm9gXG4gICAgXVxuXG4gICAgbGV0IG1ldGEgPSBkb2MucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidmlld3BvcnRcIl0nKVxuICAgIGlmICghbWV0YSkge1xuICAgICAgbWV0YSA9IGRvYy5jcmVhdGVFbGVtZW50KCdtZXRhJylcbiAgICAgIG1ldGEuc2V0QXR0cmlidXRlKCduYW1lJywgJ3ZpZXdwb3J0JylcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKS5hcHBlbmRDaGlsZChtZXRhKVxuICAgIH1cblxuICAgIG1ldGEuc2V0QXR0cmlidXRlKCdjb250ZW50JywgY29udGVudHMuam9pbignLCcpKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgZXZlbnQgPSB7XG4gIC8qKlxuICAgKiBvcGVuVXJsXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdXJsXG4gICAqL1xuICBvcGVuVVJMOiBmdW5jdGlvbiAodXJsKSB7XG4gICAgbG9jYXRpb24uaHJlZiA9IHVybFxuICB9XG5cbn1cblxuY29uc3QgbWV0YSA9IHtcbiAgZXZlbnQ6IFt7XG4gICAgbmFtZTogJ29wZW5VUkwnLFxuICAgIGFyZ3M6IFsnc3RyaW5nJ11cbiAgfV1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbiAoV2VleCkge1xuICAgIFdlZXgucmVnaXN0ZXJBcGlNb2R1bGUoJ2V2ZW50JywgZXZlbnQsIG1ldGEpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5jb25zdCBzdXBwb3J0R2VvbG9jYXRpb24gPSAnZ2VvbG9jYXRpb24nIGluIG5hdmlnYXRvclxuY29uc3QgZXJyb3JNc2cgPSBgW2g1LXJlbmRlcl06IGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGdlb2xvY2F0aW9uLmBcblxuY29uc3QgZ2VvbG9jYXRpb24gPSB7XG4gIC8vIG9wdGlvbnM6XG4gIC8vICAgLSBlbmFibGVIaWdoQWNjdXJhY3kgb3B0aW9uYWwsIHZhbHVlIGlzIHRydWUgb3IgZmFsc2UsIGZhbHNlIGJ5IGRlZmF1bHQuXG4gIC8vICAgLSB0aW1lb3V0IFtub25lLW5hdGl2ZV0gb3B0aW9uYWwsIHZhbHVlIGlzIGEgbnVtYmVyIChtaWxsaXNlY29uZHMpLCBkZWZhdWx0IHZhdWxlIGlzIEZJTkZJTklUWS5cbiAgLy8gICAtIG1heGltdW1BZ2UgW25vbmUtbmF0aXZlXSBvcHRpb25hbCwgdmFsdWUgaXMgYSBudW1iZXIgKG1pbGxpc2Vjb25kcyksIGRlZmF1bHQgdmFsdWUgaXMgMC5cbiAgZ2V0Q3VycmVudFBvc2l0aW9uIChzdWNjZXNzQ2JJZCwgZXJyb3JDYklkLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc3VjY2Vzc0NiID0gcG9zID0+IHRoaXMuc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhzdWNjZXNzQ2JJZCwgcG9zKVxuICAgIGNvbnN0IGVycm9yQ2IgPSBlcnIgPT4gdGhpcy5zZW5kZXIucGVyZm9ybUNhbGxiYWNrKGVycm9yQ2JJZCwgZXJyKVxuICAgIGlmIChzdXBwb3J0R2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc3VjY2Vzc0NiLCBlcnJvckNiLCBvcHRpb25zKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybihlcnJvck1zZylcbiAgICAgIGVycm9yQ2IobmV3IEVycm9yKGVycm9yTXNnKSlcbiAgICB9XG4gIH0sXG5cbiAgLy8gb3B0aW9uczogdGhlIHNhbWUgd2l0aCBgZ2V0Q3VycmVudFBvc2l0aW9uYC5cbiAgd2F0Y2hQb3NpdGlvbiAoc3VjY2Vzc0NiSWQsIGVycm9yQ2JJZCwgb3B0aW9ucykge1xuICAgIGNvbnN0IHN1Y2Nlc3NDYiA9IHBvcyA9PiB0aGlzLnNlbmRlci5wZXJmb3JtQ2FsbGJhY2soc3VjY2Vzc0NiSWQsIHBvcywgdHJ1ZSlcbiAgICBjb25zdCBlcnJvckNiID0gZXJyID0+IHRoaXMuc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhlcnJvckNiSWQsIGVycilcbiAgICBpZiAoc3VwcG9ydEdlb2xvY2F0aW9uKSB7XG4gICAgICBjb25zdCBpZCA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKHBvcyA9PiB7XG4gICAgICAgIHBvcy53YXRjaElkID0gaWRcbiAgICAgICAgc3VjY2Vzc0NiKHBvcylcbiAgICAgIH0sIGVycm9yQ2IsIG9wdGlvbnMpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKGVycm9yTXNnKVxuICAgICAgZXJyb3JDYihuZXcgRXJyb3IoZXJyb3JNc2cpKVxuICAgIH1cbiAgfSxcblxuICBjbGVhcldhdGNoICh3YXRjaElkKSB7XG4gICAgaWYgKHN1cHBvcnRHZW9sb2NhdGlvbikge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmNsZWFyV2F0Y2god2F0Y2hJZClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oZXJyb3JNc2cpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG1ldGEgPSB7XG4gIGdlb2xvY2F0aW9uOiBbe1xuICAgIG5hbWU6ICdnZXRDdXJyZW50UG9zaXRpb24nLFxuICAgIGFyZ3M6IFsnZnVuY3Rpb24nLCAnZnVuY3Rpb24nLCAnb2JqZWN0J11cbiAgfSwge1xuICAgIG5hbWU6ICd3YXRjaFBvc2l0aW9uJyxcbiAgICBhcmdzOiBbJ2Z1bmN0aW9uJywgJ2Z1bmN0aW9uJywgJ29iamVjdCddXG4gIH0sIHtcbiAgICBuYW1lOiAnY2xlYXJXYXRjaCcsXG4gICAgYXJnczogWydzdHJpbmcnXVxuICB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQgKFdlZXgpIHtcbiAgICBXZWV4LnJlZ2lzdGVyQXBpTW9kdWxlKCdnZW9sb2NhdGlvbicsIGdlb2xvY2F0aW9uLCBtZXRhKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuY29uc3QgcGFnZUluZm8gPSB7XG5cbiAgc2V0VGl0bGU6IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgIHRpdGxlID0gdGl0bGUgfHwgJ1dlZXggSFRNTDUnXG4gICAgdHJ5IHtcbiAgICAgIHRpdGxlID0gZGVjb2RlVVJJQ29tcG9uZW50KHRpdGxlKVxuICAgIH1cbiAgICBjYXRjaCAoZSkge31cbiAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlXG4gIH1cbn1cblxuY29uc3QgbWV0YSA9IHtcbiAgcGFnZUluZm86IFt7XG4gICAgbmFtZTogJ3NldFRpdGxlJyxcbiAgICBhcmdzOiBbJ3N0cmluZyddXG4gIH1dXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gKFdlZXgpIHtcbiAgICBXZWV4LnJlZ2lzdGVyQXBpTW9kdWxlKCdwYWdlSW5mbycsIHBhZ2VJbmZvLCBtZXRhKVxuICB9XG59XG4iLCIvKiBnbG9iYWwgbG9jYWxTdG9yYWdlICovXG4ndXNlIHN0cmljdCdcblxuY29uc3Qgc3VwcG9ydExvY2FsU3RvcmFnZSA9IHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnXG5jb25zdCBTVUNDRVNTID0gJ3N1Y2Nlc3MnXG5jb25zdCBGQUlMRUQgPSAnZmFpbGVkJ1xuY29uc3QgSU5WQUxJRF9QQVJBTSA9ICdpbnZhbGlkX3BhcmFtJ1xuY29uc3QgVU5ERUZJTkVEID0gJ3VuZGVmaW5lZCdcblxuY29uc3Qgc3RvcmFnZSA9IHtcblxuICAvKipcbiAgICogV2hlbiBwYXNzZWQgYSBrZXkgbmFtZSBhbmQgdmFsdWUsIHdpbGwgYWRkIHRoYXQga2V5IHRvIHRoZSBzdG9yYWdlLFxuICAgKiBvciB1cGRhdGUgdGhhdCBrZXkncyB2YWx1ZSBpZiBpdCBhbHJlYWR5IGV4aXN0cy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tJZFxuICAgKi9cbiAgc2V0SXRlbTogZnVuY3Rpb24gKGtleSwgdmFsdWUsIGNhbGxiYWNrSWQpIHtcbiAgICBpZiAoIXN1cHBvcnRMb2NhbFN0b3JhZ2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3lvdXIgYnJvd3NlciBpcyBub3Qgc3VwcG9ydCBsb2NhbFN0b3JhZ2UgeWV0LicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5zZW5kZXJcbiAgICBpZiAoIWtleSB8fCAhdmFsdWUpIHtcbiAgICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2tJZCwge1xuICAgICAgICByZXN1bHQ6ICdmYWlsZWQnLFxuICAgICAgICBkYXRhOiBJTlZBTElEX1BBUkFNXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKVxuICAgICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICAgIHJlc3VsdDogU1VDQ0VTUyxcbiAgICAgICAgZGF0YTogVU5ERUZJTkVEXG4gICAgICB9KVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgLy8gYWNjZXB0IGFueSBleGNlcHRpb24gdGhyb3duIGR1cmluZyBhIHN0b3JhZ2UgYXR0ZW1wdCBhcyBhIHF1b3RhIGVycm9yXG4gICAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHtcbiAgICAgICAgcmVzdWx0OiBGQUlMRUQsXG4gICAgICAgIGRhdGE6IFVOREVGSU5FRFxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZW4gcGFzc2VkIGEga2V5IG5hbWUsIHdpbGwgcmV0dXJuIHRoYXQga2V5J3MgdmFsdWUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tJZFxuICAgKi9cbiAgZ2V0SXRlbTogZnVuY3Rpb24gKGtleSwgY2FsbGJhY2tJZCkge1xuICAgIGlmICghc3VwcG9ydExvY2FsU3RvcmFnZSkge1xuICAgICAgY29uc29sZS5lcnJvcigneW91ciBicm93c2VyIGlzIG5vdCBzdXBwb3J0IGxvY2FsU3RvcmFnZSB5ZXQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBzZW5kZXIgPSB0aGlzLnNlbmRlclxuICAgIGlmICgha2V5KSB7XG4gICAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHtcbiAgICAgICAgcmVzdWx0OiBGQUlMRUQsXG4gICAgICAgIGRhdGE6IElOVkFMSURfUEFSQU1cbiAgICAgIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgdmFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxuICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2tJZCwge1xuICAgICAgcmVzdWx0OiB2YWwgPyBTVUNDRVNTIDogRkFJTEVELFxuICAgICAgZGF0YTogdmFsIHx8IFVOREVGSU5FRFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqV2hlbiBwYXNzZWQgYSBrZXkgbmFtZSwgd2lsbCByZW1vdmUgdGhhdCBrZXkgZnJvbSB0aGUgc3RvcmFnZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja0lkXG4gICAqL1xuICByZW1vdmVJdGVtOiBmdW5jdGlvbiAoa2V5LCBjYWxsYmFja0lkKSB7XG4gICAgaWYgKCFzdXBwb3J0TG9jYWxTdG9yYWdlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCd5b3VyIGJyb3dzZXIgaXMgbm90IHN1cHBvcnQgbG9jYWxTdG9yYWdlIHlldC4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHNlbmRlciA9IHRoaXMuc2VuZGVyXG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2tJZCwge1xuICAgICAgICByZXN1bHQ6IEZBSUxFRCxcbiAgICAgICAgZGF0YTogSU5WQUxJRF9QQVJBTVxuICAgICAgfSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpXG4gICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhjYWxsYmFja0lkLCB7XG4gICAgICByZXN1bHQ6IFNVQ0NFU1MsXG4gICAgICBkYXRhOiBVTkRFRklORURcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBudW1iZXIgb2YgZGF0YSBpdGVtcyBzdG9yZWQgaW4gdGhlIFN0b3JhZ2Ugb2JqZWN0LlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja0lkXG4gICAqL1xuICBsZW5ndGg6IGZ1bmN0aW9uIChjYWxsYmFja0lkKSB7XG4gICAgaWYgKCFzdXBwb3J0TG9jYWxTdG9yYWdlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCd5b3VyIGJyb3dzZXIgaXMgbm90IHN1cHBvcnQgbG9jYWxTdG9yYWdlIHlldC4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHNlbmRlciA9IHRoaXMuc2VuZGVyXG4gICAgY29uc3QgbGVuID0gbG9jYWxTdG9yYWdlLmxlbmd0aFxuICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2tJZCwge1xuICAgICAgcmVzdWx0OiBTVUNDRVNTLFxuICAgICAgZGF0YTogbGVuXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGFsbCBrZXlzIHN0b3JlZCBpbiBTdG9yYWdlIG9iamVjdC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tJZFxuICAgKi9cbiAgZ2V0QWxsS2V5czogZnVuY3Rpb24gKGNhbGxiYWNrSWQpIHtcbiAgICBpZiAoIXN1cHBvcnRMb2NhbFN0b3JhZ2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3lvdXIgYnJvd3NlciBpcyBub3Qgc3VwcG9ydCBsb2NhbFN0b3JhZ2UgeWV0LicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5zZW5kZXJcbiAgICBjb25zdCBfYXJyID0gW11cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgX2Fyci5wdXNoKGxvY2FsU3RvcmFnZS5rZXkoaSkpXG4gICAgfVxuICAgIHNlbmRlci5wZXJmb3JtQ2FsbGJhY2soY2FsbGJhY2tJZCwge1xuICAgICAgcmVzdWx0OiBTVUNDRVNTLFxuICAgICAgZGF0YTogX2FyclxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgbWV0YSA9IHtcbiAgc3RvcmFnZTogW3tcbiAgICBuYW1lOiAnc2V0SXRlbScsXG4gICAgYXJnczogWydzdHJpbmcnLCAnc3RyaW5nJywgJ2Z1bmN0aW9uJ11cbiAgfSwge1xuICAgIG5hbWU6ICdnZXRJdGVtJyxcbiAgICBhcmdzOiBbJ3N0cmluZycsICdmdW5jdGlvbiddXG4gIH0sIHtcbiAgICBuYW1lOiAncmVtb3ZlSXRlbScsXG4gICAgYXJnczogWydzdHJpbmcnLCAnZnVuY3Rpb24nXVxuICB9LCB7XG4gICAgbmFtZTogJ2xlbmd0aCcsXG4gICAgYXJnczogWydmdW5jdGlvbiddXG4gIH0sIHtcbiAgICBuYW1lOiAnZ2V0QWxsS2V5cycsXG4gICAgYXJnczogWydmdW5jdGlvbiddXG4gIH1dXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogZnVuY3Rpb24gKFdlZXgpIHtcbiAgICBXZWV4LnJlZ2lzdGVyQXBpTW9kdWxlKCdzdG9yYWdlJywgc3RvcmFnZSwgbWV0YSlcbiAgfVxufVxuIiwiKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSAmJiAod2luZG93ID0ge2N0cmw6IHt9LCBsaWI6IHt9fSk7IXdpbmRvdy5jdHJsICYmICh3aW5kb3cuY3RybCA9IHt9KTshd2luZG93LmxpYiAmJiAod2luZG93LmxpYiA9IHt9KTshZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEpe3ZhciBiPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicGFyYW1zXCIse3NldDpmdW5jdGlvbihhKXtpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7Zm9yKHZhciBjIGluIGIpZGVsZXRlIGJbY107Zm9yKHZhciBjIGluIGEpYltjXT1hW2NdfX0sZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGJ9LGVudW1lcmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInNlYXJjaFwiLHtzZXQ6ZnVuY3Rpb24oYSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEpezA9PT1hLmluZGV4T2YoXCI/XCIpJiYoYT1hLnN1YnN0cigxKSk7dmFyIGM9YS5zcGxpdChcIiZcIik7Zm9yKHZhciBkIGluIGIpZGVsZXRlIGJbZF07Zm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspe3ZhciBmPWNbZV0uc3BsaXQoXCI9XCIpO2lmKHZvaWQgMCE9PWZbMV0mJihmWzFdPWZbMV0udG9TdHJpbmcoKSksZlswXSl0cnl7YltkZWNvZGVVUklDb21wb25lbnQoZlswXSldPWRlY29kZVVSSUNvbXBvbmVudChmWzFdKX1jYXRjaChnKXtiW2ZbMF1dPWZbMV19fX19LGdldDpmdW5jdGlvbigpe3ZhciBhPVtdO2Zvcih2YXIgYyBpbiBiKWlmKHZvaWQgMCE9PWJbY10paWYoXCJcIiE9PWJbY10pdHJ5e2EucHVzaChlbmNvZGVVUklDb21wb25lbnQoYykrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGJbY10pKX1jYXRjaChkKXthLnB1c2goYytcIj1cIitiW2NdKX1lbHNlIHRyeXthLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGMpKX1jYXRjaChkKXthLnB1c2goYyl9cmV0dXJuIGEubGVuZ3RoP1wiP1wiK2Euam9pbihcIiZcIik6XCJcIn0sZW51bWVyYWJsZTohMH0pO3ZhciBjO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaGFzaFwiLHtzZXQ6ZnVuY3Rpb24oYSl7XCJzdHJpbmdcIj09dHlwZW9mIGEmJihhJiZhLmluZGV4T2YoXCIjXCIpPDAmJihhPVwiI1wiK2EpLGM9YXx8XCJcIil9LGdldDpmdW5jdGlvbigpe3JldHVybiBjfSxlbnVtZXJhYmxlOiEwfSksdGhpcy5zZXQ9ZnVuY3Rpb24oYSl7YT1hfHxcIlwiO3ZhciBiO2lmKCEoYj1hLm1hdGNoKG5ldyBSZWdFeHAoXCJeKFthLXowLTktXSs6KT9bL117Mn0oPzooW15ALzo/XSspKD86OihbXkAvOl0rKSk/QCk/KFteOi8/I10rKSg/Ols6XShbMC05XSspKT8oWy9dW14/IztdKik/KD86Wz9dKFteI10qKSk/KFsjXVteP10qKT8kXCIsXCJpXCIpKSkpdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgdXJpIHNjaGVtZS5cIik7dGhpcy5wcm90b2NvbD1iWzFdfHwoXCJvYmplY3RcIj09dHlwZW9mIGxvY2F0aW9uP2xvY2F0aW9uLnByb3RvY29sOlwiXCIpLHRoaXMudXNlcm5hbWU9YlsyXXx8XCJcIix0aGlzLnBhc3N3b3JkPWJbM118fFwiXCIsdGhpcy5ob3N0bmFtZT10aGlzLmhvc3Q9Yls0XSx0aGlzLnBvcnQ9Yls1XXx8XCJcIix0aGlzLnBhdGhuYW1lPWJbNl18fFwiL1wiLHRoaXMuc2VhcmNoPWJbN118fFwiXCIsdGhpcy5oYXNoPWJbOF18fFwiXCIsdGhpcy5vcmlnaW49dGhpcy5wcm90b2NvbCtcIi8vXCIrdGhpcy5ob3N0bmFtZX0sdGhpcy50b1N0cmluZz1mdW5jdGlvbigpe3ZhciBhPXRoaXMucHJvdG9jb2wrXCIvL1wiO3JldHVybiB0aGlzLnVzZXJuYW1lJiYoYSs9dGhpcy51c2VybmFtZSx0aGlzLnBhc3N3b3JkJiYoYSs9XCI6XCIrdGhpcy5wYXNzd29yZCksYSs9XCJAXCIpLGErPXRoaXMuaG9zdCx0aGlzLnBvcnQmJlwiODBcIiE9PXRoaXMucG9ydCYmKGErPVwiOlwiK3RoaXMucG9ydCksdGhpcy5wYXRobmFtZSYmKGErPXRoaXMucGF0aG5hbWUpLHRoaXMuc2VhcmNoJiYoYSs9dGhpcy5zZWFyY2gpLHRoaXMuaGFzaCYmKGErPXRoaXMuaGFzaCksYX0sYSYmdGhpcy5zZXQoYS50b1N0cmluZygpKX1iLmh0dHB1cmw9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBjKGEpfX0od2luZG93LHdpbmRvdy5saWJ8fCh3aW5kb3cubGliPXt9KSk7O21vZHVsZS5leHBvcnRzID0gd2luZG93LmxpYlsnaHR0cHVybCddOyIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdH0pO1xufTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3RyaWN0VXJpRW5jb2RlID0gcmVxdWlyZSgnc3RyaWN0LXVyaS1lbmNvZGUnKTtcbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbmZ1bmN0aW9uIGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRzKSB7XG5cdHN3aXRjaCAob3B0cy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgaW5kZXgpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBudWxsID8gW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCdbJyxcblx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHQnXSdcblx0XHRcdFx0XS5qb2luKCcnKSA6IFtcblx0XHRcdFx0XHRlbmNvZGUoa2V5LCBvcHRzKSxcblx0XHRcdFx0XHQnWycsXG5cdFx0XHRcdFx0ZW5jb2RlKGluZGV4LCBvcHRzKSxcblx0XHRcdFx0XHQnXT0nLFxuXHRcdFx0XHRcdGVuY29kZSh2YWx1ZSwgb3B0cylcblx0XHRcdFx0XS5qb2luKCcnKTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBlbmNvZGUoa2V5LCBvcHRzKSA6IFtcblx0XHRcdFx0XHRlbmNvZGUoa2V5LCBvcHRzKSxcblx0XHRcdFx0XHQnW109Jyxcblx0XHRcdFx0XHRlbmNvZGUodmFsdWUsIG9wdHMpXG5cdFx0XHRcdF0uam9pbignJyk7XG5cdFx0XHR9O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBlbmNvZGUoa2V5LCBvcHRzKSA6IFtcblx0XHRcdFx0XHRlbmNvZGUoa2V5LCBvcHRzKSxcblx0XHRcdFx0XHQnPScsXG5cdFx0XHRcdFx0ZW5jb2RlKHZhbHVlLCBvcHRzKVxuXHRcdFx0XHRdLmpvaW4oJycpO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBwYXJzZXJGb3JBcnJheUZvcm1hdChvcHRzKSB7XG5cdHZhciByZXN1bHQ7XG5cblx0c3dpdGNoIChvcHRzLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikge1xuXHRcdFx0XHRyZXN1bHQgPSAvXFxbKFxcZCopXFxdJC8uZXhlYyhrZXkpO1xuXG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXGQqXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHt9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XVtyZXN1bHRbMV1dID0gdmFsdWU7XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnYnJhY2tldCc6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSB7XG5cdFx0XHRcdHJlc3VsdCA9IC8oXFxbXFxdKSQvLmV4ZWMoa2V5KTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcXSQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbdmFsdWVdO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSB7XG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSwgb3B0cykge1xuXHRpZiAob3B0cy5lbmNvZGUpIHtcblx0XHRyZXR1cm4gb3B0cy5zdHJpY3QgPyBzdHJpY3RVcmlFbmNvZGUodmFsdWUpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24ga2V5c1NvcnRlcihpbnB1dCkge1xuXHRpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQuc29ydCgpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4ga2V5c1NvcnRlcihPYmplY3Qua2V5cyhpbnB1dCkpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRcdHJldHVybiBOdW1iZXIoYSkgLSBOdW1iZXIoYik7XG5cdFx0fSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBpbnB1dFtrZXldO1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5leHBvcnRzLmV4dHJhY3QgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBzdHIuc3BsaXQoJz8nKVsxXSB8fCAnJztcbn07XG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAoc3RyLCBvcHRzKSB7XG5cdG9wdHMgPSBvYmplY3RBc3NpZ24oe2FycmF5Rm9ybWF0OiAnbm9uZSd9LCBvcHRzKTtcblxuXHR2YXIgZm9ybWF0dGVyID0gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0cyk7XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIG5vIHByb3RvdHlwZVxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZy9pc3N1ZXMvNDdcblx0dmFyIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0aWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdHN0ciA9IHN0ci50cmltKCkucmVwbGFjZSgvXihcXD98I3wmKS8sICcnKTtcblxuXHRpZiAoIXN0cikge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRzdHIuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuXHRcdHZhciBwYXJ0cyA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpLnNwbGl0KCc9Jyk7XG5cdFx0Ly8gRmlyZWZveCAocHJlIDQwKSBkZWNvZGVzIGAlM0RgIHRvIGA9YFxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvcXVlcnktc3RyaW5nL3B1bGwvMzdcblx0XHR2YXIga2V5ID0gcGFydHMuc2hpZnQoKTtcblx0XHR2YXIgdmFsID0gcGFydHMubGVuZ3RoID4gMCA/IHBhcnRzLmpvaW4oJz0nKSA6IHVuZGVmaW5lZDtcblxuXHRcdC8vIG1pc3NpbmcgYD1gIHNob3VsZCBiZSBgbnVsbGA6XG5cdFx0Ly8gaHR0cDovL3czLm9yZy9UUi8yMDEyL1dELXVybC0yMDEyMDUyNC8jY29sbGVjdC11cmwtcGFyYW1ldGVyc1xuXHRcdHZhbCA9IHZhbCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGRlY29kZVVSSUNvbXBvbmVudCh2YWwpO1xuXG5cdFx0Zm9ybWF0dGVyKGRlY29kZVVSSUNvbXBvbmVudChrZXkpLCB2YWwsIHJldCk7XG5cdH0pO1xuXG5cdHJldHVybiBPYmplY3Qua2V5cyhyZXQpLnNvcnQoKS5yZWR1Y2UoZnVuY3Rpb24gKHJlc3VsdCwga2V5KSB7XG5cdFx0dmFyIHZhbCA9IHJldFtrZXldO1xuXHRcdGlmIChCb29sZWFuKHZhbCkgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0Ly8gU29ydCBvYmplY3Qga2V5cywgbm90IHZhbHVlc1xuXHRcdFx0cmVzdWx0W2tleV0gPSBrZXlzU29ydGVyKHZhbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdFtrZXldID0gdmFsO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH0sIE9iamVjdC5jcmVhdGUobnVsbCkpO1xufTtcblxuZXhwb3J0cy5zdHJpbmdpZnkgPSBmdW5jdGlvbiAob2JqLCBvcHRzKSB7XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0XHRlbmNvZGU6IHRydWUsXG5cdFx0c3RyaWN0OiB0cnVlLFxuXHRcdGFycmF5Rm9ybWF0OiAnbm9uZSdcblx0fTtcblxuXHRvcHRzID0gb2JqZWN0QXNzaWduKGRlZmF1bHRzLCBvcHRzKTtcblxuXHR2YXIgZm9ybWF0dGVyID0gZW5jb2RlckZvckFycmF5Rm9ybWF0KG9wdHMpO1xuXG5cdHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuXHRcdHZhciB2YWwgPSBvYmpba2V5XTtcblxuXHRcdGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGlmICh2YWwgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRzKTtcblx0XHR9XG5cblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gW107XG5cblx0XHRcdHZhbC5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKHZhbDIpIHtcblx0XHRcdFx0aWYgKHZhbDIgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGZvcm1hdHRlcihrZXksIHZhbDIsIHJlc3VsdC5sZW5ndGgpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oJyYnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0cykgKyAnPScgKyBlbmNvZGUodmFsLCBvcHRzKTtcblx0fSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHgubGVuZ3RoID4gMDtcblx0fSkuam9pbignJicpIDogJyc7XG59O1xuIiwiLyogZ2xvYmFsIGxpYiwgWE1MSHR0cFJlcXVlc3QgKi9cbi8qIGRlcHM6IGh0dHB1cmwgKi9cblxuJ3VzZSBzdHJpY3QnXG5cbmxldCB1dGlsc1xuXG5pbXBvcnQgJ2h0dHB1cmwnXG5pbXBvcnQgcXMgZnJvbSAncXVlcnktc3RyaW5nJ1xuXG5sZXQganNvbnBDbnQgPSAwXG5jb25zdCBFUlJPUl9TVEFURSA9IC0xXG5cbmZ1bmN0aW9uIF9qc29ucCAoY29uZmlnLCBjYWxsYmFjaywgcHJvZ3Jlc3NDYWxsYmFjaykge1xuICBjb25zdCBjYk5hbWUgPSAnanNvbnBfJyArICgrK2pzb25wQ250KVxuICBsZXQgdXJsXG5cbiAgaWYgKCFjb25maWcudXJsKSB7XG4gICAgY29uc29sZS5lcnJvcignW2g1LXJlbmRlcl0gY29uZmlnLnVybCBzaG91bGQgYmUgc2V0IGluIF9qc29ucCBmb3IgXFwnZmV0Y2hcXCcgQVBJLicpXG4gIH1cblxuICBnbG9iYWxbY2JOYW1lXSA9IChmdW5jdGlvbiAoY2IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICBjYWxsYmFjayh7XG4gICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICBvazogdHJ1ZSxcbiAgICAgICAgc3RhdHVzVGV4dDogJ09LJyxcbiAgICAgICAgZGF0YTogcmVzcG9uc2VcbiAgICAgIH0pXG4gICAgICBkZWxldGUgZ2xvYmFsW2NiXVxuICAgIH1cbiAgfSkoY2JOYW1lKVxuXG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gIHRyeSB7XG4gICAgdXJsID0gbGliLmh0dHB1cmwoY29uZmlnLnVybClcbiAgfVxuICBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcignW2g1LXJlbmRlcl0gaW52YWxpZCBjb25maWcudXJsIGluIF9qc29ucCBmb3IgXFwnZmV0Y2hcXCcgQVBJOiAnXG4gICAgICArIGNvbmZpZy51cmwpXG4gIH1cbiAgdXJsLnBhcmFtcy5jYWxsYmFjayA9IGNiTmFtZVxuICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnXG4gIHNjcmlwdC5zcmMgPSB1cmwudG9TdHJpbmcoKVxuICAvLyBzY3JpcHQub25lcnJvciBpcyBub3Qgd29ya2luZyBvbiBJRSBvciBzYWZhcmkuXG4gIC8vIGJ1dCB0aGV5IGFyZSBub3QgY29uc2lkZXJlZCBoZXJlLlxuICBzY3JpcHQub25lcnJvciA9IChmdW5jdGlvbiAoY2IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignW2g1LXJlbmRlcl0gdW5leHBlY3RlZCBlcnJvciBpbiBfanNvbnAgZm9yIFxcJ2ZldGNoXFwnIEFQSScsIGVycilcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgc3RhdHVzOiBFUlJPUl9TVEFURSxcbiAgICAgICAgb2s6IGZhbHNlLFxuICAgICAgICBzdGF0dXNUZXh0OiAnJyxcbiAgICAgICAgZGF0YTogJydcbiAgICAgIH0pXG4gICAgICBkZWxldGUgZ2xvYmFsW2NiXVxuICAgIH1cbiAgfSkoY2JOYW1lKVxuICBjb25zdCBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXVxuICBoZWFkLmluc2VydEJlZm9yZShzY3JpcHQsIG51bGwpXG59XG5cbmZ1bmN0aW9uIF94aHIgKGNvbmZpZywgY2FsbGJhY2ssIHByb2dyZXNzQ2FsbGJhY2spIHtcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgeGhyLnJlc3BvbnNlVHlwZSA9IGNvbmZpZy50eXBlXG4gIHhoci5vcGVuKGNvbmZpZy5tZXRob2QsIGNvbmZpZy51cmwsIHRydWUpXG5cbiAgLy8gY29ycyBjb29raWUgc3VwcG9ydFxuICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscyA9PT0gdHJ1ZSkge1xuICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG4gIH1cblxuICBjb25zdCBoZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge31cbiAgZm9yIChjb25zdCBrIGluIGhlYWRlcnMpIHtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrLCBoZWFkZXJzW2tdKVxuICB9XG5cbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgICBjYWxsYmFjayh7XG4gICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICBvazogeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCxcbiAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgZGF0YTogeGhyLnJlc3BvbnNlLFxuICAgICAgaGVhZGVyczogeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpLnNwbGl0KCdcXG4nKVxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIChvYmosIGhlYWRlclN0cikge1xuICAgICAgICAgIGNvbnN0IGhlYWRlckFyciA9IGhlYWRlclN0ci5tYXRjaCgvKC4rKTogKC4rKS8pXG4gICAgICAgICAgaWYgKGhlYWRlckFycikge1xuICAgICAgICAgICAgb2JqW2hlYWRlckFyclsxXV0gPSBoZWFkZXJBcnJbMl1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG9ialxuICAgICAgICB9LCB7fSlcbiAgICB9KVxuICB9XG5cbiAgaWYgKHByb2dyZXNzQ2FsbGJhY2spIHtcbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBwcm9ncmVzc0NhbGxiYWNrKHtcbiAgICAgICAgcmVhZHlTdGF0ZTogeGhyLnJlYWR5U3RhdGUsXG4gICAgICAgIHN0YXR1czogeGhyLnN0YXR1cyxcbiAgICAgICAgbGVuZ3RoOiBlLmxvYWRlZCxcbiAgICAgICAgdG90YWw6IGUudG90YWwsXG4gICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAob2JqLCBoZWFkZXJTdHIpIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckFyciA9IGhlYWRlclN0ci5tYXRjaCgvKC4rKTogKC4rKS8pXG4gICAgICAgICAgICBpZiAoaGVhZGVyQXJyKSB7XG4gICAgICAgICAgICAgIG9ialtoZWFkZXJBcnJbMV1dID0gaGVhZGVyQXJyWzJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqXG4gICAgICAgICAgfSwge30pXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIHVuZXhwZWN0ZWQgZXJyb3IgaW4gX3hociBmb3IgXFwnZmV0Y2hcXCcgQVBJJywgZXJyKVxuICAgIGNhbGxiYWNrKHtcbiAgICAgIHN0YXR1czogRVJST1JfU1RBVEUsXG4gICAgICBvazogZmFsc2UsXG4gICAgICBzdGF0dXNUZXh0OiAnJyxcbiAgICAgIGRhdGE6ICcnXG4gICAgfSlcbiAgfVxuXG4gIHhoci5zZW5kKGNvbmZpZy5ib2R5KVxufVxuXG5jb25zdCBzdHJlYW0gPSB7XG5cbiAgLyoqXG4gICAqIHNlbmRIdHRwXG4gICAqIEBkZXByZWNhdGVkXG4gICAqIE5vdGU6IFRoaXMgQVBJIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2Ugc3RyZWFtLmZldGNoIGluc3RlYWQuXG4gICAqIHNlbmQgYSBodHRwIHJlcXVlc3QgdGhyb3VnaCBYSFIuXG4gICAqIEBwYXJhbSAge29ian0gcGFyYW1zXG4gICAqICAtIG1ldGhvZDogJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdERUxFVEUnIHwgJ0hFQUQnIHwgJ1BBVENIJyxcbiAgICogIC0gdXJsOiB1cmwgcmVxdWVzdGVkXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY2FsbGJhY2tJZFxuICAgKi9cbiAgc2VuZEh0dHA6IGZ1bmN0aW9uIChwYXJhbSwgY2FsbGJhY2tJZCkge1xuICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJhbSA9IEpTT04ucGFyc2UocGFyYW0pXG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGVvZiBwYXJhbSAhPT0gJ29iamVjdCcgfHwgIXBhcmFtLnVybCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdbaDUtcmVuZGVyXSBpbnZhbGlkIGNvbmZpZyBvciBpbnZhbGlkIGNvbmZpZy51cmwgZm9yIHNlbmRIdHRwIEFQSScpXG4gICAgfVxuXG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5zZW5kZXJcbiAgICBjb25zdCBtZXRob2QgPSBwYXJhbS5tZXRob2QgfHwgJ0dFVCdcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuICAgIHhoci5vcGVuKG1ldGhvZCwgcGFyYW0udXJsLCB0cnVlKVxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHRoaXMucmVzcG9uc2VUZXh0KVxuICAgIH1cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIHVuZXhwZWN0ZWQgZXJyb3IgaW4gc2VuZEh0dHAgQVBJJywgZXJyb3IpXG4gICAgICAvLyBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKFxuICAgICAgLy8gICBjYWxsYmFja0lkLFxuICAgICAgLy8gICBuZXcgRXJyb3IoJ3VuZXhwZWN0ZWQgZXJyb3IgaW4gc2VuZEh0dHAgQVBJJylcbiAgICAgIC8vIClcbiAgICB9XG4gICAgeGhyLnNlbmQoKVxuICB9LFxuXG4gIC8qKlxuICAgKiBmZXRjaFxuICAgKiB1c2Ugc3RyZWFtLmZldGNoIHRvIHJlcXVlc3QgZm9yIGEganNvbiBmaWxlLCBhIHBsYWluIHRleHQgZmlsZSBvclxuICAgKiBhIGFycmF5YnVmZmVyIGZvciBhIGZpbGUgc3RyZWFtLiAoWW91IGNhbiB1c2UgQmxvYiBhbmQgRmlsZVJlYWRlclxuICAgKiBBUEkgaW1wbGVtZW50ZWQgYnkgbW9zdCBtb2Rlcm4gYnJvd3NlcnMgdG8gcmVhZCBhIGFycmF5YnVmZmVyLilcbiAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIGNvbmZpZyBvcHRpb25zXG4gICAqICAgLSBtZXRob2Q6ICdHRVQnIHwgJ1BPU1QnIHwgJ1BVVCcgfCAnREVMRVRFJyB8ICdIRUFEJyB8ICdQQVRDSCdcbiAgICogICAtIGhlYWRlcnMge29ian1cbiAgICogICAtIHVybCB7c3RyaW5nfVxuICAgKiAgIC0gbW9kZSB7c3RyaW5nfSAnY29ycycgfCAnbm8tY29ycycgfCAnc2FtZS1vcmlnaW4nIHwgJ25hdmlnYXRlJ1xuICAgKiAgIC0gd2l0aENyZWRlbnRpYWxzIHtib29sZWFufVxuICAgKiAgIC0gYm9keVxuICAgKiAgIC0gdHlwZSB7c3RyaW5nfSAnanNvbicgfCAnanNvbnAnIHwgJ3RleHQnXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY2FsbGJhY2tJZFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHByb2dyZXNzQ2FsbGJhY2tJZFxuICAgKi9cbiAgZmV0Y2g6IGZ1bmN0aW9uIChvcHRpb25zLCBjYWxsYmFja0lkLCBwcm9ncmVzc0NhbGxiYWNrSWQpIHtcbiAgICBjb25zdCBERUZBVUxUX01FVEhPRCA9ICdHRVQnXG4gICAgY29uc3QgREVGQVVMVF9NT0RFID0gJ2NvcnMnXG4gICAgY29uc3QgREVGQVVMVF9UWVBFID0gJ3RleHQnXG5cbiAgICBjb25zdCBtZXRob2RPcHRpb25zID0gWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnREVMRVRFJywgJ0hFQUQnLCAnUEFUQ0gnXVxuICAgIGNvbnN0IG1vZGVPcHRpb25zID0gWydjb3JzJywgJ25vLWNvcnMnLCAnc2FtZS1vcmlnaW4nLCAnbmF2aWdhdGUnXVxuICAgIGNvbnN0IHR5cGVPcHRpb25zID0gWyd0ZXh0JywgJ2pzb24nLCAnanNvbnAnLCAnYXJyYXlidWZmZXInXVxuXG4gICAgLy8gY29uc3QgZmFsbGJhY2sgPSBmYWxzZSAgLy8gZmFsbGJhY2sgZnJvbSAnZmV0Y2gnIEFQSSB0byBYSFIuXG4gICAgY29uc3Qgc2VuZGVyID0gdGhpcy5zZW5kZXJcblxuICAgIGNvbnN0IGNvbmZpZyA9IHV0aWxzLmV4dGVuZCh7fSwgb3B0aW9ucylcblxuICAgIC8vIHZhbGlkYXRlIG9wdGlvbnMubWV0aG9kXG4gICAgaWYgKHR5cGVvZiBjb25maWcubWV0aG9kID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnLm1ldGhvZCA9IERFRkFVTFRfTUVUSE9EXG4gICAgICBjb25zb2xlLndhcm4oJ1toNS1yZW5kZXJdIG9wdGlvbnMubWV0aG9kIGZvciBcXCdmZXRjaFxcJyBBUEkgaGFzIGJlZW4gc2V0IHRvICdcbiAgICAgICAgKyAnZGVmYXVsdCB2YWx1ZSBcXCcnICsgY29uZmlnLm1ldGhvZCArICdcXCcnKVxuICAgIH1cbiAgICBlbHNlIGlmIChtZXRob2RPcHRpb25zLmluZGV4T2YoKGNvbmZpZy5tZXRob2QgKyAnJylcbiAgICAgICAgLnRvVXBwZXJDYXNlKCkpID09PSAtMSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIG9wdGlvbnMubWV0aG9kIFxcJydcbiAgICAgICAgKyBjb25maWcubWV0aG9kXG4gICAgICAgICsgJ1xcJyBmb3IgXFwnZmV0Y2hcXCcgQVBJIHNob3VsZCBiZSBvbmUgb2YgJ1xuICAgICAgICArIG1ldGhvZE9wdGlvbnMgKyAnLicpXG4gICAgfVxuXG4gICAgLy8gdmFsaWRhdGUgb3B0aW9ucy51cmxcbiAgICBpZiAoIWNvbmZpZy51cmwpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdbaDUtcmVuZGVyXSBvcHRpb25zLnVybCBzaG91bGQgYmUgc2V0IGZvciBcXCdmZXRjaFxcJyBBUEkuJylcbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0ZSBib2R5IGNvbnRlbnQgZm9yIG1ldGhvZCAnR0VUJy5cbiAgICBpZiAoY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSAnR0VUJykge1xuICAgICAgbGV0IGJvZHkgPSBjb25maWcuYm9keVxuICAgICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QoYm9keSkpIHtcbiAgICAgICAgYm9keSA9IHFzLnN0cmluZ2lmeShib2R5KVxuICAgICAgfVxuICAgICAgbGV0IHVybCA9IGNvbmZpZy51cmxcbiAgICAgIGxldCBoYXNoSWR4ID0gdXJsLmluZGV4T2YoJyMnKVxuICAgICAgaGFzaElkeCA8PSAtMSAmJiAoaGFzaElkeCA9IHVybC5sZW5ndGgpXG4gICAgICBsZXQgaGFzaCA9IHVybC5zdWJzdHIoaGFzaElkeClcbiAgICAgIGhhc2ggJiYgKGhhc2ggPSAnIycgKyBoYXNoKVxuICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygwLCBoYXNoSWR4KVxuICAgICAgdXJsICs9IChjb25maWcudXJsLmluZGV4T2YoJz8nKSA8PSAtMSA/ICc/JyA6ICcmJykgKyBib2R5ICsgaGFzaFxuICAgICAgY29uZmlnLnVybCA9IHVybFxuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlIG9wdGlvbnMubW9kZVxuICAgIGlmICh0eXBlb2YgY29uZmlnLm1vZGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcubW9kZSA9IERFRkFVTFRfTU9ERVxuICAgIH1cbiAgICBlbHNlIGlmIChtb2RlT3B0aW9ucy5pbmRleE9mKChjb25maWcubW9kZSArICcnKS50b0xvd2VyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKCdbaDUtcmVuZGVyXSBvcHRpb25zLm1vZGUgXFwnJ1xuICAgICAgICArIGNvbmZpZy5tb2RlXG4gICAgICAgICsgJ1xcJyBmb3IgXFwnZmV0Y2hcXCcgQVBJIHNob3VsZCBiZSBvbmUgb2YgJ1xuICAgICAgICArIG1vZGVPcHRpb25zICsgJy4nKVxuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlIG9wdGlvbnMudHlwZVxuICAgIGlmICh0eXBlb2YgY29uZmlnLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWcudHlwZSA9IERFRkFVTFRfVFlQRVxuICAgICAgY29uc29sZS53YXJuKCdbaDUtcmVuZGVyXSBvcHRpb25zLnR5cGUgZm9yIFxcJ2ZldGNoXFwnIEFQSSBoYXMgYmVlbiBzZXQgdG8gJ1xuICAgICAgICArICdkZWZhdWx0IHZhbHVlIFxcJycgKyBjb25maWcudHlwZSArICdcXCcuJylcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZU9wdGlvbnMuaW5kZXhPZigoY29uZmlnLnR5cGUgKyAnJykudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5lcnJvcignW2g1LXJlbmRlcl0gb3B0aW9ucy50eXBlIFxcJydcbiAgICAgICAgICArIGNvbmZpZy50eXBlXG4gICAgICAgICAgKyAnXFwnIGZvciBcXCdmZXRjaFxcJyBBUEkgc2hvdWxkIGJlIG9uZSBvZiAnXG4gICAgICAgICAgKyB0eXBlT3B0aW9ucyArICcuJylcbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0ZSBvcHRpb25zLmhlYWRlcnNcbiAgICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICAgaWYgKCF1dGlscy5pc1BsYWluT2JqZWN0KGNvbmZpZy5oZWFkZXJzKSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1toNS1yZW5kZXJdIG9wdGlvbnMuaGVhZGVycyBzaG91bGQgYmUgYSBwbGFpbiBvYmplY3QnKVxuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlIG9wdGlvbnMudGltZW91dFxuICAgIGNvbmZpZy50aW1lb3V0ID0gcGFyc2VJbnQoY29uZmlnLnRpbWVvdXQsIDEwKSB8fCAyNTAwXG5cbiAgICBjb25zdCBfY2FsbEFyZ3MgPSBbY29uZmlnLCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICBzZW5kZXIucGVyZm9ybUNhbGxiYWNrKGNhbGxiYWNrSWQsIHJlcylcbiAgICB9XVxuICAgIGlmIChwcm9ncmVzc0NhbGxiYWNrSWQpIHtcbiAgICAgIF9jYWxsQXJncy5wdXNoKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgLy8gU2V0ICdrZWVwQWxpdmUnIHRvIHRydWUgZm9yIHNlbmRpbmcgY29udGludW91cyBjYWxsYmFja3NcbiAgICAgICAgc2VuZGVyLnBlcmZvcm1DYWxsYmFjayhwcm9ncmVzc0NhbGxiYWNrSWQsIHJlcywgdHJ1ZSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAnanNvbnAnKSB7XG4gICAgICBfanNvbnAuYXBwbHkodGhpcywgX2NhbGxBcmdzKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIF94aHIuYXBwbHkodGhpcywgX2NhbGxBcmdzKVxuICAgIH1cbiAgfVxuXG59XG5cbmNvbnN0IG1ldGEgPSB7XG4gIHN0cmVhbTogW3tcbiAgICBuYW1lOiAnc2VuZEh0dHAnLFxuICAgIGFyZ3M6IFsnb2JqZWN0JywgJ2Z1bmN0aW9uJ11cbiAgfSwge1xuICAgIG5hbWU6ICdmZXRjaCcsXG4gICAgYXJnczogWydvYmplY3QnLCAnZnVuY3Rpb24nLCAnZnVuY3Rpb24nXVxuICB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uIChXZWV4KSB7XG4gICAgdXRpbHMgPSBXZWV4LnV0aWxzXG4gICAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgnc3RyZWFtJywgc3RyZWFtLCBtZXRhKVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuLyoqXG5cbkFVQ1RJT046XG50YXNrUXVldWVcbkNsaXBib2FyZC5zZXRTdHJpbmcoKSAgTk9XIG5vdCB3b3JrcywgZmFjaW5nIHRvIHVzZXItYWN0IGxvc2Ugb2YgdGFza1F1ZXVlLlxuXG53b3JrcyBpbiBDaHJvbWUgRmlyZWZveCBPcGVyYS4gYnV0IG5vdCBpbiBTYWZhcmkuXG5Ac2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9leGVjQ29tbWFuZCNCcm93c2VyX2NvbXBhdGliaWxpdHlcblxuQ2xpcGJvYXJkLmdldFN0cmluZygpIHVuaW1wbGVtZW50ZWQuIFRoZXJlIGlzIG5vIGVhc3kgd2F5IHRvIGRvIHBhc3RlIGZyb20gY2xpcGJvYXJkIHRvIGpzIHZhcmlhYmxlLlxuXG5TbyBsb29rIG91dCB5b3VyIGFwcCBiZWhhdmlvciwgd2hlbiBkb3duZ3JhZGUgdG8gaHRtbDUgcmVuZGVyLlxuQW55IGlkZWEgaXMgd2VsY29tZS5cbioqL1xuXG5jb25zdCBXRUVYX0NMSVBCT0FSRF9JRCA9ICdfX3dlZXhfY2xpcGJvYXJkX2lkX18nXG5cbmNvbnN0IGNsaXBib2FyZCA9IHtcblxuICBnZXRTdHJpbmc6IGZ1bmN0aW9uIChjYWxsYmFja0lkKSB7XG4gICAgLy8gbm90IHN1cHBvcnRlZCBpbiBodG1sNVxuICAgIGNvbnNvbGUubG9nKCdjbGlwYm9hcmQuZ2V0U3RyaW5nKCkgaXMgbm90IHN1cHBvcnRlZCBub3cuJylcbiAgfSxcblxuICBzZXRTdHJpbmc6IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgLy8gbm90IHN1cHBvcnQgc2FmYXJpXG4gICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnc3RyaW5nJyAmJiB0ZXh0ICE9PSAnJyAmJiBkb2N1bWVudC5leGVjQ29tbWFuZCkge1xuICAgICAgY29uc3QgdGVtcElucHV0ID0gZWxlbWVudCgpXG4gICAgICB0ZW1wSW5wdXQudmFsdWUgPSB0ZXh0XG5cbiAgICAgIHRlbXBJbnB1dC5zZWxlY3QoKVxuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxuICAgICAgLy8gdmFyIG91dCA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImV4ZWNDb21tYW5kIG91dCBpcyBcIiArIG91dCk7XG4gICAgICB0ZW1wSW5wdXQudmFsdWUgPSAnJ1xuICAgICAgdGVtcElucHV0LmJsdXIoKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdvbmx5IHN1cHBvcnQgc3RyaW5nIGlucHV0IG5vdycpXG4gICAgfVxuICB9XG5cbn1cblxuZnVuY3Rpb24gZWxlbWVudCAoKSB7XG4gIGxldCB0ZW1wSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChXRUVYX0NMSVBCT0FSRF9JRClcbiAgaWYgKCF0ZW1wSW5wdXQpIHtcbiAgICB0ZW1wSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdGVtcElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBXRUVYX0NMSVBCT0FSRF9JRClcbiAgICB0ZW1wSW5wdXQuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6MXB4O3dpZHRoOjFweDtib3JkZXI6bm9uZTsnXG4gICAgLy8gdGVtcElucHV0LnN0eWxlLmNzc1RleHQgPSBcImhlaWdodDo0MHB4O3dpZHRoOjMwMHB4O2JvcmRlcjpzb2xpZDtcIlxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcElucHV0KVxuICB9XG4gIHJldHVybiB0ZW1wSW5wdXRcbn1cblxuY29uc3QgbWV0YSA9IHtcbiAgY2xpcGJvYXJkOiBbe1xuICAgIG5hbWU6ICdnZXRTdHJpbmcnLFxuICAgIGFyZ3M6IFsnZnVuY3Rpb24nXVxuICB9LCB7XG4gICAgbmFtZTogJ3NldFN0cmluZycsXG4gICAgYXJnczogWydzdHJpbmcnXVxuICB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uIChXZWV4KSB7XG4gICAgV2VleC5yZWdpc3RlckFwaU1vZHVsZSgnY2xpcGJvYXJkJywgY2xpcGJvYXJkLCBtZXRhKVxuICB9XG59XG4iLCIvKipcbiAqIFNpbXBsZSBiaW5kLCBmYXN0ZXIgdGhhbiBuYXRpdmVcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IGN0eFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIGNvbnN0IGwgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgcmV0dXJuIGxcbiAgICAgID8gbCA+IDFcbiAgICAgICAgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cylcbiAgICAgICAgOiBmbi5jYWxsKGN0eCwgYSlcbiAgICAgIDogZm4uY2FsbChjdHgpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlIChmdW5jLCB3YWl0KSB7XG4gIGxldCB0aW1lcklkXG4gIGZ1bmN0aW9uIGxhdGVyICgpIHtcbiAgICB0aW1lcklkID0gbnVsbFxuICAgIGZ1bmMuYXBwbHkobnVsbClcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcklkKVxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZSAoZnVuYywgd2FpdCkge1xuICBsZXQgbGFzdCA9IDBcbiAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXNcbiAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICBpZiAodGltZSAtIGxhc3QgPiB3YWl0KSB7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgICBsYXN0ID0gdGltZVxuICAgIH1cbiAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGUgRXZlbnQuXG4gKiBAcGFyYW0ge0RPTVN0cmluZ30gdHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFdmVudCAoY29udGV4dCwgdHlwZSwgcHJvcHMpIHtcbi8vICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQodHlwZSwgeyBidWJibGVzOiBmYWxzZSB9KVxuLy8gICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4vLyAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4vL1xuLy8gICBleHRlbmQoZXZlbnQsIHByb3BzKVxuLy9cbi8vICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAndGFyZ2V0Jywge1xuLy8gICAgIGVudW1lcmFibGU6IHRydWUsXG4vLyAgICAgdmFsdWU6IGNvbnRleHQgfHwgbnVsbFxuLy8gICB9KVxuLy9cbi8vICAgcmV0dXJuIGV2ZW50XG4vLyB9XG5cbi8qKlxuICogQ3JlYXRlIEN1c3RvbSBFdmVudC5cbiAqIEBwYXJhbSB7RE9NU3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAqL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUV2ZW50IChjb250ZXh0LCB0eXBlLCBwcm9wcykge1xuLy8gICAvLyBjb21wYXRpYmlsaXR5OiBodHRwOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1jdXN0b21ldmVudFxuLy8gICAvLyBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlKVxuLy8gICBjb25zdCBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpXG4vLyAgIGV2ZW50LmluaXRDdXN0b21FdmVudCh0eXBlLCBmYWxzZSwgdHJ1ZSwge30pXG4vLyAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbi8vICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbi8vXG4vLyAgIGV4dGVuZChldmVudCwgcHJvcHMpXG4vL1xuLy8gICAvLyBUT0RPOiBldmVudC50YXJnZXQgaXMgcmVhZG9ubHlcbi8vICAgLy8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAndGFyZ2V0Jywge1xuLy8gICAvLyAgIGVudW1lcmFibGU6IHRydWUsXG4vLyAgIC8vICAgdmFsdWU6IGNvbnRleHQgfHwgbnVsbFxuLy8gICAvLyB9KVxuLy9cbi8vICAgcmV0dXJuIGV2ZW50XG4vLyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBGb3JtRXZlbnRzIChjb250ZXh0KSB7XG4gIGNvbnN0IGV2ZW50TWFwID0ge31cbiAgO1snaW5wdXQnLCAnY2hhbmdlJywgJ2ZvY3VzJywgJ2JsdXInXS5mb3JFYWNoKHR5cGUgPT4ge1xuICAgIGV2ZW50TWFwW3R5cGVdID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKGNvbnRleHQuJGVsKSB7XG4gICAgICAgIGNvbnRleHQudmFsdWUgPSBjb250ZXh0LiRlbC52YWx1ZVxuICAgICAgICBldmVudC52YWx1ZSA9IGNvbnRleHQuJGVsLnZhbHVlXG4gICAgICB9XG4gICAgICBjb250ZXh0LiRlbWl0KHR5cGUsIGV2ZW50KVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGV2ZW50TWFwXG59XG4iLCJpbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gJy4vZnVuYydcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudFNjcm9sbGVyICh2bm9kZSkge1xuICBpZiAoIXZub2RlKSByZXR1cm4gbnVsbFxuICBpZiAodm5vZGUud2VleFR5cGUgPT09ICdzY3JvbGxlcicgfHwgdm5vZGUud2VleFR5cGUgPT09ICdsaXN0Jykge1xuICAgIHJldHVybiB2bm9kZVxuICB9XG4gIHJldHVybiBnZXRQYXJlbnRTY3JvbGxlcih2bm9kZS4kcGFyZW50KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzSW50ZXJzZWN0aW9uIChyZWN0LCBjdFJlY3QpIHtcbiAgcmV0dXJuIChyZWN0LmxlZnQgPCBjdFJlY3QucmlnaHQgJiYgcmVjdC5yaWdodCA+IGN0UmVjdC5sZWZ0KVxuICAgICYmIChyZWN0LnRvcCA8IGN0UmVjdC5ib3R0b20gJiYgcmVjdC5ib3R0b20gPiBjdFJlY3QudG9wKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wb25lbnRWaXNpYmxlIChjb21wb25lbnQpIHtcbiAgaWYgKGNvbXBvbmVudC4kZWwpIHtcbiAgICBjb25zdCBzY3JvbGxlciA9IGdldFBhcmVudFNjcm9sbGVyKGNvbXBvbmVudClcbiAgICBpZiAoc2Nyb2xsZXIgJiYgc2Nyb2xsZXIuJGVsKSB7XG4gICAgICBjb25zdCB2aXNpYmxlID0gaGFzSW50ZXJzZWN0aW9uKFxuICAgICAgICBjb21wb25lbnQuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBzY3JvbGxlci4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIClcbiAgICAgIHJldHVybiB2aXNpYmxlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG4vLyBUT0RPOiBpbXByb3ZlIHRoZSBlZmZpY2llbmN5XG5leHBvcnQgZnVuY3Rpb24gd2F0Y2hBcHBlYXIgKGNvbnRleHQpIHtcbiAgaWYgKCFjb250ZXh0KSByZXR1cm4gbnVsbFxuXG4gIGNvbnRleHQuJG5leHRUaWNrKCgpID0+IHtcbiAgICBpZiAoY29udGV4dC4kb3B0aW9ucyAmJiBjb250ZXh0LiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIGNvbnN0IG9uID0gY29udGV4dC4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzXG4gICAgICBpZiAob24uYXBwZWFyIHx8IG9uLmRpc2FwcGVhcikge1xuICAgICAgICBjb250ZXh0Ll92aXNpYmxlID0gaXNDb21wb25lbnRWaXNpYmxlKGNvbnRleHQpXG4gICAgICAgIGlmIChjb250ZXh0Ll92aXNpYmxlKSB7XG4gICAgICAgICAgLy8gVE9ETzogY3JlYXRlIGN1c3RvbSBldmVudCBvYmplY3RcbiAgICAgICAgICBvbi5hcHBlYXIgJiYgb24uYXBwZWFyLmZuKHt9KVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSB0aHJvdHRsZShldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgdmlzaWJsZSA9IGlzQ29tcG9uZW50VmlzaWJsZShjb250ZXh0KVxuICAgICAgICAgIGlmICh2aXNpYmxlICE9PSBjb250ZXh0Ll92aXNpYmxlKSB7XG4gICAgICAgICAgICBjb250ZXh0Ll92aXNpYmxlID0gdmlzaWJsZVxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXIgPSB2aXNpYmxlID8gb24uYXBwZWFyIDogb24uZGlzYXBwZWFyXG4gICAgICAgICAgICBpZiAobGlzdGVuZXIgJiYgbGlzdGVuZXIuZm4pIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXIuZm4oZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxMDApXG5cbiAgICAgICAgLy8gVE9ETzogbW9yZSByZWxpYWJsZVxuICAgICAgICBjb25zdCBzY3JvbGxlciA9IGdldFBhcmVudFNjcm9sbGVyKGNvbnRleHQpXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSAoc2Nyb2xsZXIgJiYgc2Nyb2xsZXIuJGVsKSB8fCB3aW5kb3dcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVyLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2Z1bmMnXG5leHBvcnQgKiBmcm9tICcuL2V2ZW50J1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnXG5cbi8qKlxuICogQ3JlYXRlIGEgY2FjaGVkIHZlcnNpb24gb2YgYSBwdXJlIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FjaGVkIChmbikge1xuICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuIChzdHIpIHtcbiAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdXG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH1cbn1cblxuLyoqXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxtaXRlZCBzdHJpbmcuXG4gKi9cbmNvbnN0IGNhbWVsaXplUkUgPSAvLShcXHcpL2dcbmV4cG9ydCBjb25zdCBjYW1lbGl6ZSA9IGNhY2hlZChzdHIgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgKF8sIGMpID0+IGMudG9VcHBlckNhc2UoKSlcbn0pXG5cbi8qKlxuICogQ2FwaXRhbGl6ZSBhIHN0cmluZy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNhcGl0YWxpemUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxufSlcblxuLyoqXG4gKiBIeXBoZW5hdGUgYSBjYW1lbENhc2Ugc3RyaW5nLlxuICovXG5jb25zdCBoeXBoZW5hdGVSRSA9IC8oW14tXSkoW0EtWl0pL2dcbmV4cG9ydCBjb25zdCBoeXBoZW5hdGUgPSBjYWNoZWQoc3RyID0+IHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgIC5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKVxuICAgIC50b0xvd2VyQ2FzZSgpXG59KVxuXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxUb0tlYmFiIChuYW1lKSB7XG4gIGlmICghbmFtZSkgeyByZXR1cm4gJycgfVxuICByZXR1cm4gbmFtZS5yZXBsYWNlKC8oW0EtWl0pL2csIGZ1bmN0aW9uIChnLCBnMSkge1xuICAgIHJldHVybiBgLSR7ZzEudG9Mb3dlckNhc2UoKX1gXG4gIH0pXG59XG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kICh0bywgX2Zyb20pIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gX2Zyb20pIHtcbiAgICB0b1trZXldID0gX2Zyb21ba2V5XVxuICB9XG4gIHJldHVybiB0b1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kU3R5bGUgKGNzcywgc3R5bGVJZCwgcmVwbGFjZSkge1xuICBsZXQgc3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKVxuICBpZiAoc3R5bGUgJiYgcmVwbGFjZSkge1xuICAgIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpXG4gICAgc3R5bGUgPSBudWxsXG4gIH1cbiAgaWYgKCFzdHlsZSkge1xuICAgIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnXG4gICAgc3R5bGVJZCAmJiAoc3R5bGUuaWQgPSBzdHlsZUlkKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpXG4gIH1cbiAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbn1cblxuLyoqXG4gKiBTdHJpY3Qgb2JqZWN0IHR5cGUgY2hlY2suIE9ubHkgcmV0dXJucyB0cnVlXG4gKiBmb3IgcGxhaW4gSmF2YVNjcmlwdCBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuY29uc3QgT0JKRUNUX1NUUklORyA9ICdbb2JqZWN0IE9iamVjdF0nXG5leHBvcnQgZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09IE9CSkVDVF9TVFJJTkdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHRGcmFtZSAoY2FsbGJhY2spIHtcbiAgY29uc3QgcnVubmVyID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICB8fCAoY2IgPT4gc2V0VGltZW91dChjYiwgMTYpKVxuICBydW5uZXIoY2FsbGJhY2spXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0NTU1RleHQgKG9iamVjdCkge1xuICBsZXQgY3NzVGV4dCA9ICcnXG4gIGlmIChvYmplY3QpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGNzc1RleHQgKz0gYCR7aHlwaGVuYXRlKGtleSl9OiR7b2JqZWN0W2tleV19O2BcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNzc1RleHRcbn1cbiIsImltcG9ydCB7IG5leHRGcmFtZSwgdG9DU1NUZXh0IH0gZnJvbSAnLi4vdXRpbHMnXG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25PbmNlICh2bm9kZSwgY29uZmlnLCBjYWxsYmFjaykge1xuICBjb25zdCBkdXJhdGlvbiA9IGNvbmZpZy5kdXJhdGlvbiB8fCAxMDAwIC8vIG1zXG4gIGNvbnN0IHRpbWluZyA9IGNvbmZpZy50aW1pbmdGdW5jdGlvbiB8fCAnZWFzZSdcbiAgY29uc3QgZGVsYXkgPSBjb25maWcuZGVsYXkgfHwgMCAgLy8gbXNcblxuICAvLyBUT0RPOiBwYXJzZSB0cmFuc2l0aW9uIHByb3BlcnRpZXNcbiAgY29uc3QgdHJhbnNpdGlvblZhbHVlID0gYGFsbCAke2R1cmF0aW9ufW1zICR7dGltaW5nfSAke2RlbGF5fW1zYFxuXG4gIGNvbnN0IGRvbSA9IHZub2RlLiRlbFxuICBjb25zdCB0cmFuc2l0aW9uRW5kSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCB0cmFuc2l0aW9uRW5kSGFuZGxlcilcbiAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRyYW5zaXRpb25FbmRIYW5kbGVyKVxuICAgIGRvbS5zdHlsZS50cmFuc2l0aW9uID0gJydcbiAgICBkb20uc3R5bGUud2Via2l0VHJhbnNpdGlvbiA9ICcnXG4gICAgY2FsbGJhY2soKVxuICB9XG5cbiAgZG9tLnN0eWxlLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uVmFsdWVcbiAgZG9tLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSB0cmFuc2l0aW9uVmFsdWVcbiAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCB0cmFuc2l0aW9uRW5kSGFuZGxlcilcbiAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0cmFuc2l0aW9uRW5kSGFuZGxlcilcblxuICBuZXh0RnJhbWUoKCkgPT4ge1xuICAgIGRvbS5zdHlsZS5jc3NUZXh0ICs9IHRvQ1NTVGV4dChjb25maWcuc3R5bGVzIHx8IHt9KVxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8qKlxuICAgKiB0cmFuc2l0aW9uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gdm5vZGVcbiAgICogQHBhcmFtICB7T2JqZWN0fSBjb25maWdcbiAgICogQHBhcmFtICB7U3RyaW5nfSBjYWxsYmFja1xuICAgKi9cbiAgdHJhbnNpdGlvbiAodm5vZGUsIGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICAvLyBUT0RPOiBNYWtlIHN1cmUgdGhlIHRyYW5zaXRpb24gaXMgb25seSBydW4gb25jZVxuICAgIHJldHVybiB0cmFuc2l0aW9uT25jZSh2bm9kZSwgY29uZmlnLCAoKSA9PiB7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgY2FtZWxUb0tlYmFiLCBhcHBlbmRTdHlsZSB9IGZyb20gJy4uL3V0aWxzJ1xuXG5mdW5jdGlvbiBnZXRQYXJlbnRTY3JvbGxlciAodm5vZGUpIHtcbiAgaWYgKCF2bm9kZSkgcmV0dXJuIG51bGxcbiAgaWYgKHZub2RlLndlZXhUeXBlID09PSAnc2Nyb2xsZXInIHx8IHZub2RlLndlZXhUeXBlID09PSAnbGlzdCcpIHtcbiAgICByZXR1cm4gdm5vZGVcbiAgfVxuICByZXR1cm4gZ2V0UGFyZW50U2Nyb2xsZXIodm5vZGUuJHBhcmVudClcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogc2Nyb2xsVG9FbGVtZW50XG4gICAqIEBwYXJhbSAge1N0cmluZ30gdm5vZGVcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zIHtvZmZzZXQ6TnVtYmVyfVxuICAgKiAgIHBzOiBzY3JvbGwtdG8gaGFzICdlYXNlJyBhbmQgJ2R1cmF0aW9uJyhtcykgYXMgb3B0aW9ucy5cbiAgICovXG4gIHNjcm9sbFRvRWxlbWVudDogZnVuY3Rpb24gKHZub2RlLCBvcHRpb25zKSB7XG4gICAgY29uc3Qgc2Nyb2xsZXIgPSBnZXRQYXJlbnRTY3JvbGxlcih2bm9kZSlcblxuICAgIGlmIChzY3JvbGxlciAmJiBzY3JvbGxlci4kZWwgJiYgdm5vZGUuJGVsKSB7XG4gICAgICBsZXQgb2Zmc2V0ID0gdm5vZGUuJGVsLm9mZnNldFRvcFxuXG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvZmZzZXQgKz0gTnVtYmVyKG9wdGlvbnMub2Zmc2V0KSB8fCAwXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tWdWUgUmVuZGVyXSBUaGUgc2Vjb25kIHBhcmFtZXRlciBvZiBcInNjcm9sbFRvRWxlbWVudFwiIGlzIHJlcXVpcmVkLCAnXG4gICAgICAgICAgKyAnb3RoZXJ3aXNlIGl0IG1heSBub3Qgd29ya3Mgd2VsbCBvbiBuYXRpdmUuJylcbiAgICAgIH1cblxuICAgICAgLy8gVE9ETzogYWRkIGFuaW1hdGlvblxuICAgICAgc2Nyb2xsZXIuJGVsLnNjcm9sbFRvcCA9IG9mZnNldFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogZ2V0Q29tcG9uZW50UmVjdFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdm5vZGVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICovXG4gIGdldENvbXBvbmVudFJlY3Q6IGZ1bmN0aW9uICh2bm9kZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBpbmZvID0geyByZXN1bHQ6IGZhbHNlIH1cblxuICAgIGlmICh2bm9kZSAmJiB2bm9kZSA9PT0gJ3ZpZXdwb3J0Jykge1xuICAgICAgaW5mby5yZXN1bHQgPSB0cnVlXG4gICAgICBpbmZvLnNpemUgPSB7XG4gICAgICAgIHdpZHRoOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgIGhlaWdodDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICByaWdodDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICBib3R0b206IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodm5vZGUgJiYgdm5vZGUuJGVsKSB7XG4gICAgICBpbmZvLnJlc3VsdCA9IHRydWVcbiAgICAgIGluZm8uc2l6ZSA9IHZub2RlLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIH1cblxuICAgIGNvbnN0IG1lc3NhZ2UgPSBpbmZvLnJlc3VsdCA/IGluZm8gOiB7XG4gICAgICByZXN1bHQ6IGZhbHNlLFxuICAgICAgZXJyTXNnOiAnSWxsZWdhbCBwYXJhbWV0ZXInXG4gICAgfVxuXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sobWVzc2FnZSlcbiAgICByZXR1cm4gbWVzc2FnZVxuICB9LFxuXG4gIC8qKlxuICAgKiBmb3IgYWRkaW5nIGZvbnRGYWNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgZm9udEZhY2VcbiAgICogQHBhcmFtIHtvYmplY3R9IHN0eWxlcyBydWxlc1xuICAgKi9cbiAgYWRkUnVsZTogZnVuY3Rpb24gKGtleSwgc3R5bGVzKSB7XG4gICAga2V5ID0gY2FtZWxUb0tlYmFiKGtleSlcbiAgICBsZXQgc3R5bGVzVGV4dCA9ICcnXG4gICAgZm9yIChjb25zdCBrIGluIHN0eWxlcykge1xuICAgICAgaWYgKHN0eWxlcy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBzdHlsZXNUZXh0ICs9IGNhbWVsVG9LZWJhYihrKSArICc6JyArIHN0eWxlc1trXSArICc7J1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBzdHlsZVRleHQgPSBgQCR7a2V5fXske3N0eWxlc1RleHR9fWBcbiAgICBhcHBlbmRTdHlsZShzdHlsZVRleHQsICdkb20tYWRkZWQtcnVsZXMnKVxuICB9XG59XG4iLCJjb25zdCBxdWV1ZSA9IFtdXG5sZXQgaXNQcm9jZXNzaW5nID0gZmFsc2VcbmxldCB0b2FzdFdpblxuY29uc3QgVE9BU1RfV0lOX0NMQVNTX05BTUUgPSAnd2VleC10b2FzdCdcblxuY29uc3QgREVGQVVMVF9EVVJBVElPTiA9IDAuOFxuXG5mdW5jdGlvbiBzaG93VG9hc3RXaW5kb3cgKG1zZywgY2FsbGJhY2spIHtcbiAgY29uc3QgaGFuZGxlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0b2FzdFdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZClcbiAgICB0b2FzdFdpbi5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZClcbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gIH1cbiAgaWYgKCF0b2FzdFdpbikge1xuICAgIHRvYXN0V2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0b2FzdFdpbi5jbGFzc0xpc3QuYWRkKFRPQVNUX1dJTl9DTEFTU19OQU1FLCAnaGlkZScpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2FzdFdpbilcbiAgfVxuICB0b2FzdFdpbi50ZXh0Q29udGVudCA9IG1zZ1xuICB0b2FzdFdpbi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZClcbiAgdG9hc3RXaW4uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRvYXN0V2luLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxuICB9LCAwKVxufVxuXG5mdW5jdGlvbiBoaWRlVG9hc3RXaW5kb3cgKGNhbGxiYWNrKSB7XG4gIGNvbnN0IGhhbmRsZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdG9hc3RXaW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gICAgdG9hc3RXaW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICB9XG4gIGlmICghdG9hc3RXaW4pIHtcbiAgICByZXR1cm5cbiAgfVxuICB0b2FzdFdpbi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZClcbiAgdG9hc3RXaW4uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRvYXN0V2luLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICB9LCAwKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHB1c2g6IGZ1bmN0aW9uIChtc2csIGR1cmF0aW9uKSB7XG4gICAgcXVldWUucHVzaCh7XG4gICAgICBtc2c6IG1zZyxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiB8fCBERUZBVUxUX0RVUkFUSU9OXG4gICAgfSlcbiAgICB0aGlzLnNob3coKVxuICB9LFxuXG4gIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB0aGF0ID0gdGhpc1xuXG4gICAgLy8gQWxsIG1lc3NhZ2VzIGhhZCBiZWVuIHRvYXN0ZWQgYWxyZWFkeSwgc28gcmVtb3ZlIHRoZSB0b2FzdCB3aW5kb3csXG4gICAgaWYgKCFxdWV1ZS5sZW5ndGgpIHtcbiAgICAgIHRvYXN0V2luICYmIHRvYXN0V2luLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9hc3RXaW4pXG4gICAgICB0b2FzdFdpbiA9IG51bGxcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHRoZSBwcmV2aW91cyB0b2FzdCBpcyBub3QgZW5kZWQgeWV0LlxuICAgIGlmIChpc1Byb2Nlc3NpbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpc1Byb2Nlc3NpbmcgPSB0cnVlXG5cbiAgICBjb25zdCB0b2FzdEluZm8gPSBxdWV1ZS5zaGlmdCgpXG4gICAgc2hvd1RvYXN0V2luZG93KHRvYXN0SW5mby5tc2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBoaWRlVG9hc3RXaW5kb3coZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlzUHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgdGhhdC5zaG93KClcbiAgICAgICAgfSlcbiAgICAgIH0sIHRvYXN0SW5mby5kdXJhdGlvbiAqIDEwMDApXG4gICAgfSlcbiAgfVxufVxuIiwiXG4vLyB0aGVyZSB3aWxsIGJlIG9ubHkgb25lIGluc3RhbmNlIG9mIG1vZGFsLlxuY29uc3QgTU9EQUxfV1JBUF9DTEFTUyA9ICd3ZWV4LW1vZGFsLXdyYXAnXG5jb25zdCBNT0RBTF9OT0RFX0NMQVNTID0gJ3dlZXgtbW9kYWwtbm9kZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwgKCkge1xuICB0aGlzLndyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKE1PREFMX1dSQVBfQ0xBU1MpXG4gIHRoaXMubm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoTU9EQUxfTk9ERV9DTEFTUylcbiAgaWYgKCF0aGlzLndyYXApIHtcbiAgICB0aGlzLmNyZWF0ZVdyYXAoKVxuICB9XG4gIGlmICghdGhpcy5ub2RlKSB7XG4gICAgdGhpcy5jcmVhdGVOb2RlKClcbiAgfVxuICB0aGlzLmNsZWFyTm9kZSgpXG4gIHRoaXMuY3JlYXRlTm9kZUNvbnRlbnQoKVxuICB0aGlzLmJpbmRFdmVudHMoKVxufVxuXG5Nb2RhbC5wcm90b3R5cGUgPSB7XG5cbiAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMud3JhcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbiAgfSxcblxuICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLndyYXApXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm5vZGUpXG4gICAgdGhpcy53cmFwID0gbnVsbFxuICAgIHRoaXMubm9kZSA9IG51bGxcbiAgfSxcblxuICBjcmVhdGVXcmFwOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy53cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLndyYXAuY2xhc3NOYW1lID0gTU9EQUxfV1JBUF9DTEFTU1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy53cmFwKVxuICB9LFxuXG4gIGNyZWF0ZU5vZGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKE1PREFMX05PREVfQ0xBU1MsICdoaWRlJylcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMubm9kZSlcbiAgfSxcblxuICBjbGVhck5vZGU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLm5vZGUuaW5uZXJIVE1MID0gJydcbiAgfSxcblxuICBjcmVhdGVOb2RlQ29udGVudDogZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gZG8gbm90aGluZy5cbiAgICAvLyBjaGlsZCBjbGFzc2VzIGNhbiBvdmVycmlkZSB0aGlzIG1ldGhvZC5cbiAgfSxcblxuICBiaW5kRXZlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy53cmFwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIH0pXG4gIH1cbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJ1xuXG5jb25zdCBDT05URU5UX0NMQVNTID0gJ2NvbnRlbnQnXG5jb25zdCBNU0dfQ0xBU1MgPSAnY29udGVudC1tc2cnXG5jb25zdCBCVVRUT05fR1JPVVBfQ0xBU1MgPSAnYnRuLWdyb3VwJ1xuY29uc3QgQlVUVE9OX0NMQVNTID0gJ2J0bidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxlcnQgKGNvbmZpZykge1xuICB0aGlzLm1zZyA9IGNvbmZpZy5tZXNzYWdlIHx8ICcnXG4gIHRoaXMuY2FsbGJhY2sgPSBjb25maWcuY2FsbGJhY2tcbiAgdGhpcy5va1RpdGxlID0gY29uZmlnLm9rVGl0bGUgfHwgJ09LJ1xuICBNb2RhbC5jYWxsKHRoaXMpXG4gIHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKCd3ZWV4LWFsZXJ0Jylcbn1cblxuQWxlcnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShNb2RhbC5wcm90b3R5cGUpXG5cbkFsZXJ0LnByb3RvdHlwZS5jcmVhdGVOb2RlQ29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChDT05URU5UX0NMQVNTKVxuICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoY29udGVudClcblxuICBjb25zdCBtc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBtc2cuY2xhc3NMaXN0LmFkZChNU0dfQ0xBU1MpXG4gIG1zZy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLm1zZykpXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobXNnKVxuXG4gIGNvbnN0IGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnV0dG9uR3JvdXAuY2xhc3NMaXN0LmFkZChCVVRUT05fR1JPVVBfQ0xBU1MpXG4gIHRoaXMubm9kZS5hcHBlbmRDaGlsZChidXR0b25Hcm91cClcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoQlVUVE9OX0NMQVNTLCAnYWxlcnQtb2snKVxuICBidXR0b24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5va1RpdGxlKSlcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoYnV0dG9uKVxufVxuXG5BbGVydC5wcm90b3R5cGUuYmluZEV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgTW9kYWwucHJvdG90eXBlLmJpbmRFdmVudHMuY2FsbCh0aGlzKVxuICBjb25zdCBidXR0b24gPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignLicgKyBCVVRUT05fQ0xBU1MpXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRlc3Ryb3koKVxuICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygpXG4gIH0uYmluZCh0aGlzKSlcbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tICcuL21vZGFsJ1xuXG5jb25zdCBDT05URU5UX0NMQVNTID0gJ2NvbnRlbnQnXG5jb25zdCBNU0dfQ0xBU1MgPSAnY29udGVudC1tc2cnXG5jb25zdCBCVVRUT05fR1JPVVBfQ0xBU1MgPSAnYnRuLWdyb3VwJ1xuY29uc3QgQlVUVE9OX0NMQVNTID0gJ2J0bidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uZmlybSAoY29uZmlnKSB7XG4gIHRoaXMubXNnID0gY29uZmlnLm1lc3NhZ2UgfHwgJydcbiAgdGhpcy5jYWxsYmFjayA9IGNvbmZpZy5jYWxsYmFja1xuICB0aGlzLm9rVGl0bGUgPSBjb25maWcub2tUaXRsZSB8fCAnT0snXG4gIHRoaXMuY2FuY2VsVGl0bGUgPSBjb25maWcuY2FuY2VsVGl0bGUgfHwgJ0NhbmNlbCdcbiAgTW9kYWwuY2FsbCh0aGlzKVxuICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZCgnd2VleC1jb25maXJtJylcbn1cblxuQ29uZmlybS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKE1vZGFsLnByb3RvdHlwZSlcblxuQ29uZmlybS5wcm90b3R5cGUuY3JlYXRlTm9kZUNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoQ09OVEVOVF9DTEFTUylcbiAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbiAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbXNnLmNsYXNzTGlzdC5hZGQoTVNHX0NMQVNTKVxuICBtc2cuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5tc2cpKVxuICBjb250ZW50LmFwcGVuZENoaWxkKG1zZylcblxuICBjb25zdCBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ1dHRvbkdyb3VwLmNsYXNzTGlzdC5hZGQoQlVUVE9OX0dST1VQX0NMQVNTKVxuICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApXG4gIGNvbnN0IGJ0bk9rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgYnRuT2suYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5va1RpdGxlKSlcbiAgYnRuT2suY2xhc3NMaXN0LmFkZCgnYnRuLW9rJywgQlVUVE9OX0NMQVNTKVxuICBjb25zdCBidG5DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBidG5DYW5jZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5jYW5jZWxUaXRsZSkpXG4gIGJ0bkNhbmNlbC5jbGFzc0xpc3QuYWRkKCdidG4tY2FuY2VsJywgQlVUVE9OX0NMQVNTKVxuICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChidG5PaylcbiAgYnV0dG9uR3JvdXAuYXBwZW5kQ2hpbGQoYnRuQ2FuY2VsKVxuICB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoYnV0dG9uR3JvdXApXG59XG5cbkNvbmZpcm0ucHJvdG90eXBlLmJpbmRFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIE1vZGFsLnByb3RvdHlwZS5iaW5kRXZlbnRzLmNhbGwodGhpcylcbiAgY29uc3QgYnRuT2sgPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignLicgKyBCVVRUT05fQ0xBU1MgKyAnLmJ0bi1vaycpXG4gIGNvbnN0IGJ0bkNhbmNlbCA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKCcuJyArIEJVVFRPTl9DTEFTUyArICcuYnRuLWNhbmNlbCcpXG4gIGJ0bk9rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZGVzdHJveSgpXG4gICAgdGhpcy5jYWxsYmFjayAmJiB0aGlzLmNhbGxiYWNrKHRoaXMub2tUaXRsZSlcbiAgfS5iaW5kKHRoaXMpKVxuICBidG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kZXN0cm95KClcbiAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2sodGhpcy5jYW5jZWxUaXRsZSlcbiAgfS5iaW5kKHRoaXMpKVxufVxuIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnXG5cbmNvbnN0IENPTlRFTlRfQ0xBU1MgPSAnY29udGVudCdcbmNvbnN0IE1TR19DTEFTUyA9ICdjb250ZW50LW1zZydcbmNvbnN0IEJVVFRPTl9HUk9VUF9DTEFTUyA9ICdidG4tZ3JvdXAnXG5jb25zdCBCVVRUT05fQ0xBU1MgPSAnYnRuJ1xuY29uc3QgSU5QVVRfV1JBUF9DTEFTUyA9ICdpbnB1dC13cmFwJ1xuY29uc3QgSU5QVVRfQ0xBU1MgPSAnaW5wdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb21wdCAoY29uZmlnKSB7XG4gIHRoaXMubXNnID0gY29uZmlnLm1lc3NhZ2UgfHwgJydcbiAgdGhpcy5kZWZhdWx0TXNnID0gY29uZmlnLmRlZmF1bHQgfHwgJydcbiAgdGhpcy5jYWxsYmFjayA9IGNvbmZpZy5jYWxsYmFja1xuICB0aGlzLm9rVGl0bGUgPSBjb25maWcub2tUaXRsZSB8fCAnT0snXG4gIHRoaXMuY2FuY2VsVGl0bGUgPSBjb25maWcuY2FuY2VsVGl0bGUgfHwgJ0NhbmNlbCdcbiAgTW9kYWwuY2FsbCh0aGlzKVxuICB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZCgnd2VleC1wcm9tcHQnKVxufVxuXG5Qcm9tcHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShNb2RhbC5wcm90b3R5cGUpXG5cblByb21wdC5wcm90b3R5cGUuY3JlYXRlTm9kZUNvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoQ09OVEVOVF9DTEFTUylcbiAgdGhpcy5ub2RlLmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbiAgY29uc3QgbXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbXNnLmNsYXNzTGlzdC5hZGQoTVNHX0NMQVNTKVxuICBtc2cuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5tc2cpKVxuICBjb250ZW50LmFwcGVuZENoaWxkKG1zZylcblxuICBjb25zdCBpbnB1dFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBpbnB1dFdyYXAuY2xhc3NMaXN0LmFkZChJTlBVVF9XUkFQX0NMQVNTKVxuICBjb250ZW50LmFwcGVuZENoaWxkKGlucHV0V3JhcClcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoSU5QVVRfQ0xBU1MpXG4gIGlucHV0LnR5cGUgPSAndGV4dCdcbiAgaW5wdXQuYXV0b2ZvY3VzID0gdHJ1ZVxuICBpbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMuZGVmYXVsdE1zZ1xuICBpbnB1dFdyYXAuYXBwZW5kQ2hpbGQoaW5wdXQpXG5cbiAgY29uc3QgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBidXR0b25Hcm91cC5jbGFzc0xpc3QuYWRkKEJVVFRPTl9HUk9VUF9DTEFTUylcbiAgY29uc3QgYnRuT2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBidG5Pay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLm9rVGl0bGUpKVxuICBidG5Pay5jbGFzc0xpc3QuYWRkKCdidG4tb2snLCBCVVRUT05fQ0xBU1MpXG4gIGNvbnN0IGJ0bkNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGJ0bkNhbmNlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmNhbmNlbFRpdGxlKSlcbiAgYnRuQ2FuY2VsLmNsYXNzTGlzdC5hZGQoJ2J0bi1jYW5jZWwnLCBCVVRUT05fQ0xBU1MpXG4gIGJ1dHRvbkdyb3VwLmFwcGVuZENoaWxkKGJ0bk9rKVxuICBidXR0b25Hcm91cC5hcHBlbmRDaGlsZChidG5DYW5jZWwpXG4gIHRoaXMubm9kZS5hcHBlbmRDaGlsZChidXR0b25Hcm91cClcbn1cblxuUHJvbXB0LnByb3RvdHlwZS5iaW5kRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICBNb2RhbC5wcm90b3R5cGUuYmluZEV2ZW50cy5jYWxsKHRoaXMpXG4gIGNvbnN0IGJ0bk9rID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgQlVUVE9OX0NMQVNTICsgJy5idG4tb2snKVxuICBjb25zdCBidG5DYW5jZWwgPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvcignLicgKyBCVVRUT05fQ0xBU1MgKyAnLmJ0bi1jYW5jZWwnKVxuICBjb25zdCB0aGF0ID0gdGhpc1xuICBidG5Pay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB2YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlXG4gICAgdGhpcy5kZXN0cm95KClcbiAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soe1xuICAgICAgcmVzdWx0OiB0aGF0Lm9rVGl0bGUsXG4gICAgICBkYXRhOiB2YWxcbiAgICB9KVxuICB9LmJpbmQodGhpcykpXG4gIGJ0bkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB2YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlXG4gICAgdGhpcy5kZXN0cm95KClcbiAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soe1xuICAgICAgcmVzdWx0OiB0aGF0LmNhbmNlbFRpdGxlLFxuICAgICAgZGF0YTogdmFsXG4gICAgfSlcbiAgfS5iaW5kKHRoaXMpKVxufVxuIiwiaW1wb3J0IHRvYXN0IGZyb20gJy4vdG9hc3QnXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9hbGVydCdcbmltcG9ydCBDb25maXJtIGZyb20gJy4vY29uZmlybSdcbmltcG9ydCBQcm9tcHQgZnJvbSAnLi9wcm9tcHQnXG5cbi8vIFRPRE86IHJld3JpdGUgdGhlIG1vZGFsIHN0eWxlc1xuZXhwb3J0IGRlZmF1bHQge1xuXG4gIC8vIGR1cmF0aW9uOiBkZWZhdWx0IGlzIDAuOCBzZWNvbmRzLlxuICB0b2FzdDogZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHRvYXN0LnB1c2goY29uZmlnLm1lc3NhZ2UsIGNvbmZpZy5kdXJhdGlvbilcbiAgfSxcblxuICAvLyBjb25maWc6XG4gIC8vICAtIG1lc3NhZ2U6IHN0cmluZ1xuICAvLyAgLSBva1RpdGxlOiB0aXRsZSBvZiBvayBidXR0b25cbiAgLy8gIC0gY2FsbGJhY2tcbiAgYWxlcnQ6IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgY29uZmlnLmNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICAgIH1cbiAgICBuZXcgQWxlcnQoY29uZmlnKS5zaG93KClcbiAgfSxcblxuICAvLyBjb25maWc6XG4gIC8vICAtIG1lc3NhZ2U6IHN0cmluZ1xuICAvLyAgLSBva1RpdGxlOiB0aXRsZSBvZiBvayBidXR0b25cbiAgLy8gIC0gY2FuY2VsVGl0bGU6IHRpdGxlIG9mIGNhbmNlbCBidXR0b25cbiAgLy8gIC0gY2FsbGJhY2tcbiAgY29uZmlybTogZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICBjb25maWcuY2FsbGJhY2sgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh2YWwpXG4gICAgfVxuICAgIG5ldyBDb25maXJtKGNvbmZpZykuc2hvdygpXG4gIH0sXG5cbiAgLy8gY29uZmlnOlxuICAvLyAgLSBtZXNzYWdlOiBzdHJpbmdcbiAgLy8gIC0gb2tUaXRsZTogdGl0bGUgb2Ygb2sgYnV0dG9uXG4gIC8vICAtIGNhbmNlbFRpdGxlOiB0aXRsZSBvZiBjYW5jZWwgYnV0dG9uXG4gIC8vICAtIGNhbGxiYWNrXG4gIHByb21wdDogZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICBjb25maWcuY2FsbGJhY2sgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh2YWwpXG4gICAgfVxuICAgIG5ldyBQcm9tcHQoY29uZmlnKS5zaG93KClcbiAgfVxufVxuIiwiLyoqXG4gKiBOYXZpZ2F0b3IgbW9kdWxlXG4gKi9cblxuLy8gVE9ETzogY29uZmlnLmFuaW1hdGVkXG5leHBvcnQgZGVmYXVsdCB7XG4gIHB1c2g6IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjb25maWcudXJsXG4gICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICB9LFxuXG4gIHBvcDogZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2spIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpXG4gIH1cbn1cbiIsIi8qKlxuICogV2VidmlldyBtb2R1bGVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdvQmFjayAodm5vZGUpIHtcbiAgICBpZiAodm5vZGUgJiYgdHlwZW9mIHZub2RlLmdvQmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdm5vZGUuZ29CYWNrKClcbiAgICB9XG4gIH0sXG4gIGdvRm9yd2FyZCAodm5vZGUpIHtcbiAgICBpZiAodm5vZGUgJiYgdHlwZW9mIHZub2RlLmdvRm9yd2FyZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdm5vZGUuZ29Gb3J3YXJkKClcbiAgICB9XG4gIH0sXG4gIHJlbG9hZCAodm5vZGUpIHtcbiAgICBpZiAodm5vZGUgJiYgdHlwZW9mIHZub2RlLnJlbG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdm5vZGUucmVsb2FkKClcbiAgICB9XG4gIH1cbn1cbiIsIi8vIG1vZHVsZXMgZnJvbSByZW5kZXIvYnJvd2VzclxuaW1wb3J0IEV2ZW50IGZyb20gJy4uLy4uL2Jyb3dzZXIvZXh0ZW5kL2FwaS9ldmVudCdcbmltcG9ydCBHZW9sb2NhdGlvbiBmcm9tICcuLi8uLi9icm93c2VyL2V4dGVuZC9hcGkvZ2VvbG9jYXRpb24nXG5pbXBvcnQgUGFnZUluZm8gZnJvbSAnLi4vLi4vYnJvd3Nlci9leHRlbmQvYXBpL3BhZ2VJbmZvJ1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSAnLi4vLi4vYnJvd3Nlci9leHRlbmQvYXBpL3N0b3JhZ2UnXG5pbXBvcnQgU3RyZWFtIGZyb20gJy4uLy4uL2Jyb3dzZXIvZXh0ZW5kL2FwaS9zdHJlYW0nXG5pbXBvcnQgQ2xpcGJvYXJkIGZyb20gJy4uLy4uL2Jyb3dzZXIvZXh0ZW5kL2FwaS9jbGlwYm9hcmQnXG5cbi8vIGN1c3RvbSBtb2R1bGVzXG5pbXBvcnQgYW5pbWF0aW9uIGZyb20gJy4vYW5pbWF0aW9uJ1xuaW1wb3J0IGRvbSBmcm9tICcuL2RvbSdcbmltcG9ydCBtb2RhbCBmcm9tICcuL21vZGFsJ1xuaW1wb3J0IG5hdmlnYXRvciBmcm9tICcuL25hdmlnYXRvcidcbmltcG9ydCB3ZWJ2aWV3IGZyb20gJy4vd2VidmlldydcblxuY29uc3QgbW9kdWxlcyA9IHtcbiAgYW5pbWF0aW9uLFxuICBkb20sXG4gIG1vZGFsLFxuICBuYXZpZ2F0b3IsXG4gIHdlYnZpZXdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVXZWV4TW9kdWxlIChuYW1lKSB7XG4gIGlmIChtb2R1bGVzW25hbWVdKSB7XG4gICAgcmV0dXJuIG1vZHVsZXNbbmFtZV1cbiAgfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCAod2VleCkge1xuICB3ZWV4Lmluc3RhbGwoRXZlbnQpXG4gIHdlZXguaW5zdGFsbChHZW9sb2NhdGlvbilcbiAgd2VleC5pbnN0YWxsKFBhZ2VJbmZvKVxuICB3ZWV4Lmluc3RhbGwoU3RvcmFnZSlcbiAgd2VleC5pbnN0YWxsKFN0cmVhbSlcbiAgd2VleC5pbnN0YWxsKENsaXBib2FyZClcbn1cbiIsIih0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgJiYgKHdpbmRvdyA9IHtjdHJsOiB7fSwgbGliOiB7fX0pOyF3aW5kb3cuY3RybCAmJiAod2luZG93LmN0cmwgPSB7fSk7IXdpbmRvdy5saWIgJiYgKHdpbmRvdy5saWIgPSB7fSk7IWZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInZhbFwiLHt2YWx1ZTphLnRvU3RyaW5nKCksZW51bWVyYWJsZTohMH0pLHRoaXMuZ3Q9ZnVuY3Rpb24oYSl7cmV0dXJuIGMuY29tcGFyZSh0aGlzLGEpPjB9LHRoaXMuZ3RlPWZ1bmN0aW9uKGEpe3JldHVybiBjLmNvbXBhcmUodGhpcyxhKT49MH0sdGhpcy5sdD1mdW5jdGlvbihhKXtyZXR1cm4gYy5jb21wYXJlKHRoaXMsYSk8MH0sdGhpcy5sdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIGMuY29tcGFyZSh0aGlzLGEpPD0wfSx0aGlzLmVxPWZ1bmN0aW9uKGEpe3JldHVybiAwPT09Yy5jb21wYXJlKHRoaXMsYSl9fWIuZW52PWIuZW52fHx7fSxjLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbH0sYy5wcm90b3R5cGUudmFsdWVPZj1mdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLnZhbC5zcGxpdChcIi5cIiksYj1bXSxjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPXBhcnNlSW50KGFbY10sMTApO2lzTmFOKGQpJiYoZD0wKTt2YXIgZT1kLnRvU3RyaW5nKCk7ZS5sZW5ndGg8NSYmKGU9QXJyYXkoNi1lLmxlbmd0aCkuam9pbihcIjBcIikrZSksYi5wdXNoKGUpLDE9PT1iLmxlbmd0aCYmYi5wdXNoKFwiLlwiKX1yZXR1cm4gcGFyc2VGbG9hdChiLmpvaW4oXCJcIikpfSxjLmNvbXBhcmU9ZnVuY3Rpb24oYSxiKXthPWEudG9TdHJpbmcoKS5zcGxpdChcIi5cIiksYj1iLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGh8fGM8Yi5sZW5ndGg7YysrKXt2YXIgZD1wYXJzZUludChhW2NdLDEwKSxlPXBhcnNlSW50KGJbY10sMTApO2lmKHdpbmRvdy5pc05hTihkKSYmKGQ9MCksd2luZG93LmlzTmFOKGUpJiYoZT0wKSxlPmQpcmV0dXJuLTE7aWYoZD5lKXJldHVybiAxfXJldHVybiAwfSxiLnZlcnNpb249ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBjKGEpfX0od2luZG93LHdpbmRvdy5saWJ8fCh3aW5kb3cubGliPXt9KSksZnVuY3Rpb24oYSxiKXtiLmVudj1iLmVudnx8e307dmFyIGM9YS5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sXCJcIik7aWYoYi5lbnYucGFyYW1zPXt9LGMpZm9yKHZhciBkPWMuc3BsaXQoXCImXCIpLGU9MDtlPGQubGVuZ3RoO2UrKyl7ZFtlXT1kW2VdLnNwbGl0KFwiPVwiKTt0cnl7Yi5lbnYucGFyYW1zW2RbZV1bMF1dPWRlY29kZVVSSUNvbXBvbmVudChkW2VdWzFdKX1jYXRjaChmKXtiLmVudi5wYXJhbXNbZFtlXVswXV09ZFtlXVsxXX19fSh3aW5kb3csd2luZG93LmxpYnx8KHdpbmRvdy5saWI9e30pKSxmdW5jdGlvbihhLGIpe2IuZW52PWIuZW52fHx7fTt2YXIgYyxkPWEubmF2aWdhdG9yLnVzZXJBZ2VudDtpZihjPWQubWF0Y2goL1dpbmRvd3NcXHNQaG9uZVxccyg/Ok9TXFxzKT8oW1xcZFxcLl0rKS8pKWIuZW52Lm9zPXtuYW1lOlwiV2luZG93cyBQaG9uZVwiLGlzV2luZG93c1Bob25lOiEwLHZlcnNpb246Y1sxXX07ZWxzZSBpZihkLm1hdGNoKC9TYWZhcmkvKSYmKGM9ZC5tYXRjaCgvQW5kcm9pZFtcXHNcXC9dKFtcXGRcXC5dKykvKSkpYi5lbnYub3M9e3ZlcnNpb246Y1sxXX0sZC5tYXRjaCgvTW9iaWxlXFxzK1NhZmFyaS8pPyhiLmVudi5vcy5uYW1lPVwiQW5kcm9pZFwiLGIuZW52Lm9zLmlzQW5kcm9pZD0hMCk6KGIuZW52Lm9zLm5hbWU9XCJBbmRyb2lkUGFkXCIsYi5lbnYub3MuaXNBbmRyb2lkUGFkPSEwKTtlbHNlIGlmKGM9ZC5tYXRjaCgvKGlQaG9uZXxpUGFkfGlQb2QpLykpe3ZhciBlPWNbMV07Yz1kLm1hdGNoKC9PUyAoW1xcZF9cXC5dKykgbGlrZSBNYWMgT1MgWC8pLGIuZW52Lm9zPXtuYW1lOmUsaXNJUGhvbmU6XCJpUGhvbmVcIj09PWV8fFwiaVBvZFwiPT09ZSxpc0lQYWQ6XCJpUGFkXCI9PT1lLGlzSU9TOiEwLHZlcnNpb246Y1sxXS5zcGxpdChcIl9cIikuam9pbihcIi5cIil9fWVsc2UgYi5lbnYub3M9e25hbWU6XCJ1bmtub3duXCIsdmVyc2lvbjpcIjAuMC4wXCJ9O2IudmVyc2lvbiYmKGIuZW52Lm9zLnZlcnNpb249Yi52ZXJzaW9uKGIuZW52Lm9zLnZlcnNpb24pKX0od2luZG93LHdpbmRvdy5saWJ8fCh3aW5kb3cubGliPXt9KSksZnVuY3Rpb24oYSxiKXtiLmVudj1iLmVudnx8e307dmFyIGMsZD1hLm5hdmlnYXRvci51c2VyQWdlbnQ7KGM9ZC5tYXRjaCgvKD86VUNXRUJ8VUNCcm93c2VyXFwvKShbXFxkXFwuXSspLykpP2IuZW52LmJyb3dzZXI9e25hbWU6XCJVQ1wiLGlzVUM6ITAsdmVyc2lvbjpjWzFdfTooYz1kLm1hdGNoKC9NUVFCcm93c2VyXFwvKFtcXGRcXC5dKykvKSk/Yi5lbnYuYnJvd3Nlcj17bmFtZTpcIlFRXCIsaXNRUTohMCx2ZXJzaW9uOmNbMV19OihjPWQubWF0Y2goL0ZpcmVmb3hcXC8oW1xcZFxcLl0rKS8pKT9iLmVudi5icm93c2VyPXtuYW1lOlwiRmlyZWZveFwiLGlzRmlyZWZveDohMCx2ZXJzaW9uOmNbMV19OihjPWQubWF0Y2goL01TSUVcXHMoW1xcZFxcLl0rKS8pKXx8KGM9ZC5tYXRjaCgvSUVNb2JpbGVcXC8oW1xcZFxcLl0rKS8pKT8oYi5lbnYuYnJvd3Nlcj17dmVyc2lvbjpjWzFdfSxkLm1hdGNoKC9JRU1vYmlsZS8pPyhiLmVudi5icm93c2VyLm5hbWU9XCJJRU1vYmlsZVwiLGIuZW52LmJyb3dzZXIuaXNJRU1vYmlsZT0hMCk6KGIuZW52LmJyb3dzZXIubmFtZT1cIklFXCIsYi5lbnYuYnJvd3Nlci5pc0lFPSEwKSxkLm1hdGNoKC9BbmRyb2lkfGlQaG9uZS8pJiYoYi5lbnYuYnJvd3Nlci5pc0lFTGlrZVdlYmtpdD0hMCkpOihjPWQubWF0Y2goLyg/OkNocm9tZXxDcmlPUylcXC8oW1xcZFxcLl0rKS8pKT8oYi5lbnYuYnJvd3Nlcj17bmFtZTpcIkNocm9tZVwiLGlzQ2hyb21lOiEwLHZlcnNpb246Y1sxXX0sZC5tYXRjaCgvVmVyc2lvblxcL1tcXGQrXFwuXStcXHMqQ2hyb21lLykmJihiLmVudi5icm93c2VyLm5hbWU9XCJDaHJvbWUgV2Vidmlld1wiLGIuZW52LmJyb3dzZXIuaXNXZWJ2aWV3PSEwKSk6ZC5tYXRjaCgvU2FmYXJpLykmJihjPWQubWF0Y2goL0FuZHJvaWRbXFxzXFwvXShbXFxkXFwuXSspLykpP2IuZW52LmJyb3dzZXI9e25hbWU6XCJBbmRyb2lkXCIsaXNBbmRyb2lkOiEwLHZlcnNpb246Y1sxXX06ZC5tYXRjaCgvaVBob25lfGlQYWR8aVBvZC8pP2QubWF0Y2goL1NhZmFyaS8pPyhjPWQubWF0Y2goL1ZlcnNpb25cXC8oW1xcZFxcLl0rKS8pLGIuZW52LmJyb3dzZXI9e25hbWU6XCJTYWZhcmlcIixpc1NhZmFyaTohMCx2ZXJzaW9uOmNbMV19KTooYz1kLm1hdGNoKC9PUyAoW1xcZF9cXC5dKykgbGlrZSBNYWMgT1MgWC8pLGIuZW52LmJyb3dzZXI9e25hbWU6XCJpT1MgV2Vidmlld1wiLGlzV2VidmlldzohMCx2ZXJzaW9uOmNbMV0ucmVwbGFjZSgvXFxfL2csXCIuXCIpfSk6Yi5lbnYuYnJvd3Nlcj17bmFtZTpcInVua25vd25cIix2ZXJzaW9uOlwiMC4wLjBcIn0sYi52ZXJzaW9uJiYoYi5lbnYuYnJvd3Nlci52ZXJzaW9uPWIudmVyc2lvbihiLmVudi5icm93c2VyLnZlcnNpb24pKX0od2luZG93LHdpbmRvdy5saWJ8fCh3aW5kb3cubGliPXt9KSksZnVuY3Rpb24oYSxiKXtiLmVudj1iLmVudnx8e307dmFyIGM9YS5uYXZpZ2F0b3IudXNlckFnZW50O2MubWF0Y2goL1dlaWJvL2kpP2IuZW52LnRoaXJkYXBwPXthcHBuYW1lOlwiV2VpYm9cIixpc1dlaWJvOiEwfTpjLm1hdGNoKC9NaWNyb01lc3Nlbmdlci9pKT9iLmVudi50aGlyZGFwcD17YXBwbmFtZTpcIldlaXhpblwiLGlzV2VpeGluOiEwfTpiLmVudi50aGlyZGFwcD0hMX0od2luZG93LHdpbmRvdy5saWJ8fCh3aW5kb3cubGliPXt9KSksZnVuY3Rpb24oYSxiKXtiLmVudj1iLmVudnx8e307dmFyIGMsZCxlPWEubmF2aWdhdG9yLnVzZXJBZ2VudDsoZD1lLm1hdGNoKC9XaW5kVmFuZVtcXC9cXHNdKFtcXGRcXC5cXF9dKykvKSkmJihjPWRbMV0pO3ZhciBmPSExLGc9XCJcIixoPVwiXCIsaT1cIlwiOyhkPWUubWF0Y2goL0FsaUFwcFxcKChbQS1aXFwtXSspXFwvKFtcXGRcXC5dKylcXCkvaSkpJiYoZj0hMCxnPWRbMV0saT1kWzJdLGg9Zy5pbmRleE9mKFwiLVBEXCIpPjA/Yi5lbnYub3MuaXNJT1M/XCJpUGFkXCI6Yi5lbnYub3MuaXNBbmRyb2lkP1wiQW5kcm9pZFBhZFwiOmIuZW52Lm9zLm5hbWU6Yi5lbnYub3MubmFtZSksIWcmJmUuaW5kZXhPZihcIlRCSU9TXCIpPjAmJihnPVwiVEJcIiksZj9iLmVudi5hbGlhcHA9e3dpbmR2YW5lOmIudmVyc2lvbihjfHxcIjAuMC4wXCIpLGFwcG5hbWU6Z3x8XCJ1bmtvd25cIix2ZXJzaW9uOmIudmVyc2lvbihpfHxcIjAuMC4wXCIpLHBsYXRmb3JtOmh8fGIuZW52Lm9zLm5hbWV9OmIuZW52LmFsaWFwcD0hMSxiLmVudi50YW9iYW9BcHA9Yi5lbnYuYWxpYXBwfSh3aW5kb3csd2luZG93LmxpYnx8KHdpbmRvdy5saWI9e30pKTs7bW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cubGliWydlbnYnXTsiLCJpbXBvcnQgJ2VudmQnXG5cbmNvbnN0IGxpYiA9IHdpbmRvdy5saWJcbmNvbnN0IGVudiA9IHtcbiAgcGxhdGZvcm06ICdXZWInLFxuICB3ZWV4VmVyc2lvbjogJzAuMTAuMCcsIC8vIFRPRE86IGdldCB2ZXJzaW9uIGZyb20gcGFja2FnZS5qc29uIChub3Qgc3VyZSlcbiAgdXNlckFnZW50OiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBhcHBOYW1lOiBsaWIuZW52LmFsaWFwcCA/IGxpYi5lbnYuYWxpYXBwLmFwcG5hbWUgOiBuYXZpZ2F0b3IuYXBwTmFtZSxcbiAgYXBwVmVyc2lvbjogbGliLmVudi5hbGlhcHAgPyBsaWIuZW52LmFsaWFwcC52ZXJzaW9uLnZhbCA6IG51bGwsXG4gIG9zTmFtZTogbGliLmVudi5icm93c2VyID8gbGliLmVudi5icm93c2VyLm5hbWUgOiBudWxsLFxuICBvc1ZlcnNpb246IGxpYi5lbnYuYnJvd3NlciA/IGxpYi5lbnYuYnJvd3Nlci52ZXJzaW9uLnZhbCA6IG51bGwsXG4gIGRldmljZU1vZGVsOiBsaWIuZW52Lm9zLm5hbWUgfHwgbnVsbCxcbiAgZGV2aWNlV2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICBkZXZpY2VIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodFxufVxuXG4vLyA3NTAgYnkgZGVmYXVsdCBjdXJyZW50bHlcbmNvbnN0IHNjYWxlID0gMlxuXG5jb25zdCB1bml0cyA9IHtcbiAgUkVNOiAxMiAqIHNjYWxlLFxuICBWVzogZW52LmRldmljZVdpZHRoIC8gMTAwLFxuICBWSDogZW52LmRldmljZUhlaWdodCAvIDEwMCxcbiAgVk1JTjogTWF0aC5taW4oZW52LmRldmljZVdpZHRoLCBlbnYuZGV2aWNlSGVpZ2h0KSAvIDEwMCxcbiAgVk1BWDogTWF0aC5tYXgoZW52LmRldmljZVdpZHRoLCBlbnYuZGV2aWNlSGVpZ2h0KSAvIDEwMCxcbiAgQ006IDk2IC8gMi41NCAqIHNjYWxlLFxuICBNTTogOTYgLyAyNS40ICogc2NhbGUsXG4gIFE6IDk2IC8gMjUuNCAvIDQgKiBzY2FsZSxcbiAgSU46IDk2ICogc2NhbGUsXG4gIFBUOiA5NiAvIDcyICogc2NhbGUsXG4gIFBDOiA5NiAvIDYgKiBzY2FsZSxcbiAgUFg6IHNjYWxlXG59XG5cbk9iamVjdC5mcmVlemUodW5pdHMpXG5PYmplY3QuZnJlZXplKGVudilcblxud2luZG93LkNTU19VTklUID0gdW5pdHNcbndpbmRvdy5XWEVudmlyb25tZW50ID0gZW52XG4iLCJpbXBvcnQgJy4vV1hFbnZpcm9ubWVudCdcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgcmVxdWlyZVdlZXhNb2R1bGUgfSBmcm9tICcuLi9tb2R1bGVzJ1xuXG5jb25zdCB3ZWV4TW9kdWxlcyA9IHt9XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdXRpbHMsXG4gIHVuaXRzOiB3aW5kb3cuQ1NTX1VOSVQsXG4gIGNvbmZpZzoge1xuICAgIGVudjogd2luZG93LldYRW52aXJvbm1lbnQsXG4gICAgYnVuZGxlVXJsOiBsb2NhdGlvbi5ocmVmXG4gIH0sXG5cbiAgcmVxdWlyZU1vZHVsZSAobW9kdWxlTmFtZSkge1xuICAgIGNvbnN0IG1vZHVsZSA9IHJlcXVpcmVXZWV4TW9kdWxlKG1vZHVsZU5hbWUpXG4gICAgaWYgKG1vZHVsZSkge1xuICAgICAgcmV0dXJuIG1vZHVsZVxuICAgIH1cbiAgICByZXR1cm4gd2VleE1vZHVsZXNbbW9kdWxlTmFtZV1cbiAgfSxcblxuICByZWdpc3Rlck1vZHVsZSAoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyQXBpTW9kdWxlKC4uLmFyZ3MpXG4gIH0sXG5cbiAgLy8gQGRlcHJlY2F0ZWRcbiAgcmVxdWlyZSAoLi4uYXJncykge1xuICAgIGNvbnNvbGUubG9nKGBbVnVlIFJlbmRlcl0gXCJ3ZWV4LnJlcXVpcmVcIiBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIFwid2VleC5yZXF1aXJlTW9kdWxlXCIgaW5zdGVhZC5gKVxuICAgIHJldHVybiB0aGlzLnJlcXVpcmVNb2R1bGUoLi4uYXJncylcbiAgfSxcblxuICAvLyBAZGVwcmVjYXRlZFxuICAvLyBUT0RPOiByZW5hbWUgdG8gcmVnaXN0ZXJNb2R1bGVcbiAgcmVnaXN0ZXJBcGlNb2R1bGUgKG5hbWUsIG1vZHVsZSwgbWV0YSkge1xuICAgIGlmICghd2VleE1vZHVsZXNbbmFtZV0pIHtcbiAgICAgIHdlZXhNb2R1bGVzW25hbWVdID0ge31cbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbW9kdWxlKSB7XG4gICAgICBpZiAobW9kdWxlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgd2VleE1vZHVsZXNbbmFtZV1ba2V5XSA9IHV0aWxzLmJpbmQobW9kdWxlW2tleV0sIHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8vIEBkZXByZWNhdGVkXG4gIGdldFJvb3QgKCkge30sXG5cbiAgLy8gQGRlcHJlY2F0ZWRcbiAgc2VuZGVyOiB7XG4gICAgcGVyZm9ybUNhbGxiYWNrIChjYWxsYmFjaywgZGF0YSwga2VlcEFsaXZlKSB7XG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhkYXRhKVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gIH0sXG5cbiAgLy8gQGRlcHJlY2F0ZWRcbiAgaW5zdGFsbCAobW9kdWxlKSB7XG4gICAgbW9kdWxlLmluaXQodGhpcylcbiAgfVxufVxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvcmVzZXQuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvY29tcG9uZW50cy5jc3MnXG5cbi8vIGltcG9ydCAnbGF6eWltZydcbmltcG9ydCAnLi4vLi4vYnJvd3Nlci9yZW5kZXIvZ2VzdHVyZSdcblxuaW1wb3J0ICcuLi8uLi8uLi9zaGFyZWQvYXJyYXlGcm9tJ1xuaW1wb3J0ICcuLi8uLi8uLi9zaGFyZWQvb2JqZWN0QXNzaWduJ1xuaW1wb3J0ICcuLi8uLi8uLi9zaGFyZWQvb2JqZWN0U2V0UHJvdG90eXBlT2YnXG5cbmltcG9ydCAnY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJ1xuaW1wb3J0ICdjb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcidcbmltcG9ydCAnY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnXG5pbXBvcnQgJ2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZSdcblxuZXhwb3J0ICogZnJvbSAnLi92aWV3cG9ydCdcblxuaW1wb3J0IHsgaW5pdCB9IGZyb20gJy4uL21vZHVsZXMnXG5pbXBvcnQgd2VleCBmcm9tICcuL3dlZXgnXG5cbmluaXQod2VleClcblxud2luZG93LndlZXggPSB3ZWV4XG53aW5kb3cuZ2xvYmFsID0gd2luZG93XG4iLCJpbXBvcnQgeyB3YXRjaEFwcGVhciB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCBzdXBwb3J0ZWRFdmVudHMgPSBbXG4gICdjbGljaycsICdsb25ncHJlc3MnLCAnYXBwZWFyJywgJ2Rpc2FwcGVhcidcbiAgLy8gJ3RvdWNoc3RhcnQnLCAndG91Y2htb3ZlJywgJ3RvdWNoZW5kJ1xuXVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1vdW50ZWQgKCkge1xuICAgIHdhdGNoQXBwZWFyKHRoaXMpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNyZWF0ZUV2ZW50TWFwIChleHRyYXMgPSBbXSkge1xuICAgICAgY29uc3QgZXZlbnRNYXAgPSB7fVxuICAgICAgc3VwcG9ydGVkRXZlbnRzLmNvbmNhdChleHRyYXMpLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICAgIGV2ZW50TWFwW25hbWVdID0gZXZlbnQgPT4gdGhpcy4kZW1pdChuYW1lLCBldmVudClcbiAgICAgIH0pXG4gICAgICByZXR1cm4gZXZlbnRNYXBcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgRXZlbnQuXG4gICAgICogQHBhcmFtIHtET01TdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICAgKi9cbiAgICBjcmVhdGVFdmVudCAoY29udGV4dCwgdHlwZSwgcHJvcHMpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KHR5cGUsIHsgYnViYmxlczogZmFsc2UgfSlcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgIGV4dGVuZChldmVudCwgcHJvcHMpXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShldmVudCwgJ3RhcmdldCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGNvbnRleHQgfHwgbnVsbFxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIGV2ZW50XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBDdXN0b20gRXZlbnQuXG4gICAgICogQHBhcmFtIHtET01TdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICAgKi9cbiAgICBjcmVhdGVDdXN0b21FdmVudCAoY29udGV4dCwgdHlwZSwgcHJvcHMpIHtcbiAgICAgIC8vIGNvbXBhdGliaWxpdHk6IGh0dHA6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPWN1c3RvbWV2ZW50XG4gICAgICAvLyBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlKVxuICAgICAgY29uc3QgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKVxuICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGZhbHNlLCB0cnVlLCB7fSlcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAgIGV4dGVuZChldmVudCwgcHJvcHMpXG5cbiAgICAgIC8vIFRPRE86IGV2ZW50LnRhcmdldCBpcyByZWFkb25seVxuICAgICAgLy8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50LCAndGFyZ2V0Jywge1xuICAgICAgLy8gICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgLy8gICB2YWx1ZTogY29udGV4dCB8fCBudWxsXG4gICAgICAvLyB9KVxuXG4gICAgICByZXR1cm4gZXZlbnRcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgYW5kIGVtaXQgbG9uZ3ByZXNzIGV2ZW50LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIGhhbmRsZUxvbmdQcmVzcyAoY29udGV4dCwgZXZlbnQpIHtcbiAgICAgIC8vIFRPRE86IGNoZWNrIHRoZSBjb25kaXRpb25cbiAgICAgIGNvbnRleHQuJGVtaXQoJ2xvbmdwcmVzcycsIGNvbnRleHQuY3JlYXRlQ3VzdG9tRXZlbnQoJ2xvbmdwcmVzcycpKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBhbmQgZW1pdCBhcHBlYXIgZXZlbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50XG4gICAgICovXG4gICAgaGFuZGxlQXBwZWFyIChjb250ZXh0LCBldmVudCkge1xuICAgICAgLy8gVE9ETzogY2hlY2sgdGhlIGNvbmRpdGlvblxuICAgICAgY29udGV4dC4kZW1pdCgnYXBwZWFyJywgY29udGV4dC5jcmVhdGVDdXN0b21FdmVudCgnYXBwZWFyJykpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGFuZCBlbWl0IGRpc2FwcGVhciBldmVudC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBoYW5kRGlzYXBwZWFyIChjb250ZXh0LCBldmVudCkge1xuICAgICAgLy8gVE9ETzogY2hlY2sgdGhlIGNvbmRpdGlvblxuICAgICAgY29udGV4dC4kZW1pdCgnZGlzYXBwZWFyJywgY29udGV4dC5jcmVhdGVDdXN0b21FdmVudCgnZGlzYXBwZWFyJykpXG4gICAgfVxuICB9XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZUxheW91dCAoKSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy4kcmVmcy53cmFwcGVyXG4gICAgICBpZiAod3JhcHBlcikge1xuICAgICAgICBjb25zdCByZWN0ID0gd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICB0aGlzLndyYXBwZXJXaWR0aCA9IHJlY3Qud2lkdGhcbiAgICAgICAgdGhpcy53cmFwcGVySGVpZ2h0ID0gcmVjdC5oZWlnaHRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlU2Nyb2xsIChldmVudCkge1xuICAgICAgaWYgKHRoaXMucmVhY2hCb3R0b20oKSkge1xuICAgICAgICB0aGlzLiRlbWl0KCdsb2FkbW9yZScsIGV2ZW50KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICByZWFjaFRvcCAoKSB7XG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy4kcmVmcy53cmFwcGVyXG4gICAgICByZXR1cm4gKCEhd3JhcHBlcikgJiYgKHdyYXBwZXIuc2Nyb2xsVG9wIDw9IDApXG4gICAgfSxcblxuICAgIHJlYWNoQm90dG9tICgpIHtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLiRyZWZzLndyYXBwZXJcbiAgICAgIGNvbnN0IGlubmVyID0gdGhpcy4kcmVmcy5pbm5lclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gTnVtYmVyKHRoaXMubG9hZG1vcmVvZmZzZXQpIHx8IDBcblxuICAgICAgaWYgKHdyYXBwZXIgJiYgaW5uZXIpIHtcbiAgICAgICAgY29uc3QgaW5uZXJIZWlnaHQgPSBpbm5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgICAgICAgY29uc3Qgd3JhcHBlckhlaWdodCA9IHdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICAgIHJldHVybiB3cmFwcGVyLnNjcm9sbFRvcCA+PSBpbm5lckhlaWdodCAtIHdyYXBwZXJIZWlnaHQgLSBvZmZzZXRcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxufVxuIiwiXG4vKipcbiAqIFZhbGlkYXRlIHRoZSBDU1MgY29sb3IgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0NTU0NvbG9yICh2YWx1ZSkge1xuICByZXR1cm4gL15bYS16XSskL2kudGVzdCh2YWx1ZSkgLy8gbWF0Y2ggY29sb3IgbmFtZVxuICAgIHx8IC9eIyhbYS1mMC05XXszfSl7MSwyfSQvaS50ZXN0KHZhbHVlKSAvLyBtYXRjaCAjQUJDREVGXG4gICAgfHwgL15yZ2JcXHMqXFwoKFxccypbMC05Ll0rXFxzKiwpezJ9XFxzKlswLTkuXStcXHMqXFwpL2kudGVzdCh2YWx1ZSkgLy8gbWF0Y2ggcmdiKDAsMCwwKVxuICAgIHx8IC9ecmdiYVxccypcXCgoXFxzKlswLTkuXStcXHMqLCl7M31cXHMqWzAtOS5dK1xccypcXCkvaS50ZXN0KHZhbHVlKSAvLyBtYXRjaCByZ2JhKDAsMCwwLDApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NTU0xlbmd0aCAodmFsdWUpIHtcbiAgcmV0dXJuIC9eWystXT9bMC05XSsuPyhbMC05XSspPyhweHwlKT8kLy50ZXN0KFN0cmluZyh2YWx1ZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3NpdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIFsnYWJzb2x1dGUnLCAncmVsYXRpdmUnLCAnZml4ZWQnLCAnc3RpY2t5J10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGFjaXR5ICh2YWx1ZSkge1xuICBjb25zdCBjb3VudCA9IHBhcnNlRmxvYXQodmFsdWUpXG4gIHJldHVybiBjb3VudCA+PSAwICYmIGNvdW50IDw9IDFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXkgKHZhbHVlKSB7XG4gIHJldHVybiBbJ2ZsZXgnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsZXhEaXJlY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBbJ3JvdycsICdjb2x1bW4nXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGp1c3RpZnlDb250ZW50ICh2YWx1ZSkge1xuICByZXR1cm4gWydmbGV4LXN0YXJ0JywgJ2ZsZXgtZW5kJywgJ2NlbnRlcicsICdzcGFjZS1iZXR3ZWVuJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbGlnbkl0ZW1zICh2YWx1ZSkge1xuICByZXR1cm4gWydzdHJldGNoJywgJ2ZsZXgtc3RhcnQnLCAnZmxleC1lbmQnLCAnY2VudGVyJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGV4ICh2YWx1ZSkge1xuICByZXR1cm4gL15cXGR7MSwzfSQvLnRlc3QoU3RyaW5nKHZhbHVlKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvbnRTdHlsZSAodmFsdWUpIHtcbiAgcmV0dXJuIFsnbm9ybWFsJywgJ2l0YWxpYycsICdvYmxpcXVlJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb250V2VpZ2h0ICh2YWx1ZSkge1xuICByZXR1cm4gWydub3JtYWwnLCAnYm9sZCcsICdsaWdodCcsICdib2xkZXInLCAnbGlnaHRlciddLmluZGV4T2YodmFsdWUpICE9PSAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dERlY29yYXRpb24gKHZhbHVlKSB7XG4gIHJldHVybiBbJ25vbmUnLCAndW5kZXJsaW5lJywgJ2xpbmUtdGhyb3VnaCddLmluZGV4T2YodmFsdWUpICE9PSAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dEFsaWduICh2YWx1ZSkge1xuICByZXR1cm4gWydsZWZ0JywgJ2NlbnRlcicsICdyaWdodCddLmluZGV4T2YodmFsdWUpICE9PSAtMVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb3ZlcmZsb3cgKHZhbHVlKSB7XG4gIHJldHVybiBbJ3Zpc2libGUnLCAnaGlkZGVuJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0T3ZlcmZsb3cgKHZhbHVlKSB7XG4gIHJldHVybiBbJ2NsaXAnLCAnZWxsaXBzaXMnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbn1cblxuLyoqXG4gKiBDb21tb24gc3R5bGUgdmFsaWRhdG9yLlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tb24gKHZhbHVlLCBrZXkpIHtcbiAgaWYgKC9eW1xcdy1dKmNvbG9yJC8udGVzdChTdHJpbmcoa2V5KSkpIHtcbiAgICByZXR1cm4gaXNDU1NDb2xvcih2YWx1ZSlcbiAgfVxuXG4gIC8vIGNoZWNrIHdpZHRoIGFuZCBoZWlnaHRcbiAgaWYgKC9eKHdpZHRofGhlaWdodCkkLy50ZXN0KFN0cmluZyhrZXkpKSkge1xuICAgIHJldHVybiBpc0NTU0xlbmd0aCh2YWx1ZSlcbiAgfVxuXG4gIC8vIGNoZWNrIHBvc3Rpb25zXG4gIGlmICgvXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC8udGVzdChTdHJpbmcoa2V5KSkpIHtcbiAgICByZXR1cm4gaXNDU1NMZW5ndGgodmFsdWUpXG4gIH1cblxuICAvLyBjaGVja291dCBib3JkZXItcmFkaXVzXG4gIGlmICgvXmJvcmRlci0oKHRvcHxyaWdodHxib3R0b218bGVmdCktKXswLDJ9KHdpZHRofHJhZGl1cykkLy50ZXN0KFN0cmluZyhrZXkpKSkge1xuICAgIHJldHVybiBpc0NTU0xlbmd0aCh2YWx1ZSlcbiAgfVxuXG4gIC8vIGNoZWNrIGJvcmRlci1zdHlsZVxuICBpZiAoL2JvcmRlci0oKHRvcHxyaWdodHxib3R0b218bGVmdCktKT9zdHlsZS8udGVzdChTdHJpbmcoa2V5KSkpIHtcbiAgICByZXR1cm4gWydzb2xpZCcsICdkYXNoZWQnLCAnZG90dGVkJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gIH1cblxuICAvLyBjaGVjayBtYXJnaW5zIGFuZCBwYWRkaW5nc1xuICBpZiAoL14oKG1hcmdpbnxwYWRkaW5nKS0pPyh0b3B8cmlnaHR8Ym90dG9tfGxlZnQpLy50ZXN0KFN0cmluZyhrZXkpKSkge1xuICAgIHJldHVybiBpc0NTU0xlbmd0aCh2YWx1ZSlcbiAgfVxuXG4gIHN3aXRjaCAoU3RyaW5nKGtleSkpIHtcbiAgICBjYXNlICdmb250LXNpemUnOiByZXR1cm4gaXNDU1NMZW5ndGgodmFsdWUpXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuIiwiXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcgKHZhbHVlKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBTdHJpbmddJ1xufVxuIiwiY29uc3Qgc3VwcG9ydGVkUHJvcGVydGllcyA9IHtcbiAgJ0Bjb21tb24nOiBbXG4gICAgJ2lkJywgJ3JlZicsICdzdHlsZScsICdjbGFzcycsICdhcHBlbmQnXG4gIF1cbn1cblxuY29uc3Qgc3VwcG9ydGVkU3R5bGVzID0ge1xuICAnKic6IFtcbiAgICAnQGJveC1tb2RlbCcsICdAYm9yZGVyJywgJ0Bwb3NpdGlvbicsICdAZmxleGJveCcsICdAZm9udCcsICdAdGV4dCcsICdAYmcnLFxuICAgICdsaW5lcycsICdpdGVtLXNpemUnLCAnaXRlbS1jb2xvcicsICdpdGVtLXNlbGVjdGVkLWNvbG9yJ1xuICBdLFxuICAnQGJveC1tb2RlbCc6IFtcbiAgICAnd2lkdGgnLCAnaGVpZ2h0JywgJ3Bvc2l0aW9uJyxcbiAgICAncGFkZGluZy10b3AnLCAncGFkZGluZy1ib3R0b20nLCAncGFkZGluZy1sZWZ0JywgJ3BhZGRpbmctcmlnaHQnLFxuICAgICdtYXJnaW4tdG9wJywgJ21hcmdpbi1ib3R0b20nLCAnbWFyZ2luLWxlZnQnLCAnbWFyZ2luLXJpZ2h0J1xuICBdLFxuICAnQGJvcmRlcic6IFtcbiAgICAnYm9yZGVyLXN0eWxlJywgJ2JvcmRlci13aWR0aCcsICdib3JkZXItY29sb3InLCAnYm9yZGVyLXJhZGl1cycsXG4gICAgJ2JvcmRlci10b3Atc3R5bGUnLCAnYm9yZGVyLXJpZ2h0LXN0eWxlJywgJ2JvcmRlci1ib3R0b20tc3R5bGUnLCAnYm9yZGVyLWxlZnQtc3R5bGUnLFxuICAgICdib3JkZXItdG9wLXdpZHRoJywgJ2JvcmRlci1yaWdodC13aWR0aCcsICdib3JkZXItYm90dG9tLXdpZHRoJywgJ2JvcmRlci1sZWZ0LXdpZHRoJyxcbiAgICAnYm9yZGVyLXRvcC1jb2xvcicsICdib3JkZXItcmlnaHQtY29sb3InLCAnYm9yZGVyLWJvdHRvbS1jb2xvcicsICdib3JkZXItbGVmdC1jb2xvcicsXG4gICAgJ2JvcmRlci10b3AtbGVmdC1yYWRpdXMnLCAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnLCAnYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cycsICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cydcbiAgXSxcbiAgJ0Bwb3NpdGlvbic6IFsncG9zaXRpb24nLCAndG9wJywgJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJ10sXG4gICdAZmxleGJveCc6IFtcbiAgICAnZmxleCcsICdmbGV4LWRpcmVjdGlvbicsICdqdXN0aWZ5LWNvbnRlbnQnLCAnYWxpZ24taXRlbXMnLCAnZmxleC13cmFwJ1xuICBdLFxuICAnQGZvbnQnOiBbJ2ZvbnQtc2l6ZScsICdmb250LXdlaWdodCcsICdmb250LXN0eWxlJywgJ2ZvbnQtZmFtaWx5JywgJ2xpbmUtaGVpZ2h0J10sXG4gICdAdGV4dCc6IFsndGV4dC1hbGlnbicsICd0ZXh0LWRlY29yYXRpb24nLCAndGV4dC1vdmVyZmxvdycsICdjb2xvciddLFxuICAnQGJnJzogWydiYWNrZ3JvdW5kLWNvbG9yJywgJ29wYWNpdHknXSxcblxuICAnYSc6IFsnQGJveC1tb2RlbCcsICdAYm9yZGVyJywgJ0Bwb3NpdGlvbicsICdAZmxleGJveCcsICdAYmcnXSxcbiAgJ2Rpdic6IFsnQGJveC1tb2RlbCcsICdAYm9yZGVyJywgJ0Bwb3NpdGlvbicsICdAZmxleGJveCcsICdAYmcnXSxcbiAgJ3RleHQnOiBbJ0Bib3gtbW9kZWwnLCAnQGJvcmRlcicsICdAcG9zaXRpb24nLCAnQGZvbnQnLCAnQHRleHQnLCAnQGJnJywgJ2xpbmVzJ10sXG4gICdzbGlkZXInOiBbJ0Bib3gtbW9kZWwnLCAnQGJvcmRlcicsICdAcG9zaXRpb24nLCAnQGZsZXhib3gnLCAnQGJnJ10sXG4gICdzd2l0Y2gnOiBbJ0Bib3gtbW9kZWwnLCAnQGJvcmRlcicsICdAcG9zaXRpb24nLCAnQGZsZXhib3gnLCAnQGJnJ10sXG4gICdpbmRpY2F0b3InOiBbJ0Bib3gtbW9kZWwnLCAnQGJvcmRlcicsICdAcG9zaXRpb24nLCAnQGZsZXhib3gnLCAnQGJnJywgJ2l0ZW0tc2l6ZScsICdpdGVtLWNvbG9yJywgJ2l0ZW0tc2VsZWN0ZWQtY29sb3InXSxcbiAgJ2lucHV0JzogWydAYm94LW1vZGVsJywgJ0Bib3JkZXInLCAnQHBvc2l0aW9uJywgJ0Bmb250JywgJ0B0ZXh0JywgJ0BiZyddLFxuICAndGV4dGFyZWEnOiBbJ0Bib3gtbW9kZWwnLCAnQGJvcmRlcicsICdAcG9zaXRpb24nLCAnQGZvbnQnLCAnQHRleHQnLCAnQGJnJywgJ3Jvd3MnXSxcbiAgJ3Njcm9sbGVyJzogWydAYm94LW1vZGVsJywgJ0Bib3JkZXInLCAnQHBvc2l0aW9uJywgJ0BmbGV4Ym94JywgJ0BiZyddLFxuICAnbG9hZGluZyc6IFsnQGJveC1tb2RlbCcsICdAYm9yZGVyJywgJ0Bwb3NpdGlvbicsICdAZmxleGJveCcsICdAYmcnXSxcbiAgJ3JlZnJlc2gnOiBbJ0Bib3gtbW9kZWwnLCAnQGJvcmRlcicsICdAcG9zaXRpb24nLCAnQGZsZXhib3gnLCAnQGJnJ10sXG4gICdsaXN0JzogWydAYm94LW1vZGVsJywgJ0Bib3JkZXInLCAnQHBvc2l0aW9uJywgJ0BmbGV4Ym94JywgJ0BiZyddLFxuICAnY2VsbCc6IFsnQGJveC1tb2RlbCcsICdAYm9yZGVyJywgJ0Bwb3NpdGlvbicsICdAZmxleGJveCcsICdAYmcnXSxcbiAgJ3ZpZGVvJzogWydAYm94LW1vZGVsJywgJ0Bib3JkZXInLCAnQHBvc2l0aW9uJywgJ0BmbGV4Ym94JywgJ0BiZyddLFxuICAnd2ViJzogWydAYm94LW1vZGVsJywgJ0Bib3JkZXInLCAnQHBvc2l0aW9uJywgJ0BmbGV4Ym94JywgJ0BiZyddXG59XG5cbi8qKlxuICogRmxhdHRlbiBhIG11bHRpcGxlIGRpbWVuc2lvbiBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4gKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGRpc3QsIGl0ZW0pID0+IHtcbiAgICByZXR1cm4gZGlzdC5jb25jYXQoQXJyYXkuaXNBcnJheShpdGVtKSA/IGZsYXR0ZW4oaXRlbSkgOiBpdGVtKVxuICB9LCBbXSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgdmFsdWUgaXMgaW4gdGhlIGxpc3QuXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gZGljdFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tTdXBwb3J0ZWQgKHR5cGUsIHZhbHVlLCBkaWN0ID0ge30pIHtcbiAgY29uc3QgdGFnVHlwZSA9IGRpY3RbdHlwZV0gPyB0eXBlIDogJyonXG4gIGlmIChBcnJheS5pc0FycmF5KGRpY3RbdGFnVHlwZV0pKSB7XG4gICAgcmV0dXJuIGZsYXR0ZW4oZGljdFt0YWdUeXBlXS5tYXAoayA9PiBkaWN0W2tdIHx8IGspKS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgc3R5bGUgaXMgc3VwcG9ydGVkIGZvciB0aGUgY29tcG9uZW50LlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHlsZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdXBwb3J0ZWRTdHlsZSAodHlwZSwgc3R5bGUpIHtcbiAgcmV0dXJuIGNoZWNrU3VwcG9ydGVkKHR5cGUsIHN0eWxlLCBzdXBwb3J0ZWRTdHlsZXMpXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCBmb3IgdGhlIGNvbXBvbmVudC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3VwcG9ydGVkUHJvcCAodHlwZSwgcHJvcCkge1xuICByZXR1cm4gY2hlY2tTdXBwb3J0ZWQodHlwZSwgcHJvcCwgc3VwcG9ydGVkUHJvcGVydGllcylcbn1cbiIsImltcG9ydCAqIGFzIHN0eWxlVmFsaWRhdG9yIGZyb20gJy4vc3R5bGUnXG5pbXBvcnQgKiBhcyBwcm9wVmFsaWRhdG9yIGZyb20gJy4vcHJvcCdcbmltcG9ydCB7IGh5cGhlbmF0ZSwgY2FtZWxpemUsIGlzUGxhaW5PYmplY3QgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzU3VwcG9ydGVkU3R5bGUgfSBmcm9tICcuL2NoZWNrJ1xuXG5sZXQgb25mYWlsID0gZnVuY3Rpb24gbm9wZSAoKSB7fVxubGV0IHNob3dDb25zb2xlID0gdHJ1ZVxuXG5mdW5jdGlvbiB3YXJuICguLi5hcmdzKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBhcmdzLmpvaW4oJyAnKVxuICBzaG93Q29uc29sZSAmJiBjb25zb2xlLndhcm4obWVzc2FnZSlcbiAgb25mYWlsKG1lc3NhZ2UpXG4gIHJldHVybiBtZXNzYWdlXG59XG5cbi8qKlxuICogQ29uZmlndXJlIHRoZSB2YWxpZGF0b3IuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlIChjb25maWdzID0ge30pIHtcbiAgc2hvd0NvbnNvbGUgPSAhY29uZmlncy5zaWxlbnRcbiAgaWYgKHR5cGVvZiBjb25maWdzLm9uZmFpbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9uZmFpbCA9IGNvbmZpZ3Mub25mYWlsXG4gIH1cbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGUgc3R5bGVzIG9mIHRoZSBjb21wb25lbnQuXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtPYmplY3R9IHN0eWxlc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTdHlsZXMgKHR5cGUsIHN0eWxlcyA9IHt9KSB7XG4gIGxldCBpc1ZhbGlkID0gdHJ1ZVxuXG4gIGlmIChpc1BsYWluT2JqZWN0KHR5cGUpKSB7XG4gICAgc3R5bGVzID0gdHlwZVxuICAgIHR5cGUgPSAnKidcbiAgfVxuXG4gIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuICAgIGlmICghaXNTdXBwb3J0ZWRTdHlsZSh0eXBlLCBoeXBoZW5hdGUoa2V5KSkpIHtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgd2FybigodHlwZSA9PT0gJyonKVxuICAgICAgICA/IGBbU3R5bGUgVmFsaWRhdG9yXSBOb3Qgc3VwcG9ydCB0byB1c2UgdGhlIFwiJHtrZXl9XCIgc3R5bGUgcHJvcGVydHkuYFxuICAgICAgICA6IGBbU3R5bGUgVmFsaWRhdG9yXSA8JHt0eXBlfT4gaXMgbm90IHN1cHBvcnQgdG8gdXNlIHRoZSBcIiR7a2V5fVwiIHN0eWxlIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCB2YWxpZGF0b3IgPSBzdHlsZVZhbGlkYXRvcltjYW1lbGl6ZShrZXkpXSB8fCBzdHlsZVZhbGlkYXRvci5jb21tb25cbiAgICAgIGlmICghdmFsaWRhdG9yKHN0eWxlc1trZXldLCBoeXBoZW5hdGUoa2V5KSkpIHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgIHdhcm4oYFtTdHlsZSBWYWxpZGF0b3JdIFRoZSBzdHlsZSBcIiR7a2V5fVwiIGlzIG5vdCBzdXBwb3J0IHRoZSBcIiR7c3R5bGVzW2tleV19XCIgdmFsdWUuYClcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlzVmFsaWRcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgY29tcG9uZW50LlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQcm9wcyAodHlwZSwgcHJvcHMgPSB7fSkge1xuICBsZXQgaXNWYWxpZCA9IHRydWVcbiAgZm9yIChjb25zdCBrZXkgaW4gcHJvcHMpIHtcbiAgICBjb25zdCB2YWxpZGF0b3IgPSBwcm9wVmFsaWRhdG9yW2NhbWVsaXplKGtleSldXG4gICAgaWYgKHZhbGlkYXRvciAmJiAhdmFsaWRhdG9yKHByb3BzW2tleV0pKSB7XG4gICAgICBpc1ZhbGlkID0gZmFsc2VcbiAgICAgIHdhcm4oYFtQcm9wZXJ0eSBWYWxpZGF0b3JdIFRoZSBwcm9wZXJ0eSBcIiR7a2V5fVwiIGlzIG5vdCBzdXBwb3J0IHRoZSBcIiR7cHJvcHNba2V5XX1cIiB2YWx1ZS5gKVxuICAgIH1cbiAgfVxuICByZXR1cm4gaXNWYWxpZFxufVxuIiwiaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4uL21peGlucydcbmltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW2Jhc2VdLFxuICBwcm9wczoge1xuICAgIGNoZWNrZWQ6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfVxuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNDaGVja2VkOiAodGhpcy5jaGVja2VkICE9PSAnZmFsc2UnICYmIHRoaXMuY2hlY2tlZCAhPT0gZmFsc2UpLFxuICAgICAgaXNEaXNhYmxlZDogKHRoaXMuZGlzYWJsZWQgIT09ICdmYWxzZScgJiYgdGhpcy5kaXNhYmxlZCAhPT0gZmFsc2UpXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHdyYXBwZXJDbGFzcyAoKSB7XG4gICAgICBjb25zdCBjbGFzc0FycmF5ID0gWyd3ZWV4LXN3aXRjaCddXG4gICAgICB0aGlzLmlzQ2hlY2tlZCAmJiBjbGFzc0FycmF5LnB1c2goJ3dlZXgtc3dpdGNoLWNoZWNrZWQnKVxuICAgICAgdGhpcy5pc0Rpc2FibGVkICYmIGNsYXNzQXJyYXkucHVzaCgnd2VleC1zd2l0Y2gtZGlzYWJsZWQnKVxuICAgICAgcmV0dXJuIGNsYXNzQXJyYXkuam9pbignICcpXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgdG9nZ2xlICgpIHtcbiAgICAgIC8vIFRPRE86IGhhbmRsZSB0aGUgZXZlbnRzXG4gICAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9ICF0aGlzLmlzQ2hlY2tlZFxuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB7IHZhbHVlOiB0aGlzLmlzQ2hlY2tlZCB9KVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdmFsaWRhdGVTdHlsZXMoJ3N3aXRjaCcsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnc3dpdGNoJyB9LFxuICAgICAgc3RhdGljQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzLFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50KVxuICAgICAgICAgIHRoaXMudG9nZ2xlKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIFtjcmVhdGVFbGVtZW50KCdzbWFsbCcsIHsgc3RhdGljQ2xhc3M6ICd3ZWV4LXN3aXRjaC1pbm5lcicgfSldKVxuICB9XG59XG4iLCJpbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi4vbWl4aW5zJ1xuaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi92YWxpZGF0b3InXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbYmFzZV0sXG4gIHByb3BzOiB7XG4gICAgaHJlZjogU3RyaW5nXG4gIH0sXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICB2YWxpZGF0ZVN0eWxlcygnYScsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaHRtbDphJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgJ3dlZXgtdHlwZSc6ICdhJyxcbiAgICAgICAgaHJlZjogdGhpcy5ocmVmXG4gICAgICB9LFxuICAgICAgb246IHRoaXMuY3JlYXRlRXZlbnRNYXAoKSxcbiAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1hJ1xuICAgIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gIH1cbn1cbiIsImltcG9ydCB7IGJhc2UgfSBmcm9tICcuLi9taXhpbnMnXG5pbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcblxuZnVuY3Rpb24gdHJpbVRleHROb2RlIChjaGlsZHJlbikge1xuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICByZXR1cm4gY2hpbGRyZW4uZmlsdGVyKHZub2RlID0+ICEhdm5vZGUudGFnKVxuICB9XG4gIHJldHVybiBjaGlsZHJlblxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW2Jhc2VdLFxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdmFsaWRhdGVTdHlsZXMoJ2RpdicsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaHRtbDpkaXYnLCB7XG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2RpdicgfSxcbiAgICAgIG9uOiB0aGlzLmNyZWF0ZUV2ZW50TWFwKCksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtZGl2J1xuICAgIH0sIHRyaW1UZXh0Tm9kZSh0aGlzLiRzbG90cy5kZWZhdWx0KSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4uL21peGlucydcbmltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW2Jhc2VdLFxuICBwcm9wczoge1xuICAgIHNyYzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIHJlc2l6ZToge1xuICAgICAgdmFsaWRhdG9yICh2YWx1ZSkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICByZXR1cm4gWydjb3ZlcicsICdjb250YWluJywgJ3N0cmV0Y2gnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCdpbWFnZScsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICB9XG5cbiAgICBsZXQgY3NzVGV4dCA9IGBiYWNrZ3JvdW5kLWltYWdlOnVybChcIiR7dGhpcy5zcmN9XCIpO2BcblxuICAgIC8vIGNvbXBhdGliaWxpdHk6IGh0dHA6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPWJhY2tncm91bmQtc2l6ZVxuICAgIGNzc1RleHQgKz0gKHRoaXMucmVzaXplICYmIHRoaXMucmVzaXplICE9PSAnc3RyZXRjaCcpXG4gICAgICA/IGBiYWNrZ3JvdW5kLXNpemU6ICR7dGhpcy5yZXNpemV9O2BcbiAgICAgIDogYGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO2BcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdmaWd1cmUnLCB7XG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2ltYWdlJyB9LFxuICAgICAgb246IHRoaXMuY3JlYXRlRXZlbnRNYXAoWydsb2FkJ10pLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWltYWdlJyxcbiAgICAgIHN0eWxlOiBjc3NUZXh0XG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4uL21peGlucydcbmltcG9ydCB7IGV4dGVuZCwgbWFwRm9ybUV2ZW50cyB9IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgdmFsaWRhdGVTdHlsZXMgfSBmcm9tICcuLi92YWxpZGF0b3InXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbYmFzZV0sXG4gIHByb3BzOiB7XG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RleHQnLFxuICAgICAgdmFsaWRhdG9yICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICdlbWFpbCcsICdudW1iZXInLCAncGFzc3dvcmQnLCAnc2VhcmNoJywgJ3RlbCcsICd0ZXh0JywgJ3VybCdcbiAgICAgICAgICAvLyB1bnN1cHBvcnRlZCB0eXBlOlxuICAgICAgICAgIC8vIGJ1dHRvbiwgY2hlY2tib3gsIGNvbG9yLCBkYXRlLCBkYXRldGltZSwgZmlsZSwgaGlkZGVuLCBpbWFnZSxcbiAgICAgICAgICAvLyBtb250aCwgcmFkaW8sIHJhbmdlLCByZXNldCwgc3VibWl0LCB0aW1lLCB3ZWVrLFxuICAgICAgICBdLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgfVxuICAgIH0sXG4gICAgdmFsdWU6IFN0cmluZyxcbiAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuICAgIGRpc2FibGVkOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhdXRvZm9jdXM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIG1heGxlbmd0aDogW1N0cmluZywgTnVtYmVyXVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICB2YWxpZGF0ZVN0eWxlcygnaW5wdXQnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2h0bWw6aW5wdXQnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICAnd2VleC10eXBlJzogJ2lucHV0JyxcbiAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgZGlzYWJsZWQ6ICh0aGlzLmRpc2FibGVkICE9PSAnZmFsc2UnICYmIHRoaXMuZGlzYWJsZWQgIT09IGZhbHNlKSxcbiAgICAgICAgYXV0b2ZvY3VzOiAodGhpcy5hdXRvZm9jdXMgIT09ICdmYWxzZScgJiYgdGhpcy5hdXRvZm9jdXMgIT09IGZhbHNlKSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXG4gICAgICAgIG1heGxlbmd0aDogdGhpcy5tYXhsZW5ndGhcbiAgICAgIH0sXG4gICAgICBvbjogZXh0ZW5kKHRoaXMuY3JlYXRlRXZlbnRNYXAoKSwgbWFwRm9ybUV2ZW50cyh0aGlzKSksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtaW5wdXQnXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4uLy4uL21peGlucydcbmltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW2Jhc2VdLFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGlja3k6IGZhbHNlLFxuICAgICAgaW5pdFRvcDogMCxcbiAgICAgIGluaXRIZWlnaHQ6IDAsXG4gICAgICBwbGFjZWhvbGRlcjogbnVsbFxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmluaXRUb3AgPSB0aGlzLiRlbC5vZmZzZXRUb3BcbiAgICB0aGlzLmluaXRIZWlnaHQgPSB0aGlzLiRlbC5vZmZzZXRIZWlnaHRcbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFkZFN0aWNreSAob2Zmc2V0WSkge1xuICAgICAgdGhpcy4kZWwuc3R5bGUucG9zaXRpb24gPSAnJ1xuICAgICAgdGhpcy5zdGlja3kgPSB0cnVlXG4gICAgICB0aGlzLiRlbC5zdHlsZS50b3AgPSBvZmZzZXRZICsgJ3B4J1xuICAgICAgdGhpcy5wbGFjZWhvbGRlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgdGhpcy5wbGFjZWhvbGRlci5zdHlsZS53aWR0aCA9IHRoaXMuJGVsLm9mZnNldFdpZHRoICsgJ3B4J1xuICAgICAgdGhpcy5wbGFjZWhvbGRlci5zdHlsZS5oZWlnaHQgPSB0aGlzLiRlbC5vZmZzZXRIZWlnaHQgKyAncHgnXG4gICAgICB0aGlzLiRlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLnBsYWNlaG9sZGVyLCB0aGlzLiRlbClcbiAgICB9LFxuXG4gICAgcmVtb3ZlU3RpY2t5ICgpIHtcbiAgICAgIHRoaXMuc3RpY2t5ID0gZmFsc2VcbiAgICAgIHRoaXMuJGVsLnN0eWxlLnRvcCA9ICcwJ1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy4kZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBsYWNlaG9sZGVyKVxuICAgICAgfVxuICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW92ZVVwIChvZmZzZXRZKSB7XG4gICAgICB0aGlzLiRlbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgIHRoaXMuJGVsLnN0eWxlLnRvcCA9IG9mZnNldFkgKyAncHgnXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICB2YWxpZGF0ZVN0eWxlcygnaGVhZGVyJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdodG1sOmhlYWRlcicsIHtcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnaGVhZGVyJyB9LFxuICAgICAgb246IHRoaXMuY3JlYXRlRXZlbnRNYXAoKSxcbiAgICAgIHJlZjogJ2hlYWRlcicsXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtaGVhZGVyJyxcbiAgICAgIGNsYXNzOiB7IHN0aWNreTogdGhpcy5zdGlja3kgfVxuICAgIH0sIHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2xvYWRpbmctaW5kaWNhdG9yJyxcbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgdGhpcy53ZWV4VHlwZSA9ICdsb2FkaW5nLWluZGljYXRvcidcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbWFyaycsIHtcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnbG9hZGluZy1pbmRpY2F0b3InIH0sXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtbG9hZGluZy1pbmRpY2F0b3InXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSAnLi9sb2FkaW5nLWluZGljYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICAvLyBuYW1lOiAncmVmcmVzaCcsXG4gIGNvbXBvbmVudHM6IHsgTG9hZGluZ0luZGljYXRvciB9LFxuICBwcm9wczoge1xuICAgIGRpc3BsYXk6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdzaG93JyxcbiAgICAgIHZhbGlkYXRvciAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFsnc2hvdycsICdoaWRlJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiAwXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2hvdyAoKSB7XG4gICAgICAvLyBUT0RPOiBubyBmaXhlZCBoZWlnaHRcbiAgICAgIHRoaXMuJGVtaXQoJ3JlZnJlc2gnKVxuICAgICAgdGhpcy5oZWlnaHQgPSAnMS42cmVtJ1xuICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgfSxcbiAgICByZXNldCAoKSB7XG4gICAgICB0aGlzLmhlaWdodCA9IDBcbiAgICAgIHRoaXMudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG4gICAgICB0aGlzLiRlbWl0KCdyZWZyZXNoZmluaXNoJylcbiAgICB9LFxuICAgIGdldENoaWxkcmVuICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgICAgaWYgKHRoaXMuZGlzcGxheSA9PT0gJ3Nob3cnKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlblxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcih2bm9kZSA9PiB7XG4gICAgICAgIHJldHVybiB2bm9kZS5jb21wb25lbnRPcHRpb25zXG4gICAgICAgICAgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucy50YWcgIT09ICdsb2FkaW5nLWluZGljYXRvcidcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYXNpZGUnLCB7XG4gICAgICByZWY6ICdyZWZyZXNoJyxcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAncmVmcmVzaCcgfSxcbiAgICAgIHN0eWxlOiB7IGhlaWdodDogdGhpcy5oZWlnaHQsIHZpc2liaWxpdHk6IHRoaXMudmlzaWJpbGl0eSB9LFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXJlZnJlc2gnXG4gICAgfSwgdGhpcy5nZXRDaGlsZHJlbigpKVxuICB9XG59XG4iLCJpbXBvcnQgTG9hZGluZ0luZGljYXRvciBmcm9tICcuL2xvYWRpbmctaW5kaWNhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIC8vIG5hbWU6ICdsb2FkaW5nJyxcbiAgY29tcG9uZW50czogeyBMb2FkaW5nSW5kaWNhdG9yIH0sXG4gIHByb3BzOiB7XG4gICAgZGlzcGxheToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3Nob3cnLFxuICAgICAgdmFsaWRhdG9yICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gWydzaG93JywgJ2hpZGUnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoZWlnaHQ6IDBcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzaG93ICgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2xvYWRpbmcnKVxuICAgICAgdGhpcy5oZWlnaHQgPSAnMS42cmVtJ1xuICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gICAgfSxcbiAgICByZXNldCAoKSB7XG4gICAgICB0aGlzLmhlaWdodCA9IDBcbiAgICAgIHRoaXMudmlzaWJpbGl0eSA9ICdoaWRkZW4nXG4gICAgICB0aGlzLiRlbWl0KCdsb2FkaW5nZmluaXNoJylcbiAgICB9LFxuICAgIGdldENoaWxkcmVuICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgICAgaWYgKHRoaXMuZGlzcGxheSA9PT0gJ3Nob3cnKSB7XG4gICAgICAgIHJldHVybiBjaGlsZHJlblxuICAgICAgfVxuICAgICAgcmV0dXJuIGNoaWxkcmVuLmZpbHRlcih2bm9kZSA9PiB7XG4gICAgICAgIHJldHVybiB2bm9kZS5jb21wb25lbnRPcHRpb25zXG4gICAgICAgICAgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucy50YWcgIT09ICdsb2FkaW5nLWluZGljYXRvcidcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYXNpZGUnLCB7XG4gICAgICByZWY6ICdsb2FkaW5nJyxcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnbG9hZGluZycgfSxcbiAgICAgIHN0eWxlOiB7IGhlaWdodDogdGhpcy5oZWlnaHQsIHZpc2liaWxpdHk6IHRoaXMudmlzaWJpbGl0eSB9LFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWxvYWRpbmcnXG4gICAgfSwgdGhpcy5nZXRDaGlsZHJlbigpKVxuICB9XG59XG4iLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi91dGlscydcbi8vIGltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgcmVmcmVzaCBmcm9tICcuL3JlZnJlc2gnXG5pbXBvcnQgbG9hZGluZyBmcm9tICcuL2xvYWRpbmcnXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIgKGNvbnRleHQsIGNyZWF0ZUVsZW1lbnQpIHtcbi8vICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoaGVhZGVyKVxuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9hZGluZyAoY29udGV4dCwgY3JlYXRlRWxlbWVudCwgdm5vZGUpIHtcbiAgY29uc3Qgb3B0aW9ucyA9IHZub2RlLmNvbXBvbmVudE9wdGlvbnNcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQobG9hZGluZywgZXh0ZW5kKHtcbiAgICBvbjogb3B0aW9ucy5saXN0ZW5lcnNcbiAgfSwgdm5vZGUuZGF0YSksIG9wdGlvbnMuY2hpbGRyZW4pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWZyZXNoIChjb250ZXh0LCBjcmVhdGVFbGVtZW50LCB2bm9kZSkge1xuICBjb25zdCBvcHRpb25zID0gdm5vZGUuY29tcG9uZW50T3B0aW9uc1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChyZWZyZXNoLCBleHRlbmQoe1xuICAgIG9uOiBvcHRpb25zLmxpc3RlbmVyc1xuICB9LCB2bm9kZS5kYXRhKSwgb3B0aW9ucy5jaGlsZHJlbilcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbWV0aG9kczoge1xuICAgIG1vdmVUbyAob2Zmc2V0WSA9IDAsIGRvbmUpIHtcbiAgICAgIGNvbnN0IGlubmVyID0gdGhpcy4kcmVmcy5pbm5lclxuICAgICAgaWYgKGlubmVyKSB7XG4gICAgICAgIGlubmVyLnN0eWxlLndpbGxDaGFuZ2UgPSBgdHJhbnNmb3JtYFxuICAgICAgICBpbm5lci5zdHlsZS50cmFuc2l0aW9uID0gYHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXRgXG4gICAgICAgIGlubmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAke29mZnNldFl9LCAwKWBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaW5uZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcnXG4gICAgICAgICAgaW5uZXIuc3R5bGUud2lsbENoYW5nZSA9ICcnXG4gICAgICAgICAgZG9uZSAmJiBkb25lKClcbiAgICAgICAgfSwgMjAwKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBkb25lICgpIHtcbiAgICAgIHRoaXMubW92ZVRvKDApXG4gICAgICB0aGlzLl9yZWZyZXNoICYmIHRoaXMuX3JlZnJlc2guY2hpbGQucmVzZXQoKVxuICAgICAgdGhpcy5fbG9hZGluZyAmJiB0aGlzLl9sb2FkaW5nLmNoaWxkLnJlc2V0KClcbiAgICB9LFxuXG4gICAgc2hvd1JlZnJlc2ggKCkge1xuICAgICAgdGhpcy5tb3ZlVG8oJzEuNnJlbScpXG4gICAgICBpZiAodGhpcy5fcmVmcmVzaCAmJiB0aGlzLl9yZWZyZXNoLmNoaWxkKSB7XG4gICAgICAgIHRoaXMuX3JlZnJlc2guY2hpbGQuc2hvdygpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHNob3dMb2FkaW5nICgpIHtcbiAgICAgIHRoaXMubW92ZVRvKCctMS42cmVtJylcbiAgICAgIGlmICh0aGlzLl9sb2FkaW5nICYmIHRoaXMuX2xvYWRpbmcuY2hpbGQpIHtcbiAgICAgICAgdGhpcy5fbG9hZGluZy5jaGlsZC5zaG93KClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hTdGFydCAoZXZlbnQpIHtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpZiAodGhpcy5fbG9hZGluZyB8fCB0aGlzLl9yZWZyZXNoKSB7XG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgICAgdGhpcy5fdG91Y2hQYXJhbXMgPSB7XG4gICAgICAgICAgcmVhY2hUb3A6IHRoaXMucmVhY2hUb3AoKSxcbiAgICAgICAgICByZWFjaEJvdHRvbTogdGhpcy5yZWFjaEJvdHRvbSgpLFxuICAgICAgICAgIHN0YXJ0VG91Y2hFdmVudDogdG91Y2gsXG4gICAgICAgICAgc3RhcnRYOiB0b3VjaC5wYWdlWCxcbiAgICAgICAgICBzdGFydFk6IHRvdWNoLnBhZ2VZLFxuICAgICAgICAgIHRpbWVTdGFtcDogZXZlbnQudGltZVN0YW1wXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hNb3ZlIChldmVudCkge1xuICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGlmICh0aGlzLl90b3VjaFBhcmFtcykge1xuICAgICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgICAgY29uc3QgeyBzdGFydFksIHJlYWNoVG9wLCByZWFjaEJvdHRvbSB9ID0gdGhpcy5fdG91Y2hQYXJhbXNcbiAgICAgICAgaWYgKGlubmVyICYmIChyZWFjaFRvcCAmJiB0aGlzLl9yZWZyZXNoIHx8IHJlYWNoQm90dG9tICYmIHRoaXMuX2xvYWRpbmcpKSB7XG4gICAgICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXVxuICAgICAgICAgIGNvbnN0IG9mZnNldFkgPSB0b3VjaC5wYWdlWSAtIHN0YXJ0WVxuICAgICAgICAgIHRoaXMuX3RvdWNoUGFyYW1zLm9mZnNldFkgPSBvZmZzZXRZXG4gICAgICAgICAgaWYgKG9mZnNldFkpIHtcbiAgICAgICAgICAgIGlubmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwLCAke29mZnNldFl9cHgsIDApYFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVUb3VjaEVuZCAoZXZlbnQpIHtcbiAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBpZiAodGhpcy5fdG91Y2hQYXJhbXMpIHtcbiAgICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICAgIGNvbnN0IHsgb2Zmc2V0WSwgcmVhY2hUb3AsIHJlYWNoQm90dG9tIH0gPSB0aGlzLl90b3VjaFBhcmFtc1xuICAgICAgICBpZiAoaW5uZXIgJiYgKHJlYWNoVG9wICYmIHRoaXMuX3JlZnJlc2ggfHwgcmVhY2hCb3R0b20gJiYgdGhpcy5fbG9hZGluZykpIHtcbiAgICAgICAgICBpZiAob2Zmc2V0WSA+IDEyMCkge1xuICAgICAgICAgICAgdGhpcy5zaG93UmVmcmVzaCgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKG9mZnNldFkgPCAtMTIwKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nKClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRvbmUoMClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRlbGV0ZSB0aGlzLl90b3VjaFBhcmFtc1xuICAgIH0sXG5cbiAgICBoYW5kbGVMaXN0U2Nyb2xsIChldmVudCkge1xuICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoZXZlbnQpXG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLiRlbC5zY3JvbGxUb3BcbiAgICAgIGNvbnN0IHRvcCA9IHRoaXMuJGVsLm9mZnNldFRvcFxuXG4gICAgICBjb25zdCBoID0gdGhpcy4kY2hpbGRyZW4uZmlsdGVyKHZtID0+IHZtLiRyZWZzLmhlYWRlcilcbiAgICAgIGlmIChzY3JvbGxUb3AgPCBoWzBdLmluaXRUb3ApIHtcbiAgICAgICAgcmV0dXJuIGhbMF0ucmVtb3ZlU3RpY2t5KClcbiAgICAgIH1cbiAgICAgIGlmIChzY3JvbGxUb3AgPiBoW2gubGVuZ3RoIC0gMV0uaW5pdFRvcCkge1xuICAgICAgICByZXR1cm4gaFtoLmxlbmd0aCAtIDFdLmFkZFN0aWNreSh0b3ApXG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGhbaSAtIDFdLmluaXRUb3AgPCBzY3JvbGxUb3ApIHtcbiAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDwgaFtpXS5pbml0VG9wICYmIHNjcm9sbFRvcCArIGhbaSAtIDFdLmluaXRIZWlnaHQgPiBoW2ldLmluaXRUb3ApIHtcbiAgICAgICAgICAgIGhbaSAtIDFdLm1vdmVVcChoW2ldLiRyZWZzLmhlYWRlci5vZmZzZXRUb3AgLSBoW2kgLSAxXS5pbml0SGVpZ2h0KVxuICAgICAgICAgICAgaFtpXS5yZW1vdmVTdGlja3koKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChzY3JvbGxUb3AgKyBoW2kgLSAxXS5pbml0SGVpZ2h0IDwgaFtpXS5pbml0VG9wKSB7XG4gICAgICAgICAgICBoW2kgLSAxXS5hZGRTdGlja3kodG9wKVxuICAgICAgICAgICAgaFtpXS5yZW1vdmVTdGlja3koKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgYmFzZSwgZXZlbnQsIHNjcm9sbGFibGUgfSBmcm9tICcuLi8uLi8uLi9taXhpbnMnXG5pbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uLy4uLy4uL3ZhbGlkYXRvcidcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzJ1xuaW1wb3J0ICogYXMgc2hhcmVkIGZyb20gJy4uL3NoYXJlZCdcbmltcG9ydCBsaXN0TWl4aW4gZnJvbSAnLi9saXN0TWl4aW4nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbYmFzZSwgZXZlbnQsIHNjcm9sbGFibGUsIGxpc3RNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgbG9hZG1vcmVvZmZzZXQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgd3JhcHBlckNsYXNzICgpIHtcbiAgICAgIGNvbnN0IGNsYXNzQXJyYXkgPSBbJ3dlZXgtbGlzdCcsICd3ZWV4LWxpc3Qtd3JhcHBlciddXG4gICAgICB0aGlzLl9yZWZyZXNoICYmIGNsYXNzQXJyYXkucHVzaCgnd2l0aC1yZWZyZXNoJylcbiAgICAgIHRoaXMuX2xvYWRpbmcgJiYgY2xhc3NBcnJheS5wdXNoKCd3aXRoLWxvYWRpbmcnKVxuICAgICAgcmV0dXJuIGNsYXNzQXJyYXkuam9pbignICcpXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjcmVhdGVDaGlsZHJlbiAoaCkge1xuICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdXG4gICAgICB0aGlzLl9jZWxscyA9IHNsb3RzLmZpbHRlcih2bm9kZSA9PiB7XG4gICAgICAgIGlmICghdm5vZGUudGFnIHx8ICF2bm9kZS5jb21wb25lbnRPcHRpb25zKSByZXR1cm4gZmFsc2VcbiAgICAgICAgc3dpdGNoICh2bm9kZS5jb21wb25lbnRPcHRpb25zLnRhZykge1xuICAgICAgICAgIGNhc2UgJ2xvYWRpbmcnOiB0aGlzLl9sb2FkaW5nID0gc2hhcmVkLmNyZWF0ZUxvYWRpbmcodGhpcywgaCwgdm5vZGUpOyByZXR1cm4gZmFsc2VcbiAgICAgICAgICBjYXNlICdyZWZyZXNoJzogdGhpcy5fcmVmcmVzaCA9IHNoYXJlZC5jcmVhdGVSZWZyZXNoKHRoaXMsIGgsIHZub2RlKTsgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLl9yZWZyZXNoLFxuICAgICAgICBoKCdodG1sOmRpdicsIHtcbiAgICAgICAgICByZWY6ICdpbm5lcicsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWxpc3QtaW5uZXInXG4gICAgICAgIH0sIHRoaXMuX2NlbGxzKSxcbiAgICAgICAgdGhpcy5fbG9hZGluZ1xuICAgICAgXVxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICB0aGlzLndlZXhUeXBlID0gJ2xpc3QnXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdmFsaWRhdGVTdHlsZXMoJ2xpc3QnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVMYXlvdXQoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbWFpbicsIHtcbiAgICAgIHJlZjogJ3dyYXBwZXInLFxuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdsaXN0JyB9LFxuICAgICAgc3RhdGljQ2xhc3M6IHRoaXMud3JhcHBlckNsYXNzLFxuICAgICAgb246IGV4dGVuZCh0aGlzLmNyZWF0ZUV2ZW50TWFwKCksIHtcbiAgICAgICAgc2Nyb2xsOiB0aGlzLmhhbmRsZUxpc3RTY3JvbGwsXG4gICAgICAgIHRvdWNoc3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgdG91Y2htb3ZlOiB0aGlzLmhhbmRsZVRvdWNoTW92ZSxcbiAgICAgICAgdG91Y2hlbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRcbiAgICAgIH0pXG4gICAgfSwgdGhpcy5jcmVhdGVDaGlsZHJlbihjcmVhdGVFbGVtZW50KSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4uLy4uLy4uL21peGlucydcbmltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vLi4vLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW2Jhc2VdLFxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdmFsaWRhdGVTdHlsZXMoJ2NlbGwnLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCB7XG4gICAgICBhdHRyczogeyAnd2VleC10eXBlJzogJ2NlbGwnIH0sXG4gICAgICBvbjogdGhpcy5jcmVhdGVFdmVudE1hcCgpLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LWNlbGwnXG4gICAgfSwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgfVxufVxuIiwiaW1wb3J0IHsgYmFzZSwgc2Nyb2xsYWJsZSB9IGZyb20gJy4uLy4uL21peGlucydcbmltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJ1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgKiBhcyBzaGFyZWQgZnJvbSAnLi9zaGFyZWQnXG5pbXBvcnQgbGlzdE1peGluIGZyb20gJy4vbGlzdC9saXN0TWl4aW4nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbYmFzZSwgc2Nyb2xsYWJsZSwgbGlzdE1peGluXSxcbiAgcHJvcHM6IHtcbiAgICBzY3JvbGxEaXJlY3Rpb246IHtcbiAgICAgIHR5cGU6IFtTdHJpbmddLFxuICAgICAgZGVmYXVsdDogJ3ZlcnRpY2FsJyxcbiAgICAgIHZhbGlkYXRvciAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgfVxuICAgIH0sXG4gICAgbG9hZG1vcmVvZmZzZXQ6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICAvLyBUT0RPOiBzdXBwb3J0IGxvYWRtb3JlIHJldHJ5XG4gICAgbG9hZG1vcmVyZXRyeToge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICB3cmFwcGVyQ2xhc3MgKCkge1xuICAgICAgY29uc3QgY2xhc3NBcnJheSA9IFsnd2VleC1zY3JvbGxlcicsICd3ZWV4LXNjcm9sbGVyLXdyYXBwZXInXVxuICAgICAgaWYgKHRoaXMuc2Nyb2xsRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgY2xhc3NBcnJheS5wdXNoKCd3ZWV4LXNjcm9sbGVyLWhvcml6b250YWwnKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNsYXNzQXJyYXkuam9pbignICcpXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjcmVhdGVDaGlsZHJlbiAoaCkge1xuICAgICAgY29uc3Qgc2xvdHMgPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdXG4gICAgICB0aGlzLl9jZWxscyA9IHNsb3RzLmZpbHRlcih2bm9kZSA9PiB7XG4gICAgICAgIGlmICghdm5vZGUudGFnIHx8ICF2bm9kZS5jb21wb25lbnRPcHRpb25zKSByZXR1cm4gZmFsc2VcbiAgICAgICAgc3dpdGNoICh2bm9kZS5jb21wb25lbnRPcHRpb25zLnRhZykge1xuICAgICAgICAgIGNhc2UgJ2xvYWRpbmcnOiB0aGlzLl9sb2FkaW5nID0gc2hhcmVkLmNyZWF0ZUxvYWRpbmcodGhpcywgaCwgdm5vZGUpOyByZXR1cm4gZmFsc2VcbiAgICAgICAgICBjYXNlICdyZWZyZXNoJzogdGhpcy5fcmVmcmVzaCA9IHNoYXJlZC5jcmVhdGVSZWZyZXNoKHRoaXMsIGgsIHZub2RlKTsgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0pXG4gICAgICByZXR1cm4gW1xuICAgICAgICB0aGlzLl9yZWZyZXNoLFxuICAgICAgICBoKCdodG1sOmRpdicsIHtcbiAgICAgICAgICByZWY6ICdpbm5lcicsXG4gICAgICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXNjcm9sbGVyLWlubmVyJ1xuICAgICAgICB9LCB0aGlzLl9jZWxscyksXG4gICAgICAgIHRoaXMuX2xvYWRpbmdcbiAgICAgIF1cbiAgICB9LFxuICAgIHNjcm9sbFRvICh2bm9kZSkge1xuICAgICAgaWYgKHZub2RlICYmIHZub2RlLiRlbCkge1xuICAgICAgICAvLyBUT0RPOiBhZGQgYW5pbWF0aW9uXG4gICAgICAgIHRoaXMuJGVsLnNjcm9sbFRvcCA9IHZub2RlLiRlbC5vZmZzZXRUb3BcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgdGhpcy53ZWV4VHlwZSA9ICdzY3JvbGxlcidcblxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICB2YWxpZGF0ZVN0eWxlcygnc2Nyb2xsZXInLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgdGhpcy5fY2VsbHMgPSB0aGlzLiRzbG90cy5kZWZhdWx0IHx8IFtdXG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVMYXlvdXQoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbWFpbicsIHtcbiAgICAgIHJlZjogJ3dyYXBwZXInLFxuICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdzY3JvbGxlcicgfSxcbiAgICAgIHN0YXRpY0NsYXNzOiB0aGlzLndyYXBwZXJDbGFzcyxcbiAgICAgIG9uOiBleHRlbmQodGhpcy5jcmVhdGVFdmVudE1hcCgpLCB7XG4gICAgICAgIHNjcm9sbDogdGhpcy5oYW5kbGVTY3JvbGwsXG4gICAgICAgIHRvdWNoc3RhcnQ6IHRoaXMuaGFuZGxlVG91Y2hTdGFydCxcbiAgICAgICAgdG91Y2htb3ZlOiB0aGlzLmhhbmRsZVRvdWNoTW92ZSxcbiAgICAgICAgdG91Y2hlbmQ6IHRoaXMuaGFuZGxlVG91Y2hFbmRcbiAgICAgIH0pXG4gICAgfSwgdGhpcy5jcmVhdGVDaGlsZHJlbihjcmVhdGVFbGVtZW50KSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmZ1bmN0aW9uIF9yZW5kZXIgKGNvbnRleHQsIGgpIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBbXVxuICBmb3IgKGxldCBpID0gMDsgaSA8IE51bWJlcihjb250ZXh0LmNvdW50KTsgKytpKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFsnd2VleC1pbmRpY2F0b3ItaXRlbSddXG4gICAgaWYgKGkgPT09IE51bWJlcihjb250ZXh0LmFjdGl2ZSkpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaCgnd2VleC1pbmRpY2F0b3ItaXRlbS1hY3RpdmUnKVxuICAgIH1cbiAgICBjaGlsZHJlbi5wdXNoKGgoJ21hcmsnLCB7XG4gICAgICBzdGF0aWNDbGFzczogY2xhc3NOYW1lcy5qb2luKCcgJylcbiAgICB9KSlcbiAgfVxuICByZXR1cm4gaCgnbmF2Jywge1xuICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAnaW5kaWNhdG9yJyB9LFxuICAgIHN0YXRpY0NsYXNzOiAnd2VleC1pbmRpY2F0b3InXG4gIH0sIGNoaWxkcmVuKVxufVxuXG4vKipcbiAqIGNhbGN1bGF0ZSBhbmQgcmVzZXQgaW5kaWNhdG9yJ3MgdG9wIGFuZCBsZWZ0LlxuICovXG5mdW5jdGlvbiBfcmVMYXlvdXQgKGNvbnRleHQpIHtcbiAgY29uc3QgZWwgPSBjb250ZXh0LiRlbFxuICBjb25zdCBtZXJnZWRTdHlsZSA9IGNvbnRleHQuJHZub2RlLmRhdGEubWVyZ2VkU3R5bGVcbiAgY29uc3QgY3RSZWN0ID0gZXh0ZW5kKHt9LCBjb250ZXh0LmdldFBhcmVudFJlY3QoKSlcbiAgZXh0ZW5kKGN0UmVjdCwgeyBsZWZ0OiAwLCB0b3A6IDAgfSlcbiAgY29uc3QgeyB3aWR0aDogY3RXaWR0aCwgaGVpZ2h0OiBjdEhlaWdodCwgbGVmdCwgdG9wIH0gPSBbJ3dpZHRoJywgJ2hlaWdodCcsICdsZWZ0JywgJ3RvcCddXG4gICAgLnJlZHVjZSgocHJlLCBuYW1lKSA9PiB7XG4gICAgICBwcmVbbmFtZV0gPSBwYXJzZUZsb2F0KG1lcmdlZFN0eWxlW25hbWVdIHx8IGN0UmVjdFtuYW1lXSlcbiAgICAgIHJldHVybiBwcmVcbiAgICB9LCB7fSlcbiAgbGV0IHdpZHRoLCBzaXplXG5cbiAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgIHdpZHRoID0gc2l6ZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLmNoaWxkcmVuWzBdKVxuICB9XG4gIGVsc2Uge1xuICAgIGNvbnN0IGl0ZW1Db21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwuY2hpbGRyZW5bMV0pXG4gICAgY29uc3QgcGFkZGluZyA9IHBhcnNlRmxvYXQoaXRlbUNvbXB1dGVkU3R5bGUubWFyZ2luTGVmdClcbiAgICBzaXplID0gcGFyc2VGbG9hdChpdGVtQ29tcHV0ZWRTdHlsZS53aWR0aClcbiAgICB3aWR0aCA9IGVsLmNoaWxkcmVuLmxlbmd0aCAqIChzaXplICsgcGFkZGluZykgLSBwYWRkaW5nXG4gIH1cblxuICBlbC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4J1xuICBlbC5zdHlsZS5oZWlnaHQgPSBzaXplICsgJ3B4J1xuICBlbC5zdHlsZS5sZWZ0ID0gbGVmdCArIGN0V2lkdGggLyAyIC0gd2lkdGggLyAyICsgJ3B4J1xuICBlbC5zdHlsZS50b3AgPSB0b3AgKyBjdEhlaWdodCAvIDIgLSBzaXplIC8gMiArICdweCdcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaW5kaWNhdG9yJyxcbiAgcHJvcHM6IHtcbiAgICBjb3VudDogW051bWJlciwgU3RyaW5nXSxcbiAgICBhY3RpdmU6IFtOdW1iZXIsIFN0cmluZ11cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgIF9yZUxheW91dCh0aGlzKVxuICB9LFxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICB0aGlzLnByZXJlbmRlcigpXG4gICAgcmV0dXJuIF9yZW5kZXIodGhpcywgY3JlYXRlRWxlbWVudClcbiAgfVxufVxuIiwiY29uc3QgVFJBTlNJVElPTl9USU1FID0gMjAwXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWV0aG9kczoge1xuICAgIC8vIGdldCBzdGFuZGFyZCBpbmRleFxuICAgIG5vcm1hbGl6ZUluZGV4IChpbmRleCkge1xuICAgICAgY29uc3QgbmV3SW5kZXggPSAoaW5kZXggKyB0aGlzLmZyYW1lQ291bnQpICUgdGhpcy5mcmFtZUNvdW50XG4gICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobmV3SW5kZXgsIDApLCB0aGlzLmZyYW1lQ291bnQgLSAxKVxuICAgIH0sXG5cbiAgICBzbGlkZVRvIChpbmRleCkge1xuICAgICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLm5vcm1hbGl6ZUluZGV4KGluZGV4KVxuICAgICAgdGhpcy5pbm5lck9mZnNldCArPSBNYXRoLnNpZ24odGhpcy5jdXJyZW50SW5kZXggLSBpbmRleCkgKiB0aGlzLndyYXBwZXJXaWR0aFxuXG4gICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgIGlmIChpbm5lcikge1xuICAgICAgICAvLyBUT0RPOiB3aWxsLWNoYW5nZSB8IHNldCBzdHlsZXMgdG9nZXRoZXJcbiAgICAgICAgaW5uZXIuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0YFxuICAgICAgICBpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0aGlzLmlubmVyT2Zmc2V0fXB4LCAwLCAwKWBcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaW5uZXIuc3R5bGUudHJhbnNpdGlvbiA9ICcnXG4gICAgICAgIH0sIFRSQU5TSVRJT05fVElNRSlcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld0luZGV4ICE9PSB0aGlzLmN1cnJlbnRJbmRleCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IG5ld0luZGV4XG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHRoaXMuY3JlYXRlRXZlbnQoJ2NoYW5nZScsIHtcbiAgICAgICAgICBpbmRleDogdGhpcy5jdXJyZW50SW5kZXhcbiAgICAgICAgfSkpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLnJlb3JkZXIoKSB9LCBUUkFOU0lUSU9OX1RJTUUpXG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlb3JkZXIgKCkge1xuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmV2SW5kZXggPSB0aGlzLm5vcm1hbGl6ZUluZGV4KHRoaXMuY3VycmVudEluZGV4IC0gMSlcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5ub3JtYWxpemVJbmRleCh0aGlzLmN1cnJlbnRJbmRleCArIDEpXG4gICAgICAgIC8vIFRPRE86IGNsb25lIGZyYW1lIHdoZW4gcHJldkluZGV4ID09PSBuZXh0SW5kZXhcbiAgICAgICAgLy8gaWYgKHByZXZJbmRleCAhPT0gbmV4dEluZGV4KSB7XG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc3QgcHJldkNlbGwgPSB0aGlzLl9jZWxsc1twcmV2SW5kZXhdXG4gICAgICAgIGNvbnN0IG5leHRDZWxsID0gdGhpcy5fY2VsbHNbbmV4dEluZGV4XVxuICAgICAgICBpZiAocHJldkNlbGwgJiYgcHJldkNlbGwuZWxtKSB7XG4gICAgICAgICAgY29uc3QgcHJldk9mZnNldCA9IC10aGlzLndyYXBwZXJXaWR0aCAtIHRoaXMuaW5uZXJPZmZzZXRcbiAgICAgICAgICBwcmV2Q2VsbC5lbG0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7cHJldk9mZnNldH1weCwgMCwgMClgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRDZWxsICYmIG5leHRDZWxsLmVsbSkge1xuICAgICAgICAgIGNvbnN0IG5leHRPZmZzZXQgPSB0aGlzLndyYXBwZXJXaWR0aCAtIHRoaXMuaW5uZXJPZmZzZXRcbiAgICAgICAgICBuZXh0Q2VsbC5lbG0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7bmV4dE9mZnNldH1weCwgMCwgMClgXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIG5leHQgKCkge1xuICAgICAgdGhpcy5zbGlkZVRvKHRoaXMuY3VycmVudEluZGV4ICsgMSlcbiAgICB9LFxuXG4gICAgcHJldiAoKSB7XG4gICAgICB0aGlzLnNsaWRlVG8odGhpcy5jdXJyZW50SW5kZXggLSAxKVxuICAgIH0sXG5cbiAgICBoYW5kbGVUb3VjaFN0YXJ0IChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0b3VjaCBzdGFydCcsIGV2ZW50KVxuICAgICAgY29uc3QgdG91Y2ggPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXVxuICAgICAgLy8gY29uc29sZS5sb2coJ3RvdWNoIHN0YXJ0JywgZXZlbnQudGFyZ2V0LCBldmVudC50YXJnZXQucGFnZVkpXG4gICAgICAvLyBjb25zb2xlLmxvZygndG91Y2hlcycsIHRvdWNoKVxuICAgICAgdGhpcy5fdG91Y2hQYXJhbXMgPSB7XG4gICAgICAgIG9yaWdpbmFsVHJhbnNmb3JtOiB0aGlzLiRyZWZzLmlubmVyLnN0eWxlLnRyYW5zZm9ybSxcbiAgICAgICAgc3RhcnRUb3VjaEV2ZW50OiB0b3VjaCxcbiAgICAgICAgc3RhcnRYOiB0b3VjaC5wYWdlWCxcbiAgICAgICAgc3RhcnRZOiB0b3VjaC5wYWdlWSxcbiAgICAgICAgdGltZVN0YW1wOiBldmVudC50aW1lU3RhbXBcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hNb3ZlIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0b3VjaCBtb3ZlJylcbiAgICAgIGlmICh0aGlzLl90b3VjaFBhcmFtcykge1xuICAgICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgICAgY29uc3QgeyBzdGFydFggfSA9IHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgICAgIGNvbnN0IHRvdWNoID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IHRvdWNoLnBhZ2VYIC0gc3RhcnRYXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvZmZzZXRYJywgb2Zmc2V0WCwgJ3N0YXJ0WCcsIHN0YXJ0WCwgJ3BhZ2VYJywgdG91Y2gucGFnZVgpXG4gICAgICAgIHRoaXMuX3RvdWNoUGFyYW1zLm9mZnNldFggPSBvZmZzZXRYXG5cbiAgICAgICAgaWYgKGlubmVyICYmIG9mZnNldFgpIHtcbiAgICAgICAgICBpbm5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0aGlzLmlubmVyT2Zmc2V0ICsgb2Zmc2V0WH1weCwgMCwgMClgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlVG91Y2hFbmQgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgLy8gY29uc29sZS5sb2coJ3RvdWNoIGVuZCcpXG4gICAgICBjb25zdCBpbm5lciA9IHRoaXMuJHJlZnMuaW5uZXJcbiAgICAgIGlmICh0aGlzLl90b3VjaFBhcmFtcykge1xuICAgICAgICBjb25zdCB7IG9mZnNldFggfSA9IHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgICAgIGlmIChpbm5lcikge1xuICAgICAgICAgIGNvbnN0IHJlc2V0ID0gTWF0aC5hYnMob2Zmc2V0WCAvIHRoaXMud3JhcHBlcldpZHRoKSA8IDAuMlxuICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IG9mZnNldFggPiAwID8gMSA6IC0xXG4gICAgICAgICAgY29uc3QgbmV3SW5kZXggPSByZXNldCA/IHRoaXMuY3VycmVudEluZGV4IDogKHRoaXMuY3VycmVudEluZGV4IC0gZGlyZWN0aW9uKVxuICAgICAgICAgIHRoaXMuc2xpZGVUbyhuZXdJbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVsZXRlIHRoaXMuX3RvdWNoUGFyYW1zXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBiYXNlLCBldmVudCB9IGZyb20gJy4uLy4uL21peGlucydcbmltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vLi4vdmFsaWRhdG9yJ1xuaW1wb3J0IHsgdGhyb3R0bGUsIGJpbmQsIGV4dGVuZCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IGluZGljYXRvciBmcm9tICcuL2luZGljYXRvcidcbmltcG9ydCBzbGlkZU1peGluIGZyb20gJy4vc2xpZGVNaXhpbidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtiYXNlLCBldmVudCwgc2xpZGVNaXhpbl0sXG4gIHByb3BzOiB7XG4gICAgJ2F1dG8tcGxheSc6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIGludGVydmFsOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogMzAwMFxuICAgIH1cbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VycmVudEluZGV4OiAwLFxuICAgICAgZnJhbWVDb3VudDogMFxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY29tcHV0ZVdyYXBwZXJTaXplICgpIHtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLiRyZWZzLndyYXBwZXJcbiAgICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSB3cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgIHRoaXMud3JhcHBlcldpZHRoID0gcmVjdC53aWR0aFxuICAgICAgICB0aGlzLndyYXBwZXJIZWlnaHQgPSByZWN0LmhlaWdodFxuICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVMYXlvdXQgKCkge1xuICAgICAgdGhpcy5jb21wdXRlV3JhcHBlclNpemUoKVxuICAgICAgY29uc3QgaW5uZXIgPSB0aGlzLiRyZWZzLmlubmVyXG4gICAgICBpZiAoaW5uZXIpIHtcbiAgICAgICAgaW5uZXIuc3R5bGUud2lkdGggPSB0aGlzLndyYXBwZXJXaWR0aCAqIHRoaXMuZnJhbWVDb3VudCArICdweCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZm9ybWF0Q2hpbGRyZW4gKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbXVxuICAgICAgbGV0IGluZGljYXRvclZub2RlXG4gICAgICBjb25zdCBjZWxscyA9IGNoaWxkcmVuLmZpbHRlcih2bm9kZSA9PiB7XG4gICAgICAgIGlmICghdm5vZGUudGFnKSByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgKHZub2RlLmNvbXBvbmVudE9wdGlvbnMgJiYgdm5vZGUuY29tcG9uZW50T3B0aW9ucy50YWcgPT09ICdpbmRpY2F0b3InKSB7XG4gICAgICAgICAgaW5kaWNhdG9yVm5vZGUgPSB2bm9kZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9KS5tYXAodm5vZGUgPT4ge1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbGknLCB7XG4gICAgICAgICAgcmVmOiAnY2VsbHMnLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1zbGlkZXItY2VsbCdcbiAgICAgICAgfSwgW3Zub2RlXSlcbiAgICAgIH0pXG4gICAgICB0aGlzLl9pbmRpY2F0b3IgPSBjcmVhdGVFbGVtZW50KGluZGljYXRvciwge1xuICAgICAgICBzdGF0aWNDbGFzczogaW5kaWNhdG9yVm5vZGUuZGF0YS5zdGF0aWNDbGFzcyxcbiAgICAgICAgc3RhdGljU3R5bGU6IGluZGljYXRvclZub2RlLmRhdGEuc3RhdGljU3R5bGUsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgY291bnQ6IGNlbGxzLmxlbmd0aCxcbiAgICAgICAgICBhY3RpdmU6IHRoaXMuY3VycmVudEluZGV4XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gY2VsbHNcbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy53ZWV4VHlwZSA9ICdzbGlkZXInXG4gICAgdGhpcy5jdXJyZW50SW5kZXggPSAwXG4gICAgdGhpcy5pbm5lck9mZnNldCA9IDBcbiAgICB0aGlzLl9pbmRpY2F0b3IgPSBudWxsXG4gICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVMYXlvdXQoKVxuICAgIH0pXG4gIH0sXG5cbiAgYmVmb3JlVXBkYXRlICgpIHtcbiAgICB0aGlzLnVwZGF0ZUxheW91dCgpXG4gICAgdGhpcy5yZW9yZGVyKClcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBpZiAodGhpcy5hdXRvUGxheSAmJiB0aGlzLmF1dG9QbGF5ICE9PSAnZmFsc2UnKSB7XG4gICAgICBjb25zdCBpbnRlcnZhbCA9IE51bWJlcih0aGlzLmludGVydmFsKVxuICAgICAgdGhpcy5fbGFzdFNsaWRlVGltZSA9IERhdGUubm93KClcblxuICAgICAgY29uc3QgYXV0b1BsYXlGbiA9IGJpbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5fYXV0b1BsYXlUaW1lcilcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKVxuICAgICAgICBsZXQgbmV4dFRpY2sgPSBpbnRlcnZhbCAtIG5vdyArIHRoaXMuX2xhc3RTbGlkZVRpbWVcbiAgICAgICAgbmV4dFRpY2sgPSBuZXh0VGljayA+IDEwMCA/IG5leHRUaWNrIDogaW50ZXJ2YWxcblxuICAgICAgICB0aGlzLm5leHQoKVxuICAgICAgICB0aGlzLl9sYXN0U2xpZGVUaW1lID0gbm93XG4gICAgICAgIHRoaXMuX2F1dG9QbGF5VGltZXIgPSBzZXRUaW1lb3V0KGF1dG9QbGF5Rm4sIG5leHRUaWNrKVxuICAgICAgfSwgdGhpcylcblxuICAgICAgdGhpcy5fYXV0b1BsYXlUaW1lciA9IHNldFRpbWVvdXQoYXV0b1BsYXlGbiwgaW50ZXJ2YWwpXG4gICAgfVxuXG4gICAgdGhpcy5yZW9yZGVyKClcbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICB0aGlzLnByZXJlbmRlcigpXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCdzbGlkZXInLCB0aGlzLiR2bm9kZS5kYXRhICYmIHRoaXMuJHZub2RlLmRhdGEuc3RhdGljU3R5bGUpXG4gICAgfVxuXG4gICAgdGhpcy5fY2VsbHMgPSB0aGlzLmZvcm1hdENoaWxkcmVuKGNyZWF0ZUVsZW1lbnQpXG4gICAgdGhpcy5mcmFtZUNvdW50ID0gdGhpcy5fY2VsbHMubGVuZ3RoXG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgICduYXYnLFxuICAgICAge1xuICAgICAgICByZWY6ICd3cmFwcGVyJyxcbiAgICAgICAgYXR0cnM6IHsgJ3dlZXgtdHlwZSc6ICdzbGlkZXInIH0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1zbGlkZXIgd2VleC1zbGlkZXItd3JhcHBlcicsXG4gICAgICAgIG9uOiBleHRlbmQodGhpcy5jcmVhdGVFdmVudE1hcCgpLCB7XG4gICAgICAgICAgdG91Y2hzdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0LFxuICAgICAgICAgIHRvdWNobW92ZTogdGhyb3R0bGUoYmluZCh0aGlzLmhhbmRsZVRvdWNoTW92ZSwgdGhpcyksIDI1KSxcbiAgICAgICAgICB0b3VjaGVuZDogdGhpcy5oYW5kbGVUb3VjaEVuZFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgY3JlYXRlRWxlbWVudCgndWwnLCB7XG4gICAgICAgICAgcmVmOiAnaW5uZXInLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiAnd2VleC1zbGlkZXItaW5uZXInXG4gICAgICAgIH0sIHRoaXMuX2NlbGxzKSxcbiAgICAgICAgdGhpcy5faW5kaWNhdG9yXG4gICAgICBdXG4gICAgKVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIHJlbmRlciAoKSB7XG4gICAgLy8gVE9ETzogYWRkIHRhZyBuZXN0aW5nIHZhbGlkYXRpb25cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIGNvbnN0IHRhZyA9IHRoaXMuJG9wdGlvbnMuX2NvbXBvbmVudFRhZ1xuICAgICAgY29uc3QgcGFyZW50VGFnID0gdGhpcy4kcGFyZW50LiRvcHRpb25zLl9jb21wb25lbnRUYWdcbiAgICAgIGNvbnNvbGUud2FybihgW1Z1ZSBSZW5kZXJdIFRoZSA8JHt0YWd9PiBjYW4ndCBiZSB0aGUgY2hpbGQgb2YgPCR7cGFyZW50VGFnfT4uYClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuIiwiaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4uL21peGlucydcbmltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi4vdXRpbHMnXG5cbi8qKlxuICogR2V0IHRleHQgc3R5bGVzXG4gKi9cbmZ1bmN0aW9uIGdldFRleHRTdHlsZSAoY29udGV4dCA9IHt9KSB7XG4gIGNvbnN0IHZub2RlID0gY29udGV4dC4kdm5vZGUgfHwge31cbiAgY29uc3Qgc3RhdGljU3R5bGUgPSB2bm9kZS5kYXRhICYmIHZub2RlLmRhdGEuc3RhdGljU3R5bGUgfHwge31cbiAgY29uc3QgbWVyZ2VkU3R5bGUgPSB2bm9kZS5kYXRhICYmIHZub2RlLmRhdGEubWVyZ2VkU3R5bGUgfHwge31cbiAgY29uc3QgbGluZXMgPSBwYXJzZUludChtZXJnZWRTdHlsZS5saW5lcykgfHwgMFxuICBpZiAobGluZXMgPiAwKSB7XG4gICAgcmV0dXJuIGV4dGVuZChzdGF0aWNTdHlsZSwge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgd2Via2l0TGluZUNsYW1wOiBsaW5lc1xuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHN0YXRpY1N0eWxlXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbYmFzZV0sXG4gIHByb3BzOiB7XG4gICAgbGluZXM6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgdmFsdWU6IFtTdHJpbmddXG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgdGhpcy5wcmVyZW5kZXIoKVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICB2YWxpZGF0ZVN0eWxlcygndGV4dCcsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgncCcsIHtcbiAgICAgIGF0dHJzOiB7ICd3ZWV4LXR5cGUnOiAndGV4dCcgfSxcbiAgICAgIG9uOiB0aGlzLmNyZWF0ZUV2ZW50TWFwKCksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtdGV4dCcsXG4gICAgICBzdGF0aWNTdHlsZTogZ2V0VGV4dFN0eWxlKHRoaXMpXG4gICAgfSwgdGhpcy4kc2xvdHMuZGVmYXVsdCB8fCBbdGhpcy52YWx1ZV0pXG4gIH1cbn1cbiIsImltcG9ydCB7IGJhc2UgfSBmcm9tICcuLi9taXhpbnMnXG5pbXBvcnQgeyBleHRlbmQsIG1hcEZvcm1FdmVudHMgfSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW2Jhc2VdLFxuICBwcm9wczoge1xuICAgIHZhbHVlOiBTdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgYXV0b2ZvY3VzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICByb3dzOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogMlxuICAgIH1cbiAgfSxcblxuICByZW5kZXIgKGNyZWF0ZUVsZW1lbnQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgdmFsaWRhdGVTdHlsZXMoJ3RleHRhcmVhJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdodG1sOnRleHRhcmVhJywge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgJ3dlZXgtdHlwZSc6ICd0ZXh0YXJlYScsXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBkaXNhYmxlZDogKHRoaXMuZGlzYWJsZWQgIT09ICdmYWxzZScgJiYgdGhpcy5kaXNhYmxlZCAhPT0gZmFsc2UpLFxuICAgICAgICBhdXRvZm9jdXM6ICh0aGlzLmF1dG9mb2N1cyAhPT0gJ2ZhbHNlJyAmJiB0aGlzLmF1dG9mb2N1cyAhPT0gZmFsc2UpLFxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcbiAgICAgICAgcm93czogdGhpcy5yb3dzXG4gICAgICB9LFxuICAgICAgb246IGV4dGVuZCh0aGlzLmNyZWF0ZUV2ZW50TWFwKCksIG1hcEZvcm1FdmVudHModGhpcykpLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXRleHRhcmVhJ1xuICAgIH0sIHRoaXMudmFsdWUpXG4gIH1cbn1cbiIsImltcG9ydCB7IGJhc2UgfSBmcm9tICcuLi9taXhpbnMnXG5pbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtiYXNlXSxcbiAgcHJvcHM6IHtcbiAgICBzcmM6IFN0cmluZyxcbiAgICBwbGF5U3RhdHVzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncGF1c2UnLFxuICAgICAgdmFsaWRhdG9yICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gWydwbGF5JywgJ3BhdXNlJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xXG4gICAgICB9XG4gICAgfSxcblxuICAgIGF1dG9wbGF5OiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBhdXRvUGxheToge1xuICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG5cbiAgICBwbGF5c2lubGluZToge1xuICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgY29udHJvbHM6IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHZhbGlkYXRlU3R5bGVzKCd2aWRlbycsIHRoaXMuJHZub2RlLmRhdGEgJiYgdGhpcy4kdm5vZGUuZGF0YS5zdGF0aWNTdHlsZSlcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBzdXBwb3J0IHBsYXlTdGF0dXNcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaHRtbDp2aWRlbycsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgICd3ZWV4LXR5cGUnOiAndmlkZW8nLFxuICAgICAgICBhdXRvcGxheTogKHRoaXMuYXV0b3BsYXkgIT09ICdmYWxzZScgJiYgdGhpcy5hdXRvcGxheSAhPT0gZmFsc2UpLFxuICAgICAgICBhdXRvUGxheTogKHRoaXMuYXV0b3BsYXkgIT09ICdmYWxzZScgJiYgdGhpcy5hdXRvcGxheSAhPT0gZmFsc2UpLFxuICAgICAgICBjb250cm9sczogdGhpcy5jb250cm9scyxcbiAgICAgICAgc3JjOiB0aGlzLnNyY1xuICAgICAgfSxcbiAgICAgIG9uOiB0aGlzLmNyZWF0ZUV2ZW50TWFwKFsnc3RhcnQnLCAncGF1c2UnLCAnZmluaXNoJywgJ2ZhaWwnXSksXG4gICAgICBzdGF0aWNDbGFzczogJ3dlZXgtdmlkZW8nXG4gICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgYmFzZSwgZXZlbnQgfSBmcm9tICcuLi9taXhpbnMnXG5pbXBvcnQgeyB2YWxpZGF0ZVN0eWxlcyB9IGZyb20gJy4uL3ZhbGlkYXRvcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtiYXNlLCBldmVudF0sXG4gIHByb3BzOiB7XG4gICAgc3JjOiBTdHJpbmdcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC8vIFRPRE86IGNoZWNrIGNyb3NzLW9yaWdpblxuICAgIGdvQmFjayAoKSB7XG4gICAgICBpZiAodGhpcy4kZWwpIHtcbiAgICAgICAgdGhpcy4kZWwuY29udGVudFdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICAgICAgfVxuICAgIH0sXG4gICAgZ29Gb3J3YXJkICgpIHtcbiAgICAgIGlmICh0aGlzLiRlbCkge1xuICAgICAgICB0aGlzLiRlbC5jb250ZW50V2luZG93Lmhpc3RvcnkuZm9yd2FyZCgpXG4gICAgICB9XG4gICAgfSxcbiAgICByZWxvYWQgKCkge1xuICAgICAgaWYgKHRoaXMuJGVsKSB7XG4gICAgICAgIHRoaXMuJGVsLmNvbnRlbnRXaW5kb3cuaGlzdG9yeS5yZWxvYWQoKVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBpZiAodGhpcy4kZWwpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3BhZ2VmaW5pc2gnLCB0aGlzLmNyZWF0ZUN1c3RvbUV2ZW50KHRoaXMsICdwYWdlc3RhcnQnLCB7IHVybDogdGhpcy5zcmMgfSkpXG4gICAgICB0aGlzLiRlbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZXZlbnQgPT4ge1xuICAgICAgICB0aGlzLiRlbWl0KCdwYWdlZmluaXNoJywgdGhpcy5jcmVhdGVDdXN0b21FdmVudCh0aGlzLCAncGFnZWZpbmlzaCcsIHsgdXJsOiB0aGlzLnNyYyB9KSlcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlciAoY3JlYXRlRWxlbWVudCkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICB2YWxpZGF0ZVN0eWxlcygnd2ViJywgdGhpcy4kdm5vZGUuZGF0YSAmJiB0aGlzLiR2bm9kZS5kYXRhLnN0YXRpY1N0eWxlKVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICAnd2VleC10eXBlJzogJ3dlYicsXG4gICAgICAgIHNyYzogdGhpcy5zcmNcbiAgICAgIH0sXG4gICAgICBvbjogdGhpcy5jcmVhdGVFdmVudE1hcChbJ2Vycm9yJ10pLFxuICAgICAgc3RhdGljQ2xhc3M6ICd3ZWV4LXdlYidcbiAgICB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi91dGlscydcbi8vIGltcG9ydCB7IHZhbGlkYXRlU3R5bGVzIH0gZnJvbSAnLi4vdmFsaWRhdG9yJ1xuXG4vLyBsZXQgd2FybmVkID0gZmFsc2VcblxuZnVuY3Rpb24gZ2V0SGVhZFN0eWxlTWFwICgpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQuc3R5bGVTaGVldHMpXG4gICAgLnJlZHVjZSgocHJlLCBzdHlsZVNoZWV0KSA9PiB7XG4gICAgICBjb25zdCBydWxlcyA9IHN0eWxlU2hlZXQucnVsZXMgfHwgc3R5bGVTaGVldC5jc3NSdWxlc1xuICAgICAgQXJyYXkuZnJvbShydWxlcykuZm9yRWFjaChydWxlID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBydWxlLnNlbGVjdG9yVGV4dCB8fCAnJ1xuICAgICAgICBjb25zdCBtYXRjaCA9IHNlbGVjdG9yLm1hdGNoKC9eXFwuKFteLl0rKSQvKVxuICAgICAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtcbiAgICAgICAgICBwcmVbbWF0Y2hbMV1dID0gcnVsZS5jc3NUZXh0Lm1hdGNoKC97KFtefV0rKX0vKVsxXS50cmltKCkuc3BsaXQoJzsnKVxuICAgICAgICAgICAgLnJlZHVjZSgoc3R5bGVPYmosIHN0YXRlbWVudCkgPT4ge1xuICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudHJpbSgpXG4gICAgICAgICAgICAgIGlmIChzdGF0ZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNBcnIgPSBzdGF0ZW1lbnQuc3BsaXQoJzonKS5tYXAoKHBhcnQpID0+IHBhcnQudHJpbSgpKVxuICAgICAgICAgICAgICAgIHN0eWxlT2JqW3Jlc0FyclswXV0gPSByZXNBcnJbMV1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gc3R5bGVPYmpcbiAgICAgICAgICAgIH0sIHt9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHByZVxuICAgIH0sIHt9KVxufVxuXG4vLyBmdW5jdGlvbiBnZXRXYXJuVGV4dCAocHJvcCkge1xuLy8gICByZXR1cm4gYFtWdWUgUm5lZGVyXSBcIiR7cHJvcH1cIiBpcyBub3QgYSBzdGFuZGFyZCBDU1MgcHJvcGVydHksYFxuLy8gICAgICsgJ2l0IG1heSBub3Qgc3VwcG9ydCB2ZXJ5IHdlbGwgb24gd2VleCB2dWUgcmVuZGVyLidcbi8vIH1cblxuLy8gZnVuY3Rpb24gbm9ybWFsaXplIChzdHlsZXMpIHtcbi8vICAgY29uc3QgcmVhbFN0eWxlID0ge31cbi8vICAgZm9yIChjb25zdCBrZXkgaW4gc3R5bGVzKSB7XG4vLyAgICAgbGV0IHZhbHVlID0gc3R5bGVzW2tleV1cblxuLy8gICAgIC8vIFRPRE86IGFkZCBtb3JlIHJlbGlhYmxlIGNoZWNrXG4vLyAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbi8vICAgICAgIHZhbHVlICs9ICdweCdcbi8vICAgICB9XG5cbi8vICAgICAvLyB3YXJuIGZvciB1bnN1cHBvcnRlZCBwcm9wZXJ0aWVzXG4vLyAgICAgc3dpdGNoIChrZXkpIHtcbi8vICAgICAgIGNhc2UgJ2xpbmVzJzpcbi8vICAgICAgIGNhc2UgJ2l0ZW0tY29sb3InOlxuLy8gICAgICAgY2FzZSAnaXRlbUNvbG9yJzpcbi8vICAgICAgIGNhc2UgJ2l0ZW0tc2VsZWN0ZWQtY29sb3InOlxuLy8gICAgICAgY2FzZSAnaXRlbVNlbGVjdGVkQ29sb3InOlxuLy8gICAgICAgY2FzZSAnaXRlbS1zaXplJzpcbi8vICAgICAgIGNhc2UgJ2l0ZW1TaXplJzogY29uc29sZS53YXJuKGdldFdhcm5UZXh0KGtleSkpOyBicmVha1xuLy8gICAgIH1cblxuLy8gICAgIHJlYWxTdHlsZVtrZXldID0gdmFsdWVcbi8vICAgfVxuLy8gICByZXR1cm4gcmVhbFN0eWxlXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldFN0eWxlTWFwIChjb21wb25lbnQpIHtcbi8vICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuJHZub2RlICYmIGNvbXBvbmVudC4kdm5vZGUuY29udGV4dCkge1xuLy8gICAgIGNvbnN0ICRvcHRpb25zID0gY29tcG9uZW50LiR2bm9kZS5jb250ZXh0LiRvcHRpb25zXG4vLyAgICAgaWYgKCRvcHRpb25zICYmICRvcHRpb25zLnN0eWxlKSB7XG4vLyAgICAgICBpZiAoIXdhcm5lZCkge1xuLy8gICAgICAgICB3YXJuZWQgPSB0cnVlXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tJbnZhbGlkIEJ1bmRsZSBGb3JtYXRdIFRoaXMgYnVuZGxlIGZvcm1hdCBpcyAnXG4vLyAgICAgICAgICAgKyAnZ2VuZXJhdGVkIGZvciBBbmRyb2lkIGFuZCBpT1MgcGxhdGZvcm0sICdcbi8vICAgICAgICAgICArICdwbGVhc2UgdXNlIFwidnVlLWxvYWRlclwiIHRvIGNvbXBpbGUgdGhlIFwiLnZ1ZVwiIGZpbGUgb24gdGhlIHdlYi4nKVxuLy8gICAgICAgfVxuLy8gICAgICAgcmV0dXJuICRvcHRpb25zLnN0eWxlXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGdldFN0YXRpY0NsYXNzIChjb21wb25lbnQpIHtcbi8vICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuJHZub2RlICYmIGNvbXBvbmVudC4kdm5vZGUuZGF0YSkge1xuLy8gICAgIGNvbnN0IGRhdGEgPSBjb21wb25lbnQuJHZub2RlLmRhdGFcbi8vICAgICByZXR1cm4gW10uY29uY2F0KGRhdGEuc3RhdGljQ2xhc3MsIGRhdGEuY2xhc3MpXG4vLyAgIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gZ2V0Q29tcG9uZW50U3R5bGUgKGNvbnRleHQpIHtcbiAgLy8gY29uc3Qgc3R5bGVNYXAgPSBnZXRTdHlsZU1hcChjb250ZXh0KVxuICAvLyBjb25zdCBzdGF0aWNDbGFzcyA9IGdldFN0YXRpY0NsYXNzKGNvbnRleHQpXG5cbiAgLy8gaWYgKHN0eWxlTWFwICYmIEFycmF5LmlzQXJyYXkoc3RhdGljQ2xhc3MpKSB7XG4gIC8vICAgY29uc3Qgc3R5bGVzID0gc3RhdGljQ2xhc3MucmVkdWNlKChyZXMsIG5hbWUpID0+IHtcbiAgLy8gICAgIHJldHVybiBleHRlbmQocmVzLCBzdHlsZU1hcFtuYW1lXSlcbiAgLy8gICB9LCB7fSlcblxuICAvLyAgIHJldHVybiBub3JtYWxpemUoc3R5bGVzKVxuICAvLyB9XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIG1lcmdlU3R5bGVzIChjb250ZXh0KSB7XG4vLyAgIGNvbnN0IHN0eWxlcyA9IGdldENvbXBvbmVudFN0eWxlKGNvbnRleHQpXG4vLyAgIGlmIChjb250ZXh0LiRlbCAmJiBzdHlsZXMpIHtcbi8vICAgICB2YWxpZGF0ZVN0eWxlcyhjb250ZXh0LiRvcHRpb25zICYmIGNvbnRleHQuJG9wdGlvbnMuX2NvbXBvbmVudFRhZywgc3R5bGVzKVxuLy8gICAgIGZvciAoY29uc3Qga2V5IGluIHN0eWxlcykge1xuLy8gICAgICAgY29udGV4dC4kZWwuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYmVmb3JlQ3JlYXRlICgpIHtcbiAgICAvLyBnZXQgc3RhdGljIGNsYXNzIHN0eWxlIG1hcCBmcm9tIGRvY3VtZW50J3Mgc3R5bGVTaGVldHMuXG4gICAgaWYgKCF3ZWV4LnN0eWxlTWFwKSB7XG4gICAgICB3ZWV4LnN0eWxlTWFwID0gZ2V0SGVhZFN0eWxlTWFwKClcbiAgICAgIE9iamVjdC5mcmVlemUod2VleClcbiAgICB9XG4gIH0sXG4gIC8vIG1vdW50ZWQgKCkge1xuICAvLyAgIGNvbnNvbGUubG9nKCdjYWxsIG1vdW50ZWQ6IG1lcmdlZCBzdHlsZXMnKVxuICAvLyAgIG1lcmdlU3R5bGVzKHRoaXMpXG4gIC8vIH0sXG4gIC8vIGJlZm9yZVVwZGF0ZSAoKSB7XG4gIC8vICAgY29uc29sZS5sb2coJ2NhbGwgYmVmb3JlVXBkYXRlOiBtZXJnZWQgc3R5bGVzJylcbiAgLy8gICBtZXJnZVN0eWxlcyh0aGlzKVxuICAvLyB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBwcmVyZW5kZXIgKCkge1xuICAgICAgdGhpcy5tZXJnZVN0eWxlcygpXG4gICAgfSxcblxuICAgIC8vIGdldCBzdHlsZSBmcm9tIHN0YXRpY0NsYXNzIGFuZCBzdGF0aWNTdHlsZS5cbiAgICBnZXRDb21wb25lbnRTdHlsZSAoKSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHt9XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuZGF0YSB8fCB7fVxuICAgICAgY29uc3Qgc3RhdGljU3R5bGUgPSBkYXRhLnN0YXRpY1N0eWxlIHx8IHt9XG4gICAgICBjb25zdCBjbGFzc05hbWVzID0gKGRhdGEuc3RhdGljQ2xhc3MgfHwgJycpLnNwbGl0KCcgJylcblxuICAgICAgLy8gYXBwbHkgc3RhdGljIGNsYXNzIHN0eWxlcy4gVGhpcyByZWxpZXMgb24gZ2V0SGVhZFN0eWxlTWFwXG4gICAgICAvLyBiZWluZyBhbHJlYWR5IHRyaWdnZXJlZCBvbmNlIGluIHRoZSBob29rIGJlZm9yZUNyZWF0ZS5cbiAgICAgIGlmICh3ZWV4LnN0eWxlTWFwKSB7XG4gICAgICAgIGNsYXNzTmFtZXMuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0eWxlT2JqID0gd2VleC5zdHlsZU1hcFtjbGFzc05hbWVdIHx8IHt9XG4gICAgICAgICAgZXh0ZW5kKHN0eWxlLCBzdHlsZU9iailcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgLy8gYXBwbHkgc3RhdGljIGlubGluZSBzdHlsZXMuXG4gICAgICBleHRlbmQoc3R5bGUsIHN0YXRpY1N0eWxlKVxuXG4gICAgICByZXR1cm4gc3R5bGVcbiAgICB9LFxuXG4gICAgLy8gbWVyZ2Ugc3RhdGljIHN0eWxlcyBhbmQgc3RhdGljIGNsYXNzIHN0eWxlcyBpbnRvICR2bm9kZS5kYXRhLm1lcmdlZFN0eWxlcy5cbiAgICBtZXJnZVN0eWxlcyAoKSB7XG4gICAgICBpZiAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuZGF0YSkge1xuICAgICAgICB0aGlzLiR2bm9kZS5kYXRhLm1lcmdlZFN0eWxlID0gdGhpcy5nZXRDb21wb25lbnRTdHlsZSgpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGdldFBhcmVudFJlY3QgKCkge1xuICAgICAgY29uc3QgcGFyZW50RWxtID0gdGhpcy4kb3B0aW9ucy5fcGFyZW50RWxtXG4gICAgICByZXR1cm4gcGFyZW50RWxtICYmIHBhcmVudEVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIH0sXG5cbiAgICBnZXRQYXJlbnRSZWN0QXN5bmMgKGNiKSB7XG4gICAgICB0aGlzLiRuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYiAmJiBjYi5jYWxsKHRoaXMsIHRoaXMuZ2V0UGFyZW50UmVjdFN5bmMoKSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgc2VtdmVyIGZyb20gJ3NlbXZlcidcbmltcG9ydCB7IHNldFZpZXdwb3J0IH0gZnJvbSAnLi9lbnYnXG5pbXBvcnQgKiBhcyBjb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cydcbmltcG9ydCBzdHlsZU1peGluIGZyb20gJy4vbWl4aW5zL3N0eWxlJ1xuXG5mdW5jdGlvbiBpbnN0YWxsIChWdWUpIHtcbiAgc2V0Vmlld3BvcnQoKVxuXG4gIFZ1ZS5wcm90b3R5cGUuJGdldENvbmZpZyA9ICgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oJ1tWdWUgUmVuZGVyXSBcInRoaXMuJGdldENvbmZpZ1wiIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgXCJ3ZWV4LmNvbmZpZ1wiIGluc3RlYWQuJylcbiAgICByZXR1cm4gd2luZG93LndlZXguY29uZmlnXG4gIH1cblxuICBjb25zdCBodG1sUmVnZXggPSAvXmh0bWw6L2lcbiAgVnVlLmNvbmZpZy5pc1Jlc2VydmVkVGFnID0gdGFnID0+IGh0bWxSZWdleC50ZXN0KHRhZylcbiAgVnVlLmNvbmZpZy5wYXJzZVBsYXRmb3JtVGFnTmFtZSA9IHRhZyA9PiB0YWcucmVwbGFjZShodG1sUmVnZXgsICcnKVxuXG4gIGZvciAoY29uc3QgbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgVnVlLmNvbXBvbmVudChuYW1lLCBjb21wb25lbnRzW25hbWVdKVxuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHNlbXZlci5sdChWdWUudmVyc2lvbiwgJzIuMS41JykpIHtcbiAgICAgIGNvbnNvbGUud2FybihgW1Z1ZSBSZW5kZXJdIFRoZSB2ZXJzaW9uIG9mIFZ1ZSBzaG91bGQgYmUgYCArXG4gICAgICAgIGBncmVhdGVyIHRoYW4gMi4xLjUsIGN1cnJlbnQgaXMgJHtWdWUudmVyc2lvbn0uYClcbiAgICB9XG4gICAgY29uc29sZS5pbmZvKGBbVnVlIFJlbmRlcl0gUmVnaXN0ZXJlZCBjb21wb25lbnRzOiBgXG4gICAgICArIGBbJHtPYmplY3Qua2V5cyhjb21wb25lbnRzKS5qb2luKCcsICcpfV0uYClcblxuICAgIC8vIG1lcmdlIHN0eWxlcyB0byBpbmxpbmVcbiAgICBWdWUubWl4aW4oc3R5bGVNaXhpbilcbiAgfVxufVxuXG4vLyBhdXRvIGluc3RhbGwgaW4gZGlzdCBtb2RlXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LlZ1ZSkge1xuICBpbnN0YWxsKHdpbmRvdy5WdWUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5zdGFsbFxufVxuIl0sIm5hbWVzIjpbInRoaXMiLCJyZXF1aXJlJCQwIiwiaXNPYmplY3QiLCJyZXF1aXJlJCQxIiwiZG9jdW1lbnQiLCJyZXF1aXJlJCQyIiwicmVxdWlyZSQkMyIsImRQIiwicmVxdWlyZSQkNCIsImdsb2JhbCIsIiRleHBvcnQiLCJ0b1N0cmluZyIsIklPYmplY3QiLCJ0b0ludGVnZXIiLCJtaW4iLCJ0b0lPYmplY3QiLCJkZWZpbmVkIiwicmVxdWlyZSQkNSIsImFyZ3VtZW50cyIsImNvZiIsImFuT2JqZWN0IiwiZ2V0S2V5cyIsImVudW1CdWdLZXlzIiwiSUVfUFJPVE8iLCJQUk9UT1RZUEUiLCJoYXMiLCJUQUciLCJjcmVhdGUiLCJzZXRUb1N0cmluZ1RhZyIsInRvT2JqZWN0IiwicmVxdWlyZSQkOCIsInJlcXVpcmUkJDciLCJyZWRlZmluZSIsInJlcXVpcmUkJDYiLCJoaWRlIiwiSXRlcmF0b3JzIiwiSVRFUkFUT1IiLCJBcnJheVByb3RvIiwiY2xhc3NvZiIsImFGdW5jdGlvbiIsImN0eCIsInByb2Nlc3MiLCJQcm9taXNlIiwiaXNOb2RlIiwibmF2aWdhdG9yIiwibmV3UHJvbWlzZUNhcGFiaWxpdHkiLCJTUEVDSUVTIiwiTElCUkFSWSIsInJlcXVpcmUkJDIxIiwicmVxdWlyZSQkMjAiLCJyZXF1aXJlJCQxOSIsInJlcXVpcmUkJDE4IiwicmVxdWlyZSQkMTciLCJyZXF1aXJlJCQxNiIsInJlcXVpcmUkJDE1IiwicmVxdWlyZSQkMTQiLCJyZXF1aXJlJCQxMyIsInJlcXVpcmUkJDEyIiwicmVxdWlyZSQkMTEiLCJyZXF1aXJlJCQxMCIsInJlcXVpcmUkJDkiLCJUeXBlRXJyb3IiLCJjb25zdCIsImxldCIsIm1ldGEiLCJoYXNPd25Qcm9wZXJ0eSIsInFzIiwiZ2V0UGFyZW50U2Nyb2xsZXIiLCJxdWV1ZSIsIkNPTlRFTlRfQ0xBU1MiLCJNU0dfQ0xBU1MiLCJCVVRUT05fR1JPVVBfQ0xBU1MiLCJCVVRUT05fQ0xBU1MiLCJpbml0IiwiRXZlbnQiLCJsaWIiLCJ1dGlscyIsInV0aWxzLmJpbmQiLCJ3ZWV4Iiwic3R5bGVWYWxpZGF0b3IuY29tbW9uIiwiZXZlbnQiLCJzaGFyZWQuY3JlYXRlTG9hZGluZyIsInNoYXJlZC5jcmVhdGVSZWZyZXNoIiwiaW5zdGFsbCIsImNvbXBvbmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEdBQUcsY0FBYyxHQUFHLE1BQU0sQ0FBQzs7O1lBR3RCLElBQUksS0FBSyxDQUFDO1lBQ1YsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRO2dCQUMzQixPQUFPLENBQUMsR0FBRztnQkFDWCxLQUFzQjtnQkFDdEIsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFzQixDQUFDO2NBQzVDLEVBQUEsS0FBSyxHQUFHLFdBQVc7Z0JBQ2pCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDaEMsQ0FBQyxFQUFBOztjQUVKLEVBQUEsS0FBSyxHQUFHLFdBQVcsRUFBRSxDQUFDLEVBQUE7Ozs7QUFJcEMsMkJBQTJCLEdBQUcsT0FBTyxDQUFDOztBQUV0QyxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDckIsSUFBSSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLElBQUksZ0JBQWdCLENBQUM7OztBQUduRSxJQUFJLHlCQUF5QixHQUFHLEVBQUUsQ0FBQzs7O0FBR25DLElBQUksRUFBRSxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDekIsSUFBSSxHQUFHLEdBQUcsV0FBVyxHQUFHLEVBQUUsQ0FB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RSxLQUFLLEVBQUU7RUFDakMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDM0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUU7SUFDOUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLElBQUksR0FBRyxDQUFDOztJQUVSLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztNQUNSLEVBQUEsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFBO1NBQ04sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO01BQ2IsRUFBQSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxRQUFRLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUE7U0FDM0MsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDOztNQUViLEVBQUEsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBQTtTQUMzRCxJQUFJLEVBQUUsRUFBRTtNQUNYLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQztNQUM3QixJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRztRQUN0QixFQUFBLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUE7TUFDaEIsR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUU7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QUFFO0VBQ3pDLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxTQUFTLENBQUM7RUFDNUIsUUFBUSxJQUFJLENBQUMsTUFBTTtJQUNqQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUU7d0JBQ0osRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNYLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEQsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxF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QyxFQUFBLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxFQUFBLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLEVBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFBLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLEVBQUEsS0FBSyxFQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxNQUFBLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLHdIQUF3SCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxBQUFDOztBQ0NsOUQsV0FBYyxHQUFHLFVBQVUsR0FBRyxF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QyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUMsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFBLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLE9BQU8sQ0FBQyxFQUFBLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFBLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsRUFBQSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFBLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUEsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQyxLQUFLLEVBQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEFBQUM7O0FDRXpzSVosSUFBTWEsS0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUE7QUFDdEJiLElBQU0sR0FBRyxHQUFHO0VBQ1YsUUFBUSxFQUFFLEtBQUs7RUFDZixXQUFXLEVBQUUsUUFBUTtFQUNyQixTQUFTLEVBQUUsU0FBUyxDQUFDLFNBQVM7RUFDOUIsT0FBTyxFQUFFYSxLQUFH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
