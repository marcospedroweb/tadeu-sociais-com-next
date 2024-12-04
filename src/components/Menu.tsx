'use client';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import styles from './Menu.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Menu() {
  return (
    <header>
      <Navbar expand="lg" className={styles.bgNav}>
        <Container fluid="xl" c>
          <Navbar.Brand href="#home">
            <Image
              src="/assets/logo.svg"
              width={150}
              height={24}
              alt="logo tadeu sociais"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-3 align-items-center">
              <Link
                className="link-primary text-dark link-underline-dark"
                href="#"
              >
                Login
              </Link>
              <Button className="btn-primary">
                <Link href={'#'} className="text-dark text-decoration-none">
                  Criar conta
                </Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
