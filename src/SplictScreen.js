import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const SubContainer = styled.div`
  flex: 1;
`;

function SplictScreen({ left: Left, right: Right }) {
  return (
    <Container>
      <SubContainer>
        <Left />
      </SubContainer>
      <hr />
      <SubContainer>
        <Right />
      </SubContainer>
    </Container>
  );
}

export default SplictScreen;
