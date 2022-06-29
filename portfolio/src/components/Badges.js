import React from 'react'
import { GoChevronRight, GoChevronDown } from "react-icons/go";

function Badges() {
    const [toggle, setToggle] = React.useState(false)

    return (
        <div className='badges-container'>
            <div className='badges-480'>
                {
                    toggle ?
                        <>
                            <div style={{ backgroundColor: 'red' }} onClick={() => setToggle(!toggle)}>
                                <span><GoChevronDown size='1.6em' /></span>
                                <span style={{ fontSize: '30px', fontWeight: '700' }}>CREDENTIALS</span>
                            </div>
                            <div id='badges-480-image-div'>
                                <a href="https://www.credly.com/badges/236593cb-7013-46f1-98cd-87b830f7dfb7/public_url" target='_blank'><img style={{ width: '200px', height: '200px' }} src="images/badges/front-end.png" /></a>
                                <a href="https://www.credly.com/badges/6d744589-ea56-4229-9128-c206b38b8ee8/public_url" target='_blank'><img style={{ width: '200px', height: '200px' }} src="images/badges/back-end.png" /></a>
                                <a href="https://www.credly.com/badges/23404de1-7814-4d9d-a764-cac3b8d7c6bb/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/e2e.png" /></a>
                                <a href="https://www.credly.com/badges/62b58bfe-1be5-43c5-8585-688523062cfe/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/data-structures.png" /></a>
                                <a href="https://www.credly.com/badges/b1208057-f9d3-4ec2-aaff-3858845f810c/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/career-ready.png" /></a>
                                <a href="https://www.credly.com/badges/eee4dd32-e425-4711-b541-86ce749cf377/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/fs-webdev.png" /></a>
                                <a href="https://www.credly.com/badges/4ce63b5c-3cac-4b23-bfc2-3e800aba4c08/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/git.png" /></a>
                                <a href="https://www.credly.com/badges/325738ca-e1b4-4866-805c-53ca4509a70c/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/mern.png" /></a>
                                <a href="https://www.credly.com/badges/5f7b1e85-3399-4431-bd51-603412ab85f3/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/OOP.png" /></a>
                                <a href="https://www.credly.com/badges/5a78ac15-af3e-4a66-880f-16601d4e6c4e/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/project-management.png" /></a>
                                <a href="https://www.credly.com/badges/597eae47-7a2a-4b99-8079-a5d37fe8eb15/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/web-inf.png" /></a>
                                <a href="https://www.credly.com/badges/fab6d6c9-d33f-4e82-9eed-cada90733d05/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/webdev-found.png" /></a>
                            </div>
                        </> :
                        <div onClick={() => setToggle(!toggle)}>
                            <span style={{ fontWeight: '700' }}><GoChevronRight size="1.6em" /></span><span style={{ fontSize: '30px', fontWeight: '700' }}>CREDENTIALS</span>
                        </div>
                }
            </div>
            <div id='badges' className='badges-above-480'>
                <h1>Credentials</h1>
                <a href="https://www.credly.com/badges/236593cb-7013-46f1-98cd-87b830f7dfb7/public_url" target='_blank'><img style={{ width: '200px', height: '200px' }} src="images/badges/front-end.png" /></a>
                <a href="https://www.credly.com/badges/6d744589-ea56-4229-9128-c206b38b8ee8/public_url" target='_blank'><img style={{ width: '200px', height: '200px' }} src="images/badges/back-end.png" /></a>
                <a href="https://www.credly.com/badges/23404de1-7814-4d9d-a764-cac3b8d7c6bb/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/e2e.png" /></a>
                <a href="https://www.credly.com/badges/62b58bfe-1be5-43c5-8585-688523062cfe/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/data-structures.png" /></a>
                <a href="https://www.credly.com/badges/b1208057-f9d3-4ec2-aaff-3858845f810c/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/career-ready.png" /></a>
                <a href="https://www.credly.com/badges/eee4dd32-e425-4711-b541-86ce749cf377/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/fs-webdev.png" /></a>
                <a href="https://www.credly.com/badges/4ce63b5c-3cac-4b23-bfc2-3e800aba4c08/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/git.png" /></a>
                <a href="https://www.credly.com/badges/325738ca-e1b4-4866-805c-53ca4509a70c/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/mern.png" /></a>
                <a href="https://www.credly.com/badges/5f7b1e85-3399-4431-bd51-603412ab85f3/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/OOP.png" /></a>
                <a href="https://www.credly.com/badges/5a78ac15-af3e-4a66-880f-16601d4e6c4e/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/project-management.png" /></a>
                <a href="https://www.credly.com/badges/597eae47-7a2a-4b99-8079-a5d37fe8eb15/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/web-inf.png" /></a>
                <a href="https://www.credly.com/badges/fab6d6c9-d33f-4e82-9eed-cada90733d05/public_url" target="_blank"><img style={{ width: '200px', height: '200px' }} src="images/badges/webdev-found.png" /></a>
            </div>
        </div>

    );
}

export default Badges;