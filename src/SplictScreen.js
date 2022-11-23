import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const SubContainer = styled.div`
  flex: ${(props) => props.weight};
`;

function SplictScreen({ left: Left, right: Right, leftWeight, rightWeight }) {
  return (
    <Container>
      <SubContainer weight={leftWeight}>
        <Left />
      </SubContainer>
      <hr />
      <SubContainer weight={rightWeight}>
        <Right />
      </SubContainer>
    </Container>
  );
}

export default SplictScreen;
