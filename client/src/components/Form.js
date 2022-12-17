import {
  FormWrapper,
  InputWrapper,
  SubmitButton
} from './styled';


const FaceDetectionForm = ({ setInput, input, detectFaces, loading }) => {
    return(
        <FormWrapper onSubmit={detectFaces}>
            <InputWrapper type="text" placeholder="Enter Image Link" onChange={e => setInput(e.target.value)} value={input}/>
            <SubmitButton type="submit">{loading ? "Loading..." : "Detect"}</SubmitButton>
        </FormWrapper>
    )
}

export default FaceDetectionForm;