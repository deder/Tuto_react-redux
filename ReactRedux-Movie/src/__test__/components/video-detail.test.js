import VideoDetail from '../../components/video-detail';
import React from 'react';

describe("<VideoDetail />",()=>{
    it("VideoDetail Avec video", () => {
        const wrapper = mount(
            <VideoDetail youtubeKey="youtubeKey" title="title" resume="resume" release_date="18/10/2018"  />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it("VideoDetail Sans video", () => {
        const wrapper = mount(
            <VideoDetail title="title" resume="resume" release_date="18/10/2018"  />
        );
        expect(wrapper).toMatchSnapshot();
    });
})