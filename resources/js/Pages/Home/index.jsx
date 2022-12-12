import React, { useEffect, useState } from "react";
import { Table } from 'react-bootstrap'
import Body from '../../Layout/Body'
import './home.css'
import dateFormat, { masks } from "dateformat";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faTrash } from '@fortawesome/free-solid-svg-icons'
const Index = (props) => {
    const { children } = props

    const [diretorios, setDirectories] = useState([])

    useEffect( () => {
        setDirectories(props?.diretorios)
    },[props?.diretorios] )


    const open = (url) => {
        window.location.href = url
    }


    return(
        <Body>
            <div className="index-list">
                <Table>
                    <thead>
                        <tr>
                            <th>
                                Programa
                            </th>
                            <th>
                                Última Modificação
                            </th>
                            <th>
                                Opções
                            </th>
                        </tr>
                    </thead>
                    {
                        diretorios.map( (e,i,a) => {
                            return(
                                <tr>
                                    <td>
                                    {
                                        e?.file
                                    }
                                    </td>
                                    <td>
                                    {
                                        dateFormat(e?.last_modified*1000, "H:MM:ss dd-mm-yyyy")
                                    }
                                    </td>
                                    <td>
                                        <div className="d-inline">
                                            <div 
                                                    style={{ fontSize: "12pt", display: "inline" }} 
                                                    className="m-2"
                                                    onClick={() => open(`/download/?a=${e?.file}`)}
                                            >
                                                <FontAwesomeIcon 
                                                    className="oprions-icon" 
                                                    icon={faDownload} 
                                                    size="1x"
                                                />
                                            </div>
                                            <div 
                                                    style={{ fontSize: "12pt", display: "inline" }} 
                                                    className="m-2"
                                                    onClick={() => open(`/remove/?a=${e?.file}`)}
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
                        } )
                    }
                </Table>
            </div>
        </Body> 
    )
}

export default Index;
