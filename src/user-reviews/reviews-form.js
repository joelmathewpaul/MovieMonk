import React from "react";
import {Button} from "react-bootstrap";
import StarComponent from "../star-component/star-component";

const ReviewsForm = () =>{
    return(
        <div className="container">
            <StarComponent/>
            <form>
                <fieldset>

                    <div className="form-group">
                        <label className="form-label mt-4 text-white" >Review Head Line</label>
                        <input id="reviewHeadLine" placeholder="Headline" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reviewtextarea" className="form-label mt-4 text-white">Detailed Review</label>
                        <textarea className="form-control" id="reviewtextarea" rows="5" placeholder="Write your review"></textarea>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <button type="reset" className="btn text-white me-4 btn-outline-danger">Discard</button>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>

    );
}

export default ReviewsForm;





//
// <form >
//
//     <br />
//     <div className="input-group mb-4 mt-2">
//         <div className="form-floating">
//             <input
//                 required={true}
//
//                 type="password"
//                 className="form-control rounded-pill"
//                 id="floatingPassword"
//                 placeholder="Password"
//             />
//             <label htmlFor="floatingPassword" className="text-muted">
//                 <i className="fa fa-lock p-2"></i>Password
//             </label>
//         </div>
//     </div>
//     <Button
//         variant="primary"
//         type="submit"
//         size="lg"
//         className="rounded-pill ps-5 pe-5"
//     >
//         Sign In
//     </Button>
//     <div className="mt-3">
//         <a href="#" className="text-white">
//             Forgot Password?
//         </a>
//     </div>
// </form>