import argparse
import ssl
from http.server import HTTPServer, SimpleHTTPRequestHandler


def main():
    parser = argparse.ArgumentParser(description="")
    parser.add_argument("--certfile", required=True, help="")
    parser.add_argument("--keyfile", required=True, help="")
    parser.add_argument("--host", default="0.0.0.0", help="")
    parser.add_argument("--port", type=int, default=4443, help="")
    args = parser.parse_args()

    ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    ctx.load_cert_chain(certfile=args.certfile, keyfile=args.keyfile)

    httpd = HTTPServer((args.host, args.port), SimpleHTTPRequestHandler)

    httpd.socket = ctx.wrap_socket(httpd.socket, server_side=True)

    print(f"starting HTTPS on https://{args.host}:{args.port}/")
    httpd.serve_forever()

if __name__ == "__main__":
    main()

