import CardSmall from '../../components/card-small';
import React from 'react';

describe("<CardSmall />",()=>{
    it("Snapshot", () => {
        const wrapper = mount(
          <CardSmall />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("onClick", () => {
        const onClick = jest.fn();
        const wrapper = mount(
          <CardSmall onClick={onClick} />
        );
        wrapper.simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
})
