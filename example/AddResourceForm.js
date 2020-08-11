import React from 'react'
import { Modal, Form, Input } from 'antd';

class AddResourceForm extends React.Component {

    render() {
        const { visible, onCancel, onCreate, formRef } = this.props;
    return (
        <Modal
            visible={visible}
            title="New Resource"
            okText="Create"
            onCancel={onCancel}
            onOk={onCreate}
        >
            <Form layout="vertical" ref={formRef} name="resource-ref">
                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input the name of the resource!' }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
    }
}


export default AddResourceForm
