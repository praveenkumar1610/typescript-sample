import React from "react";
import { Button, InputGroup,FormControl } from 'react-bootstrap';

const ListItem: React.FC = () => {
    return (
        <div>
            <h3>Hi the ListItem</h3>
            <div>
                <InputGroup className="mb-1">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <Button variant="warning">Click ME</Button>
            </div>
        </div>
    )
}

export default ListItem;