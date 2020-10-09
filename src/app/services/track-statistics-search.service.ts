import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TrackStatisticsSearchService {

    //private key: string = 'Xak16vI58CMsfRusJcNifADxfKTDAiHk';
    private key: string = 'UaFDgUEXtSND5ToRnghqopJnTOTSGetB';

    constructor(
        private httpClient: HttpClient,
    ) {
    }

    public getTracksPage(username: string, pageNumber: number, pageSize: number): Observable<TracksPageResponse> {
        let url = `https://api.envato.com/v1/discovery/search/search/item?username=${username}&page=${pageNumber}&page_size=${pageSize}&sort_by=name&sort_direction=asc`;

        let headers = {
            'Authorization': `Bearer ${this.key}`
        };

        return this.httpClient.get<TracksPageResponse>(url, {headers: headers});
    }

    public getTrackNames(username: string) : Observable<TrackSearchResponse[]> {
        let url = `https://api.envato.com/v1/discovery/search/search/item?username=${username}`;

        let headers = {
            'Authorization': `Bearer ${this.key}`
        };

        return this.httpClient.get<TrackSearchResponse[]>(url, {headers: headers})
            .pipe(
                map((response: any) => {
                    return response.matches.map(match => new TrackSearchResponse(match.id, match.name, match.url, match.author_username));
                }));
    }

    public getTotalMatches(term: string) : Observable<TotalMatchesResponse> {
        var url = `https://cors-anywhere.herokuapp.com/https://audiojungle.net/shopfront-api/search?page=1&page_size=1&site=audiojungle.net&sort_by=relevance&term=${term}`;
    
        return this.httpClient.get<TotalMatchesResponse>(url);
    }

    public searchProfile(term: string, pageNumber: number, pageSize: number) : Observable<TermSearchResult> {
    
        var url = `https://api.envato.com/v1/discovery/search/search/item?page=${pageNumber}&page_size=${pageSize}&site=audiojungle.net&sort_by=relevance`;
    
        let params = new HttpParams();

        if (term) {
            params = params.append('term', term);
        }

        let headers = {
            'Authorization': `Bearer ${this.key}`
        };

        return this.httpClient.get<TermSearchResult>(url, { params: params, headers: headers });
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
    url: string;
    author_username: string;

    constructor(id: number, name: string, url: string, author: string){
        this.id = id;
        this.name = name;
        this.url = url;
        this.author_username = author;
    }
}

export class TotalMatchesResponse {
    total_hits: number;
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