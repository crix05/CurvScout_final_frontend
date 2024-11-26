import { React, useState, useEffect } from "react";
import "./dashboard.css";
import styled from "styled-components";
import CallMissedIcon from "@mui/icons-material/CallMissed";
import BarChartIcon from "@mui/icons-material/BarChart";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScaleIcon from '@mui/icons-material/Scale';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import HeightIcon from '@mui/icons-material/Height';
import { useNavigate } from 'react-router-dom';
import {
  BarChart,
  LineChart,
  ResponsiveContainer,
  Cell,
  Rectangle,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Hypo",
    uv: 4000,
    extent: 10,
  },
  {
    name: "Mild Hypo",
    uv: 3000,
    extent: 15,
  },
  {
    name: "Mild",
    uv: 3000,
    extent: 35,
  },
  {
    name: "Moderate",
    uv: 2000,
    extent: 25,
  },
  {
    name: "Hyper",
    uv: 2780,
    extent: 10,
  },
];

// const data = [
//     {
//       name: 'Page A',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'Page B',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'Page C',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'Page D',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'Page E',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'Page F',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];

const Parent = styled.div`
  background-color: #161f2d;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  min-height: fit-content;
  // temp
`;

const ContentParent = styled.div`
  width: 78vw;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 30px 40px 30px 0px;
  box-sizing: border-box;
  @media (max-width: 1100px) {
    width: 100vw;
    padding: 10px;
    padding-top: 30px;
  }
    
`;

const SidebarParent = styled.div`
  width: 130px;
  height: 100vh;
  @media (max-width: 1100px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: space-between;
  word-wrap: break-word;
`;

const InnerParent = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  height: 100%;
  width: 100%;
  border-radius: 7px;
  background-color: white;
  box-sizing: border-box;
  padding: 30px;
`;

const Heading = styled.div`
  margin-bottom: 30px;
  box-sizing: border-box;
  font-size: 38px;
  font-weight: 500;
  @media(max-width: 400px){
    font-size: 32px;
  }
`;

const CardParent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-evenly;

  @media (max-width: 1200px) {
    justify-content: space-evenly;
  }
`;

const CardDiv = styled.div`
  display: flex;
  width: 240px;
  height: 70px;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 5px;
  &:hover {
    color: white;
    background-color: black;
    transition: 0.3s;
  }
`;

const GraParent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  height: 400px;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 450px;
    justify-content: center;
  }
