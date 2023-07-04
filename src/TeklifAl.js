import React from 'react'
import { Col, Form, Row , Button} from 'react-bootstrap'

export default function TeklifAl(){
    return(
        <>
        <h2>Teklif Al</h2>
        <Form>
            {/* email */}
            <Form.Group className='mb-3' controlId='formEmail'>
                <Form.Label>Mail Adresiniz</Form.Label>
                <Form.Control type="email" placeholder='Lütfen mail adresinizi giriniz'/>
            </Form.Group>
            
            <Row className='mb-3'>
            <Form.Group as={Col} controlId='formName'>
                <Form.Label>Adınız</Form.Label>
                <Form.Control placeholder='Lütfen araç sahibinin ismini giriniz'/>
            </Form.Group>
            <Form.Group as={Col} controlId='formSurname'>
                <Form.Label>Soyadınız</Form.Label>
                <Form.Control placeholder='Lütfen araç sahibinin soyismini giriniz'/>
            </Form.Group>
            </Row>

            <Form.Group className='mb-3' controlId='formLicensePlate'>
                <Form.Label>Plaka</Form.Label>
                <Form.Control  placeholder='Lütfen plakayı giriniz'/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formDocSerialNumber'>
                <Form.Label>Belge Seri No</Form.Label>
                <Form.Control  placeholder='Lütfen belge seri numarasını giriniz'/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formDateOfBirth'>
                <Form.Label>Doğum Tarihi</Form.Label>
                <Form.Control  placeholder='Lütfen araç sahibinin doğum tarihini giriniz'/>
            </Form.Group>

            <Button variant="primary"  className='mb-3' type="submit">
                Submit
            </Button>
        </Form>
        </>
    )
}

