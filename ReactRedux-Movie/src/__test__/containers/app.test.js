import App from '../../containers/app';
import React from 'React';
import videoService from '../../services/__mocks__/video.service';

jest.mock('../../services/video.service.js');

describe("<App />",()=>{
    it('Snapshot', () => {
        const wrapper = mount(
            <App />
        );
        expect(wrapper).toMatchSnapshot();
    });
    
    it("toogleShowForm", done => {
        const wrapper = mount(
            <App />
        );
        setTimeout(()=>{
            wrapper.instance().toogleShowForm();
            try {
                expect(wrapper.state().showSearchInput).toEqual(true);
                done();
            } catch (error) {
                done.fail(error)
            }
        })
    });
    
    it("searchHandler", done => {
       const wrapper = mount(
            <App />
        );
        wrapper.instance().searchHandler();
        setTimeout(()=>{
            try {
                wrapper.update();
                const titleFirtRecommendMovie = wrapper.state().recommandMovies[0].title
                expect(titleFirtRecommendMovie).toEqual("The Predator")
                done();
            } catch (error) {
                done.fail(error)
            } 
        })
    });
    it("searchHandler sans vidéo correspondante", done => {
        const wrapper = mount(
             <App />
         );
         wrapper.instance().searchHandler("vide");
         setTimeout(()=>{
             try {
                 wrapper.update();
                 done();
             } catch (error) {
                 done.fail(error)
             } 
         })
     });

        
    it("clickCardHandler", done => {
        const wrapper = mount(
             <App />
         );
         videoService.getPopularMovies().then(({data})=>{
            setTimeout(wrapper.instance().clickCardHandler(data.results[2]))
            setTimeout(()=>{
                try {
                    wrapper.update();
                    const titleCurrentMovieMovie = wrapper.state().currentMovie.title
                    expect(titleCurrentMovieMovie).toEqual("La Nonne")
                    done();
                } catch (error) {
                    done.fail(error)
                } 
            })
        })
     });

     it("clickCardHandler - movie sans youtube key", done => {
        const wrapper = mount(
             <App />
         );
         videoService.getPopularMovies().then(({data})=>{
            setTimeout(wrapper.instance().clickCardHandler(data.results[3]))
            setTimeout(()=>{
                try {
                    wrapper.update();
                    const titleCurrentMovieMovie = wrapper.state().currentMovie.title
                    expect(titleCurrentMovieMovie).toEqual("La Nonne")
                    done();
                } catch (error) {
                    done.fail(error)
                } 
            })
        })
     });

})