`;

const LogoParent = styled.div`
  margin-left: 15px;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  display: grid;
  place-items: center;
  fontsize: 40;
  color: white;
  background-color: black;
  &:hover {
    color: black;
    background-color: white;
    transition: 0.3s;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const CardTitle = styled.div`
  font-size: 10px;
  color: darkgray;
`;

const CardData = styled.div`
  font-size: 20px;
  font-weight: 400;
`;

const RightDiv = styled.div`
  width: 90%;
  height: 40%;
  border: 2px solid black;
`

const ProjName = styled.div`
  margin-top: 30px;
  align-self: flex-start;
  margin-left: 3vw;

  @media(max-width: 1300px){
    margin-left: 1vw;
  }
`

const SideContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  width: 16vw; /* Adjusted width (customize as needed) */
  background-color: #f5f5f5; /* Light background */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  overflow-y: auto; /* Enable scrollbar if content overflows */
  border-radius: 7px;
  margin-top: 30px;
  margin-left: 3vw;
  @media(max-width: 1300px){
    margin-left: 1vw;
  }
  overflow: auto;
  scrollbar: hidden;
  will-change: transform;
`;

const SideContentWrapper2 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the element */
  width: 250px; /* Adjusted width */
  background-color: #f5f5f5; /* Light background */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  overflow-y: auto; /* Enable scrollbar if content overflows */
  border-radius: 7px;
`;

const SideContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #e0e0e0; /* Separator line */
  background-color: #e0e0e0; /* Light gray header background */
  color: #333; /* Darker text color for header */
  width: 100%;
`;

const SideContentTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  width: 100%;
`;

const SideContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1; /* Allow list to fill remaining space */
`;

const DetailItem = styled.li`
  display: flex;
  justify-content: space-between; /* Align labels and values */
  align-items: center;
  padding: 12px 20px;
  cursor: pointer; /* Optional hover effect for interactivity */
  transition: background-color 0.2s ease; /* Smooth hover transition */
  border-bottom: 1px solid #e0e0e0; /* Separator for each item */
  background-color: #fff; /* White background for details */
  width: 100%;
`;

const DetailLabel = styled.span`
  font-weight: bold;
  color: #666; /* Lighter text color for labels */
  width: 120px; /* Fixed width for labels (adjust as needed) */
`;

const DetailValue = styled.span`
  color: #333; /* Darker text color for values */
`;

const ReturnHome = styled.div`
display : flex;
align-items: center;
margin-left: 3vw;
margin-bottom: 20px;
@media(max-width: 1300px){
  margin-left: 1vw;
}
font-size: 20px;
`

const HeadingParent = styled.div`
@media(max-width: 1100px){
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
`

const InfoParent = styled.div`
display: none;
color: black;
padding-top: 10px;
@media(max-width: 1100px){
  display: block;
}
:hover{
  cursor:pointer;
}
`

const FloatingCard = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CloseParent = styled.div`
:hover{
  cursor:pointer;
}
`

export default function Dashboard({ responseData }) {
  return (
    <>
      <Parent className="Parent">
        <Sidebar responseData={responseData} />
        <InnerDash responseData={responseData} />
      </Parent>
    </>
  );
}

function Sidebar({responseData}) {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/')
  }
  return (
    <>
      <SidebarParent className="SidebarParent">
        <div className="abc">
        <ProjName>
          <div style={{width: '100%', display: 'flex', justifySelf: 'flex-start', alignSelf: 'flex-start', fontSize: '35px', color:'white', height: '100px'}}>
            <div style={{fontFamily:'ephesis', fontSize: 60}}>
              CurvScout
            </div>
          </div>
        </ProjName>
        <SideContentWrapper>
          <SideContentHeader>
            <SideContentTitle>Patient Profile</SideContentTitle>
          </SideContentHeader>
          <SideContentList>
            <DetailItem>
              <DetailValue> Name : {responseData.name}</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailValue>Gender : {responseData.gender}</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailValue>Mob : {responseData.mobile_no}</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailValue>Age : {responseData.age}</DetailValue>
            </DetailItem>
            
          </SideContentList>
        </SideContentWrapper>
        </div>
        <ReturnHome>
          <div style={{color: 'white'}}>
          <ArrowBackIosIcon/>
          </div>
          <div style={{color: 'white', paddingBottom: 8,cursor: 'pointer'}} onClick={handleClick}>
            Home
          </div>
        </ReturnHome>

        

      </SidebarParent>
      
    </>
  );
}

function InnerDash({responseData}) {
  let cobb1 = responseData.Cobb_angle
  cobb1 = cobb1.toFixed(3);
  let age1 = responseData.age
  let weight1 = responseData.weight
  let k="Normal"
  if (cobb1 >= 0 && cobb1 < 20) {
    k = "Hypolordosis"
  } else if (cobb1 >= 20 && cobb1 < 40) {
    k = "Normal"
  } else if (cobb1 >=40) {
    k = "Hyperlordosis"
  } 
  const [cobb, setCobb] = useState(cobb1);
  const [severity, setSeverity] = useState("Normal");
  useEffect(()=>{
    if (cobb1 >= 0 && cobb1 < 20) setSeverity("Hypolordosis")
    if (cobb1 >= 40) setSeverity("Hyperlordosis")
  },[])
  
  const [Age, setAge] = useState(age1);
  const [Weight, setWeight] = useState(weight1);
  const [clickCard, setClickCard] = useState('none')

  function handleClick(){
    setClickCard('block');
  }

  function handleCross(){
    setClickCard('none');
  }

  return (
    <>
      <FloatingCard style={{display: clickCard}}>
      <SideContentWrapper2>
          <SideContentHeader>
            <SideContentTitle>Patient Profile</SideContentTitle>
            <CloseParent>
            <CloseIcon onClick={handleCross}/>
            </CloseParent>
          </SideContentHeader>
          <SideContentList>
          <DetailItem>
              <DetailValue> Name : {responseData.name}</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailValue>Gender : {responseData.gender}</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailValue>Mob : {responseData.mobile_no}</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailValue>Age : {responseData.age}</DetailValue>
            </DetailItem>
          </SideContentList>
        </SideContentWrapper2>
      </FloatingCard>



      <ContentParent className="ContentParent">
        <InnerParent className="InnerParent">
          
          <HeadingParent>
          <Heading>Dashboard</Heading>
          <InfoParent>
          <InfoIcon fontSize="large" color="#161f2d" onClick={handleClick}/>
          </InfoParent>
          </HeadingParent>

          <div className="contentWrapper" style={{height: '100%', display: 'flex', flexDirection:'column', justifyContent: 'center'}}>


          <CardParent className="CardParent">
            <Card icon={1} parameter={cobb} />
            <Card icon={2} parameter={severity} />
            <Card icon={3} parameter={responseData.height} />
            <Card icon={4} parameter={Weight} />
          </CardParent>
          <GraParent className="GraParent">
            <div className="abc">
              <BarGraph cobb={cobb}/>
            </div>
            {/* <div className="xyz">
              <BarGraph2 cobbAng={cobb}/>
            </div> */}
            <LineGraph responseData={responseData}   />
          </GraParent>
          </div>
        </InnerParent>
      </ContentParent>
    </>
  );
}

function Card({ icon, parameter }) {
  const [logo, setLogo] = useState(() => {
    switch (icon) {
      case 1:
        return [<CallMissedIcon />, "Cobb angle",""];
      case 2:
        return [<BarChartIcon />, "Severity",""];
      case 3:
        return [<HeightIcon/>, "Height", "cm"];
      case 4:
        return [<ScaleIcon/>, "Weight", "kg"];
    }
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <CardDiv
      style={{
        backgroundColor: isHovered ? "#161f2d" : "",
        color: isHovered ? "white" : "",
        cursor: "pointer"
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <LogoParent
        className="LogoDiv"
        style={{
          backgroundColor: isHovered ? "white" : "",
          color: isHovered ? "black" : "",
        }}
      >
        {logo[0]}
      </LogoParent>
      <CardContent>
        <CardTitle>{logo[1]}</CardTitle>
        <CardData>{parameter} {logo[2]}</CardData>
      </CardContent>
    </CardDiv>
  );
}



function BarGraph({ cobb }) {
  console.log("cobb", cobb);
  return (
    <div>
    { cobb<20 && (
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          color: '#333',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '650px',
          margin: 'auto',
          height: '400px',
          overflow: 'hidden'
        }}
      >
        <div style={{ marginBottom: '20px', fontSize: '16px' }}>
          <strong>Hypolordosis</strong> refers to a reduced inward curvature of the lower spine (lumbar region), which can lead to a flatter back and improper posture. It may result from poor posture, muscle imbalances, or degenerative conditions.
        </div>
    
        <div style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Posture correction:</strong> Maintain a neutral spine while sitting, standing, and sleeping.
        </div>
        <div style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Strengthening exercises:</strong> Focus on core and lower back muscles to improve stability.
        </div>
        <div style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Stretching:</strong> Regularly stretch hip flexors, hamstrings, and lower back to alleviate tightness.
        </div>
        <div style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Ergonomic adjustments:</strong> Ensure a supportive chair and desk setup for better spinal alignment.
        </div>
      </div>
    )}

    { (cobb>=20 && cobb<40) && (
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          color: '#333',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '650px',
          margin: 'auto',
          height: '400px',
          overflow: 'hidden'
        }}
      >
        <div style={{ marginBottom: '20px', fontSize: '16px' }}>
          <strong>Normal Back (Neutral Lumbar Curve)</strong> features a natural inward curve in the lumbar region, contributing to proper posture and alignment of the spine. This curvature allows for effective weight distribution and shock absorption during movement.
        </div>

        <div style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Posture awareness:</strong> Ensure your spine remains aligned while sitting, standing, and sleeping.
        </div>
        <div style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Core strengthening:</strong> Regular exercises targeting the core muscles support spinal stability.
        </div>
        <div style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Stretching:</strong> Stretching the back and surrounding muscles helps maintain flexibility and prevent tightness.
        </div>
        <div style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Ergonomic adjustments:</strong> Ensure your workstation promotes a neutral spine position to reduce strain.
        </div>
      </div>
    )}

    { cobb>=40 && (
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          color: '#333',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '650px',
          margin: 'auto',
          height: '400px',
          overflow: 'hidden'
        }}
      >
        <div style={{ marginBottom: '20px', fontSize: '16px' }}>
          <strong>Hyperlordosis</strong> refers to an excessive inward curvature of the lower spine (lumbar region), which can cause an exaggerated arch in the lower back. This condition may result from poor posture, muscle imbalances, or certain spinal abnormalities. Symptoms can include lower back pain, discomfort while standing, and limited mobility.
        </div>

        <div style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Posture correction:</strong> Avoid excessive arching of the lower back and practice maintaining a neutral spine.
        </div>
        <div style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Strengthening exercises:</strong> Focus on strengthening the core, glutes, and hamstrings to reduce strain on the lumbar spine.
        </div>
        <div style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Stretching:</strong> Regularly stretch the hip flexors, quads, and lower back to relieve tightness.
        </div>
        <div style={{ marginBottom: '12px', fontSize: '14px', lineHeight: '1.6' }}>
          <strong>Ergonomic adjustments:</strong> Ensure proper support while sitting or standing to maintain a balanced spinal alignment.
        </div>
      </div>
    )}

    </div>
    
    
  );
}


// function BarGraph2({ cobbAng}) {
//   const [active, setActive] = useState(3); // Initial state for active

//   useEffect(() => {
//     if (cobbAng >= 0 && cobbAng < 10) {
//       setActive(0);
//     } else if (cobbAng >= 10 && cobbAng < 20) {
//       setActive(1);
//     } else if (cobbAng >= 20 && cobbAng < 40) {
//       setActive(3);
//     } else if (cobbAng >= 40 && cobbAng < 50) {
//       setActive(4);
//     } else if (cobbAng >= 50) {
//       setActive(4);
//     }
//   }, [cobbAng]); // Update active on cobbAng change

//   return (
//     <ResponsiveContainer width="100%" height="100%" className="wrapper">
//       <BarChart data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <style></style>
//         <Bar dataKey="extent" barSize={20}>
//           {data.map((data, index) => (
//             <Cell
//               cursor="pointer"
//               fill={index === active ? "#82ca9d" : "#8884d8"}
//               key={`cell-${index}`}
//             />
//           ))}
//         </Bar>
//       </BarChart>
//     </ResponsiveContainer> 
// );
// }

function LineGraph({ responseData }) {
  // Assuming responseData.xray_image is a relative path fetched from the database
  const baseUrl = 'http://127.0.0.1:8000'; // Replace with your base URL
  const imagePath = '/staticfiles/admin/img/final_image.png'; // Assuming this is the path fetched from the database

  // Concatenate the base URL with the image path
  const imageUrl = baseUrl + imagePath;
  const imageUrl2 = baseUrl + responseData.xray_image;

  console.log(responseData)
  console.log("Hello",imageUrl)
  console.log("Hello2", imageUrl2)

  return (
    <ResponsiveContainer
      width="50%"
      height="100%"
      className="wrapper2"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Your content here */}
    </ResponsiveContainer>
  );
}
