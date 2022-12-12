import React, { useEffect, useRef, useState } from "react";
import Body from '../../Layout/Body'
import { Form, Button, Table, Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faTrash } from '@fortawesome/free-solid-svg-icons'
import "./home.css"
import { values } from "lodash";
const Index = (props) => {
    
    const { _token } = props

    const [file, setFile] = useState([]);
    const [status, setStatus] = useState(false)

    const fileRef = useRef(null);


    const listingFile = (event) => {
        const { files } = event.target
        setFile(Array.from(files))
    }

    const removeItem = (item) => {
        var newValue =  file.filter( (e,i,a) => {
            return i === item
        } )

        setFile(newValue) 
    }

    const save = (item) => {
        var formData = new FormData();

        for(let index = 0; index < file.length; index++){
            formData.append(`file-${index}`, file[index])
        }

        request(formData)
    }

    const request = async (formData) => {
        setStatus(true)
        const request =  await fetch(
            "/upload",
            {   
                method: "POST",
                body: formData,
                headers: new Headers({
                    "X-CSRF-TOKEN": _token
                })
            }
        )

        if(await request.ok){
            window.location.href = "/upload"
        }else{
            alert("Erro")
            window.location.href = "/upload"
        }
    }


    
    useEffect( () => {
        console.log(file)
    },[file])



    return(
        <Body>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="upload-camp">
                        <Form.Label>Arquivos:</Form.Label>
                        <Form.Control 
                            type="file" 
                            accept=".iso,.rar,.zip,.msi,.exe,.txt,.ps1"  
                            onChange={listingFile}
                            ref={fileRef}
                            disabled={status}
                            multiple
                        />
                        <Form.Text>
                            <ul>
                                <li>Compatível com: .iso,.rar,.zip,.msi,.exe,.txt,.ps1</li>
                                <li>Arquivos com o mesmo nome serão sobrescritos.</li>
                            </ul>
                        </Form.Text>
                    </Form.Group>
                    <Form.Group 
                        className="mb-3" 
                        controlId="upload-camp"
                    >
                        <Button 
                            className="w-100"
                            onClick={() => save()}
                            hidden={status}
                            >
                                Salvar
                        </Button>

                        <Button variant="primary" 
                            hidden={!status}
                            className="w-100"
                            disabled>
                                <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                />
                                Loading...
                        </Button>

                    </Form.Group>
                </Form>
            </div>
            <div className="w-100">
                <Table hidden={status}>
                    <thead>
                        <th>
                            <td>
                                Nome
                            </td>
                            <td>
                                Opções
                            </td>
                        </th>
                    </thead>
                    {
                        file.map( (e,i,a) => {
                            return(
                                <tr>
                                    <td>
                                        { e?.name }
                                    </td>
                                    <td>
                                        <div className="d-inline">
                                            <div 
                                                        style={{ fontSize: "12pt", display: "inline" }} 
                                                        className="m-2"
                                                        onClick={() => removeItem(i)}
                                                >
                                                    <FontAwesomeIcon 
                                                        className="oprions-icon" 
                                                        icon={faTrash} 
                                                        size="1x"
                                                    />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    } 
                </Table>                
            </div>
        </Body> 
    )
} 

export default Index;
