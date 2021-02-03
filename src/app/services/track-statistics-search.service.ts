import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, mergeMap, retry, retryWhen } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class TrackStatisticsSearchService {

    constructor(
        private httpClient: HttpClient,
    ) {
    }

    public getUserTracksPage(username: string, pageNumber: number, pageSize: number): Observable<TracksPageResponse> {
        let url = `https://api.envato.com/v1/discovery/search/search/item?username=${username}&page=${pageNumber}&page_size=${pageSize}&sort_by=date&sort_direction=desc`;

        let headers = {
            'Authorization': `Bearer ${environment.ENVATO_KEY}`
        };

        return this.httpClient.get<TracksPageResponse>(url, {headers: headers, observe: 'response'})
        .pipe(map(resp => {
            console.log(resp.headers);

            return resp.body;
        }));
    }

    public getFirstPageByTrackName(term: string, pageSize: number) : Observable<TermSearchResult> {
    
        var url = `https://api.envato.com/v1/discovery/search/search/item?page=1&page_size=${pageSize}&site=audiojungle.net&sort_by=relevance`;
    
        let params = new HttpParams();

        if (term) {
            params = params.append('term', term);
        }

        let headers = {
            'Authorization': `Bearer ${environment.ENVATO_KEY}`
        };

        return this.httpClient.get<TermSearchResult>(url, { params: params, headers: headers, observe: 'response' })
        .pipe(
            delay(this.simulateLongResponse()), //delay in ms
            map(resp => {
            //console.log(resp.headers);

            return resp.body;
        }));
    }

    private simulateLongResponse(): number {
        return Math.floor(Math.random() * 10) * 1000;
    }
}

export class TracksPageResponse {
    matches: TrackSearchResponse[];
    total_hits: number;
    links: TracksPageLinksResponse;
}

export class TracksPageLinksResponse{
    next_page_url: string;
    prev_page_url: string;
    first_page_url: string;
    last_page_url: string;
}

export class TrackSearchResponse{
    id: number;
    name: string;
    published_at: string;
    url: string;
    author_username: string;

    constructor(id: number, name: string, published_at: string, url: string, author: string){
        this.id = id;
        this.name = name;
        this.published_at = published_at;
        this.url = url;
        this.author_username = author;
    }
}

export class TermSearchResult{
    total_hits: number;
    matches: TrackSearchResult[];
}

export class TrackSearchResult{
    id: number;
    author_url: string;
    author_username: string;
    url: string;
    trending: boolean;
    classification: string;
    description: string;
    name: string;
    number_of_sales: number;
    price_cents: number;
    tags: string[];
}