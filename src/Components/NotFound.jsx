import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from "reactstrap";

const NotFound = () => (
    <div>
        <Card>
            <CardBody>
                <CardTitle tag="h1">404 - Not Found!</CardTitle>
                <Link className="btn btn-danger" to="/">
                    Go Home!
                </Link>
            </CardBody>
        </Card>
    </div>
);

export default NotFound;