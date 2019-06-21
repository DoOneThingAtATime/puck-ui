import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'

describe('icon', () => {
  it('是个 div', () => {
    const json = renderer.create(<Icon name="alipay" />).toJSON()
    expect(json).toMatchSnapshot()
  })
})