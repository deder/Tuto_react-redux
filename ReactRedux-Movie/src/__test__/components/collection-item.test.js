import CollectionItem from '../../components/collection-item';
import React from 'react';

describe("<CollectionItem />",()=>{
    it("CollectionItem avec image", () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <CollectionItem onClick={onClick} image="test.png" title="title" description="description"  />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("CollectionItem Sans image", () => {
        const onClick = jest.fn();
        const wrapper = mount(
            <CollectionItem onClick={onClick} title="title" description="description"  />
        );
        expect(wrapper).toMatchSnapshot();
    });
})