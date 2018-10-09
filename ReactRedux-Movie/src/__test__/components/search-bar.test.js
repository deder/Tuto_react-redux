import SearchBar from '../../components/search-bar';
import React from 'react';

describe("<SearchBar />",()=>{
    it("Snapshot", () => {
        const onSearch = jest.fn();
        const toogleShowForm= jest.fn();
        const wrapper = mount(
            <SearchBar onSearch={onSearch} toogleShowForm={toogleShowForm} />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("onChangeHandler", done => {
        const onSearch = jest.fn();
        const event = {
          preventDefault() {},
          target: { value: 'pokemon' }
        };

        const wrapper = mount(
            <SearchBar onSearch={onSearch} />
        );
        wrapper.find('#search').simulate('change', event);
        setTimeout(()=>{
            try {
                expect(onSearch).toHaveBeenCalled();
                done()
            } catch (error) {
                done.fail(error)
            }
        },1000)
    });
    it("onChangeHandler with double change", done => {
        const onSearch = jest.fn();
        const event = {
          preventDefault() {},
          target: { value: 'pokemon' }
        };
        const event2 = {
            preventDefault() {},
            target: { value: 'terminator' }
          };
        const wrapper = mount(
            <SearchBar onSearch={onSearch} />
        );
        wrapper.find('#search').simulate('change', event);
        wrapper.find('#search').simulate('change', event2);
        setTimeout(()=>{
            try {
              
                expect(onSearch).toHaveBeenCalledWith('pokemon');
                done()
            } catch (error) {
                done.fail(error)
            }
        },1001)
    });

    it("onEnterHandler with key 'Enter'", done => {
        const onSearch = jest.fn();
        const event = {
          preventDefault() {},
          target: { value: 'pokemon' },
          keyCode:13,
          key:"Enter"
        };
        const wrapper = shallow(
            <SearchBar onSearch={onSearch}  />
        );
        wrapper.find('#search').simulate('keyPress', event);
        setTimeout(()=>{
            try {
                expect(onSearch).toHaveBeenCalled();
                done()
            } catch (error) {
                done.fail(error)
            }
        })
    });
    it("onEnterHandler without key 'Enter'", done => {
        const onSearch = jest.fn();
        const event = {
            preventDefault() {},
            target: { value: 'terminator' },
            key:""
          };

        const wrapper = shallow(
            <SearchBar onSearch={onSearch} />
        );
        wrapper.find('#search').simulate('keyPress', event);
        setTimeout(()=>{
            try {
                expect(onSearch).not.toHaveBeenCalled();
                done()
            } catch (error) {
                done.fail(error)
            }
        },500)
    });
})