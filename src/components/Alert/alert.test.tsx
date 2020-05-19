import React from 'react';
import {render,fireEvent} from '@testing-library/react'
import Alert,{AlertProps} from './alert'

const defaultProps = {
    onClick:jest.fn()
}

const testProps:AlertProps ={
    type:'success',
    title:'alert'
}

describe('test alert component',()=>{
    it('判断是否渲染',()=>{
        const wrapper = render(<Alert {...testProps}/>)
        const element = wrapper.getByText('alert') 
        expect(element).toBeInTheDocument() // 是否渲染到document
        expect(element).toHaveClass('viking-alert-title')
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
})