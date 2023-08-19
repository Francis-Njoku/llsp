import React from 'react';
import { Button, Popover } from "antd";
import { ShareAltOutlined } from '@ant-design/icons';

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  EmailIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';

type ShareProps = {
    shareUrl: string;
    shareEmailSubject: string;
    quote: string;
    hashtag: string;
    title: string
    summary: string;
    source?: string;
    hashtags: string[];
    relatedAccounts?: string[]
};

export const ShareMatch: React.FC<ShareProps> = ({ shareUrl, shareEmailSubject, quote, hashtag, title, summary, source = "Playarone", hashtags, relatedAccounts }) => {
    const shareContent: any = (
        <>
            <EmailShareButton url={shareUrl} subject={shareEmailSubject}>
                <EmailIcon size={30} />
            </EmailShareButton>
            <FacebookShareButton url={shareUrl} quote={quote} hashtag={hashtag}>
                <FacebookIcon size={30} />
            </FacebookShareButton>
            <LinkedinShareButton url={shareUrl} title={title} summary={summary} source={source}>
                <LinkedinIcon size={30} />
            </LinkedinShareButton>
            <TwitterShareButton url={shareUrl} title={title} via="Playarone" hashtags={hashtags} related={relatedAccounts}>
                <TwitterIcon size={30} />
            </TwitterShareButton>
            <WhatsappShareButton url={shareUrl} title={title}>
                <WhatsappIcon size={30} />
            </WhatsappShareButton>
        </>
    );

  return (
    <Popover title="Share Match Via" content={shareContent} trigger="click">
        <Button type='primary' className='btn_dark active'>
            <i className='material-icons'>share</i>
        </Button>
    </Popover>
  );
}

export const ShareGame: React.FC<ShareProps> = ({ shareUrl, shareEmailSubject, quote, hashtag, title, summary, source = "Playarone", hashtags, relatedAccounts }) => {
    const shareContent: any = (
        <>
            <EmailShareButton url={shareUrl} subject={shareEmailSubject}>
                <EmailIcon size={30} />
            </EmailShareButton>
            <FacebookShareButton url={shareUrl} quote={quote} hashtag={hashtag}>
                <FacebookIcon size={30} />
            </FacebookShareButton>
            <LinkedinShareButton url={shareUrl} title={title} summary={summary} source={source}>
                <LinkedinIcon size={30} />
            </LinkedinShareButton>
            <TwitterShareButton url={shareUrl} title={title} via="Playarone" hashtags={hashtags} related={relatedAccounts}>
                <TwitterIcon size={30} />
            </TwitterShareButton>
            <WhatsappShareButton url={shareUrl} title={title}>
                <WhatsappIcon size={30} />
            </WhatsappShareButton>
        </>
    );

  return (
    <Popover title="Share Match Via" content={shareContent} trigger="click">
        <Button type='primary' className='btn_dark_icon ml-10'>
            <ShareAltOutlined className="site-form-item-icon" />
        </Button>
    </Popover>
  );
}