import './App.css';


import React, { useState } from "react";
import { Chart } from "react-google-charts";
import { Card, Typography, Grid, Stack,Box } from "@mui/material";
import PieChartIcon from "@mui/icons-material/PieChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import GanttChartIcon from "@mui/icons-material/Timeline"; // Timeline is used for Gantt charts
import { styled } from '@mui/system';
import SquareIcon from '@mui/icons-material/Square';

export const data = [
  ["Language", "Speakers (in millions)"],
  ["Passed", 5.85],
  ["Blocked", 1.66],
  ["Untested", 0.316],
  ["Failed", 0.5],
  ["Retest", 1.0791],
];

const statusData = [
  { label: 'Passed', color: 'success',data: 5 },
  { label: 'Blocked', color: 'info',data: 62 },
  { label: 'Untested', color: 'secondary',data: 11 },
  { label: 'Retest', color: 'warning' ,data : 17},
  { label: 'Failed', color: 'error',data: 3 },
];

export const options = {
  legend: "none",
  pieStartAngle: 100,
};

export const barData = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const barOptions = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export const ganttData = [
  [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ],
  [
    "1",
    "Task 1",
    "Resource 1",
    new Date(2023, 5, 1),
    new Date(2023, 5, 5),
    null,
    100,
    null,
  ],
  [
    "2",
    "Task 2",
    "Resource 2",
    new Date(2023, 5, 5),
    new Date(2023, 5, 9),
    null,
    50,
    "1",
  ],
];

const Circle = styled('div')({
  width: '200px',
  height: '200px',
  borderRadius: '50%',
  backgroundColor: '#EEEEEE', // Use primary color or any other color you prefer
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#121212',
  fontSize: '16px',
  // fontWeight: 'bold',
  margin: 'auto',
});

function App() {
  const [selectedChart, setSelectedChart] = useState("PieChart");

  return (
    <>
      <Card sx={{ p: 2, m: 2, backgroundColor: "#C5CAE9" }}>
        <Typography textAlign="center" fontWeight="bold">
          TR ID - TR Name
        </Typography>
      </Card>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Card sx={{ p: 0, m: 0 }}>
            <br />
            {selectedChart === "PieChart" && (
              <>
              <Grid container justifyContent="center">
                <Grid item lg={8}>
                <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"350px"}
              />
                </Grid>
                

                <Grid item lg={4} sx={{mt:9}}>
                {statusData.map((status, index) => (
                <Grid item key={index} lg={12} sx={{ mt: 1 }} container>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <SquareIcon fontSize='small' color={status.color} />
                    <Box>
                      <Typography variant="caption" fontWeight="bold">
                        {status.label}
                      </Typography>&nbsp;

                      <Typography variant="caption">
                        ({status.data}%) passed
                      </Typography>
                    </Box>
                  </Stack>
                </Grid>
        ))}
            <br/>
            <Typography variant='body2' fontWeight="bold" sx={{color:"#6E6E6E" , wordBreak:"break-word"}}>Total Test Case = 100</Typography>
                </Grid>
              </Grid>
             

              </>

              
            )}
            {selectedChart === "BarChart" && (
              <Chart
                chartType="Bar"
                width="100%"
                height="300px"
                data={barData}
                options={barOptions}
              />
            )}
            {selectedChart === "GanttChart" && (
              <Chart
                chartType="Gantt"
                width="100%"
                height="300px"
                data={ganttData}
              />
            )}
            <Stack direction="row" spacing={3} mt={2} alignItems="center">
              <Stack alignItems="center" onClick={() => setSelectedChart("PieChart")} sx={{ cursor: "pointer" }}>
                <PieChartIcon color={selectedChart === "PieChart" ? "primary" : "action"} />
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: selectedChart === "PieChart" ? "primary.main" : "text.primary" 
                  }}
                >
                  Shown in Pie Chart
                </Typography>
              </Stack>
              <Stack alignItems="center" onClick={() => setSelectedChart("BarChart")} sx={{ cursor: "pointer" }}>
                <BarChartIcon color={selectedChart === "BarChart" ? "primary" : "action"} />
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: selectedChart === "BarChart" ? "primary.main" : "text.primary" 
                  }}
                >
                  Shown in Bar Chart
                </Typography>
              </Stack>
              <Stack alignItems="center" onClick={() => setSelectedChart("GanttChart")} sx={{ cursor: "pointer" }}>
                <GanttChartIcon color={selectedChart === "GanttChart" ? "primary" : "action"} />
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: selectedChart === "GanttChart" ? "primary.main" : "text.primary" 
                  }}
                >
                  Shown in Gantt Chart
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ p: 2, m: 2,minHeight:"390px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Circle>
              20% Passesed
            </Circle>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
