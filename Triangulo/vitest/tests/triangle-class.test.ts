import { describe, expect, test } from 'vitest'
import { Triangle } from '../src'

describe('Testing triangle class', () => {
    test('Should return if triangle is not valid with null param', () => {
        const triangle = new Triangle(0, 0, 0)
        expect.soft(triangle.isValid()).toBe(false)
    })

    test('Should return if triangle is not valid with invalid param', () => {
        const triangle = new Triangle(1, 1, 3);
        expect.soft(triangle.isValid()).toBe(false)
        triangle.update(3, 1, 1);
        expect.soft(triangle.isValid()).toBe(false)
        triangle.update(1, 3, 1);
        expect.soft(triangle.isValid()).toBe(false)
    })

    test('Should return if triangle is Equilateral', () => {
        const triangle = new Triangle(2, 2, 2);
        expect.soft(triangle.isValid()).toBe(true)
        expect.soft(triangle.whatIsTheTriangle()).toEqual('Equilatero')
    })

    test('Should return if triangle is Isoseles', () => {
        const triangle = new Triangle(2, 2, 3);
        expect.soft(triangle.isValid()).toBe(true)
        expect.soft(triangle.whatIsTheTriangle()).toEqual('Isoseles')
        triangle.update(4, 3, 3);
        expect.soft(triangle.isValid()).toBe(true)
        expect.soft(triangle.whatIsTheTriangle()).toEqual('Isoseles')
        triangle.update(10, 6, 10);
        expect.soft(triangle.isValid()).toBe(true)
        expect.soft(triangle.whatIsTheTriangle()).toEqual('Isoseles')
    })

    test('Should return if triangle is Scalene', () => {
        const triangle = new Triangle(2, 3, 4);
        expect.soft(triangle.isValid()).toBe(true)
        expect.soft(triangle.whatIsTheTriangle()).toEqual('Escaleno')
    })
})
