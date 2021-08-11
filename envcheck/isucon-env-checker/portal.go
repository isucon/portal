package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
)

type Portal struct {
	Endpoint string
	Token    string
}

func LoadPortalCredentials() (*Portal, error) {
	var credentials struct {
		Dev   bool   `json:"dev"`
		Token string `json:"token"`
	}
	f, err := os.Open("/opt/isucon-env-checker/portal_credentials.json")
	if err != nil {
		return nil, err
	}
	defer f.Close()

	if err := json.NewDecoder(f).Decode(&credentials); err != nil {
		return nil, err
	}
	endpoint := "https://portal.isucon.net/api/env_checks"
	if credentials.Dev {
		endpoint = "https://portal-dev.isucon.net/api/env_checks"
	}
	return &Portal{
		Endpoint: endpoint,
		Token:    credentials.Token,
	}, nil
}

func (p *Portal) SendResult(r Result) error {
	body, err := json.Marshal(r)
	if err != nil {
		return err
	}
	req, err := http.NewRequest("POST", p.Endpoint, bytes.NewReader(body))
	if err != nil {
		return err
	}
	res, err := http.DefaultClient.Do(req)
	if err != nil {
		return err
	}
	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		return fmt.Errorf("http status error: %d", res.StatusCode)
	}

	io.Copy(io.Discard, res.Body)
	return nil
}
