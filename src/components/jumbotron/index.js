import React from 'react';
import {
  Container,
  Inner,
  Pane,
  Item,
  Title,
  SubTitle,
  Image,
} from './styles/jumbotron';

export default function Jumbotron({
  children,
  direction = 'row',
  ...resProps
}) {
  return (
    <Item {...resProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...resProps }) {
  return <Container {...resProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...resProps }) {
  return <Pane {...resProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...resProps }) {
  return <Title {...resProps}>{children}</Title>;
};
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...resProps }) {
  return <SubTitle {...resProps}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronImage({ ...resProps }) {
  return <Image {...resProps} />;
};
