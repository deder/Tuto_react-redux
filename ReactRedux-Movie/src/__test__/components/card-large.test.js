import CardLarge from '../../components/card-large';
import React from 'react';

describe("<CardLarge />",()=>{
    it("Snapshot", () => {
        const wrapper = mount(
          <CardLarge />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("onClick", () => {
        const onClick = jest.fn();
        const wrapper = mount(
          <CardLarge onClick={onClick} />
        );
        wrapper.simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
})