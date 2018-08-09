import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from '../../src/components/Button';

describe('Integration | Button', () => {
  it('renders correctly (snapshot)', () => {
    const rendered = renderer.create(
      <Button className="foo">Bar</Button>,
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  it('should render without throwing an error', () => {
    expect(shallow(<Button className="foo">Bar</Button>).contains(<button className="btn foo">Bar</button>)).toBe(true);
  });
  /*
  it('should be selectable by class "foo"', function() {
    expect(shallow(<Button />).is('.foo')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<Button />).find('.foo').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<Button />).text()).toEqual('Bar');
  });
  */
});
