import { render } from '@testing-library/react';
import { PostCard} from '.';
import {postCardPropsMock} from './mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
    it('should render  PostCard correnctly', () => {
      render(<PostCard {...props}/>);

      expect(screen.getByRole('img', {name: /porps/i})).
      toHaveAttribute('src', 'img/img.png');

      expect(screen.getByRole('heading', {name: 'title 1 1'})).toBeInTheDocument()
      expect(screen.getByText('body 1')).toBeInTheDocument();

    });
});