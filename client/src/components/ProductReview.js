import { useState } from 'react';
import Feedback from './Feedback';
import"../css/ProductReview.css";

// Initial rating state
const InitialRating = {
  fName: '',
  lName: '',
  email: '',
  phoneNumber: '',
  quality: 0,
  value: 0,
  easyToUse: 0,
  overAllUse: 0,
  recProduct: '',
  feedback: '',
}

function ProductReview() {
  const [rating, setRating] = useState(InitialRating)

  // value rating
  const handleValue = (value) => {
    setRating({ ...rating, value: value })
  }
  // value quality
  const handleQuality = (value) => {
    setRating({ ...rating, quality: value })
  }
  // value easyToUse
  const handleEasyToUse = (value) => {
    setRating({ ...rating, easyToUse: value })
  }
  // value overAllUse
  const handleOverAllUse = (value) => {
    setRating({ ...rating, overAllUse: value })
  }
  // value Rec Product
  const handleRecProduct = (value) => {
    setRating({ ...rating, recProduct: value })
  }

  const RatingComponent = ({ handleClick, rating }) => {
    return (
      <div className='stars-container'>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            onClick={() => handleClick(value)}
            style={{
              color: value <= rating ? 'gold' : 'gray',
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
            >
              <path d='M0 0h24v24H0z' fill='none' />
              <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
            </svg>
          </span>
        ))}
      </div>
    )
  }
  return (
    <>
    <div className='d-flex'>
    <div><Feedback/></div>
      <main className='container3'>
      <header className='container3'>
      <h2 className="text-center" style={{ color: 'black', padding: '15px' }}> Product Review Form </h2>
      </header>
        <form className='form-control'>
          <div className='col'>
            <div className='input-control'>
              <label htmlFor='fname'>Fist Name</label>
              <input type='text' id='fname' name='fname' required />
            </div>
            <div className='input-control'>
              <label htmlFor='lname'>Last Name</label>
              <input type='text' id='lname' name='lname' />
            </div>
          </div>

          <div className='col'>
            <div className='input-control'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' required />
            </div>
            <div className='input-control'>
              <label htmlFor='phoneNumber'>Phone Number</label>
              <input type='tel' id='phoneNumber' name='phoneNumber' />
            </div>
          </div>

          <div className='col'>
            <div className='input-control'>
              <p>1) Quality</p>
              <RatingComponent
                rating={rating.quality}
                handleClick={handleQuality}
                name='Quality'
              />
            </div>
            <div className='input-control'>
              <p>2) Value</p>
              <RatingComponent
                rating={rating.value}
                handleClick={handleValue}
                name={'value'}
              />
            </div>
          </div>

          <div className='input-control'>
            <p>3) Ease of Use</p>
            <RatingComponent
              rating={rating.easyToUse}
              handleClick={handleEasyToUse}
              name={'easyToUse'}
            />
          </div>

          <div className=' rating-group'>
            <p>4) Overall, how would you rate the product?</p>
            <div className='rating'>
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  onClick={() => handleOverAllUse(value)}
                  style={{
                    border:
                      value <= rating.overAllUse
                        ? '2px solid #7b41b330'
                        : '1px solid #737373',
                    backgroundColor:
                      value <= rating.overAllUse ? '#7b41b330' : '#faf5ff',
                  }}
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          <div className='radio-group'>
            <p>5) Would you recommend the product toyour friends?</p>
            <div className=' radio-control'>
              <input
                type='radio'
                id='ofCourse'
                name='recProduct'
                value='ofCourse'
                checked={rating.recProduct === 'ofCourse'}
                onChange={(e) => handleRecProduct(e.target.value)}
              />
              <label htmlFor='ofCourse'>Of course!</label>
            </div>
            <div className=' radio-control'>
              <input
                type='radio'
                id='naver'
                name='recProduct'
                value='naver'
                checked={rating.recProduct === 'naver'}
                onChange={(e) => handleRecProduct(e.target.value)}
              />
              <label htmlFor='naver'>Naver</label>
            </div>
            <div className='radio-control'>
              <input
                type='radio'
                id='maybe'
                name='recProduct'
                value='maybe'
                checked={rating.recProduct === 'maybe'}
                onChange={(e) => handleRecProduct(e.target.value)}
              />
              <label htmlFor='maybe'>Maybe</label>
            </div>
          </div>

          <div className='radio-group'>
            <label htmlFor='feedback'>
              8) Please tell us more about your experience:
            </label>
            <textarea
              className='feedback'
              id='feedback'
              name='feedback'
              rows='4'
              placeholder='Type heare...'
            ></textarea>
          </div>

          <div className="row">
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </main>
      </div>
    </>
  )
}

export default ProductReview;
