import ReactECharts from "echarts-for-react"

const ChartComponent = ({chartData}) => {
  const options = {
    title: {
      text:null,
    },
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "time",
      axisLabel:{
        formatter:value=>{
          const date=new Date(value).toLocaleString('en-us',{month:'short',day:'2-digit'})
          return date
        }
      }
      },
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      },
    yAxis: {
      type: "value",
      splitNumber:0
    },
    series: [
      {
        name: "balance",
        type: "bar", // 'line', 'pie', 'scatter', etc.
        data:chartData.map(record=>[new Date(record.date),record.volume.balance]),
        color:"#007AFF99",
        smooth:true,
        showSymbol:false,
        barWidth:'75%',
        itemStyle:{
           borderRadius:[0]
        }
      },
      {
        name: "change",
        type: "line", // 'line', 'pie', 'scatter', etc.
        data:chartData.map(record=>[new Date(record.date),record.volume.change]),
        color:"indigo",
        smooth:true,
        showSymbol:false
      },
    ],
    grid: {
      left: 0, 
      right: 0,
      top: 10,
      bottom: 10,
      containLabel: true,
    }
  };

  return <ReactECharts option={options} style={{ height: "100%", width: "100%" }} />
}

export default ChartComponent
