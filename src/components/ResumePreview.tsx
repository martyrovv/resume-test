import { Typography } from "antd";
import type { ResumeFormType } from "./ResumeForm";
import dayjs from 'dayjs';


export function ResumePreview(props: ResumeFormType) {

  console.log('Resume Preview Props: ', props)

  return (
    <div className="resume-preview">
      <Typography.Title level={1}>Resume Preview</Typography.Title>
      <Typography.Title level={2}>Experience: </Typography.Title>
      <div style={{display:'flex', flexDirection: 'column'}}>
      <Typography.Text>
        Job Title: {props.experience?.jobTitle}
      </Typography.Text>
      <Typography.Text>
        Company: {props.experience?.company}
      </Typography.Text>
      <Typography.Text>
        Date: {props.experience?.date}
      </Typography.Text>
      <Typography.Text>
        Summary: {props.experience?.summary}
      </Typography.Text>
      </div>
      
      <Typography.Title level={2}>Education: </Typography.Title>
      <div style={{display:'flex', flexDirection: 'column'}}>
      <Typography.Text>
        Educational Institution: {props.education?.educationalInstitution}
      </Typography.Text>
      <Typography.Text>
        Major: {props.education?.major}
      </Typography.Text>
      <Typography.Text>
        Dates: {dayjs(props.education?.dates[0]).format('DD-MM-YYYY')} - {dayjs(props.education?.dates[1]).format('DD-MM-YYYY')}
      </Typography.Text>
      </div>

      <Typography.Title level={2}>About Yourself: </Typography.Title>
      <div style={{display:'flex', flexDirection: 'column'}}>
      <Typography.Text>
        Name: {props.about?.name}
      </Typography.Text>
      <Typography.Text>
        Email: {props.about?.email}
      </Typography.Text>
      <Typography.Text>
        Age: {props.about?.age}
      </Typography.Text>
      <Typography.Text>
        Website: {props.about?.website}
      </Typography.Text>
      <Typography.Text>
        Introduction: {props.about?.introduction}
      </Typography.Text>
      </div>
    </div>
  );
}
