import styled from "styled-components";
import FaceDetectIcon from '../assets/FaceDetectIcon.svg';

const FaceDetectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h2`
    margin: 20px 0;
    font-weight: 800;
    font-size: 20px;
    text-align: center;
    color: #383838;
`
const ImagePreviewWrapper = styled.div`
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F9F9FB;
    background-image: url(${FaceDetectIcon});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 16px;
    border: 2px dashed #D2D7E5;
`
const Image = styled.img`
    border-radius: ${props => props.borderRadius};
`


const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
`
const InputWrapper = styled.input`
    width: 500px;
    height: 45px;
    margin: 12px 0;
    padding: 8px 20px;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #D2D7E5;
    border-radius: 16px;
    outline: none;
`
const SubmitButton = styled.button`
    width: 500px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 16px;
    border: none;
    outline: none;
    background: #576684;
    color: #FFFFFF;
    font-weight: 300;
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;
`

const FaceBox = styled.div`
  position: absolute;
  border: 2px solid #FFFFFF;
  border-radius: 8px;
`;
const FaceBoxesWrapper = styled.div`

`;




export {
    FaceDetectionWrapper,
    Title,
    ImagePreviewWrapper,
    Image,
    FormWrapper,
    InputWrapper,
    SubmitButton,
    FaceBox,
    FaceBoxesWrapper
}