import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";

export default class OldPost extends Component {
  render() {
    return (
      <div>
        <div>
          <Card>
            <div className="about-image">
              <CardImg
                src="https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.0-9/31490594_10216669808566432_3735181059290174503_n.jpg?_nc_fx=ffjr1-1&_nc_cat=0&oh=69a9146ff5da92101ca90a2b5ca225a0&oe=5BE335E6"
                top
                width="50"
                height="50"
              />
            </div>
            <CardTitle className="text-center author-title">
              Hi, I am Sorabh!
            </CardTitle>
            <CardBody>
              <CardText className="description">
                My name is Sorabh, Etiam volutpat leo nec libero feugiat, vel
                malesuada neque commodo. Curabitur sem nibh, auctor a viverra
                ut, dictum ullamcorper libero.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card>
            <div className="mt-4">
              <CardTitle className="author-title">Posts</CardTitle>
            </div>
            <div>
              <CardImg
                src="https://instagram.ffjr1-3.fna.fbcdn.net/vp/353e5862bad82e83de7aad5e168e940d/5BE1D914/t51.2885-15/e35/33428195_1861155833936472_6626461795525591040_n.jpg?_nc_eui2=AeHi_qWaVvKJCivOFtNUZcC1q5JSqk2Ct1KGh-gUwNsXm1-M2XBqa8Z03T697puchtEGt1RN-8PmTRx-h1Hr4MsoWhi1RsgMgbI4yiKUU2YTqA"
                className="pr-4 pl-4 pb-4"
              />
            </div>
            <div className="card-matter">
              <h4>Awesome Standard Post</h4>
              <p>
                Bearing cattle void spirit third whose fill let shall our also
                signs. Fly subdue of herb won't. Lights one Man whose green two.
                Hath,...
              </p>
            </div>
            <div>
              <CardImg
                src="https://instagram.ffjr1-3.fna.fbcdn.net/vp/61c44775d8d2bfd58fba019108489655/5BE19E73/t51.2885-15/e35/33569536_2052543481687547_7399325269061795840_n.jpg?_nc_eui2=AeF-02aICFaqWc4WGyJFZBWXLmIqKfffh59AgClRB-efvdNm6STAfrabHBwe4VooBcnwysH4P3eq2bSv9Y7I4kbXr7LkGFNEGs7LYlMQlo42ew"
                className="pr-4 pl-4 pb-4"
              />
            </div>
            <div className="card-matter">
              <h4>Forth fruit beginning</h4>
              <p>
                Forth fruit beginning life likeness dry day from one rule it
                earth isn’t sea fourth. Doesn’t you’re they’re herb moved he
                female wherein shall...
              </p>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
