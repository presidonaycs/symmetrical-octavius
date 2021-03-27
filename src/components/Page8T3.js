import React, { useState, useEffect } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Select,Button } from 'antd';
import http from './httpCommonAdmin';
const originData = [];
const array = []
const { Option } = Select;
const { TextArea } = Input;



const Page8T3 = () => {

  const [roles, setRoles] = useState([]);
	

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode = inputType === 'number' ? <Input /> 
    :
     <Select>
  
  <Option value="1">Not Identified</Option>
                                      <Option value="2">Closed</Option>
                                      <Option value="3">Communicated</Option>
                                      <Option value="4">Identified</Option>
                                      <Option value="5">Resolved</Option>
                                      <Option value="6">Cancelled</Option>
    </Select>;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  const fetchDatas = async () => {
    let url = "admin-category" // 'Director-ReviewedApprovals';
   
     http.get(url
     )
    
      .then((response) => {
        console.log('server')
        console.log(response.data.data)
        
        setRoles(response.data.data)
        
        
      })
  
  }
  useEffect(() => {
    fetchDatas()
  
  }, [])


  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const [array, setArray] = useState([]);
  const [count, setCount] = useState(10);
  
  const formRef = React.createRef();
  const isEditing = (record) => record.key === editingKey;

  

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      Description: '',
      updated: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
    title: 'Action',
    dataIndex: 'action',
    render: (_, record) => {
    //   const editable = isEditing(record);
      return  data.length >= 1  ? (
        <span>
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
              {/* <a
              onClick={() => handleDelete(record.key)}
              >Delete</a> */}
           
        </span>
      ) : (
      null
      );
    },
  },
  
    {
      title: 'Category',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: ' Description',
      dataIndex: 'Description',
      width: '15%',
      editable: true,
    },
    {
      title: 'Updated',
      dataIndex: 'updated',
      width: '40%',
    //   editable: true,
    },
    {
      title: 'Last Updated by',
      dataIndex: 'updated',
      width: '40%',
    //   editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
            //   href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const handleDelete = (key) => {
    const newdata = [...data];
    // const index = newData.findIndex((item) => key === item.key);
    const pp = newdata.filter((item) => item.key !== key)
    setData(
     pp
    );
  };
//  const handleAdd = () => {
//     // key: i.toString(),
//     // name: `Edrward ${i}`,
//     // age: 32,
//     // updated: `London Park no. ${i}`,

//     if (newObject[0] != 0) {
//         const newData = {
//             key: count,
//             name: newObject[0].name,
//             description: newObject[0].description,
//             amount: newObject[0].amount,
//             quantity: newObject[0].quantity,
//             //   Action:this.state.newObject[0].amount,
//         };
//        setData([...data, newData])
          
//             setCount(count + 1)
       
//     }
// };
const handleAdd = () => {
 
  const newData = {
    key: count,
    name: array[0].name,
    Description: array[0].Description,
    updated: `London, Park Lane no. ${count}`,
  };
  
    setData([...data, newData]) 
    setCount(count + 1) 
   setArray([])
  
};

useEffect(()=>{
  console.log('use effect ran')
})

  const onReset = () => {
    formRef.current.resetFields();
};
  const onFinish = (values) => {
    // console.log('Success:', values);
    // setFormData(values)
   
   setArray( array.push(values))
    // setNewObject(array)
    
    handleAdd();
    // onReset();
    // prop.handleHold(values)
    // formData = values
    console.log('Success:', array[0]);

};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'Description' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
      
    <div >
       
       
        <div className="flex">
         
          <div style={{ width: "33%", padding: "15px" }}>
            <Form
    
       ref={formRef}
       layout="vertical"
       name="basic"
       initialValues={{
           remember: true,
       }}
       onFinish={onFinish}
       onFinishFailed={onFinishFailed}
    >
    <Form.Item
                                    label="Category"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Item Name!',
                                        },
                                    ]}
                                >
                                    <Select
                                        bordered={false}
                                        showSearch
    
                                        placeholder="Search to Select"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                        filterSort={(optionA, optionB) =>
                                            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                        }
                                    >
                                        <Option value="1">Not Identified</Option>
                                        <Option value="2">Closed</Option>
                                        <Option value="3">Communicated</Option>
                                        <Option value="4">Identified</Option>
                                        <Option value="5">Resolved</Option>
                                        <Option value="6">Cancelled</Option>
                                    </Select>
                                    {/* <Input style={{ border: "none", borderBottom: "1px solid", borderColor: "#D6D6D6" }} /> */}
                                </Form.Item>
    
                                
    
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Form.Item
                                        style={{ width: "90%" }}
                                        label="Description"
                                        name="Description"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input Amount!',
                                            },
                                        ]}
                                    >
                                        <Input style={{ width: "90%", border: "none", borderBottom: "1px solid", borderColor: "#D6D6D6" }} />
                                    </Form.Item>
    
                                </div>
    
    
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <Form.Item style={{ width: "100%" }}>
                                        <Button block htmlType="submit"  style={{ backgroundColor: "#1C811C", borderColor: "#1C811C", color: "white", width: "95%" }} >
                                            Save Record
                  	          </Button>
                                    </Form.Item>
    
                                    <Form.Item style={{ width: "100%" }}>
                                        <Button block htmlType="submit"  style={{ backgroundColor: "#EFEFEF", borderColor: "#BCBCBC", color: "black", width: "95%" }}>
                                            Cancel
                  	          </Button>
                                    </Form.Item>
                                </div>
        </Form>
          </div>

      <div style={{ width: "67%",}}>
        <Form form={form} component={false}>
        
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
      </div>
        </div>
    </div>

   
  );
};
export default Page8T3