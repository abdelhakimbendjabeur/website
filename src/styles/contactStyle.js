import styled from 'styled-components'

export const ContactWrapperStyle = styled.div`
  align-items: center;
`;
export const ContactHeader = styled.h1`
  text-align: CENTER;
  color: #eeeeee;
  margin-bottom: 5%;
  font-weight: 300;
`
export const ContactDetails = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  h3{
    font-size: 30px;
    color: #7fa1e8;
    font-weight: 300;
  }
  @media (max-width: 700px) {
    flex-direction: row;
    align-items: center;
  }
`
export const ContactBox = styled.div`
  display: flex;
  float: right;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`
