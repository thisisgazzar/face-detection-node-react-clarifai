import {
    ImagePreviewWrapper,
    Image,
    FaceBoxesWrapper,
    FaceBox
} from './styled';
  
const FaceDetectionPreview = ({ boxDimensions, imageUrl }) => {

    const faceBoxGenerator = (dimensions) => {
        let boxes = [];

        for(let i = 0; i < dimensions.length; i++){
            boxes.push(<FaceBox key={i}
            style={{
                top: dimensions[i].topRow, 
                right: dimensions[i].rightCol, 
                bottom: dimensions[i].bottomRow, 
                left: dimensions[i].leftCol
            }}></FaceBox>)
        }
        return <FaceBoxesWrapper>{boxes}</FaceBoxesWrapper>
    }

    return (
        <ImagePreviewWrapper width="500px" height={imageUrl ? "auto" : "300px"}>
            {imageUrl && <Image src={imageUrl}
                id="inputImage"
                alt="face detect output" 
                width='500px' height='auto'
                borderRadius="16px"
            />}
            {faceBoxGenerator(boxDimensions)}
        </ImagePreviewWrapper>          
    );
}

export default FaceDetectionPreview;