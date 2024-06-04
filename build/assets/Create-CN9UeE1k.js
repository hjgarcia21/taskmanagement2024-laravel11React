import{W as h,j as e,Y as p,a as g}from"./app-DH_8i6Nk.js";import{I as i}from"./InputError-CnfjL874.js";import{I as l}from"./InputLabel-BslD3Rbn.js";import{S as r}from"./SelectInput-DhJ7iur0.js";import{T as j}from"./TextAreaInput-Bv3flZgg.js";import{T as n}from"./TextInput-DHCkAwrn.js";import{A as v}from"./AuthenticatedLayout--Tgs6PUZ.js";import"./ApplicationLogo-CgpoqhEQ.js";import"./transition-pAg4R4vE.js";function I({auth:d,projects:o,users:c}){const{data:m,setData:a,post:u,errors:t,reset:_}=h({image:"",name:"",status:"",description:"",due_date:""}),x=s=>{s.preventDefault(),u(route("task.store"))};return e.jsxs(v,{user:d.user,header:e.jsx("div",{className:"flex justify-between items-center ",children:e.jsx("h2",{className:`font-semibold text-xl text-gray-800 \r
                dark:text-gray-200 leading-tight`,children:"Create New Tasks"})}),children:[e.jsx(p,{title:"Tasks"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-white dark:bg-white-900 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("form",{onSubmit:x,className:" p-4 sm-p-8 bg-white dark:bg-blue-300 overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"task_project_id",value:"Project"}),e.jsxs(r,{name:"project_id",id:"task_project_id",className:"mt-1 block w-full",onChange:s=>a("project_id",s.target.value),children:[e.jsx("option",{value:"",children:"Select Project ID"}),o.data.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),e.jsx(i,{message:t.assigned_user_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"task_image_path",value:"Task Image"}),e.jsx(n,{id:"task_image_path",type:"file",name:"image",className:"mt-1 block w-full",onChange:s=>a("image",s.target.files[0])}),e.jsx(i,{message:t.image,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"task_name",value:"Task Name"}),e.jsx(n,{id:"task_name",type:"text",name:"name",value:m.name,className:"mt-1 block w-full",isFocused:!0,onChange:s=>a("name",s.target.value)}),e.jsx(i,{message:t.name,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"task_description",value:"Task Description"}),e.jsx(j,{id:"task_description",type:"description",name:"name",value:m.description,className:"mt-1 block w-full",isFocused:!0,onChange:s=>a("description",s.target.value)}),e.jsx(i,{message:t.description,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"task_due_date",value:"Task Deadline"}),e.jsx(n,{id:"task_due_date",type:"date",name:"due_date",value:m.due_date,className:"mt-1 block w-full",isFocused:!0,onChange:s=>a("due_date",s.target.value)}),e.jsx(i,{message:t.description,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"task_status",value:"Task Status"}),e.jsxs(r,{name:"status",id:"task_status",className:"mt-1 block w-full",onChange:s=>a("status",s.target.value),children:[e.jsx("option",{value:"",children:"Select Status"}),e.jsx("option",{value:"pending",children:"Pending"}),e.jsx("option",{value:"in_progress",children:"In Progress"}),e.jsx("option",{value:"Completed",children:"Completed"})]}),e.jsx(i,{message:t.status,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"task_priority",value:"Task Priority"}),e.jsxs(r,{name:"priority",id:"task_priority",className:"mt-1 block w-full",onChange:s=>a("priority",s.target.value),children:[e.jsx("option",{value:"",children:"Select Priority"}),e.jsx("option",{value:"low",children:"low"}),e.jsx("option",{value:"medium",children:"Medium"}),e.jsx("option",{value:"high",children:"High"})]}),e.jsx(i,{message:t.priority,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"task_assigned_user",value:"Assigned User"}),e.jsxs(r,{name:"assigned_user_id",id:"task_assigned_user",className:"mt-1 block w-full",onChange:s=>a("assigned_user_id",s.target.value),children:[e.jsx("option",{value:"",children:"Select User"}),c.data.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]}),e.jsx(i,{message:t.assigned_user_id,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4 text-right",children:[e.jsx(g,{href:"task.index",className:`bg-gray-100 py-1 px-3 text-bl-800 rounded shadow transition-all \r
                                        hover:bg-red-400 mr-2`,children:"Cancel"}),e.jsx("button",{className:`bg-indigo-500 py-1 px-3 text-white rounded\r
                shadow transition-all hover:bg-emerald-600`,children:"Submit"})]})]})})})})]})}export{I as default};
