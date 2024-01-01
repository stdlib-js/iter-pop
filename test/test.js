/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var randu = require( '@stdlib/random-iter-randu' );
var iterEmpty = require( '@stdlib/iter-empty' );
var array2iterator = require( '@stdlib/array-to-iterator' );
var iteratorSymbol = require( '@stdlib/symbol-iterator' );
var noop = require( '@stdlib/utils-noop' );
var iterPop = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterPop, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (no other arguments)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterPop( value );
		};
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (callback)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterPop( value, noop );
		};
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (callback+context)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterPop( value, noop, {} );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterPop( array2iterator( [ 1, 2, 3 ] ), value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (this context)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterPop( array2iterator( [ 1, 2, 3 ] ), value, {} );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object (infinite iterator)', function test( t ) {
	var it;
	var v;
	var i;

	it = iterPop( randu() );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		v = it.next();
		t.equal( typeof v.value, 'number', 'returns expected value' );
		t.equal( v.done, false, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (finite iterator)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 2, 3, 4 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterPop( array2iterator( values ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (empty iterator)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [
		{
			'done': true
		}
	];

	it = iterPop( iterEmpty() );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (empty iterator; callback)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [
		{
			'done': true
		}
	];

	it = iterPop( iterEmpty(), clbk );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function clbk() {
		t.fail( 'should not be invoked' );
	}
});

tape( 'the function returns an iterator protocol-compliant object (callback)', function test( t ) {
	var expected;
	var values;
	var actual;
	var FLG;
	var it;
	var i;

	values = [ 1, 2, 3, 4 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterPop( array2iterator( values ), clbk );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );

	t.equal( FLG, true, 'returns expected value' );
	t.end();

	function clbk( v ) {
		FLG = true;
		t.equal( v, values[ values.length-1 ], 'returns expected value' );
	}
});

tape( 'the function supports specifying the callback execution context', function test( t ) {
	var expected;
	var values;
	var actual;
	var ctx;
	var it;
	var i;

	values = [ 1, 2, 3, 4 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'done': true
		}
	];

	ctx = {
		'FLG': false
	};
	it = iterPop( array2iterator( values ), clbk, ctx );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );

	t.equal( ctx.FLG, true, 'returns expected value' );
	t.end();

	function clbk( v ) {
		this.FLG = true; // eslint-disable-line no-invalid-this
		t.equal( v, values[ values.length-1 ], 'returns expected value' );
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterPop( randu() );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = iterPop( randu() );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.equal( r.value, 'finished', 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'if an environment supports `Symbol.iterator` and the provided iterator is iterable, the returned iterator is iterable', function test( t ) {
	var iterPop;
	var opts;
	var rand;
	var it1;
	var it2;
	var i;

	iterPop = proxyquire( './../lib/main.js', {
		'@stdlib/symbol-iterator': '__ITERATOR_SYMBOL__'
	});

	opts = {
		'seed': 12345
	};
	rand = randu( opts );
	rand[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterPop( rand );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < 100; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();

	function factory() {
		return randu( opts );
	}
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var iterPop;
	var it;

	iterPop = proxyquire( './../lib/main.js', {
		'@stdlib/symbol-iterator': false
	});

	it = iterPop( randu() );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});

tape( 'if a provided iterator is not iterable, the returned iterator is not iterable', function test( t ) {
	var iterPop;
	var rand;
	var it;

	iterPop = proxyquire( './../lib/main.js', {
		'@stdlib/symbol-iterator': '__ITERATOR_SYMBOL__'
	});

	rand = randu();
	rand[ '__ITERATOR_SYMBOL__' ] = null;

	it = iterPop( rand );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
