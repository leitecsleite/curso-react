import  { render } from '@testing-library/react';
import {Posts} from '.';


const props = {
    posts: [
        {
            id: 1,
            title: 'title 1',
            body: 'body 1', 
            cover: 'img/img1.png'
         
        },

        {
            id: 2,
            title: 'title 2',
            body: 'body 2', 
            cover: 'img/img2.png'
         
        },

        {
            id: 3,
            title: 'title 3',
            body: 'body 3', 
            cover: 'img/img3.png'
         
        },
    ]
}

 describe('<Posts />', () => {
     it('should render posts', () => {
       render(<Posts {...props} />)

       expect(screen.getAllByeRole('heading', {name: /title/i})).toHaveLength(4);
     })
 })