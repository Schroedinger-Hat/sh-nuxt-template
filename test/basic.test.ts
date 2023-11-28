import { describe, expect, it } from 'vitest'

describe('basic test', () => {
  it('expect to be true', () => {
    expect(true).toBe(true)
  })
  it('calculates addition', () => {
    expect(1 + 1).toEqual(2)
  })
})
