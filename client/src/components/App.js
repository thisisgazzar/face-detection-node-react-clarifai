import axios from "axios";
import {
  FaceDetectionWrapper,
  Title
} from './styled';
import FaceDetectionForm from './Form';
import FaceDetectionPreview from './Preview';
import { useState } from "react";
import '../App.css';

function App() {

  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [boxDimentions, setBoxDimentions] = useState([]);
  const [loading, setLoading] = useState(false);


  const detectFaces = async (e) => {
    e.preventDefault();
    setBoxDimentions([]);
    setLoading(true);
    setImageUrl(input);
    const boxDimensionArray = []
    try {
      const detect = await axios.post('/detect', {
        imageUrl: input
      });
      const results = detect.data.results;
      results.forEach(region => {
        const faceBoxDimentions = region.region_info.bounding_box;
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        const boxDimension =  {
          leftCol: faceBoxDimentions.left_col * width,
          topRow: faceBoxDimentions.top_row * height,
          rightCol: width - (faceBoxDimentions.right_col * width),
          bottomRow: height - (faceBoxDimentions.bottom_row * height)
        }
        boxDimensionArray.push(boxDimension);
      });
      setBoxDimentions(boxDimensionArray);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <FaceDetectionWrapper>
      <Title>Face Detection</Title>
      <FaceDetectionPreview boxDimensions={boxDimentions} imageUrl={imageUrl} />
      <FaceDetectionForm setInput={setInput} input={input} detectFaces={detectFaces} loading={loading} />
    </FaceDetectionWrapper>
  );
}

export default App;