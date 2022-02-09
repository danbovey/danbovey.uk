import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

import Layout from '../components/layout';
import { Container } from '../components/container';
import Breadcrumbs from '../components/breadcrumbs';

const ErrorSection = styled.section`
  padding: 64px 0;

  h1 {
    display: inline-block;
    margin-bottom: 20px;
    padding: 0 20px;
    background: #fff;
    color: #03a98f;
  }
}
`;

const NotFoundPage = () => (
  <Layout>
    <Helmet title="404 Found Not" />
    <Container>
      <Breadcrumbs />
      <ErrorSection>
        <div class="container">
          <h1>Error 404</h1>
          <Typewriter
            onInit={typewriter => {
              typewriter
                .pasteString('HTTPS://danbovey.uk > ')
                .pauseFor(1000)
                .typeString('LOAD (this).document(body);<br />')
                .pauseFor(300)
                .typeString('This page does not exist.<br /><br />')
                .pasteString('HTTPS://danbovey.uk > ')
                .pauseFor(800)
                .typeString('Doh!')
                .pauseFor(600)
                .deleteChars(4)
                .typeString('LOAD solutions.json<br />')
                .typeString(
                  `[
                  <br />
                  &nbsp;&nbsp;"Go to <a href="https://danbovey.uk">HOMEPAGE.html</a>",
                  <br />
                  &nbsp;&nbsp;"Search (this).document(WEBSITE) for the page you are looking for",
                  <br />
                  &nbsp;&nbsp;"In the event of catastophic failure, press CTRL + ALT + DELETE to
                  restart your computer... the Internet will lose all unsaved data.",
                  <br />
                  &nbsp;&nbsp;"It may just be possible to continue normally."
                  <br />
                  ]
                  <br />`
                )
                .start();
            }}
            options={{
              delay: 20
            }}
          />
        </div>
      </ErrorSection>
    </Container>
  </Layout>
);

export default NotFoundPage;
