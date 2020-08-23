import { shallow } from 'enzyme'
import React from 'react'
import Error from '../Error'

describe('<Error />', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<Error title="title">Message</Error>)
        expect(wrapper).toMatchSnapshot()
    })
})
