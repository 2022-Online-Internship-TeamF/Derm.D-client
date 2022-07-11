import { Button, TextField } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { Box } from "@mui/system";
import Form1 from "react-bootstrap/Form";

const MaterialForm = () => {
  return (
    <div className="MaterialForm">
      <Formik>
        {() => (
          <form>
            <TextField
              id="standard-textarea"
              label="제목"
              placeholder="제목을 입력하세요."
              multiline
              variant="standard"
            />
            <Box height={20} />
            <TextField
              id="filled-multiline-static"
              label="내용"
              multiline
              minRows={20}
              defaultValue="질문하고 싶은 질환에 대해 적으세요."
              variant="filled"
            />
            <Box height={20} />
            <Form1.Group controlId="formFile" className="mb-3">
              <Form1.Label>사진을 입력하세요</Form1.Label>
              <Form1.Control type="file" />
            </Form1.Group>
            <Box height={30} />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              작성 완료
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default MaterialForm;
