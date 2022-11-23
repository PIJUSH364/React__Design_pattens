import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const SubContainer = styled.div`
  flex: ${(props) => props.weight};
`;

function SplictScreen({ leftWeight, rightWeight, children }) {
  const [left, right] = children;

  return (
    <Container>
      <SubContainer weight={leftWeight}>{left}</SubContainer>
      <hr />
      <SubContainer weight={rightWeight}>{right}</SubContainer>
    </Container>
  );
}

export default SplictScreen;
