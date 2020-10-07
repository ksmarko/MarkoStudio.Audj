import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TrackStatisticsSearchService {

    private key: string = 'Xak16vI58CMsfRusJcNifADxfKTDAiHk';

    constructor(
        private httpClient: HttpClient,
    ) {
    }

    public getTrackNames(username: string) : Observable<TrackSearchResponse[]> {
        let url = `https://api.envato.com/v1/discovery/search/search/item?username=${username}`;

        let headers = {
            'Authorization': `Bearer ${this.key}`
        };

        return this.httpClient.get<TrackSearchResponse[]>(url, {headers: headers})
        .pipe(map(response => {
            return response.matches.map(match => {
                name: match.name,
                url: match.url,
                author_username: match.author_username
            });
        }));
    }

    public getTotalMatches(term: string) : Observable<TotalMatchesResponse> {
        var url = `https://cors-anywhere.herokuapp.com/https://audiojungle.net/shopfront-api/search?page=1&page_size=1&site=audiojungle.net&sort_by=relevance&term=${term}`;
    
        return this.httpClient.get<TotalMatchesResponse>(url);
    }

    public searchProfile(term: string, pageNumber: number, pageSize: number) : Observable<TermSearchResult> {
    
        var url = `https://cors-anywhere.herokuapp.com/https://audiojungle.net/shopfront-api/search?page=${pageNumber}&page_size=${pageSize}&site=audiojungle.net&sort_by=relevance`;
    
        let params = new HttpParams();

        if (term){
            params = params.append('term', term);
        }

        return this.httpClient.get<TermSearchResult>(url, { params: params });
    }
}

export class TrackSearchResponse{
    name: string;
    url: string;
    author_username: string;
